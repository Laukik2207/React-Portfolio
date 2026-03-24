import React from 'react';

export default function ScanlineOverlay() {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[999]"
      style={{
        background: 'repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
      }}
    />
  );
}
