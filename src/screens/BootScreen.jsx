import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BootScreen({ onNext }) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Fake loading bar logic (1.5 seconds)
    const duration = 1500; 
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.floor((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setReady(true);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (ready) {
      // Auto-advance after 2.5 seconds
      const advanceTimer = setTimeout(() => {
        onNext();
      }, 2500);
      return () => clearTimeout(advanceTimer);
    }
  }, [ready, onNext]);

  return (
    <motion.div 
      className="flex flex-col w-full h-full p-8 md:p-16 relative items-start justify-start pt-24 font-retro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-sm md:text-base leading-loose max-w-3xl w-full text-white">
        <p className="mb-4">&gt; OS BIOS REV. 8.2</p>
        <p className="mb-4">&gt; MEMORY CHECK: 640K OK</p>
        <p className="mb-8">&gt; INITIALIZING CORE COMPONENTS...</p>

        <div className="w-full max-w-md h-6 md:h-8 border-2 border-white p-1 mb-6">
          <div 
            className="h-full bg-white transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mb-12 text-muted">[{progress}%] LOADED</p>

        {ready && (
          <motion.div 
            className="text-white text-xl md:text-2xl mt-8"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            &gt; SYSTEM READY _
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
