import React from 'react';
import { motion } from 'framer-motion';

export default function PixelButton({ label, onClick, blinking = false }) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-6 py-3 border-2 border-white bg-transparent text-white font-retro uppercase transition-all hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#f2f2f2] focus:outline-none`}
      whileTap={{ scale: 0.95 }}
      animate={blinking ? { opacity: [1, 0.4, 1] } : {}}
      transition={blinking ? { duration: 1, repeat: Infinity } : { duration: 0.2 }}
    >
      {label}
    </motion.button>
  );
}
