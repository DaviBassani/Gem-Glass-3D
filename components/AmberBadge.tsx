import React from 'react';
import { GemColor, GEM_THEMES } from '../utils/theme';

interface AmberBadgeProps {
  label: string | number;
  color?: GemColor;
  variant?: 'filled' | 'outline';
  className?: string;
}

export const AmberBadge: React.FC<AmberBadgeProps> = ({ 
  label, 
  color = 'amber', 
  variant = 'filled',
  className = ''
}) => {
  const theme = GEM_THEMES[color];
  const isFilled = variant === 'filled';

  return (
    <span 
        className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${className}`}
        style={{
            background: isFilled ? theme.glassGradient : 'transparent',
            color: isFilled ? theme.textColor : theme.highlight,
            border: `1px solid ${isFilled ? theme.glassBorder : theme.glassBorder}`,
            boxShadow: isFilled 
                ? `0 0 10px ${theme.shadow}, inset 0 1px 2px rgba(255,255,255,0.3)` 
                : `0 0 5px ${theme.shadow}, inset 0 0 5px ${theme.shadow}`,
            backdropFilter: 'blur(4px)',
            textShadow: isFilled ? '0 1px 0 rgba(255,255,255,0.4)' : `0 0 5px ${theme.glow}`
        }}
    >
      {label}
    </span>
  );
};