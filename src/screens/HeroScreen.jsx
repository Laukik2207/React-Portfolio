import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '../components/TypewriterText';
import PixelButton from '../components/PixelButton';

export default function HeroScreen({ onNext }) {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center w-full h-full p-6 md:p-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-1 xl:grid-cols-3 items-center justify-items-center w-full max-w-7xl mb-16 md:mb-24 gap-12 xl:gap-8">
        
        {/* Left Col: Typewriter */}
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left w-full justify-center">
          <div className="text-xl md:text-[2.5rem] leading-tight md:leading-snug">
            <div className="mb-4">
              <TypewriterText text="PRESENCE" speed={80} cursor={false} />
            </div>
            <div>
               <TypewriterText text="CONFIRMED..." speed={80} cursor={true} />
            </div>
          </div>
        </div>

        {/* Center Col: Character Art */}
        <div className="flex justify-center items-center w-full">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Increased box size safely contained in Grid */}
            <div className="w-64 h-64 md:w-80 md:h-80 bg-border flex items-center justify-center border-4 border-white shadow-[12px_12px_0px_#2a2a2a] overflow-hidden">
              <img 
                src="/assets/hero.png" 
                alt="Hero Character" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
              />
              <span className="hidden text-muted text-xs font-retro absolute">HERO.PNG</span>
            </div>
          </motion.div>
        </div>

        {/* Right Col: Name Header */}
        <div className="flex flex-col items-center xl:items-end text-center xl:text-right w-full justify-center mt-8 xl:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-sm md:text-lg text-muted mb-3 opacity-80">This is</p>
            <h1 className="text-3xl md:text-[3.5rem] leading-tight flex flex-col gap-2 md:gap-4 tracking-widest text-white drop-shadow-[4px_4px_0px_#2a2a2a]">
              <span>Laukik</span>
              <span>Deshmukh</span>
            </h1>
          </motion.div>
        </div>

      </div>

      {/* Bottom Center: Press Start */}
      <motion.div 
        className="flex flex-col items-center mt-8 cursor-pointer relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <PixelButton label="[ PRESS START ]" onClick={onNext} blinking={true} />
        <motion.div 
          className="text-white text-xs mt-6 tracking-widest font-retro"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ▼ ▼ ▼
        </motion.div>
      </motion.div>

    </motion.div>
  );
}
