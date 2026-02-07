import React, { useState, useRef } from 'react';
import { GemColor, GEM_THEMES } from '../utils/theme';

interface AmberDialProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  label?: string;
  size?: number;
  color?: GemColor;
}

export const AmberDial: React.FC<AmberDialProps> = ({ 
  value, 
  min = 0, 
  max = 100, 
  onChange,
  label,
  size = 120,
  color = 'amber'
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const startYRef = useRef<number>(0);
  const startValueRef = useRef<number>(0);
  const theme = GEM_THEMES[color];
  
  const range = max - min;
  const percentage = (value - min) / range;
  const angle = -135 + (percentage * 270);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startYRef.current = e.clientY;
    startValueRef.current = value;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    
    const deltaY = startYRef.current - e.clientY;
    const sensitivity = 2; 
    const valueChange = (deltaY / 200) * range * sensitivity;
    
    let newValue = startValueRef.current + valueChange;
    newValue = Math.max(min, Math.min(max, newValue));
    
    onChange(newValue);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="flex flex-col items-center gap-4 select-none touch-none">
       <div 
          className="relative rounded-full flex items-center justify-center"
          style={{
             width: size,
             height: size,
             background: 'linear-gradient(145deg, #dcdde1, #ececf0)',
             boxShadow: `
                10px 10px 20px rgba(163, 177, 198, 0.4), 
                -10px -10px 20px rgba(255, 255, 255, 0.8),
                inset 2px 2px 4px rgba(163, 177, 198, 0.2)
             `,
             border: '1px solid rgba(255,255,255,0.4)'
          }}
       >
           {[...Array(11)].map((_, i) => {
              const tickAngle = -135 + (i * 27);
              return (
                  <div 
                    key={i}
                    className="absolute w-1 h-2 bg-gray-400/30 rounded-full"
                    style={{
                        top: '8px',
                        left: 'calc(50% - 2px)',
                        transformOrigin: `50% ${size/2 - 8}px`,
                        transform: `rotate(${tickAngle}deg)`
                    }}
                  />
              );
           })}

           <div 
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className={`relative rounded-full cursor-ns-resize transition-shadow duration-200 z-10 group`}
              style={{
                 width: size * 0.7,
                 height: size * 0.7,
                 transform: `rotate(${angle}deg)`,
                 background: 'linear-gradient(145deg, #e6e7eb, #d1d2d6)',
                 boxShadow: isDragging 
                    ? `
                        5px 5px 10px rgba(163, 177, 198, 0.5), 
                        -5px -5px 10px rgba(255, 255, 255, 0.7),
                        inset 1px 1px 2px rgba(255,255,255,0.8)
                      `
                    : `
                        8px 8px 16px rgba(163, 177, 198, 0.5), 
                        -8px -8px 16px rgba(255, 255, 255, 0.8),
                        inset 1px 1px 2px rgba(255,255,255,0.8)
                      `,
                 border: '1px solid rgba(255,255,255,0.4)'
              }}
           >
               <div className="absolute inset-2 rounded-full border border-gray-400/10 opacity-50"></div>
               
               <div 
                 className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-4 rounded-full transition-all duration-100"
                 style={{
                     background: `linear-gradient(to bottom, ${theme.highlight}, ${theme.textColor})`,
                     boxShadow: `0 0 8px ${theme.glow}, inset 0 1px 2px rgba(255,255,255,0.5)`
                 }}
               />
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),_inset_-1px_-1px_2px_rgba(255,255,255,0.8)] opacity-50" />
           </div>
       </div>

       {label && (
        <div className="text-center">
             <div className="text-2xl font-bold text-gray-500" style={{ textShadow: '0 1px 1px #fff' }}>{Math.round(value)}</div>
             <div className="text-xs font-black text-gray-400 uppercase tracking-widest mt-1">{label}</div>
        </div>
       )}
    </div>
  );
};