import React from 'react';
import { GemColor, GEM_THEMES } from '../utils/theme';

interface AmberMeterProps {
  value: number; // 0-100
  segments?: number;
  label?: string;
  vertical?: boolean;
  color?: GemColor;
}

export const AmberMeter: React.FC<AmberMeterProps> = ({ 
  value, 
  segments = 20,
  label,
  vertical = false,
  color = 'amber'
}) => {
  const safeValue = Math.max(0, Math.min(100, value));
  const theme = GEM_THEMES[color];
  
  return (
    <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} items-center gap-4`}>
        <div 
            className={`
                relative p-1.5 rounded-xl bg-[#dcdde1]
                ${vertical ? 'w-8 h-64' : 'w-full h-8'}
            `}
            style={{
                boxShadow: `
                    inset 3px 3px 8px rgba(163, 177, 198, 0.6), 
                    inset -3px -3px 8px rgba(255, 255, 255, 0.8)
                `,
                border: '1px solid rgba(255,255,255,0.2)'
            }}
        >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-20 mix-blend-overlay"></div>
            
            <div className={`w-full h-full flex ${vertical ? 'flex-col-reverse' : 'flex-row'} gap-[2px] justify-between`}>
                {[...Array(segments)].map((_, i) => {
                    const threshold = (i / segments) * 100;
                    const isActive = safeValue > threshold;
                    const intensity = 0.8 + (i / segments) * 0.2;
                    
                    return (
                        <div 
                            key={i}
                            className={`
                                flex-1 rounded-[1px] transition-all duration-75
                                ${vertical ? 'w-full min-h-[4px]' : 'h-full min-w-[4px]'}
                            `}
                            style={{
                                background: isActive 
                                    ? theme.primaryGradient
                                    : '#ccc',
                                opacity: isActive ? intensity : 0.2,
                                boxShadow: isActive 
                                    ? `0 0 6px ${theme.glow}` 
                                    : 'inset 1px 1px 2px rgba(0,0,0,0.1)',
                                filter: isActive ? 'brightness(1.2)' : 'none'
                            }}
                        />
                    );
                })}
            </div>
        </div>
        
        {label && (
             <div 
                className={`text-xs font-black text-gray-400 uppercase tracking-widest ${vertical ? 'rotate-180 writing-mode-vertical' : ''}`}
                style={{ writingMode: vertical ? 'vertical-rl' : 'horizontal-tb' }}
             >
                {label}
            </div>
        )}
    </div>
  );
};