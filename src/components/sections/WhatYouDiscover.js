'use client';

import React from 'react';
import { Calendar, Users, ChevronRight } from 'lucide-react';
import { SectionBackground } from '@/components/ui/SectionBackground';

export function WhatYouDiscover() {
  const sections = [
    {
      num: '01',
      title: 'Marriage Timing & Favorable Periods',
      description: 'Know the most likely age and time periods for marriage based on your dasha and transits.',
      icon: <Calendar className="w-6 h-6 text-[#A22071]" />,
      numBg: 'bg-[#FCE8F3] text-[#A22071] border-rose-200/70',
      iconBg: 'bg-[#FCE8F3] border-rose-200/60',
    },
    {
      num: '02',
      title: "Your Partner's Personality & Background",
      description: "Understand your future partner's personality, nature, family background and where they may come from.",
      icon: <Users className="w-6 h-6 text-[#B45309]" />,
      numBg: 'bg-[#FEF3C7] text-[#B45309] border-amber-200/70',
      iconBg: 'bg-[#FEF3C7] border-amber-200/60',
    },
    {
      num: '03',
      title: 'Manglik Dosha Analysis',
      description: 'A detailed analysis of Manglik Dosha, its effects, possible cancellations and what it means for your marriage.',
      icon: (
        <svg className="w-6 h-6 text-[#0284C7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8.5" cy="13.5" r="4.5" />
          <circle cx="15.5" cy="13.5" r="4.5" />
          <path d="M12 6.5 L12 9" />
          <path d="M10.5 7.5 L13.5 7.5" />
          <circle cx="12" cy="5" r="1" fill="#0284C7" />
        </svg>
      ),
      numBg: 'bg-[#E0F2FE] text-[#0284C7] border-sky-200/70',
      iconBg: 'bg-[#E0F2FE] border-sky-200/60',
    },
    {
      num: '04',
      title: 'Navamsa (D9) Insights',
      description: 'A deep analysis of your Navamsa (D9) chart that reveals the strength and quality of your married life.',
      icon: (
        <svg className="w-6 h-6 text-[#5B21B6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <circle cx="12" cy="12" r="1.5" fill="#5B21B6" />
        </svg>
      ),
      numBg: 'bg-[#EDE8FC] text-[#5B21B6] border-purple-200/70',
      iconBg: 'bg-[#EDE8FC] border-purple-200/60',
    },
    {
      num: '05',
      title: 'Compatibility & Relationship Guidance',
      description: 'Check compatibility, emotional alignment and key factors for a happy and lasting relationship.',
      icon: (
        <svg className="w-6 h-6 text-[#059669]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <circle cx="12" cy="10" r="1.5" fill="#059669" />
        </svg>
      ),
      numBg: 'bg-[#D1FAE5] text-[#059669] border-emerald-200/70',
      iconBg: 'bg-[#D1FAE5] border-emerald-200/60',
    },
    {
      num: '06',
      title: 'Remedies & Auspicious Guidance',
      description: 'Personalised remedies, mantras and auspicious time windows to enhance harmony and strengthen your marriage prospects.',
      icon: (
        <svg className="w-6 h-6 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c-1.5 2-3 4.5-3 7a3 3 0 0 0 6 0c0-2.5-1.5-5-3-7z" fill="#FEF3C7" />
          <path d="M5 19c2 2 12 2 14 0" />
          <path d="M7 16h10" />
        </svg>
      ),
      numBg: 'bg-[#FFEDD5] text-[#EA580C] border-orange-200/70',
      iconBg: 'bg-[#FFEDD5] border-orange-200/60',
    },
  ];

  return (
    <section id="what-you-discover" className="relative w-full bg-[#FAF5F7] text-[#2B162C] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-rose-100/70">
      {/* Decorative Astrological Background Artwork */}
      <SectionBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B162C] tracking-tight">
            What&apos;s Inside Your <br className="sm:hidden" />
            <span className="text-[#6D144E]">Marriage Report</span>
          </h2>

          <div className="flex items-center justify-center gap-3 py-0.5">
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

          <p className="text-xs sm:text-sm md:text-base text-[#55475B] max-w-xl mx-auto leading-relaxed">
            A complete and personalised analysis of your marriage journey, based on your birth chart and key Vedic astrology factors.
          </p>
        </div>

        {/* 1. Desktop & Tablet View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {sections.map((sec) => (
            <div
              key={sec.num}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-lg shadow-rose-950/5 border border-rose-100/80 hover:border-rose-200 hover:shadow-xl transition-all relative flex flex-col justify-between text-center group"
            >
              <div className="absolute top-5 left-5">
                <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center border ${sec.numBg} shadow-2xs`}>
                  {sec.num}
                </span>
              </div>

              <div className="pt-3 pb-4 flex justify-center">
                <div className={`w-14 h-14 rounded-full ${sec.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                  {sec.icon}
                </div>
              </div>

              <div className="space-y-2 pb-2">
                <h3 className="font-bold text-[#2B162C] text-base lg:text-lg leading-snug">
                  {sec.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#55475B] leading-relaxed">
                  {sec.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Mobile View */}
        <div className="md:hidden space-y-3">
          {sections.map((sec) => (
            <div
              key={sec.num}
              className="bg-white rounded-2xl p-4 shadow-sm border border-rose-100/80 flex items-center gap-3.5"
            >
              <span className={`w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center border shrink-0 ${sec.numBg}`}>
                {sec.num}
              </span>

              <div className={`w-11 h-11 rounded-full ${sec.iconBg} border flex items-center justify-center shrink-0`}>
                {sec.icon}
              </div>

              <div className="flex-1 min-w-0 pr-1">
                <h3 className="font-bold text-[#2B162C] text-xs sm:text-sm leading-tight mb-1">
                  {sec.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#55475B] line-clamp-2 leading-relaxed">
                  {sec.description}
                </p>
              </div>

              <ChevronRight className="w-4 h-4 text-rose-300 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
