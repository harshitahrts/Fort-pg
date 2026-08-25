import React, { useState } from 'react';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, Maximize2, ShieldCheck } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenVirtualTour: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenVirtualTour }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'bedrooms', label: 'Suites & Bedrooms' },
    { id: 'common', label: 'Study & Rooftop Lounge' },
    { id: 'dining', label: 'Dining & Kitchen' },
    { id: 'washrooms', label: 'Ensuite Washrooms' },
    { id: 'security', label: 'Biometric & Safety' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-[#F2F4ED] border-t border-b border-[#E9E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-[#E9EEDD] text-[#5D6D4E] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#DDE4C8]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>High-Definition Visual Tour</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F241C] tracking-tight">
            Life Inside The Fort House
          </h2>
          <p className="text-[#5F6955] text-sm sm:text-base">
            Take a candid look at our boutique private bedrooms, sunny study lounges, chef's dining hall, and rooftop terrace.
          </p>

          {/* Category Filter Chips */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#5D6D4E] text-[#FDFBF7] shadow-xs'
                    : 'bg-[#FDFBF7] text-[#5F6955] border border-[#E9E2D5] hover:bg-[#E9E2D5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden bg-gray-100 border border-[#E9E2D5] shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption Inside Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <div className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#5D6D4E] text-[#FDFBF7] px-2 py-0.5 rounded">
                  {item.category}
                </div>
                <h3 className="font-serif text-base font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 360 Tour Prominent Callout Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#5D6D4E] text-[#FDFBF7] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-[#4B5A3D] text-[#FDFBF7] text-xs font-semibold px-3 py-1 rounded-full">
              <Eye className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Full Interactive Simulation</span>
            </div>
            <h3 className="font-serif text-2xl font-bold">
              Want a 360-Degree Panoramic View of All Rooms?
            </h3>
            <p className="text-xs sm:text-sm text-[#E9EEDD] max-w-xl">
              Experience the depth of our single and double rooms with full 360° rotation and interactive amenity hot-spots before visiting in person.
            </p>
          </div>

          <button
            onClick={onOpenVirtualTour}
            className="shrink-0 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#1F241C] bg-[#FDFBF7] hover:bg-[#E9E2D5] shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <Eye className="w-4 h-4 text-[#5D6D4E]" />
            <span>Launch 360° Virtual Tour</span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#1F241C] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image Container */}
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-4 sm:p-6 bg-[#1F241C] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#D4A373] font-bold">
                  {filteredItems[lightboxIndex].category} • {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <h4 className="font-serif text-lg font-bold">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-xs text-gray-300">
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>

              <button
                onClick={() => {
                  closeLightbox();
                  onOpenVirtualTour();
                }}
                className="shrink-0 px-4 py-2 rounded-xl text-xs font-semibold text-[#1F241C] bg-[#E9EEDD] hover:bg-[#DDE4C8] transition-colors"
              >
                View in 360° Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
