import React from 'react';
import { GemColor, GEM_THEMES } from '../utils/theme';

interface AmberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  color?: GemColor;
  className?: string;
}

export const AmberButton: React.FC<AmberButtonProps> = ({ children, variant = 'primary', color = 'amber', className = '', ...props }) => {
  const isPrimary = variant === 'primary';
  const theme = GEM_THEMES[color];

  return (
    <button
      className={`
        relative group overflow-hidden rounded-2xl p-0 font-bold text-xl tracking-wider 
        outline-none transition-all duration-150 ease-out
        active:scale-[0.98]
        ${className}
      `}
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
                  ? `
                    inset 2px 2px 4px rgba(255,255,255,0.5), 
                    inset -2px -2px 4px ${theme.shadow},
                    8px 8px 16px rgba(163, 177, 198, 0.4), 
                    -8px -8px 16px rgba(255, 255, 255, 0.6)
                   `
                  : `
                    5px 5px 10px rgba(163, 177, 198, 0.4), 
                    -5px -5px 10px rgba(255, 255, 255, 0.8),
                    inset 1px 1px 0px rgba(255,255,255,0.5)
                  `,
                 border: isPrimary 
                    ? '1px solid rgba(255,255,255,0.4)' 
                    : '1px solid rgba(255,255,255,0.6)'
            }}
        />

        <div 
            className="absolute inset-0 opacity-0 active:opacity-100 transition-opacity duration-100 pointer-events-none rounded-2xl"
            style={{
                boxShadow: `
                    inset 6px 6px 12px rgba(0,0,0,0.15), 
                    inset -6px -6px 12px rgba(255,255,255,0.7)
                `
            }}
        />
      
        {isPrimary && (
            <>
                <div className="absolute inset-x-4 top-0 h-[45%] bg-gradient-to-b from-white/50 to-transparent rounded-b-xl pointer-events-none opacity-80" />
                
                <div 
                    className="absolute inset-x-4 bottom-0 h-[30%] bg-gradient-to-t to-transparent rounded-t-xl pointer-events-none mix-blend-overlay" 
                    style={{
                        '--tw-gradient-from': theme.shadow,
                        backgroundImage: `linear-gradient(to top, var(--tw-gradient-from), transparent)`
                    } as any}
                />
            </>
        )}

        <span className="relative z-10 w-full h-full flex items-center justify-center p-4">
            <span className="flex flex-col items-center justify-center gap-2 transform transition-transform group-active:translate-y-px">
                {children}
            </span>
        </span>
    </button>
  );
};