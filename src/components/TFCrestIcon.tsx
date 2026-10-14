import React, { useState } from 'react';
import tfCrestImage from '../assets/images/tf_crest_logo_1791990428602.jpg';

interface TFCrestIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'natural' | 'light' | 'dark';
  alt?: string;
}

export const TFCrestIcon: React.FC<TFCrestIconProps> = ({
  className = 'w-10 h-10',
  size,
  variant = 'natural',
  alt = 'Town Fellowship • The Fort House Crest Emblem',
}) => {
  const [imageError, setImageError] = useState(false);

  // Determine size classes if size prop is provided
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const finalClass = size ? sizeClasses[size] : className;

  // Distinct styling wrapper for different background variants
  const borderStyles =
    variant === 'light'
      ? 'bg-white p-0.5 rounded-full ring-2 ring-white/30 shadow-md'
      : variant === 'dark'
      ? 'bg-[#FDFBF7] p-0.5 rounded-full ring-2 ring-[#5D6D4E]/30 shadow-sm'
      : 'bg-[#FDFBF7] p-0.5 rounded-full ring-2 ring-[#5D6D4E]/25 shadow-xs';

  if (imageError) {
    // Elegant SVG fallback of the heritage emblem
    return (
      <div
        className={`${finalClass} ${borderStyles} flex items-center justify-center shrink-0 overflow-hidden`}
        title={alt}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-[#1F241C]"
          fill="currentColor"
        >
          {/* Outer shield outline */}
          <path
            d="M 50,5 C 75,5 88,15 88,38 C 88,68 50,92 50,92 C 50,92 12,68 12,38 C 12,15 25,5 50,5 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          {/* Clock tower silhouette */}
          <rect x="46" y="28" width="8" height="34" fill="currentColor" />
          <polygon points="50,14 44,28 56,28" fill="currentColor" />
          <circle cx="50" cy="36" r="2.5" fill="#FDFBF7" />
          {/* Ship silhouette left */}
          <path d="M 22,46 L 36,46 L 34,53 L 24,53 Z" fill="currentColor" />
          <line x1="28" y1="36" x2="28" y2="46" stroke="currentColor" strokeWidth="1.5" />
          {/* Gear silhouette right */}
          <circle cx="70" cy="46" r="6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3,2" />
          {/* Open Book bottom */}
          <path d="M 38,68 Q 50,64 50,72 Q 50,64 62,68 L 62,76 Q 50,72 50,80 Q 50,72 38,76 Z" fill="currentColor" />
          <text x="50" y="75" fontSize="4.5" textAnchor="middle" fill="#FDFBF7" fontWeight="bold">1857</text>
          {/* Banner bottom */}
          <path d="M 20,88 Q 50,96 80,88 L 76,83 Q 50,90 24,83 Z" fill="currentColor" />
          <text x="50" y="93" fontSize="3" textAnchor="middle" fill="#FDFBF7" fontWeight="bold">शीलवृत्तफला विद्या</text>
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`${finalClass} ${borderStyles} shrink-0 overflow-hidden flex items-center justify-center transition-transform hover:scale-105`}
      title={alt}
    >
      <img
        src={tfCrestImage}
        alt={alt}
        onError={() => setImageError(true)}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};
