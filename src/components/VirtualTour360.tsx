import React, { useState, useRef, useEffect } from 'react';
import { Eye, RotateCw, ZoomIn, ZoomOut, Maximize2, Sparkles, MapPin, Check, Info, ArrowRight, Shield } from 'lucide-react';

interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  category: string;
  description: string;
}

interface TourScene {
  id: string;
  name: string;
  roomType: string;
  image: string;
  description: string;
  hotspots: Hotspot[];
}

const TOUR_SCENES: TourScene[] = [
  {
    id: "scene-single",
    name: "Executive Single Suite",
    roomType: "Single Occupancy",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=2000&q=85",
    description: "Private sanctuary with ensuite vanity, Daikin AC, and full-length acoustic study alcove.",
    hotspots: [
      {
        id: "h1",
        x: 48,
        y: 62,
        title: "8-Inch Orthopedic Memory Foam Bed",
        category: "Sleep Quality",
        description: "Doctor-approved spine alignment mattress with dual hypoallergenic pillows and fresh linen."
      },
      {
        id: "h2",
        x: 78,
        y: 52,
        title: "Dedicated Ergonomic Study Hub",
        category: "Academics",
        description: "Hardwood desk with high-back lumbar chair, warm reading lamp, pin-up notice board and 500 Mbps Wi-Fi."
      },
      {
        id: "h3",
        x: 22,
        y: 42,
        title: "Lockable Wardrobe & Digital Safe",
        category: "Security",
        description: "3-door modular wardrobe with internal heavy-gauge digital combination safe for laptops and jewelry."
      },
      {
        id: "h4",
        x: 35,
        y: 20,
        title: "Daikin 1.5-Ton Inverter AC",
        category: "Comfort",
        description: "Whisper-quiet cooling with individual wireless remote and energy-efficient climate control."
      }
    ]
  },
  {
    id: "scene-double",
    name: "Premium Double Sharing",
    roomType: "Double Sharing",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=85",
    description: "Spacious 240 sq.ft suite with twin independent study stations and ensuite Kohler bath.",
    hotspots: [
      {
        id: "h21",
        x: 35,
        y: 60,
        title: "Individual Single Teakwood Beds",
        category: "Personal Space",
        description: "Generous separation between beds with independent bedside charging and warm reading lights."
      },
      {
        id: "h22",
        x: 82,
        y: 55,
        title: "Dual Study Workstations",
        category: "Academics",
        description: "Two completely separate study tables so both roommates can study simultaneously in comfort."
      },
      {
        id: "h23",
        x: 18,
        y: 50,
        title: "Ensuite Kohler Washroom",
        category: "Hygiene",
        description: "Private attached ceramic bath with 24/7 hot water geyser, mirror vanity, and exhaust."
      }
    ]
  },
  {
    id: "scene-rooftop",
    name: "Victorian Heritage Rooftop Deck",
    roomType: "Common Lounge",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=85",
    description: "Open-air sunset terrace with views over South Mumbai, fairy lights, and morning yoga zone.",
    hotspots: [
      {
        id: "h31",
        x: 50,
        y: 45,
        title: "Panoramic Heritage Skyline",
        category: "Lifestyle",
        description: "Overlooks Fort's historic Gothic architecture, catching refreshing Arabian Sea breezes."
      },
      {
        id: "h32",
        x: 75,
        y: 68,
        title: "Sunset Loungers & Yoga Turf",
        category: "Wellness",
        description: "Artificial grass zone for morning meditation, weekend group yoga, and evening community chats."
      }
    ]
  },
  {
    id: "scene-study",
    name: "24/7 Silent Study & Library Hall",
    roomType: "Academic Facility",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85",
    description: "Acoustically treated library zone with mesh Wi-Fi, reference books, and zero distraction.",
    hotspots: [
      {
        id: "h41",
        x: 50,
        y: 50,
        title: "Silent Focus Cubicles",
        category: "Productivity",
        description: "Designed for CA exams, law moot court prep, and late-night semester assignments with zero noise."
      },
      {
        id: "h42",
        x: 80,
        y: 40,
        title: "High-Speed Mesh Repeater & Printing",
        category: "Utility",
        description: "500 Mbps fiber speed with complimentary laser printing station for notes and projects."
      }
    ]
  }
];

interface VirtualTour360Props {
  onOpenBooking: (roomType?: string, isVisit?: boolean) => void;
  preselectedScene?: string;
}

export const VirtualTour360: React.FC<VirtualTour360Props> = ({ onOpenBooking, preselectedScene }) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentScene = TOUR_SCENES[activeSceneIndex];

  useEffect(() => {
    if (preselectedScene) {
      const idx = TOUR_SCENES.findIndex(s => s.roomType.toLowerCase().includes(preselectedScene.toLowerCase()));
      if (idx !== -1) setActiveSceneIndex(idx);
    }
  }, [preselectedScene]);

  // Handle Drag / Pan Interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    // Bound the panning
    const clampedX = Math.max(-120, Math.min(120, newX));
    const clampedY = Math.max(-60, Math.min(60, newY));
    setPanOffset({ x: clampedX, y: clampedY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - panOffset.x,
        y: e.touches[0].clientY - panOffset.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const newX = e.touches[0].clientX - dragStart.x;
    const newY = e.touches[0].clientY - dragStart.y;
    const clampedX = Math.max(-120, Math.min(120, newX));
    const clampedY = Math.max(-60, Math.min(60, newY));
    setPanOffset({ x: clampedX, y: clampedY });
  };

  const handleZoom = (direction: 'in' | 'out') => {
    setZoomLevel(prev => {
      if (direction === 'in') return Math.min(1.4, prev + 0.15);
      return Math.max(1, prev - 0.15);
    });
  };

  const resetView = () => {
    setPanOffset({ x: 0, y: 0 });
    setZoomLevel(1);
    setActiveHotspot(null);
  };

  return (
    <section id="virtual-tour" className="py-20 bg-[#FDFBF7] border-b border-[#E9E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-[#E9EEDD] text-[#5D6D4E] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#DDE4C8]">
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive 360° Virtual Tour</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F241C] tracking-tight">
            Walk Through The Property Online
          </h2>
          <p className="text-[#5F6955] text-sm sm:text-base">
            Explore our rooms, study zones, and heritage rooftop before your visit. Drag or swipe on the viewer to look around and tap pulsating hotspots for exact specifications.
          </p>
        </div>

        {/* Scene Selector Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
          {TOUR_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => {
                setActiveSceneIndex(idx);
                resetView();
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeSceneIndex === idx
                  ? 'bg-[#5D6D4E] text-[#FDFBF7] shadow-sm'
                  : 'bg-[#FDFBF7] text-[#5F6955] border border-[#E9E2D5] hover:bg-[#F2F4ED]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>{scene.name}</span>
            </button>
          ))}
        </div>

        {/* 360 Viewer Card Container */}
        <div className="bg-[#1F241C] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FDFBF7] relative">
          
          {/* Top Bar: Scene Title & Hint */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
            <div className="bg-[#1F241C]/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 border border-white/10 pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-[#5D6D4E] animate-ping" />
              <span className="font-semibold">{currentScene.name}</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-300 hidden sm:inline">{currentScene.description}</span>
            </div>

            <div className="hidden md:flex items-center gap-2 bg-[#1F241C]/80 backdrop-blur-md text-gray-300 text-xs px-3 py-1.5 rounded-full border border-white/10">
              <RotateCw className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Click & drag to pan 360°</span>
            </div>
          </div>

          {/* Panoramic Interactive Stage */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            className={`relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {/* The Image Canvas with Dynamic Pan & Zoom Scale */}
            <div
              className="w-full h-full transition-transform duration-100 ease-out"
              style={{
                transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
                transformOrigin: 'center center',
              }}
            >
              <img
                src={currentScene.image}
                alt={currentScene.name}
                className="w-full h-full object-cover pointer-events-none scale-110"
              />

              {/* Hotspot Markers Overlay */}
              {currentScene.hotspots.map((spot) => (
                <div
                  key={spot.id}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(activeHotspot?.id === spot.id ? null : spot);
                    }}
                    className="relative group cursor-pointer p-2"
                    aria-label={`Hotspot: ${spot.title}`}
                  >
                    <span className="absolute inset-0 rounded-full bg-[#D4A373]/50 animate-ping" />
                    <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#1F241C] shadow-xl border-2 border-[#5D6D4E] hover:scale-110 transition-transform">
                      <Sparkles className="w-4 h-4 text-[#5D6D4E]" />
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* Hotspot Detailed Tooltip Popover */}
            {activeHotspot && (
              <div 
                className="absolute z-40 bottom-16 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-xs bg-[#FDFBF7]/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-[#E9E2D5] text-[#1F241C] animate-in fade-in zoom-in duration-200"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5D6D4E] bg-[#E9EEDD] px-2 py-0.5 rounded border border-[#DDE4C8]">
                    {activeHotspot.category}
                  </span>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="text-gray-400 hover:text-gray-600 text-xs font-bold px-1 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <h4 className="font-serif font-bold text-sm text-[#1F241C] mb-1">
                  {activeHotspot.title}
                </h4>
                <p className="text-xs text-[#5F6955] leading-relaxed">
                  {activeHotspot.description}
                </p>
                <div className="mt-3 pt-2 border-t border-[#E9E2D5] flex justify-end">
                  <button
                    onClick={() => onOpenBooking(undefined, true)}
                    className="text-xs font-semibold text-[#5D6D4E] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>See this in person &rarr;</span>
                  </button>
                </div>
              </div>
            )}

            {/* Floating Camera Controls (Bottom Left) */}
            <div className="absolute bottom-4 left-4 z-30 flex items-center gap-2 bg-[#1F241C]/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 text-white">
              <button
                onClick={() => handleZoom('in')}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleZoom('out')}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors text-xs font-semibold flex items-center gap-1 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={resetView}
                className="px-2.5 py-1.5 hover:bg-white/20 rounded-xl transition-colors text-xs font-medium cursor-pointer"
                title="Reset View Orientation"
              >
                Reset
              </button>
            </div>

            {/* Bottom Right CTA Bar */}
            <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2">
              <button
                onClick={() => onOpenBooking(undefined, true)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#FDFBF7] bg-[#5D6D4E] hover:bg-[#4B5A3D] shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Schedule In-Person Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
