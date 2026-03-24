import React from 'react';

const iconMap = {
  // Languages
  'C': '⚙', 'C++': '⚙', 'Java': '☕', 'Python': '🐍', 'JavaScript': '🟨',
  // DBs
  'MySQL': '🐬', 'MongoDB': '🍃',
  // Data Science
  'NumPy': '🔢', 'Pandas': '🐼', 'Matplotlib': '📊', 'PyTorch': '🔥', 'scikit-learn': '🧠', 'SciPy': '🔬',
  // Web Dev
  'HTML5': '🌐', 'CSS3': '🎨', 'React': '⚛', 'Node.js': '🟢', 'Express.js': '🚂', 'Bootstrap': '🅱',
  // Tools
  'Git': '🌲', 'GitHub': '🐙', 'Figma': '🖋', 'Blender': '🧊', 'Power BI': '📉', 'Canva': '🖌', 'Excel': '📗',
};

export default function PixelIcon({ name, size = 24 }) {
  const emoji = iconMap[name] || '📦';
  return (
    <div 
      className="group relative flex items-center justify-center border-2 border-border bg-bg hover:bg-white transition-colors cursor-crosshair" 
      style={{ width: size + 8, height: size + 8 }}
    >
      <span 
        className="text-base sm:text-lg lg:text-xl group-hover:invert transition-all" 
        style={{ filter: 'grayscale(100%) contrast(200%)' }}
      >
        {emoji}
      </span>
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black text-[10px] font-retro px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-md">
        {name}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
      </div>
    </div>
  );
}
