'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Printer, RotateCcw } from 'lucide-react';
import { TimingWindowCard } from './TimingWindowCard';
import { TimelineSection } from './TimelineSection';
import { HouseLordAnalysis } from './HouseLordAnalysis';
import { DashaTransitSection } from './DashaTransitSection';
import { NavamsaSection } from './NavamsaSection';
import { FactorsSection } from './FactorsSection';
import { PartnerInsights } from './PartnerInsights';
import { RemediesSection } from './RemediesSection';
import { PrintReportModal } from './PrintReportModal';

export function ResultsDashboard({ result, onEditDetails }) {
  const [activeTab, setActiveTab] = useState('all');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll gently to results
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [result]);

  return (
    <section id="results" ref={containerRef} className="py-12 scroll-mt-16 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Summary Bar & Action Header */}
        <div className="cosmic-card p-5 sm:p-6 border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                {result.profile.name}&apos;s Vedic Report
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {result.profile.gender === 'female' ? '♀ Female' : '♂ Male'} • Age {result.currentAge}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span>Lagna: <strong className="text-amber-300">{result.ascendantSign}</strong></span>
              <span>•</span>
              <span>Moon Sign: <strong className="text-purple-300">{result.moonSign}</strong></span>
              <span>•</span>
              <span>Nakshatra: <strong className="text-cyan-300">{result.nakshatra}</strong></span>
              <span>•</span>
              <span className="truncate max-w-[180px] sm:max-w-xs">{result.profile.birthPlace}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onEditDetails}
              className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              <span>Edit Details</span>
            </button>

            <button
              onClick={() => setIsPrintModalOpen(true)}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold btn-gold-shimmer flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Export / Print</span>
            </button>
          </div>
        </div>

        {/* 1. Primary Highlight Result: Marriage Timing Window Card */}
        <TimingWindowCard window={result.primaryWindow} userName={result.profile.name} />

        {/* Interactive Result Section Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
          >
            ✦ Complete Kundali Report
          </button>
          <button
            onClick={() => setActiveTab('timing')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === 'timing'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
          >
            📅 Timeline & Windows
          </button>
          <button
            onClick={() => setActiveTab('houses')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === 'houses'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
          >
            ⭐ 7th House & Manglik
          </button>
          <button
            onClick={() => setActiveTab('dasha')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === 'dasha'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
          >
            ⏱ Dasha & Transits
          </button>
          <button
            onClick={() => setActiveTab('partner')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === 'partner'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
          >
            💍 Partner & D9
          </button>
          <button
            onClick={() => setActiveTab('remedies')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === 'remedies'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
          >
            🕉 Vedic Remedies
          </button>
        </div>

        {/* 2. Timeline Section */}
        {(activeTab === 'all' || activeTab === 'timing') && (
          <TimelineSection windows={result.allWindows} />
        )}

        {/* 3. 7th House, 7th Lord, Venus & Manglik Section */}
        {(activeTab === 'all' || activeTab === 'houses') && (
          <HouseLordAnalysis
            house7={result.house7}
            lord7={result.lord7}
            venusInfluence={result.venusInfluence}
            manglik={result.manglik}
          />
        )}

        {/* 4. Dasha & Transits Section */}
        {(activeTab === 'all' || activeTab === 'dasha') && (
          <DashaTransitSection dasha={result.dasha} transits={result.transits} />
        )}

        {/* 5. Navamsa (D9) Chart Section */}
        {(activeTab === 'all' || activeTab === 'partner') && (
          <NavamsaSection navamsaD9={result.navamsaD9} />
        )}

        {/* 6. Supporting & Delaying Factors Section */}
        {(activeTab === 'all' || activeTab === 'houses') && (
          <FactorsSection factors={result.factors} />
        )}

        {/* 7. Partner Insights Section */}
        {(activeTab === 'all' || activeTab === 'partner') && (
          <PartnerInsights partner={result.partnerIndications} />
        )}

        {/* 8. Remedies Section */}
        {(activeTab === 'all' || activeTab === 'remedies') && (
          <RemediesSection remedies={result.remedies} />
        )}
      </div>

      {/* Printable Report Modal */}
      <PrintReportModal
        result={result}
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />
    </section>
  );
}
