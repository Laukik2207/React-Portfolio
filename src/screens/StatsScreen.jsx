import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import RPGProgressBar from '../components/RPGProgressBar';
import PixelIcon from '../components/PixelIcon';
import RPGCard from '../components/RPGCard';
import PixelButton from '../components/PixelButton';

function AnimatedCounter({ target, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [target, duration]);

  return <span>{count.toString().padStart(3, '0')}+</span>;
}

export default function StatsScreen({ onNext, onPrev }) {
  return (
    <motion.div 
      className="flex flex-col w-full h-full p-6 md:p-12 relative overflow-y-auto overflow-x-hidden pt-20 pb-64 md:pb-72"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 absolute top-6 left-6 right-6 md:top-12 md:left-12 md:right-12 z-10 w-[calc(100%-3rem)] md:w-[calc(100%-6rem)]">
        <div className="bg-bg bg-opacity-90 pr-4 pb-2">
           <SectionTitle text="PLAYER STATS" />
        </div>
        <div className="text-white text-3xl md:text-5xl font-retro text-right drop-shadow-[4px_4px_0px_#2a2a2a] bg-bg border-4 border-white px-4 py-2 opacity-95">
          <AnimatedCounter target={70} duration={1.2} />
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex flex-col xl:flex-row gap-8 mt-48 md:mt-32">
        
        {/* Left Col: Tech Stack */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          <div className="border border-border p-4 bg-bg bg-opacity-80">
            <RPGProgressBar label="LANGUAGES" value={90} delay={0.1} />
            <div className="flex gap-2 flex-wrap">
              {['C', 'C++', 'Java', 'Python', 'JavaScript'].map(t => <PixelIcon key={t} name={t} />)}
            </div>
          </div>
          
          <div className="border border-border p-4 bg-bg bg-opacity-80">
            <RPGProgressBar label="DATABASES" value={80} delay={0.2} />
            <div className="flex gap-2 flex-wrap">
              {['MySQL', 'MongoDB'].map(t => <PixelIcon key={t} name={t} />)}
            </div>
          </div>
          
          <div className="border border-border p-4 bg-bg bg-opacity-80">
            <RPGProgressBar label="DATA SCIENCE" value={85} delay={0.3} />
            <div className="flex gap-2 flex-wrap">
              {['NumPy', 'Pandas', 'Matplotlib', 'PyTorch', 'scikit-learn', 'SciPy'].map(t => <PixelIcon key={t} name={t} />)}
            </div>
          </div>
          
          <div className="border border-border p-4 bg-bg bg-opacity-80">
            <RPGProgressBar label="WEB DEV" value={80} delay={0.4} />
            <div className="flex gap-2 flex-wrap">
              {['HTML5', 'CSS3', 'React', 'Node.js', 'Express.js', 'Bootstrap'].map(t => <PixelIcon key={t} name={t} />)}
            </div>
          </div>
          
          <div className="border border-border p-4 bg-bg bg-opacity-80">
            <RPGProgressBar label="TOOLS & PLATFORMS" value={75} delay={0.5} />
            <div className="flex gap-2 flex-wrap">
              {['Git', 'GitHub', 'Figma', 'Blender', 'Power BI', 'Canva', 'Excel'].map(t => <PixelIcon key={t} name={t} />)}
            </div>
          </div>
        </div>

        {/* Center: Character Art */}
        <div className="hidden xl:flex w-1/4 justify-center items-center">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          >
            <div className="w-56 h-56 bg-border flex items-center justify-center border-4 border-white shadow-[8px_8px_0px_#2a2a2a]">
              <img 
                src="/assets/stats.png" 
                alt="Stats View" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
              />
              <span className="hidden text-muted text-xs font-retro">STATS.PNG</span>
            </div>
          </motion.div>
        </div>

        {/* Right Col: Achievements & Cert */}
        <div className="flex-1 flex flex-col gap-8 w-full">
          <RPGCard title="ACHIEVEMENTS" className="shadow-[4px_4px_0px_#2a2a2a]">
            <p className="mb-4 leading-loose">★ <span className="text-white">70+</span> LeetCode Problems Solved</p>
            <p className="mb-4 leading-loose">★ <span className="text-white">3★</span> HackerRank</p>
            <p className="mb-4 leading-loose">★ <span className="text-white">JPMorgan Chase</span> Job Simulation</p>
            <p className="mb-4 leading-loose">★ <span className="text-white">AWS</span> Workshop Participant</p>
          </RPGCard>

          <RPGCard title="CERTIFICATIONS" className="shadow-[4px_4px_0px_#2a2a2a]">
            <p className="mb-4 leading-[2]">◈ <span className="text-white">Oracle Cloud Infrastructure</span> 2025 AI Foundations Associate</p>
            <p className="mb-4 leading-[2]">◈ <span className="text-white">Build Generative AI Apps</span> with No-Code Tools</p>
            <p className="mb-4 leading-[2]">◈ <span className="text-white">Master Generative AI</span> & Tools / ChatGPT</p>
            <p className="mb-4 leading-[2]">◈ <span className="text-white">Complete Blender Creator</span> (Udemy)</p>
          </RPGCard>
        </div>
      </div>

      {/* Navigation Layer */}
      <div className="fixed bottom-32 right-6 md:bottom-36 md:right-12 flex flex-col md:flex-row gap-4 z-50">
        <PixelButton label="← BACK" onClick={onPrev} />
        <PixelButton label="QUESTS →" onClick={onNext} blinking={true} />
      </div>

    </motion.div>
  );
}
