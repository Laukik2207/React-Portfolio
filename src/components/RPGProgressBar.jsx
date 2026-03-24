import React from 'react';
import { motion } from 'framer-motion';

export default function RPGProgressBar({ label, value, delay = 0 }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2 text-xs md:text-sm font-retro text-muted">
        <span>{label}</span>
        <span className="text-white">{value}%</span>
      </div>
      <div className="w-full h-5 md:h-6 border-2 border-white p-1">
        <motion.div
          className="h-full bg-white relative"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
