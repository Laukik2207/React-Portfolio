import React from 'react';

export default function SectionTitle({ text }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-retro text-text uppercase relative inline-block tracking-wider">
        {text}
        <div className="absolute -bottom-3 left-0 w-full h-1 bg-border" />
      </h2>
    </div>
  );
}
