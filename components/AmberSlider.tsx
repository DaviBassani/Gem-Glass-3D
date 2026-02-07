import React, { useRef, useState, useCallback } from 'react';
import { GemColor, GEM_THEMES } from '../utils/theme';

interface AmberSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  color?: GemColor;
}

export const AmberSlider: React.FC<AmberSliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  color = 'amber',
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const theme = GEM_THEMES[color];

  // Constants for geometry
  const PAD = 24; 
  const DOUBLE_PAD = 48;

  const calculateValue = useCallback((clientX: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const width = rect.width;
    const left = rect.left;
    
    let x = clientX - left;
    const travelWidth = width - DOUBLE_PAD;
    
    if (travelWidth <= 0) return min;

    let ratio = (x - PAD) / travelWidth;
    ratio = Math.max(0, Math.min(1, ratio));
    
    const newValue = min + ratio * (max - min);
    return newValue;
  }, [min, max]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    const newValue = calculateValue(e.clientX);
    if (newValue !== undefined) onChange(newValue);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const newValue = calculateValue(e.clientX);
    if (newValue !== undefined) onChange(newValue);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const ratio = Math.min(1, Math.max(0, (value - min) / (max - min)));

  return (
    <div className="relative w-full h-24 select-none no-select touch-none flex items-center justify-center">
      <div 
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`relative w-full h-12 rounded-full group ${isDragging ? 'cursor-grabbing' : 'cursor-pointer'}`}
        style={{
          backgroundColor: '#e0e1e6',
          boxShadow: `
            inset 3px 3px 8px rgba(163, 177, 198, 0.6), 
            inset -3px -3px 8px rgba(255, 255, 255, 0.8)
          `
        }}
      >
        <div 
          className="absolute right-8 top-1/2 -translate-y-1/2 text-xl font-bold z-0 pointer-events-none text-gray-400/80 transition-colors duration-200"
          style={{
            textShadow: '0px 1px 0px rgba(255,255,255,0.8)',
          }}
        >
          {Math.round(value)}%
        </div>

        <div 
          className="absolute top-1 bottom-1 left-1 rounded-full pointer-events-none will-change-transform flex items-center z-10"
          style={{
            width: `calc(40px + (100% - 48px) * ${ratio})`,
            transition: isDragging ? 'none' : 'width 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
            <div 
                className="absolute inset-0 rounded-full"
                style={{
                    background: theme.glassGradient,
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: `4px 0 12px ${theme.shadow}`
                }}
            ></div>

            <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/40 to-transparent rounded-t-full pointer-events-none"></div>

            <div 
                className={`absolute right-0 h-10 w-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 ease-out ${isDragging ? 'scale-90' : 'scale-100'}`}
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))', // Neutral glass knob, color comes from fill reflection
                    boxShadow: isDragging 
                        ? `
                            inset 2px 2px 5px ${theme.shadow}, 
                            inset -1px -1px 2px rgba(255,255,255,0.4), 
                            1px 1px 2px rgba(163, 177, 198, 0.2)
                          ` 
                        : `
                            inset 1px 1px 2px rgba(255,255,255,0.8), 
                            inset -1px -1px 3px ${theme.shadow}, 
                            2px 2px 5px rgba(163, 177, 198, 0.3)
                        `,
                    border: '1px solid rgba(255,255,255,0.6)'
                }}
            >
                <div className="absolute inset-0 rounded-full opacity-30" style={{ background: theme.primaryGradient }}></div>
                <div className="w-1 h-3 bg-white/40 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.1)] z-10"></div>
                <div className="w-1 h-3 bg-white/40 rounded-full ml-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.1)] z-10"></div>
            </div>
        </div>

        <div 
            className="absolute inset-0 rounded-full pointer-events-none z-20 overflow-hidden"
            style={{
                clipPath: `inset(0 calc(100% - (40px + (100% - 48px) * ${ratio})) 0 0)`
            }}
        >
            <div 
                className="absolute right-8 top-1/2 -translate-y-1/2 text-xl font-bold drop-shadow-md"
                style={{
                     color: '#fff',
                     textShadow: `0 1px 2px ${theme.shadow}`
                }}
            >
                {Math.round(value)}%
            </div>
        </div>

      </div>
    </div>
  );
};