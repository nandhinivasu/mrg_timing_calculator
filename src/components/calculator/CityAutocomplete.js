'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Check, X } from 'lucide-react';
import { POPULAR_CITIES } from '@/lib/cities-data';

export function CityAutocomplete({ value, onChange, error }) {
  const [query, setQuery] = useState(value || '');
  const [prevValue, setPrevValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);

  if (value !== prevValue) {
    setPrevValue(value);
    setQuery(value || '');
  }

  const filteredCities = (query || '').trim() === ''
    ? POPULAR_CITIES.slice(0, 8)
    : POPULAR_CITIES.filter((c) =>
      `${c.name} ${c.stateCountry}`.toLowerCase().includes(query.toLowerCase())
    );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (city) => {
    const formatted = `${city.name}, ${city.stateCountry}`;
    setQuery(formatted);
    onChange(formatted, city);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const newVal = e.target.value;
    setQuery(newVal);
    onChange(newVal);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < filteredCities.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : filteredCities.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < filteredCities.length) {
        handleSelect(filteredCities[highlightedIndex]);
      } else if (query.trim()) {
        setIsOpen(false);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const renderHighlightedText = (text, highlight) => {
    if (!highlight || !highlight.trim()) return <span>{text}</span>;
    const parts = text.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="text-[#6D144E] font-extrabold bg-[#FCE8F3] px-0.5 rounded">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="relative flex items-center">
        <MapPin className="absolute left-3.5 w-4 h-4 text-[#8B1E5A] pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Type Birth City/District"
          className={`w-full h-11 sm:h-12 pl-9 pr-9 bg-white border ${error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-slate-200/90 focus:border-[#8B1E5A]'
            } rounded-xl text-slate-800 font-medium placeholder:text-slate-400 placeholder:font-normal text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E5A]/20 transition-all shadow-xs`}
          aria-label="Birth Place"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              onChange('');
            }}
            className="absolute right-3 p-1 text-slate-400 hover:text-[#8B1E5A] transition-colors cursor-pointer"
            title="Clear birth place"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute z-50 left-0 right-0 mt-1.5 max-h-60 overflow-y-auto bg-white border border-rose-100 rounded-xl shadow-2xl shadow-slate-900/10 divide-y divide-slate-100 animate-in fade-in-50 duration-150">
          <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-[#8B1E5A] uppercase bg-rose-50/60 sticky top-0 flex items-center justify-between border-b border-rose-100/60">
            <span>Suggested Locations</span>
            <span className="text-[10px] lowercase text-slate-500 font-normal">auto-coordinates mapped</span>
          </div>

          {filteredCities.length > 0 ? (
            filteredCities.map((city, idx) => {
              const isSelected = query.toLowerCase().includes(city.name.toLowerCase());
              const isHighlighted = idx === highlightedIndex;

              return (
                <button
                  key={`${city.name}-${city.stateCountry}`}
                  type="button"
                  onClick={() => handleSelect(city)}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  className={`w-full px-3.5 py-2.5 text-left text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${isHighlighted
                      ? 'bg-[#FCE8F3]/80 text-[#6D144E] font-semibold'
                      : isSelected
                        ? 'bg-[#FCE8F3]/40 text-[#6D144E]'
                        : 'text-slate-700 hover:bg-rose-50/60'
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8B1E5A] shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-800">
                        {renderHighlightedText(city.name, query)}
                      </span>
                      <span className="text-slate-500 text-xs ml-1.5">
                        ({renderHighlightedText(city.stateCountry, query)})
                      </span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#8B1E5A] shrink-0 font-bold" />}
                </button>
              );
            })
          ) : (
            <div className="p-3 text-xs text-slate-500 text-center">
              <span>No preset found. Press Enter to use <strong className="text-[#6D144E]">&quot;{query}&quot;</strong>.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
