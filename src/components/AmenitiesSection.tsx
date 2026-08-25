import React, { useState } from 'react';
import { 
  ShieldCheck, 
  BedDouble, 
  UtensilsCrossed, 
  Building2, 
  Shield, 
  Fingerprint, 
  Camera, 
  UserCheck, 
  Smartphone, 
  AlertTriangle, 
  Flame, 
  HeartPulse, 
  Lock, 
  Wifi, 
  Wind, 
  Bed, 
  BookOpen, 
  Package, 
  Zap, 
  Sparkles, 
  Shirt, 
  Coffee, 
  Leaf, 
  Award, 
  Droplets, 
  Refrigerator, 
  ClipboardList, 
  Sun, 
  BookMarked, 
  Tv, 
  Layers, 
  Activity, 
  BatteryCharging,
  ArrowRight,
  FileText,
  CalendarCheck
} from 'lucide-react';
import { AMENITY_CATEGORIES } from '../data/mockData';

interface AmenitiesSectionProps {
  onOpenMenuModal: () => void;
  onOpenParentDossier: () => void;
}

// Icon mapping helper
const getIcon = (iconName: string) => {
  const iconProps = { className: "w-5 h-5 text-[#5D6D4E]" };
  switch (iconName) {
    case 'Shield': return <Shield {...iconProps} />;
    case 'Fingerprint': return <Fingerprint {...iconProps} />;
    case 'Camera': return <Camera {...iconProps} />;
    case 'UserCheck': return <UserCheck {...iconProps} />;
    case 'Smartphone': return <Smartphone {...iconProps} />;
    case 'AlertTriangle': return <AlertTriangle {...iconProps} />;
    case 'Flame': return <Flame {...iconProps} />;
    case 'HeartPulse': return <HeartPulse {...iconProps} />;
    case 'Lock': return <Lock {...iconProps} />;
    case 'Wifi': return <Wifi {...iconProps} />;
    case 'Wind': return <Wind {...iconProps} />;
    case 'Bed': return <Bed {...iconProps} />;
    case 'BookOpen': return <BookOpen {...iconProps} />;
    case 'Package': return <Package {...iconProps} />;
    case 'Zap': return <Zap {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'Shirt': return <Shirt {...iconProps} />;
    case 'Coffee': return <Coffee {...iconProps} />;
    case 'Leaf': return <Leaf {...iconProps} />;
    case 'Award': return <Award {...iconProps} />;
    case 'Droplets': return <Droplets {...iconProps} />;
    case 'Refrigerator': return <Refrigerator {...iconProps} />;
    case 'ClipboardList': return <ClipboardList {...iconProps} />;
    case 'Sun': return <Sun {...iconProps} />;
    case 'BookMarked': return <BookMarked {...iconProps} />;
    case 'Tv': return <Tv {...iconProps} />;
    case 'Layers': return <Layers {...iconProps} />;
    case 'Activity': return <Activity {...iconProps} />;
    case 'BatteryCharging': return <BatteryCharging {...iconProps} />;
    default: return <Sparkles {...iconProps} />;
  }
};

const getCategoryHeaderIcon = (id: string) => {
  switch (id) {
    case 'safety': return <ShieldCheck className="w-5 h-5" />;
    case 'room': return <BedDouble className="w-5 h-5" />;
    case 'dining': return <UtensilsCrossed className="w-5 h-5" />;
    case 'facilities': return <Building2 className="w-5 h-5" />;
    default: return <Sparkles className="w-5 h-5" />;
  }
};

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({
  onOpenMenuModal,
  onOpenParentDossier,
}) => {
  const [activeTab, setActiveTab] = useState<string>('safety');

  const currentCategory = AMENITY_CATEGORIES.find(c => c.id === activeTab) || AMENITY_CATEGORIES[0];

  return (
    <section id="amenities" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F5EBE1] text-[#B87A44] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#E9E2D5]">
            <span>Comprehensive Amenities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F241C] tracking-tight">
            Every Comfort Thoughtfully Included
          </h2>
          <p className="text-[#5F6955] text-sm sm:text-base">
            From 24/7 biometric security and nutritionist-planned meals to silent study libraries and a panoramic heritage rooftop.
          </p>

          {/* Action Quick Links for Menus & Safety Dossier */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenMenuModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#5D6D4E] bg-[#E9EEDD] hover:bg-[#DDE4C8] border border-[#DDE4C8] transition-colors cursor-pointer"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>View 7-Day Rotating Chef Menu</span>
            </button>

            <button
              onClick={onOpenParentDossier}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#1F241C] bg-[#F2F4ED] hover:bg-[#E9E2D5] border border-[#E9E2D5] transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#B87A44]" />
              <span>Download Parent Safety Dossier</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto mb-10">
          {AMENITY_CATEGORIES.map((cat) => {
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'bg-[#5D6D4E] text-[#FDFBF7] border-[#5D6D4E] shadow-md'
                    : 'bg-[#F2F4ED] text-[#1F241C] border-[#E9E2D5] hover:bg-[#E9E2D5]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#4B5A3D] text-white' : 'bg-[#E9EEDD] text-[#5D6D4E]'}`}>
                    {getCategoryHeaderIcon(cat.id)}
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-[#3C4732] text-[#FDFBF7]' : 'bg-[#E9E2D5] text-[#5F6955]'
                  }`}>
                    {cat.items.length} Amenities
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm">{cat.title}</div>
                  <div className={`text-[11px] truncate ${isSelected ? 'text-[#E9EEDD]' : 'text-[#7A856F]'}`}>
                    {cat.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Banner */}
        <div className="bg-[#F2F4ED] rounded-3xl p-6 sm:p-8 border border-[#E9E2D5] mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E9E2D5] pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5D6D4E]">
                  {currentCategory.badge}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F241C] mt-1">
                {currentCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6955] mt-1">
                {currentCategory.description}
              </p>
            </div>

            {/* Contextual CTA depending on tab */}
            {activeTab === 'dining' && (
              <button
                onClick={onOpenMenuModal}
                className="shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#FDFBF7] bg-[#5D6D4E] hover:bg-[#4B5A3D] shadow-sm flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
              >
                <span>Explore Daily Meal Routine</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            {activeTab === 'safety' && (
              <button
                onClick={onOpenParentDossier}
                className="shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#FDFBF7] bg-[#5D6D4E] hover:bg-[#4B5A3D] shadow-sm flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
              >
                <span>Review Safety Protocols</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Grid of Amenity Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 ${
                  item.highlight
                    ? 'bg-[#FDFBF7] border-[#DDE4C8] shadow-2xs'
                    : 'bg-[#FDFBF7] border-[#E9E2D5]'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#E9EEDD] flex items-center justify-center shrink-0">
                  {getIcon(item.icon)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-semibold text-[#1F241C]">
                      {item.name}
                    </h4>
                    {item.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5D6D4E]" title="Key Highlight" />
                    )}
                  </div>
                  <p className="text-xs text-[#5F6955] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
