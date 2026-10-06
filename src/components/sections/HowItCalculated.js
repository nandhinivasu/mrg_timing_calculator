'use client';

import React, { useState } from 'react';
import { BookOpen, Star, Sparkles, Compass, ShieldCheck, Heart, Clock } from 'lucide-react';

export function HowItCalculated() {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      title: '1. The 7th House (Kalatra Bhava)',
      subtitle: 'The Primary Seat of Marriage & Partnerships',
      icon: <Star className="w-5 h-5 text-amber-400" />,
      tag: 'Kendra Sthana',
      description: 'The 7th house from the Lagna (Ascendant) governs spouse, matrimony, legal alliances, and intimate relationships. In Vedic astrology, the sign occupying this house, the planets posited within, and any aspects cast upon it form the foundational blueprint of conjugal destiny.',
      keyTakeaway: 'Benefic planets (Jupiter, Venus, Mercury) in the 7th grant marital happiness and smooth wedding execution, while malefic influences require conscious harmony.'
    },
    {
      title: '2. The 7th Lord (Kalatrādhipati)',
      subtitle: 'The Ruler Guiding the Timing of Union',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      tag: 'Sign Ruler Dignity',
      description: 'The planetary ruler of the sign in the 7th house is called the 7th Lord. Its dignity (exalted, own sign, moolatrikona, friendly, or debilitated) and house placement (1st, 2nd, 7th, 9th, 11th) determine whether marriage occurs at an early age (22-26), normal age (26-30), or mature age (30+).',
      keyTakeaway: 'Placement in Kendra or Trikona houses ensures seamless alliance talks with elder support.'
    },
    {
      title: '3. Venus (Shukra) & Jupiter (Guru)',
      subtitle: 'Natural Karakas (Significators) of Marriage',
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      tag: 'Divine Karakas',
      description: 'Venus (Shukra) is the universal Karaka for romantic attraction, marital harmony, and partner joy for all charts (and specifically the wife significator in male charts). Jupiter (Guru) represents divine sanction, dharma, and the husband significator in female charts.',
      keyTakeaway: 'An un-afflicted Karaka brings mutual respect and emotional loyalty to the matrimony.'
    },
    {
      title: '4. Vimshottari Dasha Periods',
      subtitle: 'The Planetary Clock Activating the Marriage Yoga',
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      tag: 'Dasha Activation',
      description: 'Even if all planetary yogas exist in a birth chart, the wedding only takes place when the operating Vimshottari Mahadasha, Antardasha, or Pratyantardasha is connected to the 7th house, 7th lord, 2nd house (family expansion), or 11th house (wishes fulfilled).',
      keyTakeaway: 'The exact year and month of marriage are pinpointed using auspicious Dasha sub-periods.'
    },
    {
      title: '5. Navamsa (D9) Divisional Chart',
      subtitle: 'The Ultimate Micro-Chart of Soul Bonding',
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      tag: 'D9 Confirmation',
      description: 'The Navamsa (D9) chart is the most vital divisional chart (Varga) in Vedic astrology. It divides each sign into nine 3°20\' segments to assess inner spiritual compatibility, partner character, and the quality of life after solemnizing marriage.',
      keyTakeaway: 'A strong D9 7th house guarantees enduring companionship and shared spiritual values.'
    },
    {
      title: '6. Double Transit Theory (Dwi-Gochar)',
      subtitle: 'Simultaneous Jupiter & Saturn Transit Alignment',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      tag: 'Gochar Trigger',
      description: 'According to Maharishi Parashara and modern masters (like K.N. Rao), marriage occurs ONLY when both Jupiter (Guru) and Saturn (Shani) simultaneously influence the 7th house, 7th lord, or Lagna by transit position or planetary aspect.',
      keyTakeaway: 'Saturn creates the societal commitment and responsibility, while Jupiter gives the divine auspicious blessing.'
    },
  ];

  return (
    <section id="how-it-works" className="py-16 scroll-mt-24 relative z-20 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Classical Astrological Methodology</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white mb-4">
            How Your Marriage Timing <span className="gold-gradient-text">Is Calculated</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Unlike generic sun-sign horoscopes, our Vedic calculator evaluates the sacred 6-pillar framework of classical Parashari Jyotish to pinpoint the exact timing window of matrimonial union.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-2.5">
            {pillars.map((pillar, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full p-4 rounded-xl text-left transition-all cursor-pointer border flex items-center justify-between gap-3 ${isActive
                      ? 'bg-gradient-to-r from-amber-950/70 to-slate-900 border-amber-400/80 shadow-lg shadow-amber-950/30'
                      : 'bg-slate-900/50 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-amber-500/20 border border-amber-400/40' : 'bg-slate-800 border border-slate-700'
                      }`}>
                      {pillar.icon}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {pillar.title}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[200px] sm:max-w-xs">
                        {pillar.subtitle}
                      </div>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${isActive ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                    {pillar.tag}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div className="cosmic-card p-6 sm:p-8 border-amber-500/30 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300">
                      {pillars[activeStep].icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                        Vedic Principle #{activeStep + 1}
                      </span>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                        {pillars[activeStep].title}
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    {pillars[activeStep].tag}
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 space-y-3">
                  <p>{pillars[activeStep].description}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/20 text-xs sm:text-sm text-amber-200/90">
                  <strong className="text-amber-400 block mb-1">✦ Key Astrological Takeaway:</strong>
                  {pillars[activeStep].keyTakeaway}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  ← Previous Principle
                </button>
                <span className="text-slate-500">
                  {activeStep + 1} of {pillars.length}
                </span>
                <button
                  type="button"
                  disabled={activeStep === pillars.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(pillars.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer font-semibold"
                >
                  Next Principle →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
