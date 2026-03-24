import React from 'react';
import { motion } from 'framer-motion';

export default function RPGCard({ title, children, className = '' }) {
  return (
    <motion.div 
      className={`border-2 border-border p-5 bg-bg relative ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {title && (
        <div className="border-b-2 border-border pb-3 mb-4">
          <h3 className="text-sm md:text-base font-retro text-text uppercase tracking-widest">{title}</h3>
        </div>
      )}
      <div className="font-retro text-xs md:text-sm leading-relaxed text-muted space-y-2">
        {children}
      </div>
    </motion.div>
  );
}
