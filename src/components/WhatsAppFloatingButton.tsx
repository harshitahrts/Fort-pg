import React, { useState } from 'react';
import { MessageCircle, X, Phone, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { PG_INFO } from '../data/mockData';

interface WhatsAppFloatingButtonProps {
  onOpenBooking: (roomType?: string, isVisit?: boolean) => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMsg = encodeURIComponent(
    "Hi The Fort House! I am looking for accommodation for the upcoming term in Fort, Mumbai. Could you share room availability and schedule a visit?"
  );

  return (
    <div id="whatsapp-floating-container" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      
      {/* Quick Action Flyout Card */}
      {isOpen && (
        <div 
          className="mb-3 w-72 sm:w-80 bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#E9E2D5] overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Card Header */}
          <div className="bg-[#5D6D4E] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[#D4A373]">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm">Admissions WhatsApp</h4>
                <span className="text-[10px] text-[#E9EEDD] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] animate-pulse" />
                  Typically replies in 5 minutes
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Options List */}
          <div className="p-4 space-y-2.5 bg-[#F2F4ED] text-xs">
            <a
              href={`https://wa.me/${PG_INFO.whatsapp}?text=${defaultMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-2.5 rounded-xl bg-[#FDFBF7] hover:bg-[#E9EEDD] border border-[#E9E2D5] text-[#1F241C] font-medium flex items-center justify-between group transition-colors"
            >
              <span>💬 Chat with Admissions Team</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#5D6D4E] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking(undefined, true);
              }}
              className="w-full p-2.5 rounded-xl bg-[#FDFBF7] hover:bg-[#E9EEDD] border border-[#E9E2D5] text-[#1F241C] font-medium flex items-center justify-between group transition-colors text-left cursor-pointer"
            >
              <span>📅 Schedule Property Visit</span>
              <Calendar className="w-3.5 h-3.5 text-[#5D6D4E]" />
            </button>

            <a
              href={`tel:${PG_INFO.phone}`}
              className="w-full p-2.5 rounded-xl bg-[#FDFBF7] hover:bg-[#E9EEDD] border border-[#E9E2D5] text-[#1F241C] font-medium flex items-center justify-between group transition-colors"
            >
              <span>📞 Direct Call (+91 98200 45678)</span>
              <Phone className="w-3.5 h-3.5 text-[#B87A44]" />
            </a>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="whatsapp-fab-button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer relative"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A373] opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#B87A44] text-[9px] text-white font-bold items-center justify-center">
            1
          </span>
        </span>
      </button>

    </div>
  );
};
