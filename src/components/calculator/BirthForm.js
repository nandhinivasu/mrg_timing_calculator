'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, Lock, Globe, MapPin, ChevronDown, AlertCircle, ArrowRight } from 'lucide-react';
import { CityAutocomplete } from './CityAutocomplete';
import { SectionBackground } from '@/components/ui/SectionBackground';

export function BirthForm({ onCalculate, isLoading, initialValues }) {
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState(
    initialValues || {
      name: '',
      gender: 'female',
      day: 15,
      month: 8,
      year: 1998,
      hour: 8,
      minute: 30,
      period: 'AM',
      birthPlace: 'New Delhi, Delhi, India',
      latitude: 28.6139,
      longitude: 77.209,
      timezone: 'Asia/Kolkata',
    }
  );

  const [selectedCountry, setSelectedCountry] = useState('India');
  const [errors, setErrors] = useState({});

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.birthPlace.trim()) {
      errs.birthPlace = 'Please select or enter your birth place.';
    }

    const maxDays = daysInMonth(formData.month, formData.year);
    if (formData.day > maxDays) {
      errs.day = `Selected month only has ${maxDays} days.`;
    }

    if (formData.year < 1940 || formData.year > currentYear) {
      errs.year = `Year must be between 1940 and ${currentYear}.`;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onCalculate(formData);
    }
  };

  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  return (
    <section id="calculator" className="scroll-mt-16 py-12 sm:py-16 relative z-20 bg-[#FAF5F7] border-b border-rose-100/60 overflow-hidden">
      {/* Background Decorative Watermark Elements */}
      <SectionBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Header Section with Intertwined Rings and Heart */}
        <div className="text-center mb-8 sm:mb-10 space-y-3">
          {/* Decorative Divider with Wedding Rings & Heart */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C28AA9] to-[#8B1E5A]" />
            <div className="text-[#8B1E5A] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#8B1E5A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4.5c.6-1 2-1.5 3-.8 1.2.9 1 2.5 0 3.8L12 10.5 9 7.5c-1-1.3-1.2-2.9 0-3.8 1-.7 2.4-.2 3 .8z" fill="#E11D48" stroke="#E11D48" />
                <circle cx="8" cy="14" r="4.5" />
                <circle cx="16" cy="14" r="4.5" />
              </svg>
            </div>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C28AA9] to-[#8B1E5A]" />
          </div>

          {/* Heading */}
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B162C] tracking-tight">
            Check Your Marriage Timing, <span className="text-[#6D144E]">Free</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-[#55475B] max-w-xl mx-auto leading-relaxed">
            Your birth details stay private. We use them only to read your 7th house, Venus and Mars, and they are never stored or shared.
          </p>
        </div>

        {/* Main White Elevated Form Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl shadow-rose-950/5 border border-rose-100/80 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
            {/* Row 1: Name & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4">
              {/* Your Name */}
              <div className="sm:col-span-7">
                <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2B162C] mb-1.5">
                  <User className="w-4 h-4 text-[#8B1E5A]" />
                  <span>Your Name</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="Enter your full name"
                    className={`w-full h-11 sm:h-12 px-3.5 sm:px-4 bg-white border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200/90 focus:border-[#8B1E5A]'
                      } rounded-xl text-slate-800 font-medium placeholder:text-slate-400 placeholder:font-normal text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E5A]/20 transition-all shadow-xs`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Gender */}
              <div className="sm:col-span-5">
                <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2B162C] mb-1.5">
                  <span className="text-[#8B1E5A] text-sm">⚧</span>
                  <span>Gender</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#8B1E5A] pointer-events-none font-bold">
                    {formData.gender === 'female' ? '♀' : '♂'}
                  </span>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full h-11 sm:h-12 pl-8 pr-9 bg-white border border-slate-200/90 rounded-xl text-slate-800 text-sm font-medium focus:outline-none focus:border-[#8B1E5A] focus:ring-2 focus:ring-[#8B1E5A]/20 cursor-pointer appearance-none shadow-xs"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A]/70 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 2: Select Your Birth Date */}
            <div>
              <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2B162C] mb-1.5">
                <Calendar className="w-4 h-4 text-[#8B1E5A]" />
                <span>Select Your Birth Date</span>
              </label>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {/* Day */}
                <div className="relative">
                  <Calendar className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A]/70 pointer-events-none" />
                  <select
                    value={formData.day}
                    onChange={(e) => setFormData({ ...formData, day: parseInt(e.target.value) })}
                    className="w-full h-11 sm:h-12 pl-8 sm:pl-9 pr-3 sm:pr-8 bg-white border border-slate-200/90 rounded-xl text-slate-800 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#8B1E5A] focus:ring-2 focus:ring-[#8B1E5A]/20 cursor-pointer appearance-none shadow-xs"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        {d < 10 ? `0${d}` : d} Day
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A]/70 pointer-events-none" />
                </div>

                {/* Month */}
                <div className="relative">
                  <Calendar className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A]/70 pointer-events-none" />
                  <select
                    value={formData.month}
                    onChange={(e) => setFormData({ ...formData, month: parseInt(e.target.value) })}
                    className="w-full h-11 sm:h-12 pl-8 sm:pl-9 pr-6 sm:pr-8 bg-white border border-slate-200/90 rounded-xl text-slate-800 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#8B1E5A] focus:ring-2 focus:ring-[#8B1E5A]/20 cursor-pointer appearance-none truncate shadow-xs"
                  >
                    {months.map((m) => (
                      <option key={m.value} value={m.value}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A]/70 pointer-events-none" />
                </div>

                {/* Year */}
                <div className="relative">
                  <Calendar className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A]/70 pointer-events-none" />
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                    className="w-full h-11 sm:h-12 pl-8 sm:pl-9 pr-3 sm:pr-8 bg-white border border-slate-200/90 rounded-xl text-slate-800 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#8B1E5A] focus:ring-2 focus:ring-[#8B1E5A]/20 cursor-pointer appearance-none shadow-xs"
                  >
                    {Array.from({ length: 70 }, (_, i) => currentYear - i).map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A]/70 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 3: Select Your Birth Time */}
            <div>
              <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2B162C] mb-1.5">
                <Clock className="w-4 h-4 text-[#8B1E5A]" />
                <span>Select Your Birth Time</span>
              </label>

              <div className="grid grid-cols-12 gap-2 sm:gap-3">
                {/* Hour */}
                <div className="col-span-5 relative">
                  <Clock className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A]/70 pointer-events-none" />
                  <select
                    value={formData.hour}
                    onChange={(e) => setFormData({ ...formData, hour: parseInt(e.target.value) })}
                    className="w-full h-11 sm:h-12 pl-8 sm:pl-9 pr-7 sm:pr-8 bg-white border border-slate-200/90 rounded-xl text-slate-800 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#8B1E5A] focus:ring-2 focus:ring-[#8B1E5A]/20 cursor-pointer appearance-none shadow-xs"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                      <option key={h} value={h}>
                        {h < 10 ? `0${h}` : h} Hour
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A]/70 pointer-events-none" />
                </div>

                {/* Minute */}
                <div className="col-span-4 relative">
                  <Clock className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A]/70 pointer-events-none" />
                  <select
                    value={formData.minute}
                    onChange={(e) => setFormData({ ...formData, minute: parseInt(e.target.value) })}
                    className="w-full h-11 sm:h-12 pl-8 sm:pl-9 pr-6 sm:pr-8 bg-white border border-slate-200/90 rounded-xl text-slate-800 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#8B1E5A] focus:ring-2 focus:ring-[#8B1E5A]/20 cursor-pointer appearance-none shadow-xs"
                  >
                    {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                      <option key={m} value={m}>
                        {m < 10 ? `0${m}` : m} Min
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A]/70 pointer-events-none" />
                </div>

                {/* Period AM/PM */}
                <div className="col-span-3 relative">
                  <select
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    className="w-full h-11 sm:h-12 px-2.5 sm:px-3 bg-white border border-slate-200/90 rounded-xl text-slate-800 text-xs sm:text-sm font-bold focus:outline-none focus:border-[#8B1E5A] focus:ring-2 focus:ring-[#8B1E5A]/20 cursor-pointer appearance-none text-center shadow-xs"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8B1E5A] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 4: Select Your Birth Place */}
            <div>
              <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2B162C] mb-1.5">
                <MapPin className="w-4 h-4 text-[#8B1E5A]" />
                <span>Select Your Birth Place</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-3">
                {/* Country */}
                <div className="sm:col-span-5 relative">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A] pointer-events-none" />
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full h-11 sm:h-12 pl-9 pr-8 bg-white border border-slate-200/90 rounded-xl text-slate-800 text-sm font-medium focus:outline-none focus:border-[#8B1E5A] focus:ring-2 focus:ring-[#8B1E5A]/20 cursor-pointer appearance-none shadow-xs"
                  >
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="Other">Worldwide / Other</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B1E5A]/70 pointer-events-none" />
                </div>

                {/* City Autocomplete */}
                <div className="sm:col-span-7">
                  <CityAutocomplete
                    value={formData.birthPlace}
                    onChange={(cityName, cityData) => {
                      setFormData({
                        ...formData,
                        birthPlace: cityName,
                        latitude: cityData?.lat,
                        longitude: cityData?.lng,
                        timezone: cityData?.timezone,
                      });
                      if (errors.birthPlace) setErrors({ ...errors, birthPlace: '' });
                    }}
                    error={errors.birthPlace}
                  />
                </div>
              </div>
              {errors.birthPlace && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.birthPlace}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-3">
              <button
                type="submit"
                disabled={isLoading}
                id="calculate-submit-btn"
                className="w-full h-12 sm:h-14 rounded-xl font-bold text-sm sm:text-base md:text-lg bg-gradient-to-r from-[#6D144E] via-[#851859] to-[#6D144E] hover:from-[#5A0F40] hover:via-[#6D144E] hover:to-[#5A0F40] text-white flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer shadow-lg shadow-[#6D144E]/25 hover:shadow-[#6D144E]/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-75 disabled:cursor-not-allowed group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Calculating Vedic Planetary Periods...</span>
                  </>
                ) : (
                  <>
                    {/* Intertwined Wedding Rings Icon */}
                    <svg className="w-5 h-5 text-pink-200 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 4.5c.6-1 2-1.5 3-.8 1.2.9 1 2.5 0 3.8L12 10.5 9 7.5c-1-1.3-1.2-2.9 0-3.8 1-.7 2.4-.2 3 .8z" fill="#F43F5E" stroke="#F43F5E" />
                      <circle cx="8" cy="14" r="4.5" />
                      <circle cx="16" cy="14" r="4.5" />
                    </svg>
                    <span>Calculate My Marriage Timing</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-pink-200 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* Privacy Reassurance Note */}
            <div className="flex items-center justify-center gap-2 text-xs text-[#6B5B6E] text-center pt-2">
              <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>100% Private &amp; Secure</span>
              <span className="text-slate-300">|</span>
              <span>No Data Stored</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
