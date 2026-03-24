import React, { useState, useEffect } from 'react';

export default function TypewriterText({ text, speed = 60, cursor = true }) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => text.substring(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(intervalId);
    }, speed);
    
    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <span className="font-retro">
      {displayedText}
      {cursor && <span className="animate-pulse">_</span>}
    </span>
  );
}
