'use client';

import React from 'react';
import { Compass, User, Briefcase, Heart } from 'lucide-react';

export function PartnerInsights({ partner }) {
  return (
    <div className="cosmic-card p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">
            <Heart className="w-3.5 h-3.5" />
            <span>Spouse Indications</span>
          </div>
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            Partner Profile & Meeting Indications
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-xs sm:text-right">
          Derived from the 7th house sign, 7th lord, Venus, and the Navamsa D9 chart.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: Direction & Circumstance */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Likely Direction of Spouse:</span>
              </span>
              <span className="font-bold text-white text-sm bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700">
                {partner.likelyDirection}
              </span>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <span className="text-slate-400 block mb-1 font-medium">Meeting Circumstances:</span>
              <p className="text-slate-200 leading-relaxed text-[11px]">
                {partner.meetingCircumstance}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <span className="text-slate-400 block mb-1 font-medium">Family & Background Origin:</span>
              <p className="text-slate-200 leading-relaxed text-[11px]">
                {partner.backgroundOrigin}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Temperament & Career */}
        <div className="md:col-span-7 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-rose-300 font-bold mb-1.5 text-sm">
              <User className="w-4 h-4 text-rose-400" />
              <span>Temperament & Personality Archetype</span>
            </div>
            <p className="text-slate-200 leading-relaxed">
              {partner.temperament}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {partner.physicalAttributes?.map((attr, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 text-[11px] border border-slate-800">
                  ✦ {attr}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-amber-300 font-bold mb-2 text-sm">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>Likely Career & Professional Fields</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {partner.professionDomains?.map((domain, i) => (
                <div key={i} className="p-2 rounded-lg bg-slate-950/70 border border-slate-800 text-slate-200 text-[11px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{domain}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
