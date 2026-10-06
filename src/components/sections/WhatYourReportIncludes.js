'use client';

import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SectionBackground } from '@/components/ui/SectionBackground';

export function WhatYourReportIncludes({ onCalculateClick }) {
  const handleCardClick = () => {
    if (onCalculateClick) {
      onCalculateClick();
    } else {
      const el = document.getElementById('calculator');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const cards = [
    {
      num: '01',
      title: 'Marriage Timing & Favorable Periods',
      description: 'Know the most likely age and time periods for marriage based on your dasha and planetary transits.',
      icon: (
        <svg className="w-6 h-6 text-[#A22071]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="3" fill="#FCE8F3" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <circle cx="8" cy="15" r="1" fill="#A22071" />
          <circle cx="12" cy="15" r="1" fill="#A22071" />
          <circle cx="16" cy="15" r="1" fill="#A22071" />
        </svg>
      ),
      numBg: 'bg-[#FCE8F3] text-[#A22071] border-rose-200/80',
      iconBg: 'bg-[#FCE8F3] border-rose-200/80',
      btnBg: 'bg-[#FCE8F3] text-[#A22071] hover:bg-rose-200',
      art: (
        <div className="w-28 sm:w-36 h-24 sm:h-28 relative flex items-center justify-center pointer-events-none select-none">
          <svg viewBox="0 0 140 100" fill="none" className="w-full h-full">
            <circle cx="70" cy="50" r="45" fill="#FCE8F3" fillOpacity="0.8" />
            <rect x="25" y="20" width="55" height="50" rx="8" fill="#FFFFFF" stroke="#FBCFE8" strokeWidth="2" />
            <rect x="25" y="20" width="55" height="14" rx="8" fill="#FCE8F3" />
            <rect x="35" y="14" width="4" height="10" rx="2" fill="#DB2777" />
            <rect x="66" y="14" width="4" height="10" rx="2" fill="#DB2777" />
            <circle cx="38" cy="44" r="2.5" fill="#DB2777" fillOpacity="0.6" />
            <circle cx="52" cy="44" r="2.5" fill="#DB2777" fillOpacity="0.6" />
            <circle cx="66" cy="44" r="2.5" fill="#DB2777" fillOpacity="0.6" />
            <circle cx="38" cy="56" r="2.5" fill="#DB2777" fillOpacity="0.6" />
            <circle cx="52" cy="56" r="2.5" fill="#DB2777" fillOpacity="0.6" />
            <circle cx="66" cy="56" r="2.5" fill="#A22071" />
            <circle cx="95" cy="56" r="22" fill="#FFFFFF" stroke="#F472B6" strokeWidth="2.5" />
            <circle cx="95" cy="56" r="18" fill="#FDF2F8" />
            <path d="M95 42 v14 l8 6" stroke="#A22071" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="95" cy="56" r="3" fill="#A22071" />
          </svg>
        </div>
      ),
    },
    {
      num: '02',
      title: "Your Partner's Personality & Background",
      description: "Understand your future partner's nature, personality traits, family background and where they may come from.",
      icon: (
        <svg className="w-6 h-6 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="#FEF3C7" />
          <circle cx="9" cy="7" r="4" fill="#FEF3C7" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      numBg: 'bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]',
      iconBg: 'bg-[#FFFBEB] border-[#FDE68A]',
      btnBg: 'bg-[#FEF3C7] text-[#B45309] hover:bg-[#FDE68A]',
      art: (
        <div className="w-28 sm:w-36 h-24 sm:h-28 relative flex items-center justify-center pointer-events-none select-none">
          <svg viewBox="0 0 140 100" fill="none" className="w-full h-full">
            <circle cx="70" cy="50" r="45" fill="#FEF3C7" fillOpacity="0.7" />
            <path d="M42 32 C42 22 52 22 52 32 C52 38 46 44 42 46 Z" fill="#D97706" fillOpacity="0.45" />
            <path d="M26 80 C26 55 54 55 54 80 Z" fill="#D97706" fillOpacity="0.35" />
            <path d="M74 35 C74 25 64 25 64 35 C64 40 70 45 74 48 Z" fill="#D97706" fillOpacity="0.45" />
            <path d="M58 80 C58 58 88 58 88 80 Z" fill="#D97706" fillOpacity="0.35" />
            <path d="M100 28 C98 23 92 23 92 29 C92 34 100 39 100 39 C100 39 108 34 108 29 C108 23 102 23 100 28 Z" fill="#F59E0B" fillOpacity="0.8" />
            <path d="M112 44 C110.5 40 106 40 106 44.5 C106 48.5 112 52 112 52 C112 52 118 48.5 118 44.5 C118 40 113.5 40 112 44 Z" fill="#F59E0B" fillOpacity="0.5" />
          </svg>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Manglik Dosha Analysis',
      description: 'Find out if Manglik Dosha is present in your chart, its effects and possible cancellations.',
      icon: (
        <svg className="w-6 h-6 text-[#7C3AED]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" fill="#EDE8FC" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" />
        </svg>
      ),
      numBg: 'bg-[#EDE8FC] text-[#6D28D9] border-[#DDD6FE]',
      iconBg: 'bg-[#F5F3FF] border-[#DDD6FE]',
      btnBg: 'bg-[#EDE8FC] text-[#6D28D9] hover:bg-[#DDD6FE]',
      art: (
        <div className="w-28 sm:w-36 h-24 sm:h-28 relative flex items-center justify-center pointer-events-none select-none">
          <svg viewBox="0 0 140 100" fill="none" className="w-full h-full">
            <circle cx="70" cy="50" r="45" fill="#F5F3FF" fillOpacity="0.7" />
            <circle cx="70" cy="50" r="25" fill="url(#marsGradient)" />
            <circle cx="62" cy="42" r="4" fill="#B91C1C" fillOpacity="0.35" />
            <circle cx="78" cy="58" r="6" fill="#991B1B" fillOpacity="0.3" />
            <circle cx="72" cy="40" r="2.5" fill="#FFFFFF" fillOpacity="0.3" />
            <ellipse cx="70" cy="50" rx="46" ry="14" stroke="url(#ringGrad)" strokeWidth="2.5" transform="rotate(-22 70 50)" />
            <ellipse cx="70" cy="50" rx="46" ry="14" stroke="#FDE047" strokeWidth="1" strokeDasharray="15 35" transform="rotate(-22 70 50)" />
            <defs>
              <radialGradient id="marsGradient" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#F87171" />
                <stop offset="45%" stopColor="#DC2626" />
                <stop offset="85%" stopColor="#991B1B" />
                <stop offset="100%" stopColor="#7F1D1D" />
              </radialGradient>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="50%" stopColor="#F43F5E" />
                <stop offset="100%" stopColor="#E879F9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      num: '04',
      title: 'Remedies & Auspicious Guidance',
      description: 'Get simple and effective remedies, mantras and auspicious time windows to strengthen your marriage prospects.',
      icon: (
        <svg className="w-6 h-6 text-[#059669]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 C10 8 7 13 12 18 C17 13 14 8 12 3 Z" fill="#D1FAE5" />
          <path d="M12 8 C7 11 4 16 9 19" />
          <path d="M12 8 C17 11 20 16 15 19" />
        </svg>
      ),
      numBg: 'bg-[#D1FAE5] text-[#059669] border-[#A7F3D0]',
      iconBg: 'bg-[#ECFDF5] border-[#A7F3D0]',
      btnBg: 'bg-[#D1FAE5] text-[#059669] hover:bg-[#A7F3D0]',
      art: (
        <div className="w-28 sm:w-36 h-24 sm:h-28 relative flex items-center justify-center pointer-events-none select-none">
          <svg viewBox="0 0 140 100" fill="none" className="w-full h-full">
            <circle cx="70" cy="46" r="42" fill="#ECFDF5" fillOpacity="0.7" />
            <g stroke="#FBBF24" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.75">
              <line x1="70" y1="6" x2="70" y2="16" />
              <line x1="38" y1="18" x2="46" y2="25" />
              <line x1="102" y1="18" x2="94" y2="25" />
              <line x1="26" y1="46" x2="36" y2="46" />
              <line x1="114" y1="46" x2="104" y2="46" />
            </g>
            <circle cx="70" cy="46" r="22" fill="#FEF3C7" fillOpacity="0.8" />
            <path d="M66 26 L66 54 L60 62 L54 54 L60 36 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M74 26 L74 54 L80 62 L86 54 L80 36 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M48 70 C60 60 80 60 92 70 C80 77 60 77 48 70 Z" fill="#F472B6" fillOpacity="0.85" />
            <path d="M58 68 C66 62 74 62 82 68 C76 72 64 72 58 68 Z" fill="#FB7185" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section id="report-includes" className="relative w-full bg-[#FAF5F7] text-[#2B162C] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-rose-100/70">
      {/* Decorative Background Artwork */}
      <SectionBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C28AA9] to-[#8B1E5A]" />
            <div className="text-[#8B1E5A] flex items-center justify-center">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#8B1E5A]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 8 C17 16 13 24 20 32 C27 24 23 16 20 8 Z" fill="#FCE8F3" fillOpacity="0.8" />
                <path d="M20 14 C13 19 8 26 15 32 C18 27 19 21 20 14 Z" fill="#FCE8F3" fillOpacity="0.6" />
                <path d="M20 14 C27 19 32 26 25 32 C22 27 21 21 20 14 Z" fill="#FCE8F3" fillOpacity="0.6" />
                <circle cx="20" cy="34" r="1.5" fill="#8B1E5A" />
              </svg>
            </div>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C28AA9] to-[#8B1E5A]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B162C] tracking-tight">
            What Your <span className="text-[#6D144E]">Report Includes</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#55475B] max-w-xl mx-auto leading-relaxed">
            A complete Vedic reading answering the key questions you have about your marriage and relationship.
          </p>
        </div>

        {/* 1. Desktop & Tablet 2x2 Grid View */}
        <div className="hidden md:grid md:grid-cols-2 gap-5 lg:gap-6">
          {cards.map((c) => (
            <div
              key={c.num}
              onClick={handleCardClick}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-rose-950/5 border border-rose-100/90 hover:border-rose-300 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative flex items-center justify-between gap-4 cursor-pointer group"
            >
              <div className="flex-1 space-y-3.5">
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center border shrink-0 ${c.numBg} shadow-2xs`}>
                    {c.num}
                  </span>

                  <div className={`w-11 h-11 rounded-full ${c.iconBg} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    {c.icon}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-bold text-[#2B162C] text-base lg:text-lg leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55475B] leading-relaxed max-w-sm">
                    {c.description}
                  </p>
                </div>

                <div className="pt-1">
                  <span className={`w-8 h-8 rounded-full ${c.btnBg} flex items-center justify-center transition-all group-hover:translate-x-1.5 shadow-2xs`}>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="shrink-0 flex items-center justify-center pl-2">
                {c.art}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Mobile View */}
        <div className="md:hidden space-y-3">
          {cards.map((c) => (
            <div
              key={c.num}
              onClick={handleCardClick}
              className="bg-white rounded-2xl p-4 shadow-sm border border-rose-100/90 flex items-center gap-3.5 cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <span className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center border ${c.numBg}`}>
                  {c.num}
                </span>
                <div className={`w-10 h-10 rounded-full ${c.iconBg} border flex items-center justify-center`}>
                  {c.icon}
                </div>
              </div>

              <div className="flex-1 min-w-0 pr-1">
                <h3 className="font-bold text-[#2B162C] text-xs sm:text-sm leading-tight mb-1">
                  {c.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#55475B] line-clamp-2 leading-relaxed">
                  {c.description}
                </p>
              </div>

              <ChevronRight className="w-5 h-5 text-[#6D144E] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
