import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Users, 
  Leaf, 
  Moon, 
  Compass, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  PhoneCall, 
  Clock, 
  MapPin, 
  Award,
  ArrowRight,
  Bot,
  UserCheck,
  Key
} from 'lucide-react';
import { COMMUNITY_EVENTS, PG_INFO, ROOMS } from '../data/mockData';

interface PremiumFeaturesProps {
  onOpenBooking: (roomType?: string, isVisit?: boolean) => void;
  onOpenParentDossier: () => void;
}

export const PremiumFeatures: React.FC<PremiumFeaturesProps> = ({
  onOpenBooking,
  onOpenParentDossier,
}) => {
  // Visitor Approval Simulator State
  const [visitorName, setVisitorName] = useState('');
  const [visitorRelation, setVisitorRelation] = useState('Mother / Female Guardian');
  const [visitorStatus, setVisitorStatus] = useState<'idle' | 'submitted' | 'approved'>('idle');

  // Newcomer Concierge Interactive Chat State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: "Namaste! I'm your Fort House Local Concierge. Moving to Mumbai for the first time? Ask me about walking routes to St. Xavier's or HR College, the best study cafes in Kala Ghoda, or metro timings!",
      time: 'Just now'
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleVisitorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim()) return;
    setVisitorStatus('submitted');
    setTimeout(() => {
      setVisitorStatus('approved');
    }, 1200);
  };

  const handleChatSend = (customQuery?: string) => {
    const query = customQuery || chatInput;
    if (!query.trim()) return;

    const userMsg = { sender: 'user' as const, text: query, time: 'Just now' };
    setChatMessages(prev => [...prev, userMsg]);
    if (!customQuery) setChatInput('');

    // Pre-crafted responses for South Mumbai newcomer queries
    setTimeout(() => {
      let reply = "The Fort House is situated right in the center of Fort. St. Xavier's College is just a 5-minute straight walk down Mahapalika Marg. Churchgate and CSMT are both under 8 minutes on foot.";
      const lower = query.toLowerCase();

      if (lower.includes('college') || lower.includes('xavier') || lower.includes('hr') || lower.includes('kc')) {
        reply = "St. Xavier's is 450m (5 mins walk), HR College is 800m (9 mins walk), KC College is 850m (10 mins walk), and Jai Hind is 1.2km (direct 4-min bus ride). You will never need a suburban train pass!";
      } else if (lower.includes('cafe') || lower.includes('coffee') || lower.includes('food')) {
        reply = "You're 3 minutes from Kala Ghoda! Fantastic quiet study spots include Kala Ghoda Cafe, Subko Coffee, Blue Tokai, and the heritage Starbucks at Horniman Circle. Plus, our PG includes 4 hot chef meals daily!";
      } else if (lower.includes('safety') || lower.includes('night') || lower.includes('curfew')) {
        reply = "Fort is one of India's safest zones with 24/7 Mumbai Police headquarters nearby. Our gates have biometric access, 64 CCTV cameras, and a resident female warden. Standard gate curfew is 10:30 PM with easy digital late-pass permissions.";
      } else if (lower.includes('metro') || lower.includes('train') || lower.includes('commute')) {
        reply = "CSMT Central Railway & Aqua Line Metro 3 is just 600m away, and Churchgate Western Railway is 700m away. You can reach Bandra or BKC in 20 minutes effortlessly.";
      } else if (lower.includes('hospital') || lower.includes('doctor') || lower.includes('medical')) {
        reply = "Bombay Hospital & GT Hospital are within 750 meters (under 8 mins). We have an on-call female medical doctor and 24/7 Apollo Pharmacy just 150m from our gate.";
      }

      setChatMessages(prev => [...prev, {
        sender: 'bot',
        text: reply,
        time: 'Just now'
      }]);
    }, 600);
  };

  return (
    <section id="premium-features" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E9EEDD] text-[#5D6D4E] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#DDE4C8]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>The Fort House Signature Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F241C] tracking-tight">
            More Than Just a Room. A Thriving Ecosystem.
          </h2>
          <p className="text-[#5F6955] text-sm sm:text-base">
            Engineered specifically to nurture young women through safety, community, wellness, and dedicated academic support.
          </p>
        </div>

        {/* Feature 1 & 2: Live Room Availability Tracker & Digital Visitor Approval */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Live Availability Status */}
          <div className="lg:col-span-6 bg-[#F2F4ED] rounded-3xl p-6 sm:p-8 border border-[#E9E2D5] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-2 bg-[#E9EEDD] text-[#5D6D4E] text-xs font-bold px-3 py-1 rounded-full border border-[#DDE4C8]">
                  <span className="w-2 h-2 rounded-full bg-[#5D6D4E] animate-pulse" />
                  <span>Real-Time Bed Availability</span>
                </div>
                <span className="text-xs text-[#7A856F]">Updated 5 mins ago</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F241C]">
                Monsoon 2025 Admissions Status
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6955] mt-1">
                Due to proximity to St. Xavier’s and HR College, rooms fill quickly before the academic term starts.
              </p>
            </div>

            <div className="space-y-3">
              {ROOMS.map((room) => {
                const percentFull = Math.round(((room.totalBeds - room.availableBeds) / room.totalBeds) * 100);
                return (
                  <div key={room.id} className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E9E2D5]">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-semibold text-sm text-[#1F241C] block">{room.title}</span>
                        <span className="text-xs text-[#7A856F]">₹{room.pricePerMonth.toLocaleString('en-IN')}/mo • {room.areaSqFt} sq.ft</span>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          room.availableBeds <= 2 
                            ? 'bg-[#F5EBE1] text-[#B87A44]' 
                            : 'bg-[#E9EEDD] text-[#5D6D4E]'
                        }`}>
                          {room.availableBeds} beds left
                        </span>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-[#E9E2D5] h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${room.availableBeds <= 2 ? 'bg-[#B87A44]' : 'bg-[#5D6D4E]'}`}
                        style={{ width: `${percentFull}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-[#7A856F] mt-1 font-medium">
                      <span>{percentFull}% Reserved</span>
                      <span>Total {room.totalBeds} Capacity</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#FDFBF7] bg-[#5D6D4E] hover:bg-[#4B5A3D] shadow-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Instant Reserve Remaining Bed</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Digital Visitor Approval Simulator */}
          <div className="lg:col-span-6 bg-[#F2F4ED] rounded-3xl p-6 sm:p-8 border border-[#E9E2D5] flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5EBE1] text-[#B87A44] text-xs font-bold px-3 py-1 rounded-full mb-3 border border-[#E9E2D5]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Parent-Controlled Digital Gate Pass</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F241C]">
                Digital Visitor Verification System
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6955] mt-1">
                Zero unverified entries. Parents receive instant SMS confirmation and OTP approval before any visitor enters the building.
              </p>
            </div>

            {/* Interactive Demo Form */}
            <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-[#E9E2D5] space-y-3.5">
              <div className="text-xs font-bold text-[#1F241C] flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#5D6D4E]" />
                <span>Try the Live Visitor Pass Simulator:</span>
              </div>

              <form onSubmit={handleVisitorSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#5F6955] mb-1">
                    Visitor Full Name
                  </label>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => {
                      setVisitorName(e.target.value);
                      if (visitorStatus !== 'idle') setVisitorStatus('idle');
                    }}
                    placeholder="e.g. Mrs. Vandana Sharma (Mother)"
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#5F6955] mb-1">
                    Relationship to Resident
                  </label>
                  <select
                    value={visitorRelation}
                    onChange={(e) => setVisitorRelation(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
                  >
                    <option>Mother / Female Guardian</option>
                    <option>Father (Lounge Access Only)</option>
                    <option>Sister / College Classmate (Female)</option>
                    <option>Delivery Courier (Gate Reception)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={!visitorName.trim()}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#1F241C] bg-[#E9EEDD] hover:bg-[#DDE4C8] disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-[#DDE4C8]"
                >
                  <Key className="w-3.5 h-3.5 text-[#5D6D4E]" />
                  <span>Generate Parent Approval OTP</span>
                </button>
              </form>

              {/* Status Simulation Output */}
              {visitorStatus === 'submitted' && (
                <div className="p-3 rounded-xl bg-[#FAF5F0] border border-[#E9E2D5] text-[#B87A44] text-xs flex items-center gap-2 animate-pulse">
                  <Clock className="w-4 h-4 shrink-0 text-[#B87A44]" />
                  <span>Dispatching instant verification SMS to registered parent number...</span>
                </div>
              )}

              {visitorStatus === 'approved' && (
                <div className="p-3 rounded-xl bg-[#E9EEDD] border border-[#DDE4C8] text-[#1F241C] text-xs space-y-1 animate-in fade-in">
                  <div className="flex items-center gap-1.5 font-bold text-[#5D6D4E]">
                    <CheckCircle2 className="w-4 h-4 text-[#5D6D4E]" />
                    <span>Parent OTP Verified & Biometric Gate Pass #TF-8942 Issued!</span>
                  </div>
                  <p className="text-[11px] text-[#5F6955]">
                    Warden notified • Entry logged in digital security register with timestamp.
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={onOpenParentDossier}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#5D6D4E] bg-[#FDFBF7] hover:bg-[#E9E2D5] border border-[#E9E2D5] text-center cursor-pointer"
            >
              Read Full Parent Safety Dossier & CCTV Policy &rarr;
            </button>
          </div>

        </div>

        {/* Feature 3 & 4: Women-Only Community Events & Fort Newcomer AI Concierge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Community Events & Wellness Workshops */}
          <div className="lg:col-span-6 bg-[#F2F4ED] rounded-3xl p-6 sm:p-8 border border-[#E9E2D5] flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5EBE1] text-[#B87A44] text-xs font-bold px-3 py-1 rounded-full mb-3 border border-[#E9E2D5]">
                <Users className="w-3.5 h-3.5" />
                <span>Empowering Sisterhood</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F241C]">
                Women-Only Community & Workshops
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6955] mt-1">
                Beyond housing, we cultivate an empowering circle with career mentorship, yoga on the rooftop, and weekend heritage walks.
              </p>
            </div>

            <div className="space-y-3">
              {COMMUNITY_EVENTS.map((event) => (
                <div key={event.id} className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E9E2D5] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5D6D4E] bg-[#E9EEDD] px-2 py-0.5 rounded">
                      {event.category}
                    </span>
                    <span className="text-xs font-medium text-[#7A856F]">
                      {event.attendeesCount} residents attending
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#1F241C]">
                    {event.title}
                  </h4>
                  <p className="text-xs text-[#5F6955]">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-[#7A856F] pt-1 border-t border-[#E9E2D5]/60">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#5D6D4E]" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#5D6D4E]" />
                      {event.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quiet Study & Eco-Friendly Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-[#FDFBF7] border border-[#E9E2D5] flex items-center gap-2.5">
                <Moon className="w-4 h-4 text-[#5D6D4E] shrink-0" />
                <div className="text-[11px]">
                  <span className="font-bold text-[#1F241C] block">Quiet Study Hours</span>
                  <span className="text-[#7A856F]">10 PM - 7 AM Silent Zone</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#FDFBF7] border border-[#E9E2D5] flex items-center gap-2.5">
                <Leaf className="w-4 h-4 text-[#5D6D4E] shrink-0" />
                <div className="text-[11px]">
                  <span className="font-bold text-[#1F241C] block">Eco-Friendly Initiatives</span>
                  <span className="text-[#7A856F]">Solar Water & Zero Plastic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fort Newcomer Assistant */}
          <div className="lg:col-span-6 bg-[#F2F4ED] rounded-3xl p-6 sm:p-8 border border-[#E9E2D5] flex flex-col justify-between space-y-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E9EEDD] text-[#5D6D4E] text-xs font-bold px-3 py-1 rounded-full mb-3 border border-[#DDE4C8]">
                <Compass className="w-3.5 h-3.5" />
                <span>South Mumbai City Guide</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1F241C]">
                Fort Newcomer Assistant
              </h3>
              <p className="text-xs sm:text-sm text-[#5F6955] mt-1">
                Ask our interactive resident assistant anything about walking routes to your college, metro connectivity, or local student hotspots.
              </p>
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => handleChatSend("How far is St. Xavier's College on foot?")}
                className="text-[11px] font-medium bg-[#FDFBF7] hover:bg-[#E9E2D5] text-[#1F241C] px-2.5 py-1 rounded-lg border border-[#E9E2D5] transition-colors cursor-pointer"
              >
                Walking to Xavier's?
              </button>
              <button
                onClick={() => handleChatSend("What are the best study cafes in Kala Ghoda?")}
                className="text-[11px] font-medium bg-[#FDFBF7] hover:bg-[#E9E2D5] text-[#1F241C] px-2.5 py-1 rounded-lg border border-[#E9E2D5] transition-colors cursor-pointer"
              >
                Kala Ghoda cafes?
              </button>
              <button
                onClick={() => handleChatSend("What are the safety measures for late night study?")}
                className="text-[11px] font-medium bg-[#FDFBF7] hover:bg-[#E9E2D5] text-[#1F241C] px-2.5 py-1 rounded-lg border border-[#E9E2D5] transition-colors cursor-pointer"
              >
                Safety & Late Passes?
              </button>
              <button
                onClick={() => handleChatSend("How to reach Churchgate and CSMT stations?")}
                className="text-[11px] font-medium bg-[#FDFBF7] hover:bg-[#E9E2D5] text-[#1F241C] px-2.5 py-1 rounded-lg border border-[#E9E2D5] transition-colors cursor-pointer"
              >
                Train Connectivity?
              </button>
            </div>

            {/* Chat Box Conversation Stage */}
            <div className="bg-[#FDFBF7] rounded-2xl border border-[#E9E2D5] p-4 h-[250px] overflow-y-auto space-y-3 text-xs">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#5D6D4E] text-[#FDFBF7]'
                      : 'bg-[#F2F4ED] border border-[#E9E2D5] text-[#1F241C]'
                  }`}>
                    {msg.sender === 'bot' && (
                      <div className="flex items-center gap-1 text-[10px] font-bold text-[#5D6D4E] mb-1">
                        <Bot className="w-3 h-3" />
                        <span>Fort Concierge</span>
                      </div>
                    )}
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleChatSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about colleges, food, safety, metro..."
                className="flex-1 px-3.5 py-2.5 rounded-xl text-xs bg-[#FDFBF7] border border-[#E9E2D5] text-[#1F241C] focus:outline-none focus:border-[#5D6D4E]"
              />
              <button
                type="submit"
                disabled={!chatInput.trim()}
                className="p-2.5 rounded-xl bg-[#5D6D4E] text-white hover:bg-[#4B5A3D] disabled:opacity-50 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
