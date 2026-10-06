'use client';

import React, { useState } from 'react';
import { Printer, Copy, Check, X, Sparkles } from 'lucide-react';

export function PrintReportModal({ result, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
✨ VEDIC MARRIAGE TIMING REPORT ✨
========================================
Name: ${result.profile.name} (${result.profile.gender})
Birth Details: ${result.profile.day}/${result.profile.month}/${result.profile.year} at ${result.profile.hour}:${result.profile.minute < 10 ? '0' : ''}${result.profile.minute} ${result.profile.period}
Birth Place: ${result.profile.birthPlace}
Lagna (Ascendant): ${result.ascendantSign} | Moon Sign: ${result.moonSign} | Nakshatra: ${result.nakshatra}
Current Age: ${result.currentAge} years

⭐ PRIMARY MARRIAGE TIMING WINDOW:
${result.primaryWindow.startMonth} ${result.primaryWindow.startYear} – ${result.primaryWindow.endMonth} ${result.primaryWindow.endYear} (${result.primaryWindow.ageRange})
Confidence: ${result.primaryWindow.confidenceLevel} (${result.primaryWindow.probabilityScore}% Match)
Operating Dasha: ${result.primaryWindow.dashaCombination}

⭐ 7TH HOUSE & LORD:
7th House Sign: ${result.house7.signName} (${result.house7.signSanskrit}) - Ruled by ${result.house7.signLord}
7th Lord Dignity: ${result.lord7.dignity} in House ${result.lord7.placementHouse}
Venus / Marriage Karaka Harmony: ${result.venusInfluence.harmonyScore}%
Manglik Status: ${result.manglik.statusLabel} (${result.manglik.isCancelled ? 'Neutralized' : 'Normal'})

⭐ DOUBLE TRANSIT CONFIRMATION:
Jupiter & Saturn Simultaneous Gochar: ${result.transits.doubleTransitActive ? 'Active' : 'Developing'}

Calculated by Jyotish Vivaha Vedic Engine.
========================================
    `.trim();

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="cosmic-card w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border-amber-500/40 shadow-2xl">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="font-cinzel text-lg font-bold text-white">
              Export Marriage Timing Report
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body / Preview */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-bold text-white text-base">{result.profile.name}</span>
              <span className="text-amber-400 font-semibold">{result.overallTimingVerdict}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1">
              <div>
                <span className="text-slate-500 block">DOB:</span>
                <span className="text-slate-200">{result.profile.day}/{result.profile.month}/{result.profile.year}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Time:</span>
                <span className="text-slate-200">{result.profile.hour}:{result.profile.minute < 10 ? '0' : ''}{result.profile.minute} {result.profile.period}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Lagna / Moon:</span>
                <span className="text-slate-200">{result.ascendantSign} / {result.moonSign}</span>
              </div>
              <div>
                <span className="text-slate-500 block">City:</span>
                <span className="text-slate-200 truncate block">{result.profile.birthPlace?.split(',')[0]}</span>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed">
            You can print this report directly or copy the formatted text summary to share with your family or Vedic astrologer.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyText}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-2 cursor-pointer transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copy Summary Text</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl text-xs font-bold btn-gold-shimmer flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
