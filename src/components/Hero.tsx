import React from 'react';
import { Shield, Sparkles, MapPin, CheckCircle2, Star, Calendar, ArrowRight, Eye, Utensils, HeartHandshake } from 'lucide-react';
import { PG_INFO } from '../data/mockData';

interface HeroProps {
  onOpenBooking: (roomType?: string, isVisit?: boolean) => void;
  onOpenVirtualTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenVirtualTour }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center bg-[#FDFBF7] overflow-hidden pt-6 pb-16 sm:pb-24">
      {/* Subtle Warm Natural Background Radial Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E9EEDD]/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#F5EBE1]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Trust Signals & Direct Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Top Location & Accreditation Pill */}
            <div className="inline-flex items-center gap-2 bg-[#F2F4ED] border border-[#DDE4C8] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#5D6D4E] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#5D6D4E] animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-[#5D6D4E]" />
              <span>South Mumbai • Kala Ghoda & Fort Heritage District</span>
            </div>

            {/* Main Required Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1F241C] tracking-tight leading-[1.15]">
                Safe. Comfortable. <br className="hidden sm:inline" />
                <span className="text-[#5D6D4E] italic font-serif">Premium Living</span> in Fort, Mumbai.
              </h1>
              <p className="text-base sm:text-lg text-[#5F6955] max-w-2xl leading-relaxed font-normal">
                South Mumbai’s premier boutique girls residence. Designed for ambitious students of <strong className="text-[#1F241C] font-semibold">St. Xavier’s, HR, KC, Jai Hind College</strong> and young professionals seeking unmatched security, chef-crafted 4-meal dining, and boutique hotel comfort.
              </p>
            </div>

            {/* Quick Feature Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F2F4ED] border border-[#E9E2D5]/80">
                <Shield className="w-4 h-4 text-[#5D6D4E] shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-[#1F241C] block">Biometric & CCTV</span>
                  <span className="text-[11px] text-[#7A856F]">24/7 Female Warden</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF5F0] border border-[#E9E2D5]/80">
                <Utensils className="w-4 h-4 text-[#B87A44] shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-[#1F241C] block">4 Meals Daily</span>
                  <span className="text-[11px] text-[#7A856F]">Chef Veg & Jain Menu</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F2F4ED] border border-[#E9E2D5]/80">
                <MapPin className="w-4 h-4 text-[#5D6D4E] shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-[#1F241C] block">5-Min to Colleges</span>
                  <span className="text-[11px] text-[#7A856F]">Zero Mumbai Commute</span>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* Primary Book a Visit CTA */}
              <button
                id="hero-book-visit-btn"
                onClick={() => onOpenBooking(undefined, true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-[#FDFBF7] bg-[#5D6D4E] hover:bg-[#4B5A3D] shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer text-center group"
              >
                <Calendar className="w-5 h-5 text-[#E9EEDD]" />
                <span>Book an In-Person Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Check Availability CTA */}
              <a
                id="hero-check-availability-btn"
                href="#rooms"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-[#1F241C] bg-[#F2F4ED] hover:bg-[#E9E2D5] border border-[#E9E2D5] transition-all duration-150 text-center cursor-pointer"
              >
                <span>Check Room Availability</span>
              </a>

              {/* 360 Virtual Tour CTA */}
              <button
                id="hero-virtual-tour-btn"
                onClick={onOpenVirtualTour}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-semibold text-[#5D6D4E] hover:text-[#3C4732] hover:bg-[#E9EEDD] transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>360° Virtual Tour</span>
              </button>
            </div>

            {/* Parent & Student Trust Indicator Bar */}
            <div className="pt-3 border-t border-[#E9E2D5] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#5F6955]">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-2">
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#FDFBF7] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Resident" />
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#FDFBF7] object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Resident" />
                  <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#FDFBF7] object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80" alt="Resident" />
                </div>
                <div className="flex items-center gap-1 text-[#B87A44]">
                  <Star className="w-3.5 h-3.5 fill-[#D4A373] text-[#D4A373]" />
                  <span className="font-bold text-[#1F241C]">4.9 / 5.0</span>
                </div>
                <span>(320+ Verified Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#5D6D4E] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#5D6D4E]" />
                <span>100% Parent Safety Guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase with Live Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Boutique Bedroom Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=85"
                  alt="The Fort House Luxury Girls PG Room"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Floating In-Image Badge: Fort South Mumbai */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-[#1F241C] flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Boutique Heritage Suites</span>
                </div>

                {/* Floating In-Image 360 Tour Trigger */}
                <button
                  onClick={onOpenVirtualTour}
                  className="absolute top-4 right-4 bg-[#1F241C]/80 hover:bg-[#1F241C] backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Take 360° Tour</span>
                </button>

                {/* Bottom Card Summary Inside Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-[#1F241C]">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5D6D4E]">
                      All-Inclusive Luxury Living
                    </span>
                    <span className="text-xs bg-[#F5EBE1] text-[#B87A44] font-semibold px-2 py-0.5 rounded-full">
                      Zero Brokerage
                    </span>
                  </div>
                  <div className="text-sm font-semibold">
                    Air Conditioned • Orthopedic Beds • Ensuite Baths
                  </div>
                  <div className="text-xs text-[#5F6955] mt-0.5 flex items-center justify-between">
                    <span>Starting from ₹18,500 / month</span>
                    <span className="text-[#5D6D4E] font-medium">Includes 4 Meals & Wi-Fi</span>
                  </div>
                </div>
              </div>

              {/* Floating Top-Right Stat Card */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#FDFBF7] p-3 sm:p-3.5 rounded-2xl shadow-xl border border-[#E9E2D5] hidden sm:flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#E9EEDD] flex items-center justify-center text-[#5D6D4E]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1F241C]">24/7 Female Warden</div>
                  <div className="text-[11px] text-[#5D6D4E] font-medium">On-Premises Round the Clock</div>
                </div>
              </div>

              {/* Floating Bottom-Left Occupancy & College Proximity Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#1F241C] text-[#FDFBF7] p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#353D2F] max-w-[240px] sm:max-w-[260px]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-semibold text-[#D4A373]">St. Xavier's & HR</span>
                  <span className="text-[10px] bg-[#5D6D4E] text-[#FDFBF7] px-1.5 py-0.5 rounded font-mono">
                    5 min walk
                  </span>
                </div>
                <p className="text-xs text-[#E9EEDD]/80">
                  Save 2+ hours daily. Zero train hassle in South Mumbai rains.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Key Real Estate & Service Statistics Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#E9E2D5]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5]">
              <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#5D6D4E]">
                {PG_INFO.stats.occupancy}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#1F241C] mt-1">Average Occupancy</div>
              <div className="text-[11px] text-[#7A856F]">High student retention</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5]">
              <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#5D6D4E]">
                {PG_INFO.stats.yearsOfService}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#1F241C] mt-1">Trusted Heritage Service</div>
              <div className="text-[11px] text-[#7A856F]">Serving Fort since 2017</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5]">
              <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#5D6D4E]">
                {PG_INFO.stats.residentsHosted}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#1F241C] mt-1">Happy Female Residents</div>
              <div className="text-[11px] text-[#7A856F]">Students & executives</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF5F0] border border-[#E9E2D5]">
              <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#B87A44]">
                {PG_INFO.stats.safetyScore}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#1F241C] mt-1">Safety Record</div>
              <div className="text-[11px] text-[#7A856F]">Zero security incidents</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
