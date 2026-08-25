import React, { useState } from 'react';
import { Bed, Users, Shield, Check, Eye, Sparkles, ArrowRight, Zap, Info, ChevronRight, Calendar } from 'lucide-react';
import { ROOMS } from '../data/mockData';
import { RoomOption, RoomType } from '../types';

interface RoomsSectionProps {
  onSelectRoom: (room: RoomOption) => void;
  onOpenBooking: (roomType?: string, isVisit?: boolean) => void;
  onOpenVirtualTour: (roomType?: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onSelectRoom,
  onOpenBooking,
  onOpenVirtualTour,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | RoomType>('all');

  const filteredRooms = selectedFilter === 'all' 
    ? ROOMS 
    : ROOMS.filter(r => r.type === selectedFilter);

  return (
    <section id="rooms" className="py-20 bg-[#F2F4ED] border-t border-b border-[#E9E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E9EEDD] text-[#5D6D4E] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#DDE4C8]">
            <span>Room Categories & Pricing</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F241C] tracking-tight">
            Designed for Serene Study & Rest
          </h2>
          <p className="text-[#5F6955] text-sm sm:text-base">
            Every room is fully air-conditioned and fitted with orthopedic memory foam bedding, dedicated study stations, lockable wardrobes, and ensuite washrooms.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#E9E2D5]/70 border border-[#E9E2D5] gap-1 mt-4">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#5D6D4E] text-[#FDFBF7] shadow-xs'
                  : 'text-[#5F6955] hover:text-[#1F241C] hover:bg-[#FDFBF7]/50'
              }`}
            >
              All Rooms ({ROOMS.length})
            </button>
            <button
              onClick={() => setSelectedFilter('single')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === 'single'
                  ? 'bg-[#5D6D4E] text-[#FDFBF7] shadow-xs'
                  : 'text-[#5F6955] hover:text-[#1F241C] hover:bg-[#FDFBF7]/50'
              }`}
            >
              Single Occupancy
            </button>
            <button
              onClick={() => setSelectedFilter('double')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === 'double'
                  ? 'bg-[#5D6D4E] text-[#FDFBF7] shadow-xs'
                  : 'text-[#5F6955] hover:text-[#1F241C] hover:bg-[#FDFBF7]/50'
              }`}
            >
              Double Sharing
            </button>
            <button
              onClick={() => setSelectedFilter('triple')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === 'triple'
                  ? 'bg-[#5D6D4E] text-[#FDFBF7] shadow-xs'
                  : 'text-[#5F6955] hover:text-[#1F241C] hover:bg-[#FDFBF7]/50'
              }`}
            >
              Triple Sharing
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-[#FDFBF7] rounded-3xl overflow-hidden border border-[#E9E2D5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              {/* Room Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge Tag */}
                {room.badge && (
                  <div className="absolute top-4 left-4 bg-[#5D6D4E] text-[#FDFBF7] text-xs font-semibold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#D4A373]" />
                    <span>{room.badge}</span>
                  </div>
                )}

                {/* Live Availability Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[#1F241C] text-xs font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#5D6D4E] animate-pulse" />
                  <span>{room.availableBeds} beds available</span>
                </div>

                {/* 360 Tour Quick Button */}
                <button
                  onClick={() => onOpenVirtualTour(room.type)}
                  className="absolute bottom-3 right-3 bg-black/70 hover:bg-black text-white text-xs font-medium px-3 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>360° View</span>
                </button>

                <div className="absolute bottom-3 left-4 text-white text-xs font-medium">
                  {room.areaSqFt} sq.ft • Ensuite Kohler Bath
                </div>
              </div>

              {/* Room Details & Pricing Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-serif text-xl font-bold text-[#1F241C] group-hover:text-[#5D6D4E] transition-colors">
                      {room.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#7A856F] mb-4">
                    {room.subtitle}
                  </p>

                  {/* Monthly Pricing Block */}
                  <div className="p-3.5 rounded-2xl bg-[#FAF5F0] border border-[#E9E2D5] mb-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl font-bold font-serif text-[#1F241C]">
                          ₹{room.pricePerMonth.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-[#7A856F]"> / month</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#5D6D4E] bg-[#E9EEDD] px-2 py-0.5 rounded-md">
                        All-Inclusive
                      </span>
                    </div>
                    <div className="text-[11px] text-[#5F6955] mt-1.5 flex items-center justify-between border-t border-[#E9E2D5]/60 pt-1.5">
                      <span>Refundable Deposit: ₹{room.deposit.toLocaleString('en-IN')}</span>
                      <span className="text-[#B87A44] font-semibold">Zero Brokerage</span>
                    </div>
                  </div>

                  {/* Included Amenities Checklist */}
                  <div className="space-y-2 mb-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#5F6955]">
                      Included in this room:
                    </div>
                    <div className="grid grid-cols-1 gap-1.5 text-xs text-[#353D2F]">
                      {room.features.slice(0, 6).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#5D6D4E] shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2 border-t border-[#E9E2D5]">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectRoom(room)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-[#1F241C] bg-[#F2F4ED] hover:bg-[#E9E2D5] border border-[#E9E2D5] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-[#5D6D4E]" />
                      <span>Full Specs</span>
                    </button>

                    <button
                      onClick={() => onOpenBooking(room.type, true)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-[#5D6D4E] bg-[#E9EEDD] hover:bg-[#DDE4C8] border border-[#DDE4C8] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Visit Room</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onOpenBooking(room.type, false)}
                    className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-[#FDFBF7] bg-[#5D6D4E] hover:bg-[#4B5A3D] shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Reserve {room.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Note on Transparency & Inclusions */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FDFBF7] border border-[#E9E2D5] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#E9EEDD] flex items-center justify-center text-[#5D6D4E] shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1F241C]">
                What is included in the monthly rent?
              </h4>
              <p className="text-xs text-[#5F6955]">
                4 daily meals, AC electricity allowance, 500 Mbps Wi-Fi, daily housekeeping, 100% generator power backup & gym/lounge access. No surprises.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking(undefined, false)}
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#5D6D4E] bg-[#E9EEDD] hover:bg-[#DDE4C8] transition-colors border border-[#DDE4C8] cursor-pointer"
          >
            Download Fee Structure PDF
          </button>
        </div>

      </div>
    </section>
  );
};
