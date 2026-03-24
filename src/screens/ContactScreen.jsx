import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '../components/TypewriterText';
import RPGCard from '../components/RPGCard';
import { Mail, Briefcase, Terminal, FileText } from 'lucide-react';

export default function ContactScreen({ onPrev }) {
  const [status, setStatus] = useState('IDLE');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('SENDING');
    setTimeout(() => {
      setStatus('SUCCESS');
    }, 1500);
  };

  return (
    <motion.div 
      className="flex flex-col w-full h-full p-6 md:p-12 relative overflow-y-auto pb-64"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-12 w-full pt-10 md:pt-0 max-w-5xl mx-auto">
        
        {/* Dialogue Box */}
        <div className="w-full">
          <RPGCard className="mb-2 border-4 border-white shadow-[12px_12px_0px_#2a2a2a] p-8 min-h-[120px] md:min-h-[140px] w-full">
            <div className="flex">
              <span className="text-white mr-4 animate-pulse mt-1">▶</span>
              <p className="text-white text-sm md:text-lg leading-loose tracking-wide h-16 md:h-20 break-words">
                <TypewriterText text="Greetings, traveler. Ready to team up? Drop your coordinates below." speed={40} cursor={true} />
              </p>
            </div>
          </RPGCard>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
          {/* Left: Contact Form */}
          <div className="flex-1 bg-bg border-4 border-border p-8 shadow-[8px_8px_0px_#2a2a2a]">
            <h3 className="font-retro text-white mb-6 uppercase tracking-widest text-sm md:text-base border-b-2 border-border pb-4">TRANSMIT MSG</h3>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="font-retro text-muted text-[10px] md:text-xs uppercase tracking-widest">PLAYER NAME</label>
                <input type="text" className="bg-[#0a0a0c] border-2 border-border p-3 text-white font-retro text-xs outline-none focus:border-white transition-colors focus:bg-[#111]" placeholder="ENTER NAME..." />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-retro text-muted text-[10px] md:text-xs uppercase tracking-widest">COMMS LINK (EMAIL)</label>
                <input type="email" className="bg-[#0a0a0c] border-2 border-border p-3 text-white font-retro text-xs outline-none focus:border-white transition-colors focus:bg-[#111]" placeholder="ENTER EMAIL..." />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-retro text-muted text-[10px] md:text-xs uppercase tracking-widest">MESSAGE LOG</label>
                <textarea rows={4} className="bg-[#0a0a0c] border-2 border-border p-3 text-white font-retro text-xs outline-none focus:border-white transition-colors focus:bg-[#111] resize-none leading-[1.8]" placeholder="TYPE MESSAGE..." />
              </div>
              {status === 'IDLE' && (
                <button type="submit" className="mt-2 bg-transparent border-2 border-white text-white font-retro py-3 px-4 uppercase hover:bg-white hover:text-black transition-colors w-full text-xs md:text-sm active:scale-95 shadow-[4px_4px_0px_#2a2a2a] hover:shadow-[4px_4px_0px_#f2f2f2]">
                  [ SEND DATA ]
                </button>
              )}

              {status === 'SENDING' && (
                <div className="mt-2 border-2 border-border text-muted font-retro py-3 px-4 text-center w-full text-xs md:text-sm shadow-[4px_4px_0px_#2a2a2a] animate-pulse">
                  TRANSMITTING...
                </div>
              )}

              {status === 'SUCCESS' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.5 }}
                  className="mt-2 border-2 border-green-400 bg-[#001a00] text-green-400 font-retro py-3 px-4 text-center w-full text-xs md:text-sm shadow-[0_0_15px_rgba(74,222,128,0.2)] drop-shadow-[4px_4px_0px_#2a2a2a]"
                >
                  TRANSMISSION SUCCESSFUL_
                </motion.div>
              )}
            </form>
          </div>

          {/* Right: Social Links via Icons */}
          <div className="lg:w-1/3 bg-bg border-4 border-border p-8 shadow-[8px_8px_0px_#2a2a2a] flex flex-col justify-start">
            <h3 className="font-retro text-white mb-6 uppercase tracking-widest text-sm md:text-base border-b-2 border-border pb-4">NETWORK</h3>
            <ul className="space-y-8 font-retro text-xs md:text-sm">
              <li className="group cursor-pointer">
                <a href="mailto:deshmukhlaukik52@gmail.com" className="flex items-center text-muted group-hover:text-white transition-all gap-4 mt-2">
                  <Mail size={24} className="group-hover:stroke-white transition-colors opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] shrink-0" /> 
                  <span className="tracking-widest">EMAIL</span>
                </a>
              </li>
              <li className="group cursor-pointer">
                <a href="https://www.linkedin.com/in/laukik-deshmukh-link2207" target="_blank" rel="noreferrer" className="flex items-center text-muted group-hover:text-white transition-all gap-4 mt-2">
                  <Briefcase size={24} className="group-hover:stroke-white transition-colors opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] shrink-0" />
                  <span className="tracking-widest">LINKEDIN</span>
                </a>
              </li>
              <li className="group cursor-pointer">
                <a href="https://github.com/Laukik2207" target="_blank" rel="noreferrer" className="flex items-center text-muted group-hover:text-white transition-all gap-4 mt-2">
                  <Terminal size={24} className="group-hover:stroke-white transition-colors opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] shrink-0" />
                  <span className="tracking-widest">GITHUB</span>
                </a>
              </li>
              <li className="group cursor-pointer pt-6 border-t border-dashed border-border w-full">
                <a href="https://drive.google.com/file/d/1y-60Ef6ciG_NByhK1t07L4BVd3-PW5I2/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center text-muted group-hover:text-white transition-all gap-4 mt-2">
                  <FileText size={24} className="group-hover:stroke-white transition-colors opacity-70 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] shrink-0" />
                  <span className="tracking-widest">RESUME</span>
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
