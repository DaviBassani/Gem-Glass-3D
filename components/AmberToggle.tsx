import React from 'react';
import { GemColor, GEM_THEMES } from '../utils/theme';

interface AmberToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  color?: GemColor;
}

export const AmberToggle: React.FC<AmberToggleProps> = ({ checked, onChange, label, color = 'amber' }) => {
  const theme = GEM_THEMES[color];

  return (
    <div 
        className="flex items-center gap-5 cursor-pointer no-select group"
        onClick={() => onChange(!checked)}
    >
      <div 
        className="relative w-20 h-10 rounded-full transition-all duration-300"
        style={{
            backgroundColor: '#e0e1e6',
            boxShadow: checked 
                ? `inset 3px 3px 6px rgba(163, 177, 198, 0.7), inset -3px -3px 6px rgba(255, 255, 255, 0.9), 0 0 15px ${theme.shadow}`
                : `inset 3px 3px 6px rgba(163, 177, 198, 0.6), inset -3px -3px 6px rgba(255, 255, 255, 0.8)`
        }}
      >
        <div 
            className="absolute inset-1 rounded-full transition-all duration-500 opacity-0"
            style={{
                opacity: checked ? 1 : 0,
                background: `radial-gradient(circle at center, ${theme.highlight} 0%, ${theme.shadow} 60%, transparent 100%)`,
                filter: 'blur(4px)'
            }}
        />

        <div 
            className="absolute top-[2px] left-[2px] w-9 h-9 rounded-full transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)"
            style={{
                transform: checked ? 'translateX(40px)' : 'translateX(0)',
                background: checked 
                    ? theme.knobGradient
                    : 'radial-gradient(circle at 30% 30%, rgba(255,255,255,1) 0%, #eef0f5 20%, #c8c9ce 100%)',
                boxShadow: `
                    2px 2px 5px rgba(0,0,0,0.2), 
                    -1px -1px 2px rgba(255,255,255,0.5),
                    inset -2px -2px 4px rgba(0,0,0,0.1)
                `
            }}
        >
             <div className="absolute top-2 left-2 w-2 h-1.5 bg-white rounded-full blur-[0.5px] opacity-90" />
        </div>
      </div>
      
      {label && (
        <span 
            className={`text-lg font-bold tracking-wide transition-colors duration-300 ${checked ? 'text-gray-600' : 'text-gray-400'}`}
            style={{ textShadow: checked ? '0 1px 0 rgba(255,255,255,0.8)' : 'none' }}
        >
            {label}
        </span>
      )}
    </div>
  );
};