import React, { useState } from 'react';
import { Star, ShieldCheck, Heart, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'students' | 'parents'>('all');

  const filteredTestimonials = filter === 'all'
    ? TESTIMONIALS
    : filter === 'parents'
      ? TESTIMONIALS.filter(t => t.isParent)
      : TESTIMONIALS.filter(t => !t.isParent);

  return (
    <section id="testimonials" className="py-20 bg-[#FDFBF7] border-t border-b border-[#E9E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E9EEDD] text-[#5D6D4E] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#DDE4C8]">
            <Heart className="w-3.5 h-3.5 fill-[#B87A44] text-[#B87A44]" />
            <span>Verified Resident & Parent Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F241C] tracking-tight">
            Trusted by 1,450+ Young Women & Families
          </h2>
          <p className="text-[#5F6955] text-sm sm:text-base">
            Read candid feedback on our biometric security, chef-prepared dining, spotlessly clean rooms, and unmatched South Mumbai location.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5] gap-1 mt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#5D6D4E] text-[#FDFBF7] shadow-xs'
                  : 'text-[#5F6955] hover:text-[#1F241C]'
              }`}
            >
              All Reviews ({TESTIMONIALS.length})
            </button>
            <button
              onClick={() => setFilter('students')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'students'
                  ? 'bg-[#5D6D4E] text-[#FDFBF7] shadow-xs'
                  : 'text-[#5F6955] hover:text-[#1F241C]'
              }`}
            >
              College Students & Interns
            </button>
            <button
              onClick={() => setFilter('parents')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'parents'
                  ? 'bg-[#5D6D4E] text-[#FDFBF7] shadow-xs'
                  : 'text-[#5F6955] hover:text-[#1F241C]'
              }`}
            >
              Parent Experiences
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#F2F4ED] rounded-3xl p-6 sm:p-8 border border-[#E9E2D5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                
                {/* Header: Avatar, Name, Rating & Role */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-13 h-13 rounded-full object-cover ring-2 ring-[#E9EEDD]"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-serif font-bold text-base text-[#1F241C]">
                          {t.name}
                        </h4>
                        <CheckCircle2 className="w-4 h-4 text-[#5D6D4E]" title="Verified Resident / Parent" />
                      </div>
                      <p className="text-xs text-[#5D6D4E] font-semibold">
                        {t.institution}
                      </p>
                      <p className="text-[11px] text-[#7A856F]">
                        {t.role} • {t.stayDuration}
                      </p>
                    </div>
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 text-[#D4A373]">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#D4A373]" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#2D3328] leading-relaxed italic font-normal">
                  "{t.text}"
                </p>

              </div>

              {/* Tags & Room Details Footer */}
              <div className="pt-4 border-t border-[#E9E2D5] flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {t.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold bg-[#E9EEDD] text-[#5D6D4E] px-2.5 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-medium text-[#7A856F]">
                  Stayed in: {t.roomType}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregate Trust Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#F2F4ED] border border-[#E9E2D5] flex flex-col sm:flex-row items-center justify-around text-center gap-6">
          <div>
            <div className="text-2xl font-bold font-serif text-[#1F241C]">4.9 / 5.0 Rating</div>
            <div className="text-xs text-[#5F6955] mt-0.5">Based on 320+ Google & Resident Surveys</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#E9E2D5]" />
          <div>
            <div className="text-2xl font-bold font-serif text-[#5D6D4E]">100% Verified Reviews</div>
            <div className="text-xs text-[#5F6955] mt-0.5">Direct feedback from enrolled students & parents</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#E9E2D5]" />
          <div>
            <div className="text-2xl font-bold font-serif text-[#B87A44]">0 Security Compromises</div>
            <div className="text-xs text-[#5F6955] mt-0.5">Flawless 8-year safety track record in Fort</div>
          </div>
        </div>

      </div>
    </section>
  );
};
