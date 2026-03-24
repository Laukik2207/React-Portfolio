import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import RPGCard from '../components/RPGCard';
import PixelButton from '../components/PixelButton';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function GuildScreen({ onNext, onPrev }) {
  return (
    <motion.div 
      className="flex flex-col w-full h-full p-6 md:p-12 relative overflow-y-auto pt-20 pb-64 md:pb-72"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="mb-12">
        <SectionTitle text="GUILD RECORDS" />
      </div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LEFT COLUMN: Education History */}
        <div className="flex flex-col gap-8 md:gap-12">
          
          {/* Active Enrollment */}
          <motion.div variants={item}>
            <RPGCard title="ACTIVE ENROLLMENT" className="shadow-[6px_6px_0px_#2a2a2a] p-6">
              <div className="space-y-5 font-retro">
                <div className="flex flex-col gap-2"><span className="text-muted text-[10px] md:text-xs">Institution:</span> <span className="text-white text-xs md:text-sm leading-[1.8]">Lovely Professional University, Punjab</span></div>
                <div className="flex flex-col gap-2"><span className="text-muted text-[10px] md:text-xs">Course:</span> <span className="text-white text-xs md:text-sm leading-[1.8]">B.Tech — Computer Science & Engineering</span></div>
                <div className="flex flex-col gap-2"><span className="text-muted text-[10px] md:text-xs">Duration:</span> <span className="text-white text-xs md:text-sm leading-[1.8]">Aug 2023 – Present</span></div>
                <div className="flex flex-col gap-2"><span className="text-muted text-[10px] md:text-xs">CGPA:</span> <span className="text-white text-xs md:text-sm leading-[1.8]">7.46</span></div>
              </div>
              <div className="mt-8 text-green-400 animate-pulse border-2 border-green-400 px-3 py-2 inline-block font-retro text-xs md:text-sm drop-shadow-[0_0_10px_rgba(74,222,128,0.3)]">◉ ENROLLED</div>
            </RPGCard>
          </motion.div>

          {/* Past Record */}
          <motion.div variants={item}>
            <RPGCard title="PAST RECORD" className="shadow-[4px_4px_0px_#2a2a2a] opacity-80 p-5">
              <div className="space-y-4 font-retro">
                <div className="flex flex-col gap-1.5"><span className="text-muted text-[10px]">Institution:</span> <span className="text-white text-[10px] md:text-xs leading-loose">Dr M.S. Gosavi Junior College of Science</span></div>
                <div className="flex flex-col gap-1.5"><span className="text-muted text-[10px]">Level:</span> <span className="text-white text-[10px] md:text-xs leading-loose">12th (HSC)</span></div>
                <div className="flex flex-col gap-1.5"><span className="text-muted text-[10px]">Percentage:</span> <span className="text-white text-[10px] md:text-xs leading-loose">73.17%</span></div>
                <div className="flex flex-col gap-1.5"><span className="text-muted text-[10px]">Location:</span> <span className="text-white text-[10px] md:text-xs leading-loose">Nashik, Maharashtra</span></div>
                <div className="flex flex-col gap-1.5"><span className="text-muted text-[10px]">Year:</span> <span className="text-white text-[10px] md:text-xs leading-loose">Jul 2020 – Apr 2021</span></div>
              </div>
            </RPGCard>
          </motion.div>

          {/* Origins */}
          <motion.div variants={item}>
            <RPGCard title="ORIGINS" className="shadow-[4px_4px_0px_#2a2a2a] opacity-60 p-5">
              <div className="space-y-4 font-retro">
                <div className="flex flex-col gap-1.5"><span className="text-muted text-[10px]">Institution:</span> <span className="text-white text-[10px] md:text-xs leading-loose">New Era English School</span></div>
                <div className="flex flex-col gap-1.5"><span className="text-muted text-[10px]">Level:</span> <span className="text-white text-[10px] md:text-xs leading-loose">10th (SSC)</span></div>
                <div className="flex flex-col gap-1.5"><span className="text-muted text-[10px]">Percentage:</span> <span className="text-white text-[10px] md:text-xs leading-loose">68%</span></div>
                <div className="flex flex-col gap-1.5"><span className="text-muted text-[10px]">Location:</span> <span className="text-white text-[10px] md:text-xs leading-loose">Nashik, Maharashtra</span></div>
                <div className="flex flex-col gap-1.5"><span className="text-muted text-[10px]">Year:</span> <span className="text-white text-[10px] md:text-xs leading-loose">Apr 2018 – Mar 2019</span></div>
              </div>
            </RPGCard>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Training & Simulations */}
        <div className="flex flex-col gap-8 md:gap-12">
          
          {/* Field Training */}
          <motion.div variants={item}>
            <RPGCard title="FIELD TRAINING — A GRADE" className="shadow-[6px_6px_0px_#2a2a2a] p-6 border-white rounded-none border-2">
              <div className="space-y-5 font-retro">
                <div className="flex flex-col gap-2"><span className="text-muted text-[10px] md:text-xs">Program:</span> <span className="text-white text-xs md:text-sm leading-[1.8]">Data Structures & Algorithms</span></div>
                <div className="flex flex-col gap-2"><span className="text-muted text-[10px] md:text-xs">Institution:</span> <span className="text-white text-xs md:text-sm leading-[1.8]">Lovely Professional University</span></div>
                <div className="flex flex-col gap-2"><span className="text-muted text-[10px] md:text-xs">Duration:</span> <span className="text-white text-xs md:text-sm leading-[1.8]">June 2025 – July 2025</span></div>
                
                <div className="mt-8 pt-6 border-t border-dashed border-border">
                  <span className="text-muted mb-6 block text-[10px]">HIGHLIGHTS:</span>
                  <ul className="list-none space-y-4 text-white ml-2 text-[10px] md:text-xs leading-[2]">
                    <li>- Implemented arrays, linked lists, stacks, queues, trees, hashing</li>
                    <li>- Built Task Management System in C++</li>
                    <li>- Achieved <span className="text-yellow-400">A Grade</span> certification</li>
                  </ul>
                </div>
              </div>
            </RPGCard>
          </motion.div>

          {/* Simulation Completed */}
          <motion.div variants={item}>
            <RPGCard title="SIMULATION COMPLETED" className="shadow-[4px_4px_0px_#2a2a2a] p-6">
              <div className="space-y-5 font-retro">
                <div className="flex flex-col gap-2"><span className="text-muted text-[10px] md:text-xs">Program:</span> <span className="text-white text-xs md:text-sm leading-[1.8]">JPMorgan Chase Software Eng.</span></div>
                <div className="flex flex-col gap-2"><span className="text-muted text-[10px] md:text-xs">Via:</span> <span className="text-white text-xs md:text-sm leading-[1.8]">Forage</span></div>
              </div>
              <div className="mt-8 text-yellow-500 font-bold border-2 border-yellow-500 px-3 py-2 inline-block text-xs md:text-sm shadow-[inset_0_0_10px_rgba(234,179,8,0.2)] drop-shadow-[0_0_4px_rgba(234,179,8,0.5)] bg-[#1a1400]">XP Gained: +500</div>
            </RPGCard>
          </motion.div>

        </div>
      </motion.div>

      {/* Navigation Layer */}
      <div className="fixed bottom-32 right-6 md:bottom-36 md:right-12 flex flex-col sm:flex-row gap-4 z-50">
        <PixelButton label="← BACK" onClick={onPrev} />
        <PixelButton label="CONTACT →" onClick={onNext} blinking={true} />
      </div>
    </motion.div>
  );
}
