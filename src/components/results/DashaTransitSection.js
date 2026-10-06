'use client';

import React from 'react';
import { Calendar, Compass, Sparkles, ShieldCheck, Clock } from 'lucide-react';

export function DashaTransitSection({ dasha, transits }) {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
          <Clock className="w-3.5 h-3.5" />
          <span>Timing Catalysts</span>
        </div>
        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
          Vimshottari Dasha & Double Transit Activation
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          The two pillars of Vedic timing: Operating planetary major/minor periods and simultaneous Jupiter-Saturn Gochar influence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Vimshottari Dasha Engine */}
        <div className="lg:col-span-7 cosmic-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-white">
                    Current Vimshottari Dasha
                  </h4>
                  <span className="text-xs text-slate-400">Operating Life Period Matrix</span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                Favorability: {dasha.dashaMarriageFavorability}%
              </span>
            </div>

            {/* Dasha Level 3-box Grid */}
            <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 mb-4">
              <div className="p-2 rounded-lg bg-slate-900/90 text-center">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">Mahadasha</span>
                <span className="font-bold text-white text-sm sm:text-base">{dasha.currentMahaDasha}</span>
                <span className="text-[10px] text-amber-400 block">Major Period</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/90 text-center border border-amber-500/30">
                <span className="text-[10px] uppercase font-semibold text-amber-300 block">Antardasha</span>
                <span className="font-bold text-amber-300 text-sm sm:text-base">{dasha.currentAntarDasha}</span>
                <span className="text-[10px] text-amber-400 block">Active Sub-Period</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/90 text-center">
                <span className="text-[10px] uppercase font-semibold text-slate-400 block">Pratyantar</span>
                <span className="font-bold text-white text-sm sm:text-base">{dasha.currentPratyantarDasha}</span>
                <span className="text-[10px] text-slate-400 block">Micro-Period</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {dasha.dashaExplanation}
            </p>

            {/* Upcoming Favorable Sub-Periods */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Upcoming Promising Sub-Periods</span>
              </div>
              {dasha.upcomingFavorableDashas?.map((fav, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-white">{fav.dashaPair}</span>
                    <span className="text-slate-400 text-[11px] block">{fav.details}</span>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 inline-block mb-0.5">
                      {fav.marriagePotential}
                    </span>
                    <div className="text-[10px] text-slate-400">{fav.startDate} – {fav.endDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Cycle Span: <strong className="text-slate-200">{dasha.periodStart} to {dasha.periodEnd}</strong></span>
            <span className="text-emerald-400 font-semibold">✦ Vivaha Yoga Active</span>
          </div>
        </div>

        {/* Right Column: Double Transit Theory */}
        <div className="lg:col-span-5 cosmic-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-white">
                    Double Transit (Dwi-Gochar)
                  </h4>
                  <span className="text-xs text-slate-400">Jupiter & Saturn Transit Synergy</span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                {transits.doubleTransitActive ? 'Active Triggers' : 'Forming'}
              </span>
            </div>

            {/* Double Transit Badge */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/50 to-indigo-950/50 border border-cyan-500/30 text-xs mb-4">
              <div className="flex items-center gap-2 font-bold text-cyan-300 mb-1">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>The Sacred Double Transit Law</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {transits.doubleTransitExplanation}
              </p>
            </div>

            {/* Jupiter vs Saturn Transit Details */}
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
                <div className="flex items-center justify-between font-bold text-amber-300 mb-1">
                  <span>Guru Gochar (Jupiter Transit)</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                    House {transits.jupiterTransitHouse}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {transits.jupiterGocharImpact}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
                <div className="flex items-center justify-between font-bold text-indigo-300 mb-1">
                  <span>Shani Gochar (Saturn Transit)</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                    House {transits.saturnTransitHouse}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {transits.saturnGocharImpact}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Peak Transit Window: <strong className="text-cyan-300">{transits.nextFavorableTransitWindow}</strong></span>
            <span className="text-amber-400">✦ Vedic Confirmation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
