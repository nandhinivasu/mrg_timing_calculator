'use client';

import React from 'react';
import { Sparkles, HeartHandshake, Star, Clock, Gem, Sun } from 'lucide-react';

export function RemediesSection({ remedies }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Mantra':
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Gemstone':
        return <Gem className="w-4 h-4 text-cyan-400" />;
      case 'Fasting & Charity':
        return <Sun className="w-4 h-4 text-rose-400" />;
      case 'Ritual (Puja)':
        return <HeartHandshake className="w-4 h-4 text-purple-400" />;
      default:
        return <Star className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div id="remedies-info" className="space-y-6 scroll-mt-24">
      {/* Section Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Spiritual Alignment</span>
        </div>
        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
          Personalized Vedic Remedies & Astrological Harmonizers
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Classical remedies to strengthen the 7th lord, pacify delay factors, and attract auspicious marital energy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {remedies.map((remedy) => (
          <div
            key={remedy.id}
            className="cosmic-card p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between border-slate-800 hover:border-amber-500/40"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-900 border border-slate-700 text-amber-300 flex items-center gap-1.5">
                  {getCategoryIcon(remedy.category)}
                  <span>{remedy.category}</span>
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {remedy.planetOrDeity}
                </span>
              </div>

              <h4 className="font-cinzel text-base font-bold text-white mb-2">
                {remedy.title}
              </h4>

              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/90 text-xs text-slate-300 mb-3 space-y-1.5">
                <div className="text-amber-200/90 font-medium leading-relaxed">
                  {remedy.instructions}
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1 border-t border-slate-900">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>Auspicious Timing: <strong className="text-slate-300">{remedy.auspiciousDayTime}</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 text-[11px] text-emerald-300 flex items-start gap-1.5">
              <Star className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Astrological Benefit:</strong> {remedy.benefit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
