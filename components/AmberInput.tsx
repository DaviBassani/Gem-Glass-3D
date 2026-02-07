import React from 'react';
import { GemColor, GEM_THEMES } from '../utils/theme';

interface AmberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  color?: GemColor;
}

export const AmberInput: React.FC<AmberInputProps> = ({ label, className = '', color = 'amber', ...props }) => {
  const theme = GEM_THEMES[color];

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {label && (
        <label className="ml-3 text-xs font-black text-gray-400 uppercase tracking-[0.15em] drop-shadow-sm">
          {label}
        </label>
      )}
      <div className="relative group">
        <input
          className="w-full h-14 pl-6 pr-4 rounded-2xl bg-[#e0e1e6] outline-none text-gray-600 font-bold text-xl placeholder-gray-400/50 transition-all duration-300"
          style={{
            boxShadow: `
                inset 5px 5px 10px rgba(163, 177, 198, 0.6), 
                inset -5px -5px 10px rgba(255, 255, 255, 0.8)
            `,
            border: '1px solid transparent'
          }}
          {...props}
        />
        
        <div 
            className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 opacity-0 group-focus-within:opacity-100"
            style={{
                boxShadow: `
                    inset 1px 1px 2px rgba(0,0,0,0.05),
                    0 0 0 2px ${theme.glassBorder},
                    0 4px 12px ${theme.glassBorder}
                `,
                border: `1px solid ${theme.glassBorder}`
            }}
        />
      </div>
    </div>
  );
};