'use client';

import React from 'react';
import { Shield, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Marriage Calculator', href: '#calculator' },
    { label: 'What Report Includes', href: '#report-includes' },
    { label: 'Seeker Reviews', href: '#testimonials' },
    { label: 'Frequently Asked Questions', href: '#faq' },
    { label: 'Full Marriage Analysis', href: '#full-report-cta' },
  ];

  const vedicFeatures = [
    { label: '7th House & Venus Analysis', href: '#calculator' },
    { label: 'Manglik Dosha Check', href: '#calculator' },
    { label: 'Navamsa (D9) Chart Reading', href: '#calculator' },
    { label: 'Vimshottari Dasha Timing', href: '#calculator' },
  ];

  return (
    <footer className="bg-[#FAF5F7] border-t border-rose-200/60 pt-12 pb-8 relative z-20 text-[#55475B] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-rose-200/50">
          {/* Brand & Purpose */}
          <div className="md:col-span-6 lg:col-span-5 space-y-3.5">
            <div>
              <a
                href="https://www.astroved.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                {/* AstroVed Official Logo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg"
                  alt="AstroVed"
                  width={150}
                  height={36}
                  className="h-8.5 w-auto object-contain"
                />
              </a>
            </div>

            <p className="text-[#68586E] text-xs leading-relaxed max-w-sm">
              Accurate Vedic astrology calculations for marriage timing, 7th house alignments, and partner insights based on classical Parashari Jyotish.
            </p>

            {/* Trust Badge */}
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE8F3] text-[#7C2D63] border border-rose-200/80 text-[11px] font-semibold shadow-2xs">
                <Shield className="w-3.5 h-3.5 text-[#8B1E5A]" />
                <span>100% Private &amp; Secure Calculation</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 lg:col-span-4 space-y-3">
            <div className="font-cinzel text-xs font-bold text-[#2B162C] uppercase tracking-wider">
              Quick Links
            </div>
            <ul className="space-y-2 text-[#55475B]">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-[#8B1E5A] hover:underline underline-offset-4 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Vedic Features */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <div className="font-cinzel text-xs font-bold text-[#2B162C] uppercase tracking-wider">
              Vedic Analysis
            </div>
            <ul className="space-y-2 text-[#55475B]">
              {vedicFeatures.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-[#8B1E5A] hover:underline underline-offset-4 transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Astrological Guidance Note */}
        <div className="py-6 text-center text-[11px] text-[#78667E] max-w-2xl mx-auto leading-relaxed">
          <p>
            Vedic astrology provides cosmic timings and karmic tendencies based on planetary configurations at birth. Marriage decisions should be complemented by personal judgment and family consultation.
          </p>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-rose-200/50 text-[#78667E] text-[11px]">
          <div>
            © {new Date().getFullYear()}{' '}
            <a
              href="https://www.astroved.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8B1E5A] font-semibold transition-colors"
            >
              AstroVed
            </a>
            . All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-[#8B1E5A] font-semibold transition-all flex items-center gap-1.5 px-3 py-1 rounded-lg hover:bg-[#FCE8F3] cursor-pointer"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-3.5 h-3.5 text-[#8B1E5A]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
