import React from 'react';
import { GemColor, GEM_THEMES } from '../utils/theme';

interface AmberAvatarProps {
  src?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: GemColor;
  status?: 'online' | 'offline' | 'busy';
}

export const AmberAvatar: React.FC<AmberAvatarProps> = ({ 
  src, 
  initials = 'UI', 
  size = 'md', 
  color = 'amber',
  status
}) => {
  const theme = GEM_THEMES[color];
  
  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-14 h-14 text-sm',
    lg: 'w-24 h-24 text-xl'
  };

  return (
    <div className="relative inline-block">
        <div 
            className={`relative rounded-full flex items-center justify-center overflow-hidden border-2 ${sizeClasses[size]}`}
            style={{
                borderColor: theme.glassBorder,
                background: 'linear-gradient(145deg, #e6e7eb, #d1d2d6)',
                boxShadow: `
                    5px 5px 10px rgba(163, 177, 198, 0.4), 
                    -5px -5px 10px rgba(255, 255, 255, 0.8)
                `
            }}
        >
            {src ? (
                <img src={src} alt="avatar" className="w-full h-full object-cover opacity-80" />
            ) : (
                <span className="font-black text-gray-400 tracking-widest">{initials}</span>
            )}
            
            {/* Glass Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] pointer-events-none"></div>
        </div>

        {/* Status Indicator */}
        {status && (
            <div 
                className="absolute bottom-0 right-0 w-[25%] h-[25%] rounded-full border-2 border-[#dcdde1]"
                style={{
                    background: status === 'online' ? theme.primaryGradient : '#9ca3af',
                    boxShadow: `0 0 8px ${status === 'online' ? theme.glow : 'rgba(0,0,0,0.2)'}`
                }}
            />
        )}
    </div>
  );
};