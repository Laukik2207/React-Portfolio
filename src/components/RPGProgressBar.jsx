import React from 'react';
import { motion } from 'framer-motion';

export default function RPGProgressBar({ label, value, delay = 0 }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2 text-xs md:text-sm font-retro text-muted">
        <span>{label}</span>
        <span className="text-white">{value}%</span>
      </div>
      <div className="w-full h-5 border-2 border-border bg-bg relative p-0.5">
        <motion.div
          className="h-full bg-text"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, var(--bg) 4px, var(--bg) 6px)' }}
        />
      </div>
    </div>
  );
}
