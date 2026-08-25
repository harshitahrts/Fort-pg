import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { PG_INFO } from '../data/mockData';

interface MobileStickyBarProps {
  onOpenBooking: (roomType?: string, isVisit?: boolean) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div 
      id="mobile-sticky-bottom-bar"
      className="fixed bottom-0 left-0 right-0 z-30 bg-[#FDFBF7]/95 backdrop-blur-md border-t border-[#E9E2D5] p-2.5 px-3 sm:hidden shadow-lg"
    >
      <div className="grid grid-cols-12 gap-2 items-center">
        
        {/* Quick Call */}
        <a
          href={`tel:${PG_INFO.phone}`}
          className="col-span-3 py-2 px-2 rounded-xl bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C] text-xs font-semibold flex flex-col items-center justify-center gap-0.5"
          aria-label="Call admissions"
        >
          <Phone className="w-4 h-4 text-[#5D6D4E]" />
          <span className="text-[10px]">Call Now</span>
        </a>

        {/* Quick WhatsApp */}
        <a
          href={`https://wa.me/${PG_INFO.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20The%20Fort%20House%20Girls%20PG%20in%20Fort%2C%20Mumbai.`}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 py-2 px-2 rounded-xl bg-[#E9EEDD] border border-[#DDE4C8] text-[#5D6D4E] text-xs font-semibold flex flex-col items-center justify-center gap-0.5"
          aria-label="WhatsApp admissions"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[10px]">WhatsApp</span>
        </a>

        {/* Schedule Visit / Book CTA */}
        <button
          onClick={() => onOpenBooking(undefined, true)}
          className="col-span-6 py-2.5 px-3 rounded-xl bg-[#5D6D4E] hover:bg-[#4B5A3D] text-[#FDFBF7] text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Schedule Visit</span>
        </button>

      </div>
    </div>
  );
};
