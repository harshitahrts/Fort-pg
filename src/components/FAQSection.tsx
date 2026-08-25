import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { FAQS, PG_INFO } from '../data/mockData';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'food', label: 'Food & Meals' },
    { id: 'safety', label: 'Safety & Curfew' },
    { id: 'rent', label: 'Rent & Deposits' },
    { id: 'policies', label: 'KYC & Move-In' },
    { id: 'amenities', label: 'Wi-Fi & Laundry' },
  ];

  const toggleFAQ = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-[#E9EEDD] text-[#5D6D4E] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#DDE4C8]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F241C] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5F6955] text-sm sm:text-base">
            Everything you and your parents need to know about food, curfews, deposits, Wi-Fi speed, and move-in procedures.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mt-4">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. curfew, deposit, Jain food, Wi-Fi..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F2F4ED] border border-[#E9E2D5] text-xs sm:text-sm text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#5D6D4E] text-[#FDFBF7] shadow-xs'
                    : 'bg-[#F2F4ED] text-[#5F6955] border border-[#E9E2D5] hover:bg-[#E9E2D5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-[#F2F4ED] rounded-2xl border border-[#E9E2D5] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#E9E2D5] transition-colors cursor-pointer"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-[#1F241C]">
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full bg-[#E9EEDD] flex items-center justify-center text-[#5D6D4E] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#5D6D4E] text-white' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#5F6955] leading-relaxed border-t border-[#E9E2D5]/60 pt-3 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-[#F2F4ED] rounded-2xl border border-[#E9E2D5] p-6">
              <p className="text-sm text-[#7A856F]">No matching questions found for "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-2 text-xs text-[#5D6D4E] font-semibold underline cursor-pointer"
              >
                Clear search filters
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions Contact Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#F2F4ED] border border-[#E9E2D5] text-center space-y-3">
          <h3 className="font-serif text-xl font-bold text-[#1F241C]">
            Still have questions about living at The Fort House?
          </h3>
          <p className="text-xs sm:text-sm text-[#5F6955] max-w-md mx-auto">
            Our admissions team and female warden are happy to guide you or your parents personally.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${PG_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1F241C] bg-[#FDFBF7] hover:bg-[#E9E2D5] border border-[#E9E2D5] shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#5D6D4E]" />
              <span>Call Admissions: {PG_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${PG_INFO.whatsapp}?text=Hi%2C%20I%20have%20a%20few%20questions%20regarding%20The%20Fort%20House%20Girls%20PG%20in%20Fort%2C%20Mumbai.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#FDFBF7] bg-[#5D6D4E] hover:bg-[#4B5A3D] shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
