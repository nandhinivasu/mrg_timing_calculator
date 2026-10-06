'use client';

import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { BirthForm } from '@/components/calculator/BirthForm';
import { KnowWhenMarriage } from '@/components/sections/KnowWhenMarriage';
import { WhatYourReportIncludes } from '@/components/sections/WhatYourReportIncludes';
import { LovedBySeekers } from '@/components/sections/LovedBySeekers';
import { FaqSection } from '@/components/sections/FaqSection';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCalculate = (e) => {
    // Form submission disabled as requested - nothing happens upon submit
    if (e && e.preventDefault) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onCalculateClick={scrollToCalculator} />

        {/* 2. Birth Details Calculator Form */}
        <BirthForm
          onCalculate={handleCalculate}
          isLoading={false}
        />

        {/* 3. Know When Marriage Is Most Likely */}
        <KnowWhenMarriage onGetReportClick={scrollToCalculator} />

        {/* 4. What Your Report Includes */}
        <WhatYourReportIncludes onCalculateClick={scrollToCalculator} />

        {/* 5. Loved by Seekers Like You */}
        <LovedBySeekers />

        {/* 6. Marriage Calculator - FAQs Section */}
        <FaqSection />

        {/* 7. Want the Full Marriage Analysis? */}
        <FinalCta onCalculateClick={scrollToCalculator} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
