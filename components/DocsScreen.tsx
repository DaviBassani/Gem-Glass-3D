import React, { useState } from 'react';
import { GemColor, GEM_THEMES } from '../utils/theme';
import { AmberCard } from './AmberCard';
import { AmberButton } from './AmberButton';
import { AmberBadge } from './AmberBadge';

interface DocsScreenProps {
  theme: GemColor;
}

const COMPONENT_DOCS = [
  {
    id: 'install',
    title: '0. Installation',
    description: "Clone the repo. Import the folder. Delete what you don't use. Peak efficiency.",
    code: `git clone https://github.com/glass-ui/core.git
cd glass-ui-core
npm install

// Now just import components directly into your layout:
import { AmberButton } from './components/AmberButton';
import { AmberCard } from './components/AmberCard';`
  },
  {
    id: 'setup',
    title: '1. The Setup',
    description: "Tailwind config needed. Don't ask why, just paste it.",
    code: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Condensed', 'sans-serif'],
      },
      boxShadow: {
        'glass': 'inset 1px 1px 2px rgba(255, 255, 255, 0.4), 5px 5px 10px rgba(163, 177, 198, 0.3)',
      }
    },
  },
}`
  },
  {
    id: 'theme',
    title: '2. The Theme Utility',
    description: "The magic sauce. Copy this to 'utils/theme.ts'. Handles all the colors so you don't have to argue about hex codes.",
    code: `export type GemColor = 'amber' | 'emerald' | 'ruby' | 'lapis' | 'amethyst' | 'obsidian';

export interface ThemeConfig {
  id: GemColor;
  name: string;
  primaryGradient: string;
  glassGradient: string;
  glassBorder: string;
  shadow: string;
  textColor: string;
  glow: string;
  knobGradient: string;
  highlight: string;
}

export const GEM_THEMES: Record<GemColor, ThemeConfig> = {
  amber: {
    id: 'amber',
    name: 'Amber',
    primaryGradient: 'linear-gradient(135deg, rgba(252, 211, 77, 1) 0%, rgba(245, 158, 11, 1) 50%, rgba(217, 119, 6, 1) 100%)',
    glassGradient: 'linear-gradient(90deg, rgba(251, 191, 36, 0.3) 0%, rgba(245, 158, 11, 0.45) 50%, rgba(217, 119, 6, 0.55) 100%)',
    glassBorder: 'rgba(245, 158, 11, 0.3)',
    shadow: 'rgba(245, 158, 11, 0.4)',
    textColor: 'rgba(180, 83, 9, 1)',
    glow: 'rgba(245, 158, 11, 0.6)',
    knobGradient: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, rgba(252, 211, 77, 1) 25%, rgba(245, 158, 11, 1) 100%)',
    highlight: 'rgba(251, 191, 36, 1)'
  },
  // ... Add other colors here (emerald, ruby, etc)
};`
  },
  {
    id: 'card',
    title: 'AmberCard',
    description: "It's a div with fancy shadows. Wraps everything.",
    code: `import React from 'react';

interface AmberCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const AmberCard: React.FC<AmberCardProps> = ({ children, className = '', title }) => {
  return (
    <div 
        className={\`relative p-8 rounded-[2rem] transition-all duration-300 \${className}\`}
        style={{
            background: 'linear-gradient(145deg, #ececf0, #d1d2d8)',
            boxShadow: \`
                12px 12px 24px #b0b5be, 
                -12px -12px 24px #ffffff,
                inset 1px 1px 2px rgba(255, 255, 255, 0.8)
            \`,
            border: '1px solid rgba(255,255,255,0.4)' 
        }}
    >
      {title && (
        <div 
            className="absolute -top-5 left-8 px-5 py-2 rounded-full flex items-center justify-center z-10"
            style={{
                background: '#e0e1e6',
                boxShadow: \`
                    5px 5px 10px #b0b5be, 
                    -5px -5px 10px #ffffff,
                    inset 1px 1px 1px rgba(255,255,255,0.5)
                \`,
                border: '1px solid rgba(255,255,255,0.2)'
            }}
        >
          <span className="text-gray-400 font-black tracking-[0.2em] text-xs uppercase" style={{ textShadow: '0 1px 0 rgba(255,255,255,1)' }}>
            {title}
          </span>
        </div>
      )}
      {children}
    </div>
  );
};`
  },
  {
    id: 'button',
    title: 'AmberButton',
    description: "Clicky thing. Comes in 'primary' (shiny) and 'secondary' (matte).",
    code: `// See AmberButton.tsx file for full imports
export const AmberButton: React.FC<AmberButtonProps> = ({ children, variant = 'primary', color = 'amber', className = '', ...props }) => {
  const isPrimary = variant === 'primary';
  const theme = GEM_THEMES[color];

  return (
    <button
      className={\`
        relative group overflow-hidden rounded-2xl p-0 font-bold text-xl tracking-wider 
        outline-none transition-all duration-150 ease-out
        active:scale-[0.98]
        \${className}
      \`}
      style={{
        color: isPrimary ? theme.textColor : '#888',
        textShadow: isPrimary 
            ? '0 1px 0 rgba(255,255,255,0.4)' 
            : '0 1px 1px rgba(255,255,255,1)',
      }}
      {...props}
    >
        <div 
            className="absolute inset-0 transition-all duration-300"
            style={{
                background: isPrimary 
                  ? theme.primaryGradient
                  : 'linear-gradient(145deg, #f0f0f3, #dcdde1)',
                
                boxShadow: isPrimary
                  ? \`
                    inset 2px 2px 4px rgba(255,255,255,0.5), 
                    inset -2px -2px 4px \${theme.shadow},
                    8px 8px 16px rgba(163, 177, 198, 0.4), 
                    -8px -8px 16px rgba(255, 255, 255, 0.6)
                   \`
                  : \`
                    5px 5px 10px rgba(163, 177, 198, 0.4), 
                    -5px -5px 10px rgba(255, 255, 255, 0.8),
                    inset 1px 1px 0px rgba(255,255,255,0.5)
                  \`,
                 border: isPrimary 
                    ? '1px solid rgba(255,255,255,0.4)' 
                    : '1px solid rgba(255,255,255,0.6)'
            }}
        />
        {/* ... Inner glow layers ... */}
        <span className="relative z-10 w-full h-full flex items-center justify-center p-4">
            {children}
        </span>
    </button>
  );
};`
  }
];

export const DocsScreen: React.FC<DocsScreenProps> = ({ theme }) => {
  const currentTheme = GEM_THEMES[theme];
  const [activeTab, setActiveTab] = useState(COMPONENT_DOCS[0].id);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl items-start">
      
      {/* Sidebar Navigation */}
      <div className="lg:w-1/4 w-full sticky top-24 z-10">
        <AmberCard title="Index">
            <div className="flex flex-col gap-2 pt-4">
                {COMPONENT_DOCS.map((doc) => (
                    <button
                        key={doc.id}
                        onClick={() => setActiveTab(doc.id)}
                        className={`text-left px-4 py-3 rounded-xl font-bold transition-all duration-200 uppercase tracking-wider text-sm
                            ${activeTab === doc.id 
                                ? 'bg-white/50 text-gray-700 shadow-sm border border-white/60' 
                                : 'text-gray-400 hover:text-gray-600 hover:bg-black/5'
                            }
                        `}
                    >
                        {doc.title}
                    </button>
                ))}
            </div>
        </AmberCard>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full flex flex-col gap-8">
        {COMPONENT_DOCS.map((doc) => {
            if (doc.id !== activeTab) return null;
            return (
                <div key={doc.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                     <div className="mb-6">
                        <h2 className="text-4xl font-black text-gray-600 uppercase tracking-tighter mb-2" style={{ textShadow: '0 2px 0 rgba(255,255,255,1)' }}>
                            {doc.title}
                        </h2>
                        <div className="flex items-center gap-3">
                            <AmberBadge label={doc.id === 'install' ? 'Bash' : 'Typescript'} variant="outline" color={theme} />
                            <p className="text-gray-500 font-medium font-mono text-sm">{doc.description}</p>
                        </div>
                     </div>

                     <div className="relative group rounded-3xl overflow-hidden border-4 border-[#dcdde1] shadow-2xl bg-[#1e1e1e]">
                        {/* Header of Code Block */}
                        <div className="flex items-center justify-between px-6 py-3 bg-[#2d2d2d] border-b border-[#3d3d3d]">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <span className="text-xs font-mono text-gray-400">
                                {doc.id === 'install' ? 'Terminal' : `src/components/${doc.title}.tsx`}
                            </span>
                        </div>

                        {/* Code Area */}
                        <div className="p-6 overflow-x-auto custom-scrollbar">
                            <pre className="font-mono text-sm leading-relaxed text-gray-300">
                                <code>{doc.code}</code>
                            </pre>
                        </div>

                        {/* Copy Button */}
                        <div className="absolute top-3 right-4">
                            <button
                                onClick={() => handleCopy(doc.code, doc.id)}
                                className={`
                                    px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300
                                    ${copied === doc.id 
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                                        : 'bg-white/10 text-gray-400 hover:bg-white/20 border border-white/10'
                                    }
                                `}
                            >
                                {copied === doc.id ? 'Copied!' : 'Copy Code'}
                            </button>
                        </div>
                     </div>

                     <div className="mt-8 p-6 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/50">
                         <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Live Preview</h3>
                         <div className="flex items-center justify-center p-8">
                            {doc.id === 'button' && <AmberButton color={theme}>Click Me</AmberButton>}
                            {doc.id === 'card' && <AmberCard title="Demo">I am a card.</AmberCard>}
                            {(doc.id === 'setup' || doc.id === 'install') && <span className="text-gray-400 italic">Configuration / Terminal (No Visual Preview)</span>}
                            {doc.id === 'theme' && <div className="w-12 h-12 rounded-full shadow-lg" style={{ background: currentTheme.primaryGradient }}></div>}
                         </div>
                     </div>
                </div>
            );
        })}
      </div>
    </div>
  );
};