# Glass UI - The "Ignore The Mockup" System

> **0% Design, 100% React.**  
> Built by developers who hate design revisions, for developers who just want to ship.

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![React](https://img.shields.io/badge/react-v19-61dafb.svg) ![Tailwind](https://img.shields.io/badge/tailwind-v3-38b2ac.svg)

## 🤬 The Philosophy

Stop aligning pixels. Stop waiting for Figma updates. Glass UI is a photorealistic, skeuomorphic, industrial component system that looks expensive by default. It simulates light, glass, texture, and depth using pure CSS and React.

**The Goal:** Drop these components into your app, and it looks like a high-end audio interface or a futuristic dashboard immediately. No designer required.

## 📦 Features

*   **Real-time Caustics:** Fake light refraction using CSS gradients and shadows.
*   **Themeable:** Comes with 6 gem-based presets (Amber, Emerald, Ruby, Lapis, Amethyst, Obsidian).
*   **Touch-Ready:** Sliders and Dials work on mobile.
*   **Zero External Assets:** No images. Just code.

## 🚀 Installation

You have two choices. Both are faster than waiting for a designer.

### Option A: Clone & Own (Recommended)
Clone the repository and simply copy the `components` and `utils` folders into your existing project. You own the code now.

```bash
git clone https://github.com/glass-ui/core.git
```

### Option B: The Copy-Paste
If you just need one specific button to save your project, copy the individual files from the `components` directory.

### Prerequisites
- React 18+
- Tailwind CSS

### Configuration
Update your `tailwind.config.js` to include the specific fonts and shadow utilities we use to fake the 3D depth.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Condensed', 'sans-serif'], // Essential for the industrial look
      },
      boxShadow: {
        // The magic sauce for the "milled aluminum" look
        'glass': 'inset 1px 1px 2px rgba(255, 255, 255, 0.4), 5px 5px 10px rgba(163, 177, 198, 0.3)',
      }
    },
  },
}
```

*Note: Ensure you import the font in your CSS or HTML:*
`<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;900&display=swap" rel="stylesheet">`

## 🛠 Usage

Import a component and pass the `color` prop.

```tsx
import { AmberCard } from './components/AmberCard';
import { AmberSlider } from './components/AmberSlider';
import { AmberButton } from './components/AmberButton';

function MyDashboard() {
  return (
    <div className="bg-gray-200 p-10">
      <AmberCard title="Audio Settings">
        
        <AmberSlider 
            value={75} 
            onChange={(val) => console.log(val)} 
            color="ruby" 
        />
        
        <div className="mt-8 flex justify-center">
            <AmberButton color="ruby" onClick={() => alert('Boom')}>
                DETONATE
            </AmberButton>
        </div>

      </AmberCard>
    </div>
  );
}
```

## 🎨 Available Components

| Component | Description |
| :--- | :--- |
| `<AmberCard />` | The container. Adds the convex "milled plastic" background and heavy shadows. |
| `<AmberButton />` | `variant="primary"` (Glass) or `variant="secondary"` (Matte). Satisfying click states. |
| `<AmberSlider />` | 3D glass thumb with liquid fill effect. |
| `<AmberDial />` | Rotary knob for gain/volume controls. Drag up/down to change. |
| `<AmberToggle />` | Skeuomorphic toggle switch with LED indicator. |
| `<AmberInput />` | Deeply inset text fields. |
| `<AmberMeter />` | LED segment arrays for visualizing levels. |
| `<AmberBadge />` | Glowing glass badges for status/tags. |

## 🌈 Themes
Pass these strings to the `color` prop of any component:
- `'amber'` (Default Orange/Gold)
- `'emerald'` (Green)
- `'ruby'` (Red)
- `'lapis'` (Blue)
- `'amethyst'` (Purple)
- `'obsidian'` (Dark/Grey)

## 🤝 Contributing

1. Fork it.
2. Create your feature branch (`git checkout -b feature/cool-knob`).
3. Commit your changes (`git commit -m 'Added a cool knob'`).
4. Push to the branch (`git push origin feature/cool-knob`).
5. Open a Pull Request.

## 📄 License

**MIT**. Do whatever you want with it. Just don't blame us if your designer cries because the buttons have too much personality.