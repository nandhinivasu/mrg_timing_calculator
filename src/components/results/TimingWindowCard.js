'use client';

import React from 'react';
import { Sparkles, CheckCircle2, TrendingUp, Star } from 'lucide-react';

export function TimingWindowCard({ window, userName }) {
  return (
    <div className="cosmic-card-gold p-6 sm:p-8 relative overflow-hidden text-white shadow-2xl border-amber-500/50">
      {/* Decorative celestial background aura */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400/20 via-amber-600/5 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Top Header Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-amber-500/20 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>Primary Peak Marriage Window</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-amber-200/80 font-medium">Parashari Confidence:</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-950/80 border border-emerald-400 text-emerald-300">
              {window.confidenceLevel} ({window.probabilityScore}%)
            </span>
          </div>
        </div>

        {/* Main Big Timing Window Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
          <div className="md:col-span-7">
            <div className="text-xs uppercase font-semibold tracking-wider text-amber-300/90 mb-1">
              {userName ? `${userName}'s Most Promising Matrimonial Period` : 'Most Promising Matrimonial Period'}
            </div>
            <h3 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {window.startMonth} {window.startYear} – {window.endMonth} {window.endYear}
            </h3>
            <div className="inline-block mt-2 px-3 py-1 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-semibold">
              🎯 Favorable Age Range: <span className="text-white font-bold">{window.ageRange}</span>
            </div>
          </div>

          {/* Probability & Alignment Gauge */}
          <div className="md:col-span-5 p-4 rounded-xl bg-slate-900/80 border border-amber-500/30 backdrop-blur-md">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-300 font-medium">Astrological Vivaha Strength</span>
              <span className="text-amber-300 font-extrabold text-sm">{window.probabilityScore}%</span>
            </div>
            {/* Visual Probability Bar */}
            <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 shadow-sm transition-all duration-1000 ease-out"
                style={{ width: `${window.probabilityScore}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
              <span>Moderate</span>
              <span>Favorable</span>
              <span className="text-emerald-400 font-semibold">Peak Synergy</span>
            </div>
          </div>
        </div>

        {/* Key Planetary Alignment Triggers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-amber-500/20 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-amber-200 uppercase tracking-wide">
                Operating Dasha Lord
              </div>
              <div className="text-xs text-slate-200 font-medium mt-0.5">
                {window.dashaCombination}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {window.dashaRole}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-amber-500/20 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              <Star className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-300 uppercase tracking-wide">
                Double Transit Alignment
              </div>
              <div className="text-xs text-slate-200 font-medium mt-0.5">
                Jupiter (Guru) & Saturn (Shani) Active
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Simultaneous aspect on the 7th Kalatra Bhava
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Bullets */}
        <div className="mt-4 pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>High probability for formal ring ceremony, engagement & matrimonial alliance talks.</span>
          </div>
          <span className="text-amber-300 text-[11px] italic shrink-0">
            *Derived from natal 7th house and Dasha transits
          </span>
        </div>
      </div>
    </div>
  );
}
