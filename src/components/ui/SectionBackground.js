'use client';

import React from 'react';

export function SectionBackground({ className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      {/* Left Side: Subtle Astrological Zodiac Wheel Watermark */}
      <div className="absolute -left-16 sm:-left-8 top-8 sm:top-12 w-64 sm:w-80 h-64 sm:h-80 opacity-[0.16] text-[#B97A9F]">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
          <circle cx="100" cy="100" r="95" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="82" strokeWidth="1.2" />
          <circle cx="100" cy="100" r="62" strokeWidth="1" />
          <circle cx="100" cy="100" r="42" strokeWidth="1.2" />
          <circle cx="100" cy="100" r="18" strokeWidth="1" />
          {/* 12 Ray Divisions */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="100"
              y1="142"
              x2="100"
              y2="182"
              strokeWidth="1"
              transform={`rotate(${deg} 100 100)`}
            />
          ))}
          {/* Center Sun / Bindu */}
          <circle cx="100" cy="100" r="8" fill="currentColor" fillOpacity="0.3" />
        </svg>
      </div>

      {/* Right Side: Celestial Crescent Moon & Sparkling Stars */}
      <div className="absolute right-4 sm:right-12 top-6 sm:top-10 w-44 sm:w-56 h-44 sm:h-56 opacity-[0.20] text-[#B97A9F]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
          {/* Crescent Moon */}
          <path
            d="M65 15 C45 25 35 50 48 78 C30 68 28 40 45 20 C50 15 58 12 65 15 Z"
            fill="currentColor"
            fillOpacity="0.12"
            strokeWidth="1.2"
          />
          {/* Sparkles & Star Dots */}
          <path d="M78 28 L80 20 L82 28 L90 30 L82 32 L80 40 L78 32 L70 30 Z" fill="currentColor" fillOpacity="0.4" />
          <path d="M25 65 L26 60 L27 65 L32 66 L27 67 L26 72 L25 67 L20 66 Z" fill="currentColor" fillOpacity="0.4" />
          <circle cx="68" cy="62" r="1.5" fill="currentColor" />
          <circle cx="82" cy="74" r="1" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
