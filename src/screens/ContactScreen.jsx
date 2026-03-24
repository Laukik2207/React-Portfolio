import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '../components/TypewriterText';
import RPGCard from '../components/RPGCard';

export default function ContactScreen({ onPrev }) {
  return (
    <motion.div 
      className="flex flex-col w-full h-full p-6 md:p-12 relative overflow-y-auto pb-64"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex-1 flex flex-col xl:flex-row items-center justify-center gap-12 md:gap-16 pt-10 md:pt-0">
        
        {/* Left: Character Art */}
        <div className="w-56 h-56 md:w-80 md:h-80 border-4 border-white bg-border shadow-[16px_16px_0px_#2a2a2a] flex items-center justify-center shrink-0">
           <img 
            src="/assets/contact.png" 
            alt="NPC Contact" 
            className="w-full h-full object-contain"
            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
          />
          <span className="hidden text-muted text-xs font-retro">CONTACT.PNG</span>
        </div>

        {/* Right: Dialogue Box & Menu */}
        <div className="flex-1 w-full max-w-3xl">
          <RPGCard className="mb-8 border-4 border-white shadow-[12px_12px_0px_#2a2a2a] p-8 min-h-[140px] md:min-h-[160px]">
            <div className="flex">
              <span className="text-white mr-4 animate-pulse mt-1">▶</span>
              <p className="text-white text-sm md:text-lg leading-loose tracking-wide min-h-[60px]">
                <TypewriterText text="Greetings, traveler. Ready to team up on something great? Drop your coordinates below." speed={40} cursor={true} />
              </p>
            </div>
          </RPGCard>

          <div className="bg-bg border-4 border-border p-8 shadow-[8px_8px_0px_#2a2a2a]">
            <ul className="space-y-6 font-retro text-xs md:text-sm">
              <li className="group cursor-pointer">
                <a href="mailto:deshmukhlaukik52@gmail.com" className="flex items-center text-muted group-hover:text-white transition-colors">
                  <span className="w-8 opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  [ ✉ ] SEND MESSAGE
                </a>
              </li>
              <li className="group cursor-pointer">
                <a href="https://www.linkedin.com/in/laukik-deshmukh-link2207" target="_blank" rel="noreferrer" className="flex items-center text-muted group-hover:text-white transition-colors">
                  <span className="w-8 opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  [ in ] LINKEDIN
                </a>
              </li>
              <li className="group cursor-pointer">
                <a href="https://github.com/Laukik2207" target="_blank" rel="noreferrer" className="flex items-center text-muted group-hover:text-white transition-colors">
                  <span className="w-8 opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  [ GH ] GITHUB
                </a>
              </li>
              <li className="group cursor-pointer">
                <a href="#" className="flex items-center text-muted group-hover:text-white transition-colors">
                  <span className="w-8 opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  [ 📄 ] DOWNLOAD RESUME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center w-full relative mb-12 pb-24">
        <p className="font-retro text-[8px] md:text-[10px] text-muted opacity-50 text-center tracking-widest border-t border-dashed border-border pt-8 w-full max-w-xl">
          © 2026 Laukik Deshmukh — GAME OVER? NEVER.
        </p>
      </div>
    </motion.div>
  );
}
