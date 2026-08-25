import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { VirtualTour360 } from './components/VirtualTour360';
import { LocationSection } from './components/LocationSection';
import { GallerySection } from './components/GallerySection';
import { PremiumFeatures } from './components/PremiumFeatures';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { WeeklyMenuModal } from './components/WeeklyMenuModal';
import { ParentDossierModal } from './components/ParentDossierModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileStickyBar } from './components/MobileStickyBar';
import { RoomOption } from './types';

export default function App() {
  // Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialRoom, setBookingInitialRoom] = useState<string | undefined>(undefined);
  const [isBookingVisitOnly, setIsBookingVisitOnly] = useState(false);
  
  const [selectedRoomDetail, setSelectedRoomDetail] = useState<RoomOption | null>(null);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isParentDossierOpen, setIsParentDossierOpen] = useState(false);

  // Preselected 360 Tour Scene state when clicked from room cards
  const [preselectedTourScene, setPreselectedTourScene] = useState<string | undefined>(undefined);

  // Active section tracker for navbar highlight
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'rooms', 'amenities', 'virtual-tour', 'location', 'gallery', 'premium-features', 'testimonials', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (roomType?: string, isVisit: boolean = false) => {
    setBookingInitialRoom(roomType);
    setIsBookingVisitOnly(isVisit);
    setIsBookingOpen(true);
  };

  const handleOpenVirtualTour = (roomType?: string) => {
    if (roomType) {
      setPreselectedTourScene(roomType);
    }
    const tourElement = document.getElementById('virtual-tour');
    if (tourElement) {
      tourElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#353D2F] font-sans antialiased selection:bg-[#D4A373]/30 selection:text-[#1F241C]">
      
      {/* Navigation Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenMenu={() => setIsMenuModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenVirtualTour={() => handleOpenVirtualTour()}
        />

        {/* 2. Room Types & Pricing */}
        <RoomsSection
          onSelectRoom={(room) => setSelectedRoomDetail(room)}
          onOpenBooking={handleOpenBooking}
          onOpenVirtualTour={handleOpenVirtualTour}
        />

        {/* 3. Comprehensive Amenities */}
        <AmenitiesSection
          onOpenMenuModal={() => setIsMenuModalOpen(true)}
          onOpenParentDossier={() => setIsParentDossierOpen(true)}
        />

        {/* 4. Interactive 360° Virtual Tour */}
        <VirtualTour360
          onOpenBooking={handleOpenBooking}
          preselectedScene={preselectedTourScene}
        />

        {/* 5. Location Highlights & Proximity Guide */}
        <LocationSection />

        {/* 6. Gallery & Photography */}
        <GallerySection
          onOpenVirtualTour={() => handleOpenVirtualTour()}
        />

        {/* 7. Premium Features (Live Availability, Parent Passes, Community & AI Concierge) */}
        <PremiumFeatures
          onOpenBooking={handleOpenBooking}
          onOpenParentDossier={() => setIsParentDossierOpen(true)}
        />

        {/* 8. Verified Resident & Parent Testimonials */}
        <TestimonialsSection />

        {/* 9. FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenParentDossier={() => setIsParentDossierOpen(true)}
        onOpenMenuModal={() => setIsMenuModalOpen(true)}
      />

      {/* Floating Action Components */}
      <WhatsAppFloatingButton onOpenBooking={handleOpenBooking} />
      <MobileStickyBar onOpenBooking={handleOpenBooking} />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoomType={bookingInitialRoom}
        isVisitOnly={isBookingVisitOnly}
      />

      <RoomDetailModal
        room={selectedRoomDetail}
        onClose={() => setSelectedRoomDetail(null)}
        onOpenBooking={handleOpenBooking}
        onOpenVirtualTour={handleOpenVirtualTour}
      />

      <WeeklyMenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
      />

      <ParentDossierModal
        isOpen={isParentDossierOpen}
        onClose={() => setIsParentDossierOpen(false)}
      />

    </div>
  );
}
