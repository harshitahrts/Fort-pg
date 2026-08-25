import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  GraduationCap, 
  Train, 
  Coffee, 
  Cross, 
  ShoppingBag, 
  Clock, 
  Footprints, 
  Car, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { LOCATION_LANDMARKS, PG_INFO } from '../data/mockData';
import { LocationLandmark } from '../types';

export const LocationSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedLandmark, setSelectedLandmark] = useState<LocationLandmark>(LOCATION_LANDMARKS[0]);

  const categories = [
    { id: 'all', label: 'All Landmarks' },
    { id: 'college', label: 'Top Colleges (St. Xavier\'s, HR, KC)' },
    { id: 'transit', label: 'Trains & Transit (CSMT, Churchgate)' },
    { id: 'cafe', label: 'Cafes & Kala Ghoda' },
    { id: 'healthcare', label: 'Hospitals & Medical' },
    { id: 'shopping', label: 'Daily Needs & ATMs' },
  ];

  const filteredLandmarks = activeCategory === 'all'
    ? LOCATION_LANDMARKS
    : LOCATION_LANDMARKS.filter(l => l.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'college': return <GraduationCap className="w-4 h-4" />;
      case 'transit': return <Train className="w-4 h-4" />;
      case 'cafe': return <Coffee className="w-4 h-4" />;
      case 'healthcare': return <Cross className="w-4 h-4" />;
      case 'shopping': return <ShoppingBag className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  return (
    <section id="location" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E9EEDD] text-[#5D6D4E] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#DDE4C8]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Fort, South Mumbai Proximity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F241C] tracking-tight">
            Walk to Your College & Work in Minutes
          </h2>
          <p className="text-[#5F6955] text-sm sm:text-base">
            Located in the historic, safe Fort & Kala Ghoda heritage precinct. Zero suburban train rush, surrounded by iconic Victorian architecture and South Mumbai's top educational institutions.
          </p>

          {/* Category Filter Chips */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#5D6D4E] text-[#FDFBF7] shadow-xs'
                    : 'bg-[#F2F4ED] text-[#5F6955] border border-[#E9E2D5] hover:bg-[#E9E2D5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Map & Proximity Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Interactive Stylized Map Visualizer */}
          <div className="lg:col-span-7 bg-[#F2F4ED] rounded-3xl p-6 border border-[#E9E2D5] shadow-sm flex flex-col justify-between space-y-6">
            
            {/* Map Canvas Header */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5D6D4E]">
                  Interactive South Mumbai Map
                </span>
                <h3 className="font-serif text-lg font-bold text-[#1F241C]">
                  Fort & Churchgate District
                </h3>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PG_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#5D6D4E] hover:underline bg-[#E9EEDD] px-3 py-1.5 rounded-xl border border-[#DDE4C8]"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Stylized Interactive Map Schematic Container */}
            <div className="relative aspect-[16/11] bg-[#EFE9DF] rounded-2xl overflow-hidden border border-[#D8CEBE] shadow-inner p-4 select-none">
              {/* Background Architectural Roads / Grid lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5D6D4E" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Water Coastline Representation (Arabian Sea / Marine Drive) */}
              <div className="absolute top-0 bottom-0 left-0 w-12 bg-[#DCE6D2]/60 border-r-2 border-dashed border-[#5D6D4E]/40 flex items-center justify-center">
                <span className="text-[10px] uppercase tracking-widest text-[#5D6D4E]/70 -rotate-90 font-mono whitespace-nowrap font-bold">
                  Marine Drive & Arabian Sea
                </span>
              </div>

              {/* Central Pin: The Fort House PG */}
              <div className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="relative group cursor-pointer">
                  <span className="absolute -inset-2 rounded-full bg-[#D4A373]/60 animate-ping" />
                  <div className="relative bg-[#5D6D4E] text-[#FDFBF7] px-3 py-1.5 rounded-full font-serif font-bold text-xs shadow-xl border-2 border-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D4A373]" />
                    <span>The Fort House</span>
                  </div>
                </div>
              </div>

              {/* Interactive Landmark Markers */}
              {filteredLandmarks.map((landmark) => {
                const isSelected = selectedLandmark.id === landmark.id;
                return (
                  <button
                    key={landmark.id}
                    onClick={() => setSelectedLandmark(landmark)}
                    style={{ left: `${landmark.coordinates.x}%`, top: `${landmark.coordinates.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-transform duration-200 cursor-pointer ${
                      isSelected ? 'scale-125 z-40' : 'hover:scale-110'
                    }`}
                  >
                    <div className={`p-1.5 rounded-full shadow-md border flex items-center gap-1 ${
                      isSelected
                        ? 'bg-[#1F241C] text-white border-white'
                        : 'bg-white text-[#5D6D4E] border-[#E9E2D5]'
                    }`}>
                      {getCategoryIcon(landmark.category)}
                      {isSelected && (
                        <span className="text-[10px] font-semibold pr-1 whitespace-nowrap">
                          {landmark.name.split(' ')[0]}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}

              {/* Safety Patrol Assurance Badge on Map */}
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-medium text-[#1F241C] shadow-sm border border-[#E9E2D5] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5D6D4E]" />
                <span>24/7 Police Patrol & CCTV Zone</span>
              </div>
            </div>

            {/* Selected Landmark Highlight Box */}
            <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E9E2D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5D6D4E] bg-[#E9EEDD] px-2 py-0.5 rounded">
                    Selected Destination
                  </span>
                  <span className="text-xs font-semibold text-[#1F241C]">
                    {selectedLandmark.name}
                  </span>
                </div>
                <p className="text-xs text-[#5F6955]">
                  {selectedLandmark.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-1 text-xs font-bold text-[#5D6D4E] bg-[#F2F4ED] border border-[#E9E2D5] px-3 py-1.5 rounded-xl">
                  <Footprints className="w-4 h-4 text-[#5D6D4E]" />
                  <span>{selectedLandmark.walkingTime}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Proximity List & Time Estimator */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-4 rounded-2xl bg-[#E9EEDD] border border-[#DDE4C8] mb-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#5D6D4E] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Commute Stress in South Mumbai</span>
              </div>
              <p className="text-xs text-[#3C4732] mt-1">
                Students save up to 2.5 hours every day compared to living in suburbs like Bandra, Andheri or Chembur.
              </p>
            </div>

            <div className="space-y-2.5 max-h-[540px] overflow-y-auto pr-1">
              {filteredLandmarks.map((landmark) => {
                const isSelected = selectedLandmark.id === landmark.id;
                return (
                  <div
                    key={landmark.id}
                    onClick={() => setSelectedLandmark(landmark)}
                    className={`p-3.5 rounded-2xl border transition-all duration-150 cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#F2F4ED] border-[#5D6D4E] shadow-sm'
                        : 'bg-[#FDFBF7] border-[#E9E2D5] hover:bg-[#F2F4ED]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#5D6D4E] text-[#FDFBF7]' : 'bg-[#E9EEDD] text-[#5D6D4E]'
                      }`}>
                        {getCategoryIcon(landmark.category)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-xs sm:text-sm font-semibold text-[#1F241C]">
                            {landmark.name}
                          </h4>
                          {landmark.isKeyCollege && (
                            <span className="text-[9px] bg-[#F5EBE1] text-[#B87A44] font-bold px-1.5 py-0.5 rounded">
                              Top Pick
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#7A856F]">
                          {landmark.distance} away
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="inline-flex items-center gap-1 text-xs font-bold text-[#5D6D4E]">
                        <Footprints className="w-3.5 h-3.5" />
                        <span>{landmark.walkingTime}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
