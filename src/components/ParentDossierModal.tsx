import React from 'react';
import { X, ShieldCheck, Camera, Phone, UserCheck, HeartPulse, Lock, Bell, Download, FileText, CheckCircle2 } from 'lucide-react';
import { PG_INFO } from '../data/mockData';

interface ParentDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParentDossierModal: React.FC<ParentDossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A373]">
                Parent Assurance & Protocol
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                Parent Safety & Security Dossier
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[72vh] overflow-y-auto space-y-6">
          
          {/* Welcome Letter to Parents */}
          <div className="p-5 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5] space-y-2">
            <h4 className="font-serif text-lg font-bold text-[#1F241C]">
              Dear Parents & Guardians,
            </h4>
            <p className="text-xs sm:text-sm text-[#5F6955] leading-relaxed">
              We understand the emotions and anxieties of sending your daughter to pursue her education or career in South Mumbai. The Fort House was established with a single foundational promise: <strong>To provide a home as secure, caring, and disciplined as your own.</strong>
            </p>
          </div>

          {/* 6 Key Safety Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5] flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E9EEDD] flex items-center justify-center text-[#5D6D4E] shrink-0 border border-[#DDE4C8]">
                <Camera className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-[#1F241C]">64+ HD CCTV Coverage</h5>
                <p className="text-[11px] text-[#5F6955] leading-relaxed">
                  24/7 recording of all entry gates, lobbies, staircases, dining and corridors. Zero blind spots in communal areas.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5] flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E9EEDD] flex items-center justify-center text-[#5D6D4E] shrink-0 border border-[#DDE4C8]">
                <UserCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-[#1F241C]">Full-Time Resident Female Warden</h5>
                <p className="text-[11px] text-[#5F6955] leading-relaxed">
                  An experienced maternal female warden resides on campus 24/7 to support students with health, emotional well-being, and daily care.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5] flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E9EEDD] flex items-center justify-center text-[#5D6D4E] shrink-0 border border-[#DDE4C8]">
                <Bell className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-[#1F241C]">Digital Parent OTP Approvals</h5>
                <p className="text-[11px] text-[#5F6955] leading-relaxed">
                  Late entries, overnight stays, and visitors require verifiable OTP confirmation sent straight to the registered parent's phone.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5] flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E9EEDD] flex items-center justify-center text-[#5D6D4E] shrink-0 border border-[#DDE4C8]">
                <HeartPulse className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-[#1F241C]">24/7 Medical Emergency Response</h5>
                <p className="text-[11px] text-[#5F6955] leading-relaxed">
                  Direct partnership with Bombay Hospital (750m away). First-aid kits on every floor and on-call female doctor available.
                </p>
              </div>
            </div>

          </div>

          {/* Direct Warden Hotline Box */}
          <div className="p-5 rounded-2xl bg-[#E9EEDD] border border-[#DDE4C8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#5D6D4E] tracking-wider">
                Dedicated Parent Helpline
              </span>
              <h4 className="font-serif text-base font-bold text-[#1F241C] mt-0.5">
                Have a concern? Call our Resident Warden directly anytime.
              </h4>
              <p className="text-xs text-[#5D6D4E]">
                Warden Desk: {PG_INFO.phone} • Available 24 Hours
              </p>
            </div>

            <a
              href={`tel:${PG_INFO.phone}`}
              className="shrink-0 px-4 py-2 rounded-xl bg-[#5D6D4E] text-[#FDFBF7] text-xs font-semibold hover:bg-[#4B5A3D] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Warden Now</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
