import React, { useState } from 'react';
import { AmberSlider } from './AmberSlider';
import { AmberCard } from './AmberCard';
import { AmberButton } from './AmberButton';
import { AmberToggle } from './AmberToggle';
import { AmberInput } from './AmberInput';
import { AmberDial } from './AmberDial';
import { AmberMeter } from './AmberMeter';
import { AmberSegmentedControl } from './AmberSegmentedControl';
import { AmberBadge } from './AmberBadge';
import { AmberAvatar } from './AmberAvatar';
import { GemColor } from '../utils/theme';

interface ShowcaseScreenProps {
  theme: GemColor;
}

export const ShowcaseScreen: React.FC<ShowcaseScreenProps> = ({ theme }) => {
  const [sliderValue, setSliderValue] = useState<number>(65);
  const [dialValue, setDialValue] = useState<number>(42);
  const [isToggled, setIsToggled] = useState<boolean>(true);
  const [isPowerOn, setIsPowerOn] = useState<boolean>(false);
  const [mode, setMode] = useState<string>('Analog');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full max-w-6xl">
        
        {/* Left Column (Inputs) - Span 4 */}
        <div className="lg:col-span-4 flex flex-col gap-8">
            <AmberCard title="Identity & Status">
                <div className="flex items-center justify-between gap-4 pt-2">
                    <AmberAvatar initials="JD" size="md" status="online" color={theme} />
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <AmberBadge label="Admin" color={theme} />
                            <AmberBadge label="Pro" variant="outline" color={theme} />
                        </div>
                        <AmberBadge label="3 New Messages" color={theme} className="w-full" />
                    </div>
                </div>
            </AmberCard>

            <AmberCard title="Channel Input">
                <div className="flex flex-col gap-6 pt-2">
                    <AmberInput placeholder="Input 01" label="Channel Name" color={theme} />
                    <div className="h-px bg-gray-300/50 w-full" />
                    <div className="flex justify-between items-center px-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Mic / Line</span>
                        <AmberToggle checked={isToggled} onChange={setIsToggled} color={theme} />
                    </div>
                    <div className="flex justify-between items-center px-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">+48V Power</span>
                        <AmberToggle checked={isPowerOn} onChange={setIsPowerOn} color={theme} />
                    </div>
                </div>
            </AmberCard>

            <AmberCard title="Mode Select">
                <div className="pt-2">
                    <AmberSegmentedControl 
                        options={['Analog', 'Digital', 'Hybrid']} 
                        value={mode} 
                        onChange={setMode}
                        color={theme}
                    />
                </div>
            </AmberCard>
        </div>

        {/* Middle Column (Levels & Meters) - Span 5 */}
        <div className="lg:col-span-5 flex flex-col gap-8">
            <AmberCard title="Master Gain">
                <div className="flex flex-col items-center gap-8 py-4">
                     {/* Large Dial */}
                     <AmberDial 
                        value={dialValue} 
                        onChange={setDialValue} 
                        label="Pre-Amp Gain" 
                        size={160}
                        color={theme}
                     />
                     
                     <div className="w-full mt-4">
                        <div className="flex justify-between mb-2 px-2">
                            <span className="text-xs font-bold text-gray-400 uppercase">Input Level</span>
                            <span className="text-xs font-bold text-gray-400 uppercase">-12dB</span>
                        </div>
                        <AmberSlider 
                            value={sliderValue} 
                            onChange={setSliderValue}
                            color={theme}
                        />
                     </div>
                </div>
            </AmberCard>

            <AmberCard>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between text-xs font-black text-gray-400 uppercase tracking-widest px-1">
                        <span>L</span>
                        <span>Stereo Output</span>
                        <span>R</span>
                    </div>
                    <AmberMeter value={sliderValue * 0.9} color={theme} />
                    <AmberMeter value={sliderValue * 0.85} color={theme} />
                </div>
            </AmberCard>
        </div>

        {/* Right Column (Monitoring) - Span 3 */}
        <div className="lg:col-span-3 flex flex-col gap-8">
            <AmberCard title="Output Monitor" className="h-full min-h-[400px]">
                <div className="flex justify-center h-full gap-6 px-4">
                    <AmberMeter value={dialValue} vertical label="Main A" color={theme} />
                    <AmberMeter value={dialValue * 0.8} vertical label="Main B" color={theme} />
                    <AmberMeter value={sliderValue} vertical label="Sub" color={theme} />
                </div>
            </AmberCard>

            <div className="flex flex-col gap-4">
                 <AmberButton onClick={() => { setSliderValue(0); setDialValue(0); }} color={theme}>
                    MUTE ALL
                 </AmberButton>
                 <AmberButton variant="secondary" color={theme}>
                    SETTINGS
                 </AmberButton>
            </div>
        </div>
        
        <div className="col-span-full text-center mt-12 opacity-30 text-sm font-mono">
            &lt;GlassUI theme="{theme}" /&gt; 0% Design, 100% React
        </div>

    </div>
  );
};