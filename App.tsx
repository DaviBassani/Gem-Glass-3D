import React, { useState } from 'react';
import { GemColor, GEM_THEMES } from './utils/theme';
import { ShowcaseScreen } from './components/ShowcaseScreen';
import { VideoPlatformScreen } from './components/VideoPlatformScreen';
import { DocsScreen } from './components/DocsScreen';

type Screen = 'showcase' | 'video' | 'docs';

const App: React.FC = () => {
  const [theme, setTheme] = useState<GemColor>('amber');
  const [screen, setScreen] = useState<Screen>('showcase');

  const currentTheme = GEM_THEMES[theme];

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10 bg-[#dcdde1] text-slate-600 overflow-x-hidden">
      
      {/* Global Controls */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-4 w-full px-6 pointer-events-none">
          <div className="flex gap-3 p-2 rounded-full bg-[#dcdde1]/80 backdrop-blur-md shadow-2xl border border-white/40 pointer-events-auto scale-90 sm:scale-100">
            {/* Screen Toggle */}
            <div className="flex bg-[#d1d2d8] rounded-full p-1 shadow-inner">
                <button 
                    onClick={() => setScreen('showcase')}
                    className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${screen === 'showcase' ? 'bg-white shadow-md text-gray-700' : 'text-gray-400 hover:text-gray-500'}`}
                >
                    Components
                </button>
                <button 
                    onClick={() => setScreen('video')}
                    className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${screen === 'video' ? 'bg-white shadow-md text-gray-700' : 'text-gray-400 hover:text-gray-500'}`}
                >
                    GlassTube
                </button>
                <button 
                    onClick={() => setScreen('docs')}
                    className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${screen === 'docs' ? 'bg-white shadow-md text-gray-700' : 'text-gray-400 hover:text-gray-500'}`}
                >
                    Docs
                </button>
            </div>

            <div className="w-px bg-gray-400/30 mx-1 h-8 self-center"></div>

            {/* Theme Selector */}
            <div className="flex gap-2 items-center">
                {(Object.keys(GEM_THEMES) as GemColor[]).map((color) => (
                    <button 
                        key={color}
                        onClick={() => setTheme(color)}
                        className={`
                            w-8 h-8 rounded-full transition-all duration-300 hover:scale-110
                            ${theme === color ? 'ring-2 ring-white shadow-lg scale-110' : 'opacity-60 hover:opacity-100'}
                        `}
                        style={{
                            background: GEM_THEMES[color].knobGradient,
                            boxShadow: theme === color ? `0 0 10px ${GEM_THEMES[color].shadow}` : 'none'
                        }}
                        title={GEM_THEMES[color].name}
                    />
                ))}
            </div>
          </div>
      </div>

      <div className="w-full flex justify-center px-6 pb-24">
        {screen === 'showcase' && (
             <div className="w-full flex flex-col items-center gap-12">
                 <div className="text-center space-y-3 mb-4 max-w-2xl">
                    <h1 className="text-5xl sm:text-6xl font-black text-gray-500/50 tracking-tighter uppercase drop-shadow-white transition-colors duration-500"
                        style={{ color: currentTheme.glassBorder }}>
                        {currentTheme.name} Glass UI
                    </h1>
                    <p className="text-gray-400 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">
                        The "Ignore The Mockup" System v1.0
                    </p>
                    <p className="text-gray-500/70 font-medium italic text-sm sm:text-base pt-2">
                        "Built by developers who hate design revisions, for developers who just want to ship."
                    </p>
                </div>
                <ShowcaseScreen theme={theme} />
             </div>
        )}
        
        {screen === 'video' && <VideoPlatformScreen theme={theme} />}
        
        {screen === 'docs' && (
            <div className="w-full flex flex-col items-center gap-12">
                <div className="text-center space-y-3 mb-4 max-w-2xl">
                    <h1 className="text-5xl sm:text-6xl font-black text-gray-500/50 tracking-tighter uppercase drop-shadow-white transition-colors duration-500"
                        style={{ color: currentTheme.glassBorder }}>
                        Documentation
                    </h1>
                    <p className="text-gray-400 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm">
                        Ctrl+C, Ctrl+V, Ship It.
                    </p>
                </div>
                <DocsScreen theme={theme} />
            </div>
        )}
      </div>
      
    </div>
  );
};

export default App;