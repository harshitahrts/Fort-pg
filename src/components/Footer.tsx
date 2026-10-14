import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  Heart, 
  Clock, 
  GraduationCap, 
  ExternalLink,
  Calendar,
  Sparkles
} from 'lucide-react';
import { PG_INFO } from '../data/mockData';
import { TFCrestIcon } from './TFCrestIcon';

interface FooterProps {
  onOpenBooking: (roomType?: string, isVisit?: boolean) => void;
  onOpenParentDossier: () => void;
  onOpenMenuModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenParentDossier,
  onOpenMenuModal,
}) => {
  return (
    <footer id="footer" className="bg-[#1F241C] text-[#FDFBF7] pt-16 pb-24 sm:pb-16 border-t border-[#2D3328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <TFCrestIcon className="w-12 h-12" variant="light" />
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight block">
                  The Fort House
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D4A373] font-semibold">
                  Boutique Girls Residence • South Mumbai
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              South Mumbai’s premier luxury girls-only PG residence. Offering uncompromised safety, 4-meal chef dining, and boutique hotel comfort near St. Xavier's, HR, KC & Jai Hind College.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-[#E9EEDD] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#889B73]" />
                <span>24/7 Security & Female Warden on Duty</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Gate Curfew: 10:30 PM (Digital parent late-pass available)
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links & Pages (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#E9EEDD]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <a href="#hero" className="hover:text-[#D4A373] transition-colors">Home Overview</a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#D4A373] transition-colors">Rooms & Monthly Rates</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#D4A373] transition-colors">Comprehensive Amenities</a>
              </li>
              <li>
                <a href="#virtual-tour" className="hover:text-[#D4A373] transition-colors">360° Virtual Tour</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#D4A373] transition-colors">Fort Mumbai Map</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4A373] transition-colors">HD Photo Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#D4A373] transition-colors">Verified Reviews</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4A373] transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Nearby Top Colleges (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#E9EEDD]">
              Walking Distance Colleges
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center justify-between">
                <span>St. Xavier's College</span>
                <span className="text-[#889B73] font-semibold text-[11px]">5 min walk</span>
              </li>
              <li className="flex items-center justify-between">
                <span>H.R. College of Commerce</span>
                <span className="text-[#889B73] font-semibold text-[11px]">9 min walk</span>
              </li>
              <li className="flex items-center justify-between">
                <span>K.C. College</span>
                <span className="text-[#889B73] font-semibold text-[11px]">10 min walk</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Jai Hind College</span>
                <span className="text-[#889B73] font-semibold text-[11px]">14 min walk</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Government Law College</span>
                <span className="text-[#889B73] font-semibold text-[11px]">10 min walk</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Churchgate Station</span>
                <span className="text-[#889B73] font-semibold text-[11px]">8 min walk</span>
              </li>
              <li className="flex items-center justify-between">
                <span>CSMT & Metro Line 3</span>
                <span className="text-[#889B73] font-semibold text-[11px]">7 min walk</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Admissions & Visiting Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#E9EEDD]">
              Admissions & Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#889B73] shrink-0 mt-0.5" />
                <span>{PG_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#889B73] shrink-0" />
                <a href={`tel:${PG_INFO.phone}`} className="hover:text-white">{PG_INFO.phone}</a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#889B73] shrink-0" />
                <a href={`mailto:${PG_INFO.email}`} className="hover:text-white">{PG_INFO.email}</a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#889B73] shrink-0" />
                <span>Visiting Hours: 10:00 AM – 7:00 PM</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => onOpenBooking(undefined, true)}
                className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-[#5D6D4E] hover:bg-[#4B5A3D] text-white text-center transition-colors cursor-pointer"
              >
                Schedule an In-Person Property Visit
              </button>

              <button
                onClick={onOpenParentDossier}
                className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white text-center transition-colors cursor-pointer"
              >
                Parent Safety Dossier PDF
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} The Fort House. All rights reserved. Registered Luxury Girls PG, Fort, Mumbai.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={onOpenParentDossier} className="hover:underline cursor-pointer">Security Protocol</button>
            <button onClick={onOpenMenuModal} className="hover:underline cursor-pointer">Food Hygiene Policy</button>
            <a href="#faq" className="hover:underline">Move-In KYC Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
