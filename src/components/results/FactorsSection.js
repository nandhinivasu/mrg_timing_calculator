'use client';

import React from 'react';
import { TrendingUp, Clock, CheckCircle2, Sparkles } from 'lucide-react';

export function FactorsSection({ factors }) {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Planetary Forces in Motion</span>
        </div>
        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
          Supporting & Delaying Astrological Factors
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Balance of benefic planetary yogas accelerating marriage versus Saturnian/Ketu delay factors.
        </p>
      </div>

      {/* Net Timing Balance Gauge */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Net Astrological Momentum:</div>
            <div className="text-base sm:text-lg font-bold text-emerald-300">
              {factors.netTimingBalance} ({factors.balanceScore}% Favorable Velocity)
            </div>
          </div>
        </div>

        <div className="w-full sm:w-64">
          <div className="flex justify-between text-[11px] text-slate-400 mb-1">
            <span>Delays</span>
            <span className="text-emerald-400 font-bold">Smooth Alignment</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-1000"
              style={{ width: `${factors.balanceScore}%` }}
            />
          </div>
        </div>
      </div>

      {/* Factors 2-column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Supporting Accelerating Factors */}
        <div className="cosmic-card p-6 border-emerald-500/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cinzel text-base font-bold text-white">
                  Supporting & Accelerating Yogas
                </h4>
                <span className="text-[11px] text-emerald-400 font-medium">Favorable Planetary Blessings</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {factors.supporting?.map((factor) => (
                <div key={factor.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-emerald-500/15 text-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-emerald-200">{factor.title}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {factor.weight} Impact
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed mb-1.5">
                    {factor.description}
                  </p>
                  <div className="text-[10px] text-slate-400 italic">
                    Reason: {factor.astrologicalReason}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Delaying / Cautionary Factors */}
        <div className="cosmic-card p-6 border-amber-500/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cinzel text-base font-bold text-white">
                  Delaying & Contemplative Factors
                </h4>
                <span className="text-[11px] text-amber-400 font-medium">Aspects Requiring Conscious Alignment</span>
              </div>
            </div>

            <div className="space-y-3.5">
              {factors.delaying?.map((factor) => (
                <div key={factor.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-amber-500/15 text-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-amber-200">{factor.title}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {factor.weight} Weight
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed mb-2">
                    {factor.description}
                  </p>
                  <div className="p-2 rounded-lg bg-amber-950/20 border border-amber-500/20 text-[11px] text-amber-200/90 flex items-start gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Harmonizing Remedy:</strong> {factor.recommendedRemedy}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
