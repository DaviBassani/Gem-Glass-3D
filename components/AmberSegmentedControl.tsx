import React from 'react';
import { GemColor, GEM_THEMES } from '../utils/theme';

interface AmberSegmentedControlProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  color?: GemColor;
}

export const AmberSegmentedControl: React.FC<AmberSegmentedControlProps> = ({ options, value, onChange, color = 'amber' }) => {
  const currentIndex = options.indexOf(value);
  const theme = GEM_THEMES[color];
  
  return (
    <div 
        className="relative p-1.5 rounded-2xl bg-[#e0e1e6] flex items-center shadow-inner"
        style={{
            boxShadow: `
                inset 4px 4px 8px rgba(163, 177, 198, 0.5), 
                inset -4px -4px 8px rgba(255, 255, 255, 0.8)
            `
        }}
    >
        <div 
            className="absolute top-1.5 bottom-1.5 rounded-xl transition-all duration-300 ease-out z-0"
            style={{
                width: `calc((100% - 12px) / ${options.length})`,
                left: `calc(6px + (100% - 12px) / ${options.length} * ${currentIndex})`,
                background: theme.glassGradient,
                boxShadow: `
                    inset 1px 1px 2px rgba(255,255,255,0.6), 
                    5px 5px 10px rgba(163, 177, 198, 0.2),
                    0 0 0 1px ${theme.glassBorder}
                `,
                backdropFilter: 'blur(4px)'
            }}
        />

        {options.map((option) => {
            const isSelected = value === option;
            return (
                <button
                    key={option}
                    onClick={() => onChange(option)}
                    className={`
                        relative flex-1 py-3 text-sm font-bold uppercase tracking-widest transition-colors duration-300 z-10
                        ${isSelected ? 'text-gray-600' : 'text-gray-400 hover:text-gray-500'}
                    `}
                    style={{
                        color: isSelected ? theme.textColor : undefined,
                        textShadow: isSelected ? '0 1px 0 rgba(255,255,255,0.5)' : 'none'
                    }}
                >
                    {option}
                </button>
            );
        })}
    </div>
  );
};