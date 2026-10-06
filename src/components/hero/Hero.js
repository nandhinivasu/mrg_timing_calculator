'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Calendar, ArrowRight, Home as HomeIcon } from 'lucide-react';

export function Hero({ onCalculateClick }) {
  return (
    <section className="relative w-full bg-[#FAF5F7] border-b border-rose-200/50 shadow-sm overflow-hidden">
      {/* Full-Width Background Wrapper */}
      <div className="relative w-full min-h-[460px] sm:min-h-[500px] md:min-h-[540px] lg:min-h-[600px] xl:min-h-[640px] flex flex-col justify-center py-8 sm:py-10 md:py-12 lg:py-16">

        {/* Responsive Background Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">

          {/* 1. Mobile Dedicated Image (< 640px) */}
          <div className="block sm:hidden absolute inset-0">
            <Image
              src="/images/banner-mobile.jpg"
              alt="Discover Your Marriage Timing - Vedic Astrology"
              fill
              priority
              className="object-cover object-top opacity-95"
              sizes="(max-width: 639px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5F7]/95 via-[#FAF5F7]/88 to-[#FAF5F7]/70" />
          </div>

          {/* 2. Tablet Dedicated Image (640px to 1023px) */}
          <div className="hidden sm:block lg:hidden absolute inset-0">
            <Image
              src="/images/banner-tablet.jpg"
              alt="Discover Your Marriage Timing - Vedic Astrology"
              fill
              priority
              className="object-cover object-[80%_center] opacity-95"
              sizes="(min-width: 640px) and (max-width: 1023px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5F7] via-[#FAF5F7]/95 via-[55%] to-transparent" />
          </div>

          {/* 3. Desktop Dedicated Image (>= 1024px) */}
          <div className="hidden lg:block absolute inset-0">
            <Image
              src="/images/fullwidth-banner.jpg"
              alt="Discover Your Marriage Timing - Vedic Astrology"
              fill
              priority
              className="object-cover object-right opacity-95"
              sizes="(min-width: 1024px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5F7] via-[#FAF5F7]/95 via-[44%] to-transparent" />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.4px,transparent_0.4px)] [background-size:24px_24px] opacity-[0.03] z-[1] pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="w-full md:max-w-[420px] lg:max-w-[540px] xl:max-w-[620px] text-left space-y-3.5 sm:space-y-4 md:space-y-4 lg:space-y-5">
            {/* Top Category Tag */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[11px] sm:text-xs md:text-xs lg:text-sm font-bold uppercase tracking-widest text-[#7C2D63]">
                MARRIAGE ASTROLOGY
              </span>
              <span className="h-[2px] w-8 sm:w-10 md:w-12 lg:w-14 bg-[#B97A9F] rounded-full" />
            </div>

            {/* Main Headline */}
            <h1 className="font-cinzel text-2xl sm:text-3xl md:text-[30px] lg:text-[42px] xl:text-[52px] font-extrabold tracking-tight text-[#2B162C] leading-tight sm:leading-[1.18]">
              <span className="block">Discover Your </span>
              <span className="text-[#6D144E]">Marriage Timing</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-[#55475B] font-medium leading-relaxed">
              Find out when you are likely to get married based on Vedic astrology. Get insights from your 7th house, Venus, planetary periods and transits – in seconds.
            </p>

            {/* 3 Feature Badges */}
            <div className="flex flex-col gap-2 sm:gap-2.5 pt-0.5 sm:pt-1 lg:flex-row lg:flex-wrap">
              {/* Badge 1 */}
              <div className="flex items-center gap-2.5 px-3.5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/95 shadow-sm border border-rose-100 text-[#412844] text-xs sm:text-sm backdrop-blur-sm">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FCE8F3] text-[#A22071] flex items-center justify-center shrink-0">
                  <HomeIcon className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-xs sm:text-sm">7th house &amp; Venus analysis</span>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2.5 px-3.5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/95 shadow-sm border border-purple-100 text-[#412844] text-xs sm:text-sm backdrop-blur-sm">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#EDE8FC] text-[#5B21B6] flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-xs sm:text-sm">Manglik Dosha check</span>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2.5 px-3.5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white/95 shadow-sm border border-amber-100 text-[#412844] text-xs sm:text-sm backdrop-blur-sm">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FEF3C7] text-[#B45309] flex items-center justify-center shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold text-xs sm:text-sm">Personalised marriage window</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-1.5 sm:pt-2 md:pt-2 lg:pt-3">
              <button
                onClick={onCalculateClick}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base md:text-lg font-bold bg-[#6D144E] hover:bg-[#5A0F40] text-white flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer shadow-xl shadow-[#6D144E]/30 hover:shadow-[#6D144E]/50 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                id="hero-cta-btn"
              >
                <span>Calculate My Marriage Timing</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-pink-200 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
