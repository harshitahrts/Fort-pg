import React, { useState } from 'react';
import { X, Utensils, Coffee, Leaf, Award, Sun, Moon, Clock, ShieldCheck, Heart } from 'lucide-react';
import { WEEKLY_MENU } from '../data/mockData';

interface WeeklyMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WeeklyMenuModal: React.FC<WeeklyMenuModalProps> = ({ isOpen, onClose }) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  if (!isOpen) return null;

  const currentMenu = WEEKLY_MENU[activeDayIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD8] my-8 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#5D6D4E] text-[#FDFBF7] p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#4B5A3D] flex items-center justify-center text-[#D4A373]">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A373]">
                Nutritious & Homestyle Dining
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                7-Day Rotating Chef Menu
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#4B5A3D] hover:bg-[#3D4932] text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Day Selector Tabs */}
        <div className="p-4 bg-[#F2F4ED] border-b border-[#E9E2D5] flex items-center gap-2 overflow-x-auto">
          {WEEKLY_MENU.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDayIndex(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeDayIndex === idx
                  ? 'bg-[#5D6D4E] text-[#FDFBF7] shadow-xs'
                  : 'bg-[#FDFBF7] text-[#5F6955] border border-[#E9E2D5] hover:bg-[#E9E2D5]'
              }`}
            >
              {item.day}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          
          {/* Day Highlight Banner */}
          <div className="flex items-center justify-between border-b border-[#E9E2D5] pb-4">
            <div>
              <span className="text-xs font-bold text-[#5D6D4E] uppercase tracking-wider">
                Full Day Menu Schedule
              </span>
              <h4 className="font-serif text-2xl font-bold text-[#1F241C]">
                {currentMenu.day}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] bg-[#E9EEDD] text-[#5D6D4E] font-semibold px-3 py-1 rounded-full flex items-center gap-1 border border-[#DDE4C8]">
                <Leaf className="w-3 h-3 text-[#5D6D4E]" />
                Pure Veg & Jain Counter
              </span>
            </div>
          </div>

          {/* 4 Meals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Breakfast */}
            <div className="p-5 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5] space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#5D6D4E] uppercase tracking-wider">
                  <Coffee className="w-4 h-4" />
                  <span>Breakfast</span>
                </div>
                <span className="text-[10px] text-[#7A856F]">7:30 AM – 9:30 AM</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1F241C] font-medium leading-relaxed">
                {currentMenu.breakfast}
              </p>
            </div>

            {/* Lunch */}
            <div className="p-5 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5] space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#5D6D4E] uppercase tracking-wider">
                  <Sun className="w-4 h-4 text-[#B87A44]" />
                  <span>Wholesome Lunch</span>
                </div>
                <span className="text-[10px] text-[#7A856F]">12:30 PM – 2:30 PM</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1F241C] font-medium leading-relaxed">
                {currentMenu.lunch}
              </p>
              <span className="text-[10px] text-[#5D6D4E] block">Packed college/office dabbas available on request</span>
            </div>

            {/* High Tea & Evening Snacks */}
            <div className="p-5 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5] space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#5D6D4E] uppercase tracking-wider">
                  <Coffee className="w-4 h-4 text-[#B87A44]" />
                  <span>Evening Snacks & Chai</span>
                </div>
                <span className="text-[10px] text-[#7A856F]">5:00 PM – 6:30 PM</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1F241C] font-medium leading-relaxed">
                {currentMenu.snacks}
              </p>
            </div>

            {/* Dinner */}
            <div className="p-5 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5] space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#5D6D4E] uppercase tracking-wider">
                  <Moon className="w-4 h-4 text-[#5D6D4E]" />
                  <span>Homestyle Dinner</span>
                </div>
                <span className="text-[10px] text-[#7A856F]">8:00 PM – 10:00 PM</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1F241C] font-medium leading-relaxed">
                {currentMenu.dinner}
              </p>
            </div>

          </div>

          {/* Kitchen Standards Trust Box */}
          <div className="p-4 rounded-2xl bg-[#E9EEDD] border border-[#DDE4C8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#1F241C]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#5D6D4E] shrink-0" />
              <span>
                <strong>Hygienic Standards:</strong> FSSAI certified kitchen, RO water preparation, daily temperature logs, and separate Jain cutlery.
              </span>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 px-4 py-1.5 rounded-xl bg-[#5D6D4E] hover:bg-[#4B5A3D] text-[#FDFBF7] font-semibold text-xs cursor-pointer"
            >
              Close Menu
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
