'use client';

import React from 'react';
import { FileText, Orbit, ShieldCheck, Zap, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { SectionBackground } from '@/components/ui/SectionBackground';

export function KnowWhenMarriage({ onGetReportClick }) {
  const handleAction = () => {
    if (onGetReportClick) {
      onGetReportClick();
    } else {
      const el = document.getElementById('calculator');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full bg-[#FAF5F7] text-[#2B162C] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-rose-100/70">
      {/* Decorative Celestial Background Artwork */}
      <SectionBackground />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Top Centered Lotus Emblem with Horizontal Accent Bars */}
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

        {/* Main Heading */}
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#2B162C] tracking-tight mb-4 leading-tight">
          Know When <br className="sm:hidden" />
          Marriage Is <span className="text-[#6D144E]">Most Likely</span>
        </h2>

        {/* Subtitle Description */}
        <p className="text-center text-[#55475B] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-14">
          Get a personalized marriage timing reading based on your birth chart, planetary periods and key Vedic astrology indicators.
        </p>

        {/* 3 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 max-w-4xl mx-auto mb-10 sm:mb-14">
          {/* Feature 1: Personalized Chart Analysis */}
          <div className="flex md:flex-col items-center md:text-center gap-4 md:gap-3 px-2 sm:px-4 md:px-6 relative">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FCE8F3] border border-rose-200/80 text-[#A22071] flex items-center justify-center shrink-0 shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[#2B162C] text-base sm:text-lg mb-1">
                Personalized Chart Analysis
              </h3>
              <p className="text-xs sm:text-sm text-[#55475B] leading-relaxed">
                Your reading is generated from your birth details and key marriage indicators.
              </p>
            </div>
            {/* Desktop Divider */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-rose-200/60" />
          </div>

          {/* Feature 2: Vedic Astrology Approach */}
          <div className="flex md:flex-col items-center md:text-center gap-4 md:gap-3 px-2 sm:px-4 md:px-6 relative">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EDE8FC] border border-purple-200/80 text-[#5B21B6] flex items-center justify-center shrink-0 shadow-sm">
              <Orbit className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[#2B162C] text-base sm:text-lg mb-1">
                Vedic Astrology Approach
              </h3>
              <p className="text-xs sm:text-sm text-[#55475B] leading-relaxed">
                We assess the 7th house, Navamsa (D9), Venus and dasha periods.
              </p>
            </div>
            {/* Desktop Divider */}
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-rose-200/60" />
          </div>

          {/* Feature 3: Private & Secure */}
          <div className="flex md:flex-col items-center md:text-center gap-4 md:gap-3 px-2 sm:px-4 md:px-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FEF3C7] border border-amber-200/80 text-[#B45309] flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[#2B162C] text-base sm:text-lg mb-1">
                Private &amp; Secure
              </h3>
              <p className="text-xs sm:text-sm text-[#55475B] leading-relaxed">
                Your birth details are used only to prepare your reading.
              </p>
            </div>
          </div>
        </div>

        {/* Elevated Price & CTA Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 shadow-xl shadow-rose-950/5 border border-rose-100/80 max-w-xl mx-auto text-center space-y-4 sm:space-y-5">
          {/* Special Launch Price Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCE8F3] text-[#7C2D63] border border-rose-200/70 font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#A22071]" />
              SPECIAL LAUNCH PRICE
            </span>
          </div>

          {/* Price & Offer Row */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <span className="line-through text-slate-400 font-semibold text-lg sm:text-2xl">
              ₹899
            </span>
            <span className="font-extrabold text-3xl sm:text-4xl md:text-[44px] text-[#2B162C] tracking-tight">
              ₹449
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#FCE8F3] text-[#7C2D63] font-bold text-xs sm:text-sm border border-rose-200/70">
              Limited-time offer
            </span>
          </div>

          {/* Micro-Features Row with Divider */}
          <div className="pt-1 flex items-center justify-center gap-4 text-xs sm:text-sm text-[#55475B] font-medium border-t border-rose-100 pt-3.5">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#B45309]" /> Instant calculation
            </span>
            <span className="text-rose-200">•</span>
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#A22071]" /> Detailed PDF report
            </span>
          </div>

          {/* Primary Action Button */}
          <div>
            <button
              onClick={handleAction}
              className="w-full py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl text-base sm:text-lg font-bold bg-[#6D144E] hover:bg-[#5A0F40] text-white flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#6D144E]/30 hover:shadow-[#6D144E]/50 transition-all hover:scale-[1.01] active:scale-[0.99] group"
              id="get-marriage-report-btn"
            >
              <span>Get My Marriage Timing Report</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-pink-200 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Security & Guarantee Micro-Copy */}
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
