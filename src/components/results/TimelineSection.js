'use client';

import React, { useState } from 'react';
import { Calendar, Sparkles, ChevronRight, CheckCircle2, Star } from 'lucide-react';

export function TimelineSection({ windows }) {
  const [selectedWindowId, setSelectedWindowId] = useState(windows[0]?.id || '');

  const activeWindow = windows.find((w) => w.id === selectedWindowId) || windows[0];

  return (
    <div className="cosmic-card p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>Chronological Vedic Forecast</span>
          </div>
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            Marriage Timing Timeline & Windows
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-xs sm:text-right">
          Multiple favorable windows based on Vimshottari Dasha sub-periods and planetary transits.
        </p>
      </div>

      {/* Visual Timeline Track */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {windows.map((w, index) => {
          const isSelected = w.id === selectedWindowId;
          const isPrimary = w.isPrimary;

          return (
            <button
              key={w.id}
              type="button"
              onClick={() => setSelectedWindowId(w.id)}
              className={`p-4 rounded-xl text-left transition-all cursor-pointer border relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? isPrimary
                    ? 'bg-gradient-to-b from-amber-950/60 to-slate-900 border-amber-400 shadow-lg shadow-amber-500/10'
                    : 'bg-gradient-to-b from-purple-950/50 to-slate-900 border-purple-400 shadow-lg shadow-purple-500/10'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    isPrimary
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : index === 1
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  }`}
                >
                  {isPrimary ? '🌟 Primary Peak' : index === 1 ? '✨ Secondary Window' : '💫 Alternate Window'}
                </span>
                <span className="text-xs font-bold text-white">{w.probabilityScore}% Match</span>
              </div>

              <div>
                <div className="font-cinzel text-lg sm:text-xl font-bold text-white mb-1">
                  {w.startYear} – {w.endYear}
                </div>
                <div className="text-xs text-slate-300">
                  {w.startMonth} to {w.endMonth}
                </div>
                <div className="text-[11px] text-amber-400/90 font-medium mt-1">
                  {w.ageRange}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="truncate">{w.dashaCombination?.split('/')[0]}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-amber-400' : 'text-slate-600'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Window Deep-Dive Detail Card */}
      {activeWindow && (
        <div className="p-5 sm:p-6 rounded-xl bg-slate-950/70 border border-amber-500/20 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4 mb-4">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Detailed Astrological Blueprint
              </div>
              <h4 className="font-cinzel text-lg font-bold text-white">
                {activeWindow.title} ({activeWindow.startYear} – {activeWindow.endYear})
              </h4>
            </div>
            <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-200">
              Confidence: <strong className="text-amber-300">{activeWindow.confidenceLevel}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm">
            {/* Left: Planetary Dasha Dynamics */}
            <div className="space-y-3">
              <div className="font-semibold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Operating Planetary Dasha & Role</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                <div className="font-bold text-white mb-1">{activeWindow.dashaCombination}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{activeWindow.dashaRole}</p>
              </div>

              <div className="font-semibold text-purple-300 flex items-center gap-1.5 pt-1">
                <Star className="w-4 h-4 text-purple-400" />
                <span>Astrological Highlights</span>
              </div>
              <ul className="space-y-2">
                {activeWindow.astrologicalHighlights?.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Transit Triggers */}
            <div className="space-y-3">
              <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Planetary Transit (Gochar) Triggers</span>
              </div>
              <ul className="space-y-2.5">
                {activeWindow.transitTriggers?.map((trigger, i) => (
                  <li key={i} className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{trigger}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
