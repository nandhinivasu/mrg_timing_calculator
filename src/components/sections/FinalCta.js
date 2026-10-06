'use client';

import React from 'react';
import Image from 'next/image';
import { Zap, ArrowRight, ShieldCheck, FileText, Lock, CheckCircle2, ChevronRight } from 'lucide-react';
import { SectionBackground } from '@/components/ui/SectionBackground';

export function FinalCta({ onCalculateClick }) {
  const handleAction = () => {
    if (onCalculateClick) {
      onCalculateClick();
    } else {
      const el = document.getElementById('calculator');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const highlights = [
    'Complete 20+ page in-depth Vedic horoscope reading delivered instantly',
    'Precise marriage timing windows & Vimshottari Dasha activation periods',
    'Spouse personality, background, Manglik Dosha analysis & practical remedies',
  ];

  const features = [
    {
      title: 'Detailed Marriage Timing',
      desc: 'Most likely periods based on your chart and dashas.',
      icon: (
        <svg className="w-5 h-5 text-[#A22071]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="3" fill="#FCE8F3" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <circle cx="8" cy="15" r="1" fill="#A22071" />
          <circle cx="12" cy="15" r="1" fill="#A22071" />
          <circle cx="16" cy="15" r="1" fill="#A22071" />
        </svg>
      ),
      iconBg: 'bg-[#FCE8F3] border-rose-200/80',
    },
    {
      title: 'Partner Insights',
      desc: 'Personality, background and where you may meet your partner.',
      icon: (
        <svg className="w-5 h-5 text-[#B45309]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="7" r="4" fill="#FEF3C7" />
          <path d="M17 11a3 3 0 1 0-3-3" />
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" fill="#FEF3C7" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
        </svg>
      ),
      iconBg: 'bg-[#FFFBEB] border-amber-200/80',
    },
    {
      title: 'Dosha Analysis',
      desc: 'Mangal Dosha and other relevant factors with complete explanation.',
      icon: (
        <svg className="w-5 h-5 text-[#5B21B6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#EDE8FC" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      ),
      iconBg: 'bg-[#F5F3FF] border-purple-200/80',
    },
    {
      title: 'Remedies & Guidance',
      desc: 'Simple and effective remedies for a happy married life.',
      icon: (
        <svg className="w-5 h-5 text-[#059669]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3 C10 8 7 13 12 18 C17 13 14 8 12 3 Z" fill="#D1FAE5" />
          <path d="M12 8 C7 11 4 16 9 19" />
          <path d="M12 8 C17 11 20 16 15 19" />
        </svg>
      ),
      iconBg: 'bg-[#ECFDF5] border-emerald-200/80',
    },
  ];

  return (
    <section id="full-report-cta" className="relative w-full bg-[#FAF5F7] text-[#2B162C] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-rose-100/70">
      {/* Decorative Celestial Background Art */}
      <SectionBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
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

        {/* Top Row: Heading + Copy + Celestial Couple Artwork */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            <div>
              <span className="font-bold text-xs tracking-widest text-[#7C2D63] uppercase">
                GO BEYOND THE BASICS
              </span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B162C] tracking-tight leading-tight">
              Want the Full <br />
              <span className="text-[#6D144E]">Marriage Analysis?</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#55475B] leading-relaxed max-w-xl">
              Your free result gives a quick glimpse. The full Marriage Report provides complete insights on timing, partner details, compatibility, Dosha analysis, remedies and more – 20+ pages, delivered as a PDF.
            </p>

            <div className="space-y-2.5 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#412844] font-medium">
                  <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#8B1E5A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-rose-950/10 border-2 border-rose-200/70">
              <Image
                src="/images/full-marriage-analysis-couple.jpg"
                alt="Couple looking at celestial Vedic astrology zodiac wheel"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5F7]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 4 Pillars Horizontal Strip */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-6 py-8 border-t border-b border-rose-200/60 mb-10 sm:mb-12">
          {features.map((feat, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center px-3 space-y-2">
              <div className={`w-12 h-12 rounded-full ${feat.iconBg} border flex items-center justify-center shadow-2xs`}>
                {feat.icon}
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-[#2B162C] text-sm sm:text-base leading-snug">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#55475B] leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              {idx < features.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-rose-200/70" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-3 pt-2 pb-6 border-t border-rose-200/60 mb-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              onClick={handleAction}
              className="bg-white rounded-2xl p-4 shadow-sm border border-rose-100/90 flex items-center gap-3.5 cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div className={`w-11 h-11 rounded-full ${feat.iconBg} border flex items-center justify-center shrink-0`}>
                {feat.icon}
              </div>

              <div className="flex-1 min-w-0 pr-1">
                <h3 className="font-bold text-[#2B162C] text-xs sm:text-sm leading-tight mb-1">
                  {feat.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#55475B] line-clamp-2 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <ChevronRight className="w-5 h-5 text-[#6D144E] shrink-0" />
            </div>
          ))}
        </div>

        {/* Price & CTA Box */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 shadow-xl shadow-rose-950/5 border border-rose-100/80 max-w-xl mx-auto text-center space-y-4 sm:space-y-5">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCE8F3] text-[#7C2D63] border border-rose-200/70 font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-2xs">
              <Zap className="w-3 h-3 text-[#A22071] fill-[#A22071]" />
              LIMITED PERIOD OFFER
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <span className="line-through text-slate-400 font-semibold text-lg sm:text-2xl">
              ₹899
            </span>
            <span className="font-extrabold text-3xl sm:text-4xl md:text-[44px] text-[#2B162C] tracking-tight">
              ₹449
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#FCE8F3] text-[#7C2D63] font-bold text-xs sm:text-sm border border-rose-200/70">
              50% OFF
            </span>
          </div>

          <div className="pt-1 flex items-center justify-center gap-4 text-xs sm:text-sm text-[#55475B] font-medium border-t border-rose-100 pt-3.5">
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#A22071]" /> 20+ pages detailed report
            </span>
            <span className="text-rose-200">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% secure &amp; confidential
            </span>
          </div>

          <div>
            <button
              onClick={handleAction}
              className="w-full py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg font-bold bg-[#6D144E] hover:bg-[#5A0F40] text-white flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#6D144E]/30 hover:shadow-[#6D144E]/50 transition-all hover:scale-[1.01] active:scale-[0.99] group"
              id="get-full-marriage-report-btn"
            >
              <span>Get My Full Marriage Report</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-pink-200 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 text-[11px] sm:text-xs text-[#55475B]">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#7C2D63]" /> Secure checkout
            </span>
            <span className="text-rose-200">•</span>
            <span>PDF delivered instantly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
