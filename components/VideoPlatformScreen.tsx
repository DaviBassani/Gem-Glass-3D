import React, { useState } from 'react';
import { GemColor, GEM_THEMES } from '../utils/theme';
import { AmberInput } from './AmberInput';
import { AmberButton } from './AmberButton';
import { AmberAvatar } from './AmberAvatar';
import { AmberCard } from './AmberCard';
import { AmberSlider } from './AmberSlider';
import { AmberBadge } from './AmberBadge';
import { AmberToggle } from './AmberToggle';
import { AmberSegmentedControl } from './AmberSegmentedControl';

interface VideoPlatformScreenProps {
  theme: GemColor;
}

export const VideoPlatformScreen: React.FC<VideoPlatformScreenProps> = ({ theme }) => {
  const currentTheme = GEM_THEMES[theme];
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(80);
  const [autoplay, setAutoplay] = useState(true);
  const [quality, setQuality] = useState('1080p');

  return (
    <div className="w-full max-w-7xl flex flex-col gap-8">
      
      {/* Navbar */}
      <AmberCard className="!p-4 !rounded-2xl flex items-center gap-6 sticky top-4 z-50">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl" 
                 style={{ background: currentTheme.primaryGradient, boxShadow: `0 0 10px ${currentTheme.glow}` }}>
                ▶
            </div>
            <span className="text-2xl font-black tracking-tighter text-gray-500 hidden sm:block">GlassTube</span>
        </div>
        
        <div className="flex-1 max-w-2xl mx-auto">
             <AmberInput placeholder="Search for 'center a div'..." className="w-full" color={theme} />
        </div>

        <div className="flex items-center gap-4">
            <AmberButton variant="secondary" className="!p-2 !rounded-xl">
                <span className="text-xl">🔔</span>
            </AmberButton>
            <AmberAvatar initials="ME" size="sm" status="online" color={theme} />
        </div>
      </AmberCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content (Player) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Video Player Frame */}
            <div className="relative aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#dcdde1] group">
                {/* Simulated Video Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center opacity-30">
                        <div className="text-6xl mb-4">▶</div>
                        <div className="font-mono text-white">Playing: Design Rant_Final_v2.mp4</div>
                    </div>
                </div>

                {/* Overlay Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <AmberSlider value={progress} onChange={setProgress} color={theme} />
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button className="text-white hover:text-gray-200 transition-colors">
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                            </button>
                            <div className="flex items-center gap-2">
                                <span className="text-white/80 text-xs font-bold">VOL</span>
                                <div className="w-24 scale-75 origin-left">
                                    <AmberSlider value={volume} onChange={setVolume} color={theme} />
                                </div>
                            </div>
                            <span className="text-white font-mono text-sm">04:20 / 12:45</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <AmberBadge label="CC" variant="outline" color={theme} className="!text-white !border-white/30" />
                            <AmberBadge label="4K" color={theme} />
                            <div className="scale-75 origin-right">
                                 <AmberSegmentedControl options={['720p', '1080p']} value={quality} onChange={setQuality} color={theme} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Info */}
            <div className="flex flex-col gap-4 px-2">
                <h1 className="text-2xl font-black text-gray-600 tracking-wide">
                    Why I stopped listening to my Designer (and you should too)
                </h1>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <AmberAvatar src="https://ui-avatars.com/api/?name=Backend+Guy&background=random" size="md" color={theme} />
                        <div>
                            <div className="font-bold text-gray-600 text-lg">Backend4Life</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">4.2M Subscribers</div>
                        </div>
                        <div className="ml-4">
                            <AmberButton className="!text-sm !px-6 !py-2 !rounded-xl" color={theme}>Subscribe</AmberButton>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <AmberButton variant="secondary" className="!px-6 !py-2 !text-sm !rounded-l-xl border-r border-gray-300" color={theme}>
                            👍 99K
                        </AmberButton>
                         <AmberButton variant="secondary" className="!px-4 !py-2 !text-sm !rounded-r-xl" color={theme}>
                            👎
                        </AmberButton>
                        <AmberButton variant="secondary" className="!px-4 !py-2 !text-sm !rounded-xl" color={theme}>
                            Share
                        </AmberButton>
                    </div>
                </div>
            </div>

            {/* Comments Section (Card) */}
            <AmberCard title="Comments (423)">
                <div className="flex gap-4 mt-2">
                    <AmberAvatar initials="ME" size="sm" color={theme} />
                    <div className="flex-1">
                        <AmberInput placeholder="Add a public comment..." color={theme} className="mb-4" />
                        <div className="flex justify-end">
                            <AmberButton className="!text-xs !px-4 !py-2" color={theme}>Comment</AmberButton>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 space-y-6">
                    <div className="flex gap-4">
                        <AmberAvatar initials="FE" size="sm" color={theme} />
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-gray-600 text-sm">FrontendWarrior</span>
                                <span className="text-gray-400 text-xs">2 hours ago</span>
                            </div>
                            <p className="text-gray-500 font-medium text-sm mt-1">
                                "Can you move that 1px to the left?" No. No I cannot.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                         <AmberAvatar initials="PM" size="sm" color={theme} />
                         <div>
                             <div className="flex items-center gap-2">
                                 <span className="font-bold text-gray-600 text-sm">FullStackDave</span>
                                 <span className="text-gray-400 text-xs">5 hours ago</span>
                             </div>
                             <p className="text-gray-500 font-medium text-sm mt-1">
                                 I replaced my designer with a random number generator for padding. Users love it.
                             </p>
                         </div>
                     </div>
                </div>
            </AmberCard>
        </div>

        {/* Sidebar (Recommendations) */}
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between px-2">
                <span className="font-black text-gray-400 uppercase tracking-widest text-sm">Up Next</span>
                <div className="flex items-center gap-2 scale-90 origin-right">
                    <span className="font-bold text-gray-500 text-xs">Autoplay</span>
                    <AmberToggle checked={autoplay} onChange={setAutoplay} color={theme} />
                </div>
            </div>

            <AmberCard className="!p-3 !rounded-2xl group cursor-pointer hover:scale-[1.02]">
                <div className="flex gap-3">
                    <div className="relative w-32 h-20 bg-gray-300 rounded-xl overflow-hidden shrink-0">
                        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600 text-2xl">
                            🛑
                        </div>
                        <div className="absolute bottom-1 right-1">
                            <AmberBadge label="03:00" color={theme} variant="filled" className="!text-[10px] !px-1.5 !py-0.5" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <h3 className="font-bold text-gray-600 text-sm leading-tight line-clamp-2">
                            How to reject Jira tickets professionally
                        </h3>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Senior Dev Tips</div>
                        <div className="flex items-center gap-2 mt-1">
                            <AmberBadge label="Hot" variant="outline" color={theme} className="!text-[9px] !px-1.5 !py-0" />
                            <span className="text-[10px] text-gray-400 font-bold">1M views</span>
                        </div>
                    </div>
                </div>
            </AmberCard>

            <AmberCard className="!p-3 !rounded-2xl group cursor-pointer hover:scale-[1.02]">
                <div className="flex gap-3">
                    <div className="relative w-32 h-20 bg-gray-300 rounded-xl overflow-hidden shrink-0">
                        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600 text-2xl">
                            🎨
                        </div>
                        <div className="absolute bottom-1 right-1">
                            <AmberBadge label="12:42" color={theme} variant="filled" className="!text-[10px] !px-1.5 !py-0.5" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-1">
                        <h3 className="font-bold text-gray-600 text-sm leading-tight line-clamp-2">
                            Flat Design is a Scam: Return to Texture
                        </h3>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Skeuomorph Gang</div>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] text-gray-400 font-bold">500K views</span>
                        </div>
                    </div>
                </div>
            </AmberCard>

            <AmberCard className="!p-3 !rounded-2xl group cursor-pointer hover:scale-[1.02]">
                 <div className="flex gap-3">
                     <div className="relative w-32 h-20 bg-gray-300 rounded-xl overflow-hidden shrink-0">
                         <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600 text-2xl">
                             🤬
                         </div>
                         <div className="absolute bottom-1 right-1">
                             <AmberBadge label="08:15" color={theme} variant="filled" className="!text-[10px] !px-1.5 !py-0.5" />
                         </div>
                     </div>
                     <div className="flex flex-col justify-center gap-1">
                         <h3 className="font-bold text-gray-600 text-sm leading-tight line-clamp-2">
                             "Make the Logo Bigger" - A Horror Story
                         </h3>
                         <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Freelance Tears</div>
                         <div className="flex items-center gap-2 mt-1">
                             <span className="text-[10px] text-gray-400 font-bold">2.1M views</span>
                         </div>
                     </div>
                 </div>
             </AmberCard>

        </div>

      </div>
    </div>
  );
};