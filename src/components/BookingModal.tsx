import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Building, 
  CheckCircle2, 
  Copy, 
  MessageCircle, 
  ShieldCheck
} from 'lucide-react';
import { PG_INFO } from '../data/mockData';
import { BookingInquiry, RoomType } from '../types';
import { TFCrestIcon } from './TFCrestIcon';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomType?: string;
  isVisitOnly?: boolean;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomType,
}) => {
  const [formData, setFormData] = useState<BookingInquiry>({
    fullName: '',
    age: '',
    phone: '',
    email: '',
    collegeOrCompany: '',
    preferredRoomType: (initialRoomType as RoomType) || 'double',
    moveInDate: '',
    durationMonths: '11 Months (Full Academic Year)',
    parentName: '',
    parentPhone: '',
    additionalNotes: '',
    visitDate: '',
    visitTimeSlot: '11:00 AM – 1:00 PM',
    isVisitOnly: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `TF-VISIT-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(generatedRef);
    setIsSubmitted(true);
  };

  const copyReference = () => {
    navigator.clipboard.writeText(bookingRef);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi The Fort House Admissions Team! My name is ${formData.fullName || 'a prospective student'}. ` +
    `I would like to schedule an in-person property visit to view the ${formData.preferredRoomType} room on ${formData.visitDate || 'this week'} (${formData.visitTimeSlot}). ` +
    `College/Company: ${formData.collegeOrCompany || "St. Xavier's / HR / Working"}. Pass Ref: ${bookingRef || 'TF-VISIT'}`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD8] my-8 animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar with TF Crest Icon */}
        <div className="bg-[#5D6D4E] text-[#FDFBF7] p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <TFCrestIcon className="w-11 h-11" variant="light" />
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Schedule an In-Person Property Visit
              </h3>
              <p className="text-xs text-[#E9EEDD]">
                The Fort House • Heritage District, Fort, South Mumbai
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#4B5A3D] hover:bg-[#3D4932] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative Subheader */}
        {!isSubmitted && (
          <div className="p-3.5 px-6 bg-[#F2F4ED] border-b border-[#E9E2D5] flex items-center justify-between text-xs text-[#5F6955]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#5D6D4E]" />
              <span>Tour all room options, sample food in the dining hall & meet our female warden.</span>
            </div>
            <span className="hidden sm:inline font-semibold text-[#5D6D4E]">Visiting Hours: 10 AM – 7 PM</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#1F241C] mb-1">
                    Student / Resident Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#7A856F] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ananya Deshmukh"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1F241C] mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    required
                    min="16"
                    max="35"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 19"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1F241C] mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#7A856F] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1F241C] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#7A856F] absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ananya@gmail.com"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: College / Company & Room Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1F241C] mb-1">
                    College or Workplace Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#7A856F] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.collegeOrCompany}
                      onChange={(e) => setFormData({ ...formData, collegeOrCompany: e.target.value })}
                      placeholder="e.g. St. Xavier's / HR College / PwC"
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1F241C] mb-1">
                    Room Type to Tour *
                  </label>
                  <select
                    value={formData.preferredRoomType}
                    onChange={(e) => setFormData({ ...formData, preferredRoomType: e.target.value as RoomType })}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                  >
                    <option value="single">Single Luxury Occupancy (₹38,500/mo)</option>
                    <option value="double">Double Sharing (₹25,500/mo) [Most Popular]</option>
                    <option value="triple">Triple Sharing (₹18,500/mo) [Best Value]</option>
                  </select>
                </div>
              </div>

              {/* Visit Slot Scheduler Box */}
              <div className="p-4 rounded-2xl bg-[#E9EEDD] border border-[#DDE4C8] space-y-3">
                <div className="text-xs font-bold text-[#5D6D4E] flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>Select Visit Date & Time Window</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[#1F241C] mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-white border border-[#DDE4C8] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#1F241C] mb-1">
                      Preferred Time Slot *
                    </label>
                    <select
                      value={formData.visitTimeSlot}
                      onChange={(e) => setFormData({ ...formData, visitTimeSlot: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl text-xs bg-white border border-[#DDE4C8] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                    >
                      <option>10:00 AM – 12:00 PM (Morning Slot)</option>
                      <option>12:00 PM – 2:00 PM (Lunch Tasting Slot)</option>
                      <option>3:00 PM – 5:00 PM (Afternoon Slot)</option>
                      <option>5:00 PM – 7:00 PM (Sunset Rooftop Slot)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent / Guardian Accompanying Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1F241C] mb-1">
                    Accompanying Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Sunil Deshmukh (Father)"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1F241C] mb-1">
                    Parent Contact Mobile
                  </label>
                  <input
                    type="tel"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    placeholder="+91 98200 12345"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                  />
                </div>
              </div>

              {/* Additional Questions or Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#1F241C] mb-1">
                  Questions or Notes for Warden (e.g. food tasting, quiet study corner)
                </label>
                <textarea
                  rows={2}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Any questions or special timing preferences..."
                  className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-[#FDFBF7] bg-[#5D6D4E] hover:bg-[#4B5A3D] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4A373]" />
                  <span>Confirm In-Person Property Visit Pass</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`https://wa.me/${PG_INFO.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-[#5D6D4E] bg-[#E9EEDD] hover:bg-[#DDE4C8] border border-[#DDE4C8] flex items-center justify-center gap-1.5 transition-colors text-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${PG_INFO.phone}`}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold text-[#1F241C] bg-[#F2F4ED] hover:bg-[#E9E2D5] border border-[#E9E2D5] flex items-center justify-center gap-1.5 transition-colors text-center"
                  >
                    <Phone className="w-4 h-4 text-[#5D6D4E]" />
                    <span>Call Admissions</span>
                  </a>
                </div>
              </div>

            </form>
          ) : (
            /* Instant Confirmation Screen */
            <div className="text-center space-y-6 py-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#E9EEDD] text-[#5D6D4E] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5D6D4E] bg-[#E9EEDD] px-3 py-1 rounded-full">
                  Property Visit Pass Generated
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F241C]">
                  Visit Scheduled, {formData.fullName || 'Prospective Resident'}!
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6955] max-w-md mx-auto">
                  Your in-person walkthrough pass has been registered with The Fort House Warden and Security Desk.
                </p>
              </div>

              {/* Reference ID Card */}
              <div className="p-4 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5] max-w-md mx-auto text-left space-y-3">
                <div className="flex items-center justify-between border-b border-[#E9E2D5] pb-2.5">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#7A856F]">Gate Pass Reference ID</span>
                    <div className="font-mono font-bold text-lg text-[#5D6D4E]">{bookingRef}</div>
                  </div>
                  <button
                    onClick={copyReference}
                    className="flex items-center gap-1 text-xs font-semibold text-[#1F241C] bg-white border border-[#E9E2D5] px-2.5 py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#5D6D4E]" />
                    <span>{copiedRef ? 'Copied!' : 'Copy ID'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#2D3328]">
                  <div>
                    <span className="text-[#7A856F] block text-[11px]">Room Type</span>
                    <span className="font-semibold capitalize">{formData.preferredRoomType} Sharing</span>
                  </div>
                  <div>
                    <span className="text-[#7A856F] block text-[11px]">Institution</span>
                    <span className="font-semibold truncate block">{formData.collegeOrCompany || "St. Xavier's / HR"}</span>
                  </div>
                  <div>
                    <span className="text-[#7A856F] block text-[11px]">Contact Mobile</span>
                    <span className="font-semibold">{formData.phone || PG_INFO.phone}</span>
                  </div>
                  <div>
                    <span className="text-[#7A856F] block text-[11px]">Scheduled Visit</span>
                    <span className="font-semibold">{formData.visitDate || 'Upcoming'} ({formData.visitTimeSlot})</span>
                  </div>
                </div>
              </div>

              {/* Next Steps Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${PG_INFO.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#FDFBF7] bg-[#5D6D4E] hover:bg-[#4B5A3D] shadow-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Pass Details to WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#1F241C] bg-[#F2F4ED] hover:bg-[#E9E2D5] border border-[#E9E2D5] cursor-pointer"
                >
                  Close & Return
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
