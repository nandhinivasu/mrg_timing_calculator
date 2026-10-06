'use client';

import React from 'react';
import { Sparkles, Heart, Flame, Compass, Star, CheckCircle } from 'lucide-react';

export function HouseLordAnalysis({ house7, lord7, venusInfluence, manglik }) {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
          <Compass className="w-3.5 h-3.5" />
          <span>Vedic Core Foundations</span>
        </div>
        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
          7th House, 7th Lord, Venus & Manglik Analysis
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Detailed assessment of the Kalatra Bhava (house of marriage), ruler dignity, relationship Karaka, and Kuja Dosha.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: 7th House (Kalatra Bhava) */}
        <div className="cosmic-card p-6 relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-white">
                    7th House (Kalatra Bhava)
                  </h4>
                  <span className="text-xs text-slate-400">Marriage & Spousal Dynamics</span>
                </div>
              </div>

              <div className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-500/15 border border-purple-500/30 text-purple-300">
                {house7.strengthLabel} ({house7.houseStrengthScore}%)
              </div>
            </div>

            {/* House Specs Grid */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800 mb-4 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Rashi Sign</span>
                <span className="font-bold text-white">{house7.signName}</span>
                <span className="text-purple-300 text-[10px] block">({house7.signSanskrit})</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Sign Ruler</span>
                <span className="font-bold text-amber-300">{house7.signLord}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Element</span>
                <span className="font-bold text-cyan-300">{house7.element}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {house7.significanceSummary}
            </p>

            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <strong className="text-purple-300 block mb-1">Marital Quality Indication:</strong>
              {house7.maritalQualityInsight}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Benefic Influences: <strong className="text-emerald-400">{house7.planetsIn7th.join(', ')}</strong></span>
            <span>Aspects: <strong className="text-amber-400">{house7.aspectingPlanets.join(', ')}</strong></span>
          </div>
        </div>

        {/* Card 2: 7th Lord (Kalatrādhipati) */}
        <div className="cosmic-card p-6 relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-white">
                    7th Lord ({lord7.sanskritName})
                  </h4>
                  <span className="text-xs text-slate-400">Ruler of Conjugal Life</span>
                </div>
              </div>

              <div className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                {lord7.dignity}
              </div>
            </div>

            {/* Lord Specs Grid */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800 mb-4 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Placed In House</span>
                <span className="font-bold text-white">House {lord7.placementHouse}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Placed Sign</span>
                <span className="font-bold text-amber-300">{lord7.placementSign}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Status</span>
                <span className="font-bold text-emerald-400">{lord7.dignity?.split(' ')[0]}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {lord7.impactOnTiming}
            </p>

            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <strong className="text-amber-300 block mb-1">Parashari Timing Influence:</strong>
              {lord7.analysisText}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Conjunctions: <strong className="text-white">{lord7.conjunctions.join(', ')}</strong></span>
            <span>Motion: <strong className={lord7.isRetrograde ? 'text-rose-400' : 'text-emerald-400'}>{lord7.isRetrograde ? 'Vakri (Retrograde)' : 'Margi (Direct)'}</strong></span>
          </div>
        </div>

        {/* Card 3: Venus / Jupiter Influence & Karaka */}
        <div className="cosmic-card p-6 relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-300">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-white">
                    Marriage Karaka ({venusInfluence.karakaPlanet})
                  </h4>
                  <span className="text-xs text-slate-400">Romance, Harmony & Longevity</span>
                </div>
              </div>

              <div className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/15 border border-rose-500/30 text-rose-300">
                Harmony: {venusInfluence.harmonyScore}%
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {venusInfluence.maritalBlissSummary}
            </p>

            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
              <div className="flex items-start gap-1.5 text-rose-200">
                <Sparkles className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span><strong>Partner Affinity:</strong> {venusInfluence.attractionType}</span>
              </div>
              <div className="flex items-start gap-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Guidance:</strong> {venusInfluence.relationshipAdvice}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Karaka Sign: <strong className="text-rose-300">{venusInfluence.placementSign}</strong></span>
            <span>House: <strong className="text-white">House {venusInfluence.placementHouse}</strong></span>
          </div>
        </div>

        {/* Card 4: Manglik Status (Kuja Dosha) */}
        <div className="cosmic-card p-6 relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  manglik.isManglik
                    ? manglik.isCancelled
                      ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                      : 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                    : 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                }`}>
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-base font-bold text-white">
                    Manglik Status (Kuja Dosha)
                  </h4>
                  <span className="text-xs text-slate-400">Mars Placement & Affliction Check</span>
                </div>
              </div>

              <div className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                manglik.isManglik
                  ? manglik.isCancelled
                    ? 'bg-amber-950/80 border-amber-400 text-amber-300'
                    : 'bg-rose-950/80 border-rose-400 text-rose-300'
                  : 'bg-emerald-950/80 border-emerald-400 text-emerald-300'
              }`}>
                {manglik.statusLabel}
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {manglik.impactDescription}
            </p>

            {manglik.isCancelled && manglik.cancellationReasons.length > 0 ? (
              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs space-y-1.5">
                <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Kuja Dosha Bhanga (Neutralizing Yogas):</span>
                </div>
                <ul className="space-y-1 pl-4 list-disc text-slate-300 text-[11px]">
                  {manglik.cancellationReasons.map((reason, i) => (
                    <li key={i}>{reason}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <strong className="text-slate-200 block mb-1">Vedic Recommendation:</strong>
                {manglik.mitigationAdvice}
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>Mars In: <strong className="text-white">House {manglik.marsHouse} ({manglik.marsSign})</strong></span>
            <span>Dosha Severity: <strong className={manglik.severityScore > 30 ? 'text-rose-400' : 'text-emerald-400'}>{manglik.severityScore}%</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
