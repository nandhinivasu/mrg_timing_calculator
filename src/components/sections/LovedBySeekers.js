'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { SectionBackground } from '@/components/ui/SectionBackground';

export function LovedBySeekers() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya S.',
      location: 'Chennai',
      avatar: '/images/avatar-priya.jpg',
      quote: '“The marriage timing reading gave me clear guidance and helped me choose the right time. It all happened exactly as predicted!”',
      rating: 5,
    },
    {
      id: 2,
      name: 'Rohit K.',
      location: 'Bengaluru',
      avatar: '/images/avatar-rohit.jpg',
      quote: '“The partner insights were incredibly accurate. I understood my partner’s nature and background clearly, which gave me confidence before the wedding.”',
      rating: 5,
    },
    {
      id: 3,
      name: 'Meera R.',
      location: 'Hyderabad',
      avatar: '/images/avatar-meera.jpg',
      quote: '“A detailed and easy to understand report. The remedies suggested were simple and practical. Truly value for money!”',
      rating: 5,
    },
    {
      id: 4,
      name: 'Ananya D.',
      location: 'Delhi',
      avatar: '/images/avatar-ananya.jpg',
      quote: '“I was anxious about Manglik Dosha delays. The report clearly explained the planetary cancellations and gave me immense peace of mind.”',
      rating: 5,
    },
    {
      id: 5,
      name: 'Vikram M.',
      location: 'Mumbai',
      avatar: '/images/avatar-vikram.jpg',
      quote: '“The Navamsa chart analysis was spot on regarding my partner’s temperament and meeting direction. Highly recommended!”',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative w-full bg-[#FAF5F7] text-[#2B162C] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-rose-100/70">
      {/* Decorative Celestial Background Artwork */}
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
            Loved by <span className="text-[#6D144E]">Seekers Like You</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#55475B] max-w-xl mx-auto leading-relaxed">
            Real experiences from people who found clarity, confidence and the right timing for their marriage.
          </p>
        </div>

        {/* Desktop 3-Card Carousel */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {getVisibleTestimonials().map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-rose-950/5 border border-rose-100/90 relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-full bg-[#FCE8F3] text-[#7C2D63] border border-rose-200/70 flex items-center justify-center font-serif text-lg font-bold shadow-2xs">
                    ❝
                  </div>

                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#2B162C] font-normal leading-relaxed min-h-[72px]">
                  {t.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-rose-50 flex items-center justify-between relative mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-rose-200/80 shadow-xs relative shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#2B162C] text-sm sm:text-base leading-snug">
                      {t.name}
                    </h3>
                    <p className="text-xs text-[#78667E]">{t.location}</p>
                  </div>
                </div>

                <span className="text-4xl lg:text-5xl font-serif text-[#FCE8F3] font-black select-none pointer-events-none leading-none pr-1">
                  ❞
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {testimonials.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-rose-100/90 relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-full bg-[#FCE8F3] text-[#7C2D63] border border-rose-200/70 flex items-center justify-center font-serif text-sm font-bold shadow-2xs">
                    ❝
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#2B162C] leading-relaxed">
                  {t.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-rose-50 flex items-center justify-between relative mt-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-rose-200/80 relative shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2B162C] text-xs leading-tight">
                      {t.name}
                    </h3>
                    <p className="text-[11px] text-[#78667E]">{t.location}</p>
                  </div>
                </div>

                <span className="text-3xl font-serif text-[#FCE8F3] font-black select-none pointer-events-none leading-none">
                  ❞
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonials"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FCE8F3] text-[#7C2D63] border border-rose-200/70 hover:bg-rose-200 active:scale-95 flex items-center justify-center cursor-pointer transition-all shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 px-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === i
                    ? 'w-6 bg-[#6D144E]'
                    : 'w-2 bg-rose-200 hover:bg-rose-300'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Testimonials"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FCE8F3] text-[#7C2D63] border border-rose-200/70 hover:bg-rose-200 active:scale-95 flex items-center justify-center cursor-pointer transition-all shadow-2xs"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
