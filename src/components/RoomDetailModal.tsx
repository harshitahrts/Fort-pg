import React, { useState } from 'react';
import { X, Check, Bed, Shield, Eye, Calendar, Sparkles, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { RoomOption } from '../types';

interface RoomDetailModalProps {
  room: RoomOption | null;
  onClose: () => void;
  onOpenBooking: (roomType: string, isVisit?: boolean) => void;
  onOpenVirtualTour: (roomType: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onOpenBooking,
  onOpenVirtualTour,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD8] my-8 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar with Close Button */}
        <div className="bg-[#5D6D4E] text-[#FDFBF7] p-5 sm:p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A373]">
              Room Specifications & Floorplan
            </span>
            <h3 className="font-serif text-2xl font-bold">
              {room.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#4B5A3D] hover:bg-[#3D4932] text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Gallery Carousel */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#F2F4ED] border border-[#E9E2D5]">
              <img
                src={room.gallery[activeImageIndex] || room.image}
                alt={room.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveImageIndex((activeImageIndex - 1 + room.gallery.length) % room.gallery.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImageIndex((activeImageIndex + 1) % room.gallery.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full">
                {activeImageIndex + 1} / {room.gallery.length}
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {room.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 aspect-[16/10] rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[#5D6D4E] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Pricing & Floorplan Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5]">
              <span className="text-xs text-[#7A856F]">Monthly All-Inclusive Rent</span>
              <div className="font-serif text-2xl font-bold text-[#1F241C] mt-0.5">
                ₹{room.pricePerMonth.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-[#5D6D4E] font-semibold">Includes 4 meals & Wi-Fi</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5]">
              <span className="text-xs text-[#7A856F]">Refundable Security Deposit</span>
              <div className="font-serif text-2xl font-bold text-[#1F241C] mt-0.5">
                ₹{room.deposit.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-[#7A856F]">Zero Brokerage</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5]">
              <span className="text-xs text-[#7A856F]">Room Size & Layout</span>
              <div className="font-serif text-2xl font-bold text-[#1F241C] mt-0.5">
                {room.areaSqFt} sq.ft
              </div>
              <span className="text-[10px] text-[#5D6D4E] font-semibold">Ensuite Bath Attached</span>
            </div>
          </div>

          {/* Room Description */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#1F241C] mb-1.5">
              Room Architectural Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#5F6955] leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Full Features Checklist */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#1F241C] mb-3">
              Standard Furniture & Room Amenities Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#2D3328]">
              {room.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-[#F2F4ED] border border-[#E9E2D5]/60">
                  <Check className="w-4 h-4 text-[#5D6D4E] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#E9E2D5] flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenVirtualTour(room.type);
              }}
              className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#5D6D4E] bg-[#E9EEDD] hover:bg-[#DDE4C8] border border-[#DDE4C8] flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>Launch 360° Virtual Tour</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenBooking(room.type, true);
              }}
              className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#1F241C] bg-[#F2F4ED] hover:bg-[#E9E2D5] border border-[#E9E2D5] flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#5D6D4E]" />
              <span>Schedule Room Visit</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenBooking(room.type, false);
              }}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-[#FDFBF7] bg-[#5D6D4E] hover:bg-[#4B5A3D] shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Reserve {room.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
