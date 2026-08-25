import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Menu, X, Shield, BedDouble, MapPin, Sparkles } from 'lucide-react';
import { PG_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: (roomType?: string, isVisit?: boolean) => void;
  onOpenMenu: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenMenu, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Rooms & Rates', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: '360° Tour', href: '#virtual-tour' },
    { label: 'Location & Colleges', href: '#location' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notification Bar for Admissions Announcement */}
      <div id="top-announcement-bar" className="bg-[#5D6D4E] text-[#FDFBF7] text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2 relative z-50">
        <span className="inline-flex items-center justify-center bg-[#D4A373] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs">
          Admissions Open
        </span>
        <span>Academic Year 2025–2026 Batch • Only 4 Beds Remaining in Fort</span>
        <button 
          onClick={() => onOpenBooking(undefined, false)}
          className="underline hover:text-[#E9EEDD] ml-1.5 font-semibold cursor-pointer hidden md:inline-flex items-center gap-1"
        >
          Check Availability &rarr;
        </button>
      </div>

      <header 
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#E9E2D5] py-3' 
            : 'bg-[#FDFBF7] py-4 border-b border-[#E9E2D5]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Tag */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 group"
              id="brand-logo-link"
            >
              <div className="w-10 h-10 rounded-full bg-[#5D6D4E] text-[#FDFBF7] flex items-center justify-center font-serif text-xl font-bold shadow-sm group-hover:bg-[#4B5A3D] transition-colors">
                TF
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#1F241C] tracking-tight group-hover:text-[#5D6D4E] transition-colors">
                  The Fort House
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#5D6D4E] font-semibold -mt-1">
                  Luxury Girls PG • Fort Mumbai
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2 text-sm font-medium text-[#353D2F]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 rounded-lg transition-colors duration-150 ${
                      isActive 
                        ? 'text-[#5D6D4E] font-semibold bg-[#E9EEDD]' 
                        : 'hover:text-[#5D6D4E] hover:bg-[#F2F4ED]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Quick Action CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Call Warden Quick Dial */}
              <a
                id="header-call-btn"
                href={`tel:${PG_INFO.phone}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl text-[#353D2F] bg-[#F2F4ED] hover:bg-[#E9E2D5] transition-colors border border-[#E9E2D5]"
                title="Call Admissions Office"
              >
                <Phone className="w-3.5 h-3.5 text-[#5D6D4E]" />
                <span className="hidden lg:inline">{PG_INFO.phone}</span>
                <span className="lg:hidden">Call</span>
              </a>

              {/* Schedule Visit Button */}
              <button
                id="header-schedule-visit-btn"
                onClick={() => onOpenBooking(undefined, true)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl text-[#5D6D4E] bg-[#E9EEDD] hover:bg-[#DDE4C8] transition-colors border border-[#DDE4C8] cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Visit</span>
              </button>

              {/* Primary Book / Inquire Button */}
              <button
                id="header-book-now-btn"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl text-[#FDFBF7] bg-[#5D6D4E] hover:bg-[#4B5A3D] shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>Book a Bed</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                id="mobile-quick-visit-btn"
                onClick={() => onOpenBooking(undefined, true)}
                className="text-xs font-semibold px-2.5 py-1.5 rounded-lg text-[#5D6D4E] bg-[#E9EEDD]"
              >
                Visit
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#1F241C] hover:bg-[#F2F4ED] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FDFBF7] border-b border-[#E9E2D5] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-[#353D2F] hover:bg-[#F2F4ED] hover:text-[#5D6D4E] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#5D6D4E]">&rarr;</span>
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[#E9E2D5] flex flex-col gap-2.5">
              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-[#FDFBF7] bg-[#5D6D4E] hover:bg-[#4B5A3D] text-center shadow-sm"
              >
                Book a Bed / Inquire Now
              </button>

              <button
                id="mobile-drawer-visit-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking(undefined, true);
                }}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-[#5D6D4E] bg-[#E9EEDD] hover:bg-[#DDE4C8] text-center"
              >
                Schedule an In-Person Property Visit
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${PG_INFO.phone}`}
                  className="py-2 px-3 rounded-lg text-xs font-semibold bg-[#F2F4ED] text-[#1F241C] flex items-center justify-center gap-1.5 border border-[#E9E2D5]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5D6D4E]" />
                  Call Admissions
                </a>
                <a
                  href={`https://wa.me/${PG_INFO.whatsapp}?text=Hi%2C%20I%20am%20interested%20in%20The%20Fort%20House%20Girls%20PG%20in%20Fort%2C%20Mumbai.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-lg text-xs font-semibold bg-[#E9EEDD] text-[#5D6D4E] flex items-center justify-center gap-1.5 border border-[#DDE4C8]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
