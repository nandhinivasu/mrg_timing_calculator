'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Compass, BookOpen, HelpCircle, HeartHandshake } from 'lucide-react';

export function Header({ onCalculateClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#090C16]/90 backdrop-blur-md border-b border-amber-500/20 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-purple-600/20 to-amber-400/10 border border-amber-500/40 group-hover:border-amber-400 transition-colors shadow-inner">
            <span className="text-xl select-none">✨</span>
            <div className="absolute inset-0 rounded-xl bg-amber-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wide gold-gradient-text">
                Jyotish Vivaha
              </span>
              <span className="px-1.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30 rounded">
                Vedic AI
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium tracking-tight">
              Marriage Timing & Kundali Analyzer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#calculator"
            className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Calculator</span>
          </a>
          <a
            href="#how-it-works"
            className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>How It Works</span>
          </a>
          <a
            href="#what-you-discover"
            className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Features</span>
          </a>
          <a
            href="#remedies-info"
            className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
          >
            <HeartHandshake className="w-4 h-4 text-rose-400" />
            <span>Vedic Remedies</span>
          </a>
          <a
            href="#faq"
            className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" />
            <span>FAQ</span>
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (onCalculateClick) {
                onCalculateClick();
              } else {
                const el = document.getElementById('calculator');
                el?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold btn-gold-shimmer flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Calculate Timing</span>
          </button>
        </div>
      </div>
    </header>
  );
}
