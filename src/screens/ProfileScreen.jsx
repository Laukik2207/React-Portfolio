import React from 'react';
import { motion } from 'framer-motion';
import PixelButton from '../components/PixelButton';
import RPGProgressBar from '../components/RPGProgressBar';

export default function ProfileScreen({ onNext }) {
  return (
    <motion.div 
      className="flex flex-col w-full h-full p-6 md:p-12 relative overflow-y-auto pb-48 md:pb-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-4 pt-10 pb-32">
        {/* Left Column: Player Data */}
        <div className="flex-1 border-r-0 md:border-r-2 border-border pr-0 md:pr-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-retro text-text mb-2 tracking-widest">PLAYER PROFILE</h2>
          <div className="w-full h-0.5 bg-border mb-8"></div>
          
          <div className="space-y-6 font-retro text-xs md:text-sm leading-relaxed">
            <div className="flex flex-col gap-2"><span className="text-muted">Name:</span> <span className="text-white">Laukik Deshmukh</span></div>
            <div className="flex flex-col gap-2"><span className="text-muted">Class:</span> <span className="text-white">System Builder</span></div>
            <div className="flex flex-col gap-2"><span className="text-muted">Status:</span> <span className="text-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.4)] px-1 w-max">Active</span></div>
            <div className="flex flex-col gap-2"><span className="text-muted">Origin:</span> <span className="text-white">Nashik, Maharashtra</span></div>
            <div className="flex flex-col gap-2"><span className="text-muted">Level:</span> <span className="text-white">03</span></div>
            <div className="flex flex-col mt-4">
              <span className="text-muted mb-2">XP:</span> 
              <span className="text-white border-2 border-border p-3 bg-[#111] opacity-90 inline-block">B.Tech CSE @ LPU (CGPA: 7.46)</span>
            </div>
            <div className="flex flex-col mt-4">
              <span className="text-muted mb-2">Spec:</span> 
              <span className="text-white border-2 border-border p-3 bg-[#111] opacity-90 inline-block break-words">Full-Stack + ML + 3D</span>
            </div>
          </div>
        </div>

        {/* Center Column: Character Art */}
        <div className="flex-1 flex justify-center items-center py-8 md:py-0">
          <motion.div 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] p-3 bg-bg"
          >
            <div className="w-48 h-48 md:w-72 md:h-72 flex items-center justify-center bg-border border-2 border-[#1a1a1a]">
              <img 
                src="/assets/profile.gif" 
                alt="Profile Art" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
              />
              <span className="hidden text-muted text-xs font-retro">PROFILE.GIF</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Attributes */}
        <div className="flex-1 border-l-0 md:border-l-2 border-border pl-0 md:pl-8 flex flex-col justify-center">
          <div className="text-muted italic text-[10px] md:text-xs mb-10 text-right opacity-60">"Always leveling up."</div>
          
          <h2 className="text-xl md:text-2xl font-retro text-text mb-6 tracking-widest">ATTRIBUTES</h2>
          
          <div className="space-y-8">
            <RPGProgressBar label="LOGIC" value={90} delay={0.2} />
            <RPGProgressBar label="PROBLEM SOLVING" value={85} delay={0.4} />
            <RPGProgressBar label="CREATIVITY" value={80} delay={0.6} />
            <RPGProgressBar label="CONSISTENCY" value={95} delay={0.8} />
          </div>

          <div className="mt-12 flex justify-start lg:justify-end pb-32 md:pb-40">
            <PixelButton label="VIEW STATS →" onClick={onNext} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
