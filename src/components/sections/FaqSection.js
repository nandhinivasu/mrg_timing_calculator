'use client';

import React, { useState } from 'react';
import { Gift, Clock, FileText, Shield, Plus, Minus } from 'lucide-react';
import { SectionBackground } from '@/components/ui/SectionBackground';

export function FaqSection() {
  const [openItems, setOpenItems] = useState({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqs = [
    {
      num: '01',
      question: 'Is the marriage calculator free to use?',
      answer: 'Yes, you can generate your marriage timing report at an affordable price, with complete details delivered as a PDF.',
      icon: <Gift className="w-5 h-5 text-[#A22071]" />,
      numBg: 'bg-[#FCE8F3] text-[#A22071] border-rose-200/80',
      iconBg: 'bg-[#FCE8F3] border-rose-200/80',
      btnBg: 'bg-[#FCE8F3] text-[#7C2D63]',
    },
    {
      num: '02',
      question: 'How is marriage timing calculated?',
      answer: 'It is calculated based on your birth chart, planetary positions, dashas, transits and key Vedic astrology principles.',
      icon: (
        <svg className="w-5 h-5 text-[#B45309]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      numBg: 'bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]',
      iconBg: 'bg-[#FFFBEB] border-[#FDE68A]',
      btnBg: 'bg-[#FCE8F3] text-[#7C2D63]',
    },
    {
      num: '03',
      question: 'What is Manglik (Mangal) Dosha?',
      answer: 'Manglik Dosha occurs when Mars is placed in certain houses in your chart. We analyse its effects and suggest remedies if needed.',
      icon: (
        <svg className="w-5 h-5 text-[#7C3AED]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4.5" fill="#EDE8FC" />
          <ellipse cx="12" cy="12" rx="8.5" ry="3" transform="rotate(-30 12 12)" />
        </svg>
      ),
      numBg: 'bg-[#EDE8FC] text-[#6D28D9] border-[#DDD6FE]',
      iconBg: 'bg-[#F5F3FF] border-[#DDD6FE]',
      btnBg: 'bg-[#FCE8F3] text-[#7C2D63]',
    },
    {
      num: '04',
      question: 'Do I need an accurate birth time?',
      answer: 'An accurate birth time gives more precise results. If you are unsure, our system can still provide insights based on the available details.',
      icon: <Clock className="w-5 h-5 text-[#059669]" />,
      numBg: 'bg-[#D1FAE5] text-[#059669] border-[#A7F3D0]',
      iconBg: 'bg-[#ECFDF5] border-[#A7F3D0]',
      btnBg: 'bg-[#FCE8F3] text-[#7C2D63]',
    },
    {
      num: '05',
      question: 'What will I receive in the report?',
      answer: 'You will receive a detailed PDF report covering marriage timing, partner insights, compatibility, Manglik analysis and remedies.',
      icon: <FileText className="w-5 h-5 text-[#A22071]" />,
      numBg: 'bg-[#FCE8F3] text-[#A22071] border-rose-200/80',
      iconBg: 'bg-[#FCE8F3] border-rose-200/80',
      btnBg: 'bg-[#FCE8F3] text-[#7C2D63]',
    },
    {
      num: '06',
      question: 'Is my information safe and private?',
      answer: 'Yes, your birth details are 100% secure and are used only to generate your report. We never store or share your information.',
      icon: <Shield className="w-5 h-5 text-[#0284C7]" />,
      numBg: 'bg-[#E0F2FE] text-[#0284C7] border-[#BAE6FD]',
      iconBg: 'bg-[#F0F9FF] border-[#BAE6FD]',
      btnBg: 'bg-[#FCE8F3] text-[#7C2D63]',
    },
  ];

  return (
    <section id="faq" className="relative w-full bg-[#FAF5F7] text-[#2B162C] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-rose-100/70">
      {/* Decorative Celestial Background Artwork */}
      <SectionBackground />

      <div className="relative z-10 max-w-5xl mx-auto">
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
            Marriage Calculator <span className="hidden sm:inline">-</span> <br className="sm:hidden" />
            <span className="text-[#6D144E]">FAQs</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#55475B] max-w-xl mx-auto leading-relaxed">
            Find answers to common questions about our Marriage Timing Calculator and how it can help you.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openItems[idx] ?? true;
            return (
              <div
                key={faq.num}
                onClick={() => toggleItem(idx)}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md border border-rose-100/90 hover:border-rose-200 transition-all duration-200 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                  <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-[11px] sm:text-xs font-bold flex items-center justify-center border shrink-0 ${faq.numBg} shadow-2xs`}>
                    {faq.num}
                  </span>

                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${faq.iconBg} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    {faq.icon}
                  </div>
                </div>

                <div className="flex-1 min-w-0 pr-1 space-y-1">
                  <h3 className="font-bold text-[#2B162C] text-sm sm:text-base md:text-lg leading-snug">
                    {faq.question}
                  </h3>
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-[#55475B] leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  aria-label={isOpen ? 'Collapse answer' : 'Expand answer'}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${faq.btnBg} border border-rose-200/80 flex items-center justify-center shrink-0 font-bold transition-transform group-hover:scale-110 shadow-2xs`}
                >
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
