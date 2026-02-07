import React from 'react';

interface AmberCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const AmberCard: React.FC<AmberCardProps> = ({ children, className = '', title }) => {
  return (
    <div 
        className={`relative p-8 rounded-[2rem] transition-all duration-300 ${className}`}
        style={{
            // Convex surface gradient for subtle 3D curvature
            background: 'linear-gradient(145deg, #ececf0, #d1d2d8)',
            // Multi-layered shadow for realistic ambient occlusion
            boxShadow: `
                12px 12px 24px #b0b5be, 
                -12px -12px 24px #ffffff,
                inset 1px 1px 2px rgba(255, 255, 255, 0.8)
            `,
            // "Milled" edge look
            border: '1px solid rgba(255,255,255,0.4)' 
        }}
    >
      {title && (
        <div 
            className="absolute -top-5 left-8 px-5 py-2 rounded-full flex items-center justify-center z-10"
            style={{
                background: '#e0e1e6',
                boxShadow: `
                    5px 5px 10px #b0b5be, 
                    -5px -5px 10px #ffffff,
                    inset 1px 1px 1px rgba(255,255,255,0.5)
                `,
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
};