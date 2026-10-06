'use client';

import React from 'react';
import { Stars, Sparkles, Heart } from 'lucide-react';

export function NavamsaSection({ navamsaD9 }) {
  return (
    <div className="cosmic-card p-6 sm:p-8 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
            <Stars className="w-3.5 h-3.5" />
            <span>Divisional Chart Analysis</span>
          </div>
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            Navamsa (D9) Marriage & Soul Union Chart
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Marriage Harmony Score:</span>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            {navamsaD9.marriageQualityScore}%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: D9 Chart Metrics */}
        <div className="md:col-span-5 space-y-3">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <span className="text-slate-400">D9 Navamsa Lagna (Ascendant):</span>
              <span className="font-bold text-white">{navamsaD9.d9LagnaSign} (Ruler: {navamsaD9.d9LagnaLord})</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <span className="text-slate-400">D9 7th House (Kalatra):</span>
              <span className="font-bold text-amber-300">{navamsaD9.d9SeventhSign} (Ruler: {navamsaD9.d9SeventhLord})</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <span className="text-slate-400">D9 Benefic Planar Influences:</span>
              <span className="font-bold text-emerald-300">{navamsaD9.d9SeventhPlanets?.join(', ')}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">Spiritual Bond Potential:</span>
              <span className="font-bold text-purple-300">{navamsaD9.spiritualBondStrength}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-300">
            <strong className="text-cyan-300 block mb-1">Why D9 is Crucial in Vedic Astrology:</strong>
            While the Rashi (D1) chart shows the seed of potential, the Navamsa (D9) chart reveals the fruit and the true post-marital reality.
          </div>
        </div>

        {/* Right Column: D9 Insights & Spouse Nature */}
        <div className="md:col-span-7 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <h4 className="font-cinzel text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>D9 Divisional Analysis & Soul Harmony</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {navamsaD9.d9Insights}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs text-slate-300">
            <h4 className="font-cinzel text-sm font-bold text-purple-200 mb-1 flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-purple-400" />
              <span>D9 Spouse Characteristic Indication</span>
            </h4>
            <p className="text-xs text-purple-100/90 leading-relaxed">
              {navamsaD9.d9SpouseNature}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
