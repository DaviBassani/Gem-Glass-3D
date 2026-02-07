export type GemColor = 'amber' | 'emerald' | 'ruby' | 'lapis' | 'amethyst' | 'obsidian';

export interface ThemeConfig {
  id: GemColor;
  name: string;
  primaryGradient: string; // Solid button / intense fill
  glassGradient: string; // Translucent fill for sliders
  glassBorder: string; // Border color for glass elements
  shadow: string; // Colored shadow/glow
  textColor: string; // Text color on light backgrounds
  glow: string; // Intense glow color
  knobGradient: string; // 3D sphere gradient
  highlight: string; // Bright highlight color
}

export const GEM_THEMES: Record<GemColor, ThemeConfig> = {
  amber: {
    id: 'amber',
    name: 'Amber',
    primaryGradient: 'linear-gradient(135deg, rgba(252, 211, 77, 1) 0%, rgba(245, 158, 11, 1) 50%, rgba(217, 119, 6, 1) 100%)',
    glassGradient: 'linear-gradient(90deg, rgba(251, 191, 36, 0.3) 0%, rgba(245, 158, 11, 0.45) 50%, rgba(217, 119, 6, 0.55) 100%)',
    glassBorder: 'rgba(245, 158, 11, 0.3)',
    shadow: 'rgba(245, 158, 11, 0.4)',
    textColor: 'rgba(180, 83, 9, 1)',
    glow: 'rgba(245, 158, 11, 0.6)',
    knobGradient: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, rgba(252, 211, 77, 1) 25%, rgba(245, 158, 11, 1) 100%)',
    highlight: 'rgba(251, 191, 36, 1)'
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald',
    primaryGradient: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 50%, #047857 100%)',
    glassGradient: 'linear-gradient(90deg, rgba(110, 231, 183, 0.3) 0%, rgba(16, 185, 129, 0.45) 50%, rgba(4, 120, 87, 0.55) 100%)',
    glassBorder: 'rgba(16, 185, 129, 0.3)',
    shadow: 'rgba(16, 185, 129, 0.4)',
    textColor: 'rgba(6, 78, 59, 1)',
    glow: 'rgba(16, 185, 129, 0.6)',
    knobGradient: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, #6ee7b7 25%, #10b981 100%)',
    highlight: '#34d399'
  },
  ruby: {
    id: 'ruby',
    name: 'Ruby',
    primaryGradient: 'linear-gradient(135deg, #fca5a5 0%, #ef4444 50%, #b91c1c 100%)',
    glassGradient: 'linear-gradient(90deg, rgba(252, 165, 165, 0.3) 0%, rgba(239, 68, 68, 0.45) 50%, rgba(185, 28, 28, 0.55) 100%)',
    glassBorder: 'rgba(239, 68, 68, 0.3)',
    shadow: 'rgba(239, 68, 68, 0.4)',
    textColor: 'rgba(127, 29, 29, 1)',
    glow: 'rgba(239, 68, 68, 0.6)',
    knobGradient: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, #fca5a5 25%, #ef4444 100%)',
    highlight: '#f87171'
  },
  lapis: {
    id: 'lapis',
    name: 'Lapis',
    primaryGradient: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1d4ed8 100%)',
    glassGradient: 'linear-gradient(90deg, rgba(147, 197, 253, 0.3) 0%, rgba(59, 130, 246, 0.45) 50%, rgba(29, 78, 216, 0.55) 100%)',
    glassBorder: 'rgba(59, 130, 246, 0.3)',
    shadow: 'rgba(59, 130, 246, 0.4)',
    textColor: 'rgba(30, 58, 138, 1)',
    glow: 'rgba(59, 130, 246, 0.6)',
    knobGradient: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, #93c5fd 25%, #3b82f6 100%)',
    highlight: '#60a5fa'
  },
  amethyst: {
    id: 'amethyst',
    name: 'Amethyst',
    primaryGradient: 'linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 50%, #6d28d9 100%)',
    glassGradient: 'linear-gradient(90deg, rgba(196, 181, 253, 0.3) 0%, rgba(139, 92, 246, 0.45) 50%, rgba(109, 40, 217, 0.55) 100%)',
    glassBorder: 'rgba(139, 92, 246, 0.3)',
    shadow: 'rgba(139, 92, 246, 0.4)',
    textColor: 'rgba(76, 29, 149, 1)',
    glow: 'rgba(139, 92, 246, 0.6)',
    knobGradient: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, #c4b5fd 25%, #8b5cf6 100%)',
    highlight: '#a78bfa'
  },
  obsidian: {
    id: 'obsidian',
    name: 'Obsidian',
    primaryGradient: 'linear-gradient(135deg, #9ca3af 0%, #4b5563 50%, #1f2937 100%)',
    glassGradient: 'linear-gradient(90deg, rgba(156, 163, 175, 0.3) 0%, rgba(75, 85, 99, 0.45) 50%, rgba(31, 41, 55, 0.55) 100%)',
    glassBorder: 'rgba(75, 85, 99, 0.3)',
    shadow: 'rgba(0, 0, 0, 0.4)',
    textColor: 'rgba(17, 24, 39, 1)',
    glow: 'rgba(255, 255, 255, 0.2)',
    knobGradient: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.7) 0%, #9ca3af 25%, #374151 100%)',
    highlight: '#d1d5db'
  }
};