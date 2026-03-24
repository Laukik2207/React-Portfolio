import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import PixelButton from '../components/PixelButton';
import RPGCard from '../components/RPGCard';

const quests = [
  {
    id: 1,
    title: "SPACE MISSION ARCHIVE",
    status: "COMPLETED",
    date: "Feb 2026",
    desc: "A fully responsive 8+ page full-stack web app showcasing categorized space missions. Features interactive timelines, mission cards, smooth scrolling, hover animations, and grid-based layouts.",
    tools: "HTML5, CSS3, Bootstrap, JavaScript (Flexbox, Grid, DOM manipulation)",
    github: "https://github.com/Laukik2207"
  },
  {
    id: 2,
    title: "AI PRECISION ONCOLOGY",
    status: "COMPLETED",
    date: "Nov 2025",
    desc: "RandomForest classifier trained on 569 clinical samples achieving ~95%+ accuracy and ~0.99 ROC-AUC for cancer prediction. Includes a real-time Streamlit web app with feature importance explainability.",
    tools: "Python, scikit-learn, Pandas, Streamlit, Matplotlib",
    github: "https://github.com/Laukik2207"
  },
  {
    id: 3,
    title: "AIR QUALITY DATA ANALYSIS",
    status: "COMPLETED",
    date: "Apr 2025",
    desc: "EDA on 3,200+ AQI records across 31 Indian states. Identified top polluted cities, calculated regulatory exceedance rates, and built visual pollution trend insights.",
    tools: "Python, Pandas, Matplotlib, Seaborn, NumPy",
    github: "https://github.com/Laukik2207"
  },
  {
    id: 4,
    title: "PIXEL PORTFOLIO (META!)",
    status: "IN PROGRESS",
    date: "Current",
    desc: "This very portfolio — built as an RPG-themed interactive experience using retro pixel aesthetics.",
    tools: "React, Framer Motion, CSS, Press Start 2P, Tailwind CSS",
    github: "https://github.com/Laukik2207"
  }
];

export default function QuestScreen({ onNext, onPrev }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'ArrowDown') {
        setActiveIndex(prev => (prev < quests.length - 1 ? prev + 1 : prev));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeQuest = quests[activeIndex];

  return (
    <motion.div 
      className="flex flex-col w-full h-full p-6 md:p-12 relative overflow-y-auto pt-20 pb-64 md:pb-72"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="mb-4">
        <SectionTitle text="QUEST LOG" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        {/* Left: Quest List */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3">
          {quests.map((q, idx) => (
            <div 
              key={q.id}
              onClick={() => setActiveIndex(idx)}
              className={`flex items-center gap-3 p-4 md:p-5 cursor-pointer border-2 transition-all ${
                activeIndex === idx 
                  ? 'border-white bg-white text-black drop-shadow-[4px_4px_0px_#2a2a2a]' 
                  : 'border-border text-muted hover:border-white hover:bg-[#111]'
              }`}
            >
              <div className="w-4 flex-shrink-0">
                {activeIndex === idx && <span className="animate-pulse">▶</span>}
              </div>
              <span className="font-retro text-[10px] sm:text-xs md:text-sm truncate">
                {q.title}
              </span>
            </div>
          ))}
          <div className="hidden lg:block mt-8 text-center text-muted font-retro text-[10px] opacity-50 border border-dashed border-border p-4">
            TIP: Use UP/DOWN arrows to navigate.
          </div>
        </div>

        {/* Right: Quest Detail */}
        <div className="w-full lg:w-2/3 h-full">
          {/* We use key to force re-render/animation on change */}
          <motion.div
            key={activeQuest.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <RPGCard className="h-full flex flex-col justify-between shadow-[8px_8px_0px_#2a2a2a] p-6 md:p-8">
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b-2 border-border pb-6">
                  <h3 className="text-xl md:text-2xl font-retro text-white mb-4 md:mb-0 leading-normal">
                    {activeQuest.title}
                  </h3>
                  <div className={`px-3 py-2 text-[10px] md:text-xs font-retro border-2 shrink-0 ${activeQuest.status === 'COMPLETED' ? 'border-green-500 text-green-500' : 'border-yellow-500 text-yellow-500 animate-pulse drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]'}`}>
                    {activeQuest.status}
                  </div>
                </div>
                
                <div className="font-retro text-muted text-xs mb-8 inline-block bg-[#111] px-3 py-2 border border-border">
                  LOG DATE: <span className="text-white">{activeQuest.date}</span>
                </div>

                <p className="text-white text-sm md:text-base leading-[2] mb-10 opacity-90">
                  {activeQuest.desc}
                </p>

                <div className="mb-8 p-6 border-2 border-dashed border-border bg-[#0a0a0c]">
                  <span className="font-retro text-muted text-[10px] md:text-xs mb-4 block underline underline-offset-4 decoration-border">TOOLS EQUIPPED:</span>
                  <span className="font-retro text-white text-[10px] md:text-xs leading-[2.5] tracking-widest block uppercase text-justify">
                    {activeQuest.tools}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                {activeQuest.github && (
                  <a href={activeQuest.github} target="_blank" rel="noreferrer" className="inline-block w-full sm:w-auto text-center">
                    <PixelButton label="[ VIEW CODE ]" />
                  </a>
                )}
                {activeQuest.demo && (
                  <a href={activeQuest.demo} target="_blank" rel="noreferrer" className="inline-block w-full sm:w-auto text-center">
                    <PixelButton label="[ PLAY DEMO ]" />
                  </a>
                )}
              </div>
            </RPGCard>
          </motion.div>
        </div>
      </div>

      {/* Navigation Layer */}
      <div className="fixed bottom-32 right-6 md:bottom-36 md:right-12 flex flex-col sm:flex-row gap-4 z-50">
        <PixelButton label="← BACK" onClick={onPrev} />
        <PixelButton label="GUILD →" onClick={onNext} blinking={true} />
      </div>
    </motion.div>
  );
}
