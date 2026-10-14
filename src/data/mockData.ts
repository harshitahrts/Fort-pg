import { RoomOption, AmenityCategory, LocationLandmark, Testimonial, FAQItem, GalleryItem, CommunityEvent } from '../types';

export const PG_INFO = {
  name: "The Fort House",
  tagline: "Safe. Comfortable. Premium Living in Fort, Mumbai.",
  subtext: "A boutique residence designed exclusively for female students, interns, and young professionals in South Mumbai's most prestigious cultural and academic hub.",
  address: "Heritage Lane, Near Flora Fountain & Kala Ghoda, Fort, Mumbai – 400001",
  phone: "+91 88876 76715",
  whatsapp: "918887676715",
  email: "admissions@theforthouse.in",
  stats: {
    occupancy: "96%",
    yearsOfService: "8+ Years",
    residentsHosted: "1,450+",
    parentSatisfaction: "99.4%",
    safetyScore: "100%",
    collegesCovered: "7 Top Colleges (< 10 min walk)"
  },
  highlights: [
    { title: "24/7 Biometric Entry & CCTV", desc: "Dual verification & female warden on duty round the clock" },
    { title: "4-Meal Nutritionist Chef Dining", desc: "Fresh breakfast, lunch, high tea & dinner with Jain/Veg options" },
    { title: "Walk to Top Colleges", desc: "3 to 10 mins walk to St. Xavier's, HR, KC & Jai Hind" },
    { title: "100% Zero Brokerage", desc: "Transparent all-inclusive rent with zero hidden fees" }
  ]
};

export const ROOMS: RoomOption[] = [
  {
    id: "single-deluxe",
    type: "single",
    title: "Executive Single Occupancy",
    subtitle: "Private sanctuary for intensive study & maximum personal space",
    pricePerMonth: 38500,
    deposit: 50000,
    availableBeds: 2,
    totalBeds: 8,
    areaSqFt: 180,
    badge: "High Demand",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Private Air Conditioned Bedroom (Daikin 1.5 Ton)",
      "Premium 8-inch Orthopedic Memory Foam Mattress",
      "Custom Study Desk with Ergonomic High-Back Chair",
      "3-Door Hardwood Wardrobe with Digital Safe Locker",
      "Bedside Multi-Pin Charging + USB Fast Ports",
      "Dimmable Warm LED Reading Lamp",
      "Full-Length Dressing Mirror with Concealed Shelving",
      "100% Blackout Thermal Drapes",
      "Private Ensuite Designer Bathroom with Kohler Fittings",
      "Daily Room Housekeeping & Fresh Bed Linen Laundry"
    ],
    description: "Our signature private suite designed for medical students, CA aspirants, and corporate executives needing absolute tranquility. Enjoy uncompromised privacy with an ensuite vanity bath and dedicated work alcove.",
    floorPlanInfo: "180 sq.ft private suite with attached bath, east-facing colonial window view."
  },
  {
    id: "double-sharing-premium",
    type: "double",
    title: "Premium Double Sharing",
    subtitle: "Balanced community life with twin-individual study zones",
    pricePerMonth: 25500,
    deposit: 35000,
    availableBeds: 4,
    totalBeds: 24,
    areaSqFt: 240,
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Split Inverter AC with Individual Remote Control",
      "Twin Orthopedic 7-inch Mattresses on Teakwood Beds",
      "Two Separate Ergonomic Study Desks & Bookcases",
      "Dedicated 2-Door Wardrobe per Resident with Lockable Drawers",
      "Separate Bedside Switchboards & Night Lamps",
      "Spacious Attached Bathroom with 24/7 Geyser & RO Water",
      "Full-Length Mirror & Dedicated Shoe Storage",
      "Acoustic Room Partition / Privacy Screen Option",
      "High-Speed 500 Mbps Mesh Wi-Fi in Every Corner",
      "Dust-Free Deep Cleaning 7 Days a Week"
    ],
    description: "The ideal blend of companionship and personal space. Spacious floorplan ensuring ample personal separation, two independent study desks, generous wardrobe space, and warm timber aesthetic.",
    floorPlanInfo: "240 sq.ft shared room with twin single beds, 2 study desks, and ensuite washroom."
  },
  {
    id: "triple-sharing-cozy",
    type: "triple",
    title: "Classic Triple Sharing",
    subtitle: "Vibrant, budget-friendly comfort with full premium amenities",
    pricePerMonth: 18500,
    deposit: 25000,
    availableBeds: 5,
    totalBeds: 30,
    areaSqFt: 310,
    badge: "Best Value",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Dual Inverter ACs for Uniform Room Cooling",
      "Three Independent Single Beds with Orthopedic Padding",
      "Three Dedicated Modular Study Desks with Soft Board",
      "3 Individual Heavy-Duty Wardrobes with Keyed Safe",
      "Individual Reading Lamps & Bedside Power Outlets",
      "Dual Sinks & Large Modern Bathroom to Avoid Morning Rush",
      "Personal Laundry Baskets & Linen Service",
      "Blackout Blinds on High-Ceiling Heritage Windows",
      "24/7 Power Backup (Lighting, Fans, Wi-Fi & AC)",
      "Daily Housekeeping & Linen Change Twice a Week"
    ],
    description: "Designed for social students and first-time Mumbai movers who want a vibrant, friendly atmosphere without compromising on comfort, study desks, or high-tier security.",
    floorPlanInfo: "310 sq.ft expansive room with 3 distinct sleep/study stations and double-vanity washroom."
  }
];

export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: "safety",
    title: "Safety & Security",
    badge: "100% Secure & Monitored",
    iconName: "ShieldCheck",
    description: "Triple-layer security architecture ensuring absolute peace of mind for residents and parents.",
    items: [
      { name: "24/7 Uniformed Security Guard", description: "Trained female and male security guards at main entrance gate.", icon: "Shield", highlight: true },
      { name: "Biometric & RFID Access", description: "Smart touchless fingerprint & keycard entry at all gates and floor doors.", icon: "Fingerprint", highlight: true },
      { name: "64+ HD CCTV Surveillance", description: "Full coverage across all corridors, entryways, dining, and perimeter.", icon: "Camera", highlight: true },
      { name: "24/7 Resident Female Warden", description: "Experienced maternal resident warden living on premises for instant care.", icon: "UserCheck", highlight: true },
      { name: "Digital Visitor Verification", description: "Pre-approved OTP visitor pass with instant SMS alert to parents.", icon: "Smartphone" },
      { name: "Emergency SOS Panic Buttons", description: "Direct intercom and alarm buttons in every room and common area.", icon: "AlertTriangle" },
      { name: "Fire Safety & Smoke Detectors", description: "Ceiling smoke detectors, fire extinguishers on all levels, and regular drills.", icon: "Flame" },
      { name: "First-Aid & On-Call Doctor", description: "Tie-up with Bombay Hospital & 24/7 on-call female medical physician.", icon: "HeartPulse" },
      { name: "Individual Lockable Safes", description: "Heavy gauge steel digital locker inside every resident's wardrobe.", icon: "Lock" }
    ]
  },
  {
    id: "room",
    title: "Room Amenities",
    badge: "Boutique Hotel Comfort",
    iconName: "BedDouble",
    description: "Meticulously curated interior finishes designed for focused studying and restful sleep.",
    items: [
      { name: "High-Speed 500 Mbps Wi-Fi", description: "Dedicated commercial fiber connection with dual mesh repeaters per floor.", icon: "Wifi", highlight: true },
      { name: "Split Air Conditioning", description: "Silent, energy-efficient inverter ACs in every single room.", icon: "Wind", highlight: true },
      { name: "Orthopedic Memory Foam Beds", description: "Doctor-approved spine support mattresses with sanitized protectors.", icon: "Bed" },
      { name: "Ergonomic Study Desks", description: "Spacious desk, pin-up notice board, ergonomic lumbar chair & reading lamp.", icon: "BookOpen" },
      { name: "Wardrobe & Private Storage", description: "Full-height modular cupboards with hanging rod and jewelry drawers.", icon: "Package" },
      { name: "Bedside Fast Charging Hub", description: "Universal power sockets with USB-C quick charge ports by the pillow.", icon: "Zap" },
      { name: "Full-Length Dressing Mirror", description: "Beveled mirror with diffused LED warm backlighting for grooming.", icon: "Sparkles" },
      { name: "Daily Professional Housekeeping", description: "Mopping, sanitizing, dusting & bathroom deep clean every single morning.", icon: "Sparkle" },
      { name: "Fresh Linens & Laundry Basket", description: "Personal laundry hampers with free twice-weekly bedsheet change.", icon: "Shirt" }
    ]
  },
  {
    id: "dining",
    title: "Dining & Nutrition",
    badge: "4 Meals Daily • Chef-Cooked",
    iconName: "UtensilsCrossed",
    description: "Nutritious, home-style wholesome meals prepared in a certified commercial hygienic kitchen.",
    items: [
      { name: "4 Meals Daily", description: "Nutritious Breakfast, wholesome Lunch, High-Tea Snacks, and Dinner.", icon: "Coffee", highlight: true },
      { name: "Pure Vegetarian & Jain Options", description: "Separate preparation counter and dedicated vessels for Jain residents.", icon: "Leaf", highlight: true },
      { name: "Sunday Grand Feasts", description: "Special rotating menus: South Indian, Punjabi, Continental, and Street Chaat.", icon: "Award" },
      { name: "Multi-Stage RO Alkaline Water", description: "Purified RO water dispensers on every floor with hot, cold, and ambient taps.", icon: "Droplets" },
      { name: "Pantry with Microwave & Fridge", description: "Resident self-use pantry with microwave, toaster, electric kettle & double-door fridge.", icon: "Refrigerator" },
      { name: "Monthly Menu Tasting Council", description: "Resident student committee votes on weekly dish rotations and feedback.", icon: "ClipboardList" }
    ]
  },
  {
    id: "facilities",
    title: "Common Facilities",
    badge: "Lifestyle & Community",
    iconName: "Building2",
    description: "Thoughtfully crafted communal spaces to socialize, exercise, relax, and excel in your studies.",
    items: [
      { name: "Victorian Heritage Rooftop", description: "Open-air garden terrace overlooking South Mumbai heritage architecture.", icon: "Sun", highlight: true },
      { name: "Silent 24/7 Study Lounge", description: "Soundproof library zone with reference books, printing station & coffee bar.", icon: "BookMarked", highlight: true },
      { name: "Entertainment & Smart TV Lounge", description: "Cozy sofa seating, Netflix / Prime, PS5 console, board games & projector.", icon: "Tv" },
      { name: "Automated Laundry Station", description: "Commercial front-load washers, dryers, and heavy steam ironing boards.", icon: "Layers" },
      { name: "Fitness & Yoga Corner", description: "Treadmills, yoga mats, resistance bands, dumbbells & morning group sessions.", icon: "Activity" },
      { name: "100% Diesel Power Generator", description: "Instant seamless power backup for ACs, elevators, Wi-Fi, and lights.", icon: "BatteryCharging" }
    ]
  }
];

export const LOCATION_LANDMARKS: LocationLandmark[] = [
  {
    id: "xaviers",
    name: "St. Xavier's College",
    category: "college",
    distance: "450 meters",
    walkingTime: "5 min walk",
    drivingTime: "2 min",
    description: "Famous autonomous arts & science college. Safest well-lit direct walk down Mahapalika Marg.",
    coordinates: { x: 38, y: 22 },
    icon: "GraduationCap",
    isKeyCollege: true
  },
  {
    id: "hr-college",
    name: "H.R. College of Commerce & Economics",
    category: "college",
    distance: "800 meters",
    walkingTime: "9 min walk",
    drivingTime: "4 min",
    description: "Prestigious commerce institute near Churchgate. Flat, tree-lined walking route.",
    coordinates: { x: 25, y: 48 },
    icon: "GraduationCap",
    isKeyCollege: true
  },
  {
    id: "kc-college",
    name: "K.C. College (Kishinchand Chellaram)",
    category: "college",
    distance: "850 meters",
    walkingTime: "10 min walk",
    drivingTime: "4 min",
    description: "Prominent arts, science and media college right adjacent to HR College.",
    coordinates: { x: 22, y: 52 },
    icon: "GraduationCap",
    isKeyCollege: true
  },
  {
    id: "jai-hind",
    name: "Jai Hind College",
    category: "college",
    distance: "1.2 km",
    walkingTime: "14 min walk",
    drivingTime: "5 min",
    description: "Leading college on Marine Drive. Direct BEST AC bus connects in 4 minutes.",
    coordinates: { x: 18, y: 68 },
    icon: "GraduationCap",
    isKeyCollege: true
  },
  {
    id: "glc",
    name: "Government Law College (GLC)",
    category: "college",
    distance: "900 meters",
    walkingTime: "10 min walk",
    drivingTime: "4 min",
    description: "India's oldest law school opposite Churchgate Station.",
    coordinates: { x: 28, y: 60 },
    icon: "GraduationCap",
    isKeyCollege: true
  },
  {
    id: "churchgate",
    name: "Churchgate Railway Station",
    category: "transit",
    distance: "700 meters",
    walkingTime: "8 min walk",
    drivingTime: "3 min",
    description: "Western Railway terminus connecting Dadar, Bandra, Andheri and Borivali.",
    coordinates: { x: 24, y: 58 },
    icon: "Train"
  },
  {
    id: "csmt",
    name: "CSMT Railway Station & Metro 3",
    category: "transit",
    distance: "600 meters",
    walkingTime: "7 min walk",
    drivingTime: "3 min",
    description: "Central Railway hub & Aqua Line Metro 3 for fast connectivity across Mumbai.",
    coordinates: { x: 50, y: 28 },
    icon: "Train"
  },
  {
    id: "best-bus",
    name: "Fort & Hutatma Chowk Bus Stops",
    category: "transit",
    distance: "120 meters",
    walkingTime: "2 min walk",
    drivingTime: "1 min",
    description: "AC electric buses connecting Colaba, Nariman Point, and Worli every 3 mins.",
    coordinates: { x: 44, y: 46 },
    icon: "Bus"
  },
  {
    id: "kala-ghoda",
    name: "Kala Ghoda Art Precinct & Cafes",
    category: "cafe",
    distance: "300 meters",
    walkingTime: "3 min walk",
    drivingTime: "1 min",
    description: "Kala Ghoda Cafe, Subko Coffee, Blue Tokai, Nutcracker & Starbucks Heritage.",
    coordinates: { x: 55, y: 62 },
    icon: "Coffee"
  },
  {
    id: "bombay-hospital",
    name: "Bombay Hospital & Medical Research",
    category: "healthcare",
    distance: "750 meters",
    walkingTime: "8 min walk",
    drivingTime: "3 min",
    description: "Multi-specialty tertiary care hospital with 24/7 casualty & emergency.",
    coordinates: { x: 32, y: 34 },
    icon: "Cross"
  },
  {
    id: "wellness-pharmacy",
    name: "24/7 Apollo Pharmacy & Nature's Basket",
    category: "shopping",
    distance: "150 meters",
    walkingTime: "2 min walk",
    drivingTime: "1 min",
    description: "Gourmet grocery stores, HDFC & SBI ATMs, and round-the-clock medical stores.",
    coordinates: { x: 46, y: 40 },
    icon: "ShoppingBag"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ananya Deshmukh",
    role: "B.A. Psychology (3rd Year)",
    institution: "St. Xavier's College, Mumbai",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    stayDuration: "Resident for 2 Years",
    tags: ["Safety", "Location", "Study Atmosphere"],
    text: "Living at The Fort House is the best decision my family and I made. It's literally a 5-minute walk to Xavier's, so I never deal with Mumbai traffic or train delays. The biometric doors and female warden make me feel 100% secure even after late rehearsals.",
    roomType: "Double Sharing"
  },
  {
    id: "t2",
    name: "Dr. Sunita & Rajesh Sharma",
    role: "Parents of Priya Sharma",
    institution: "H.R. College B.Com Student",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    stayDuration: "Parent Review • Verified",
    tags: ["Parent Peace of Mind", "Nutritious Food", "CCTV Security"],
    text: "Sending our only daughter from Delhi to Mumbai was nerve-wracking. The Fort House management gave us total peace of mind. The digital visitor OTP system, wholesome home-like food, and constant updates from the warden have been outstanding.",
    isParent: true,
    roomType: "Single Occupancy"
  },
  {
    id: "t3",
    name: "Zoya Merchant",
    role: "Financial Analyst",
    institution: "Morgan Stanley (Nariman Point)",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    stayDuration: "Resident for 1.5 Years",
    tags: ["High-Speed Wi-Fi", "Quiet Study Hours", "Housekeeping"],
    text: "The Wi-Fi speed and silent study lounge are lifesavers for my CFA prep and office shifts. The housekeeping is immaculate, and coming back to hot dinner on the rooftop after a 10-hour workday feels like luxury.",
    roomType: "Single Occupancy"
  },
  {
    id: "t4",
    name: "Meera Subramanian",
    role: "B.M.M. Media Student",
    institution: "K.C. College, Churchgate",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    stayDuration: "Resident for 1 Year",
    tags: ["Community", "Sunday Feasts", "Rooftop Yoga"],
    text: "The community of girls here is so empowering! We do weekend yoga on the heritage rooftop and study together during exams. Plus, the Sunday Biryani & South Indian breakfasts are unbeatable.",
    roomType: "Triple Sharing"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "food",
    question: "What are the meal timings, and are Jain / Vegan options available?",
    answer: "We serve 4 meals a day: Breakfast (7:30 AM – 9:30 AM), Lunch (12:30 PM – 2:30 PM, or packed dabbas for college/office on request), Evening High Tea & Snacks (5:00 PM – 6:30 PM), and Dinner (8:00 PM – 10:00 PM). We have dedicated separate preparation counters for Pure Vegetarian and Jain meals (no onion, garlic, or root vegetables). You can also pre-order late dabbas if you have evening lectures."
  },
  {
    id: "faq-2",
    category: "safety",
    question: "What are the curfew and night-out policy rules?",
    answer: "Our standard gate closing time is 10:30 PM on weekdays and 11:00 PM on weekends. If you need late entry or night-out permission for college fests, internships, or travel, simply submit a request through our digital resident app. The warden verifies parent consent via instant SMS/OTP before granting electronic gate access."
  },
  {
    id: "faq-3",
    category: "safety",
    question: "Can male visitors or parents visit the rooms?",
    answer: "To ensure resident privacy and comfort, male visitors (including male family members) are welcomed in our ground-floor reception and hospitality lounge only. Mothers and female guardians are permitted to visit resident rooms during daytime visiting hours (10:00 AM – 6:00 PM) with prior sign-in."
  },
  {
    id: "faq-4",
    category: "rent",
    question: "What is included in the monthly rent? Are there hidden utility charges?",
    answer: "Our rent is 100% all-inclusive. It covers: your fully furnished room, electricity (with generous AC slab quota), 500 Mbps high-speed mesh Wi-Fi, 4 daily meals, daily housekeeping, 100% power generator backup, RO drinking water, and access to all amenities (study lounge, rooftop, fitness corner). There is ZERO brokerage."
  },
  {
    id: "faq-5",
    category: "rent",
    question: "What is the security deposit and refund policy?",
    answer: "We require a refundable security deposit equivalent to approximately 1 to 1.5 months of rent upon room confirmation. The deposit is held securely and refunded directly to your bank account within 7 working days of move-out following a standard room inspection, subject to 30 days written notice."
  },
  {
    id: "faq-6",
    category: "policies",
    question: "What is the move-in process and required KYC documents?",
    answer: "Move-in is seamless! Required documents include: Government ID (Aadhaar / Passport / Voter ID), College ID or Company Employment Letter, 2 Passport-size photos, and Parent/Guardian ID & emergency contact details. Once verified, your biometric access profile is created within 10 minutes on arrival."
  },
  {
    id: "faq-7",
    category: "amenities",
    question: "How fast is the Wi-Fi and is there quiet study space during exam times?",
    answer: "We provide dual 500 Mbps dedicated commercial leased fiber connections with automatic failover. Our 2nd-floor Silent Study Lounge is open 24/7 with ergonomic chairs, power outlets at every desk, sound-dampening acoustic paneling, and strict quiet hours."
  },
  {
    id: "faq-8",
    category: "amenities",
    question: "How does the laundry service operate?",
    answer: "Residents have access to our self-service automated laundry room with commercial LG front-load washing machines and dryers free of charge. Additionally, we provide twice-weekly professional bed linen and towel laundering service included in your rent."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "bedrooms",
    title: "Executive Single Bedroom",
    caption: "Spacious private bedroom with Daikin AC, ergonomic study desk and floor-to-ceiling mirror",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g2",
    category: "bedrooms",
    title: "Premium Double Sharing Room",
    caption: "Twin orthopedic beds, dual study corners, and warm colonial architectural accents",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g3",
    category: "bedrooms",
    title: "Classic Triple Sharing Suite",
    caption: "High ceilings, individual wardrobes, and sunlit heritage bay windows",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g4",
    category: "common",
    title: "Silent 24/7 Study & Library Lounge",
    caption: "Soundproof academic hall with ergonomic seating and high-speed mesh Wi-Fi",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g5",
    category: "common",
    title: "South Mumbai Heritage Rooftop Lounge",
    caption: "Sunset terrace with ambient fairy lights, yoga area, and sea breeze from Churchgate",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g6",
    category: "dining",
    title: "Sunlit Resident Dining Hall",
    caption: "Hygienic buffet counter serving 4 daily fresh chef-prepared hot meals",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g7",
    category: "dining",
    title: "Nutritious Homestyle Meal Spread",
    caption: "Fresh rotis, dal tadka, paneer curry, organic salads, and dessert specials",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g8",
    category: "washrooms",
    title: "Modern Ensuite Washrooms",
    caption: "Sanitized, ceramic tile bathrooms with instant geysers, dual mirrors, and exhaust ventilation",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "g9",
    category: "security",
    title: "Biometric Access & 24/7 Security Reception",
    caption: "Touchless biometric gate, CCTV monitoring screen, and staffed warden desk",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"
  }
];

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: "ev1",
    title: "Sunrise Rooftop Yoga & Breathwork",
    date: "This Sunday, 7:00 AM",
    time: "7:00 AM - 8:15 AM",
    category: "wellness",
    location: "Heritage Rooftop Deck",
    description: "Guided restorative Hatha yoga session followed by fresh detox green smoothies.",
    attendeesCount: 22
  },
  {
    id: "ev2",
    title: "CV Polish & Corporate Mentorship",
    date: "Wednesday, 7:30 PM",
    time: "7:30 PM - 9:00 PM",
    category: "career",
    location: "Study Conference Lounge",
    description: "Senior alumna mentors from McKinsey & Morgan Stanley reviewing resumes for internship seasons.",
    attendeesCount: 18
  },
  {
    id: "ev3",
    title: "Fort & Kala Ghoda Heritage Walking Tour",
    date: "Next Saturday, 4:30 PM",
    time: "4:30 PM - 6:30 PM",
    category: "heritage",
    location: "Meeting at Main Gate",
    description: "Discover historic Victorian Gothic architecture, art galleries, and hidden street cafes with an architect guide.",
    attendeesCount: 26
  }
];

export const WEEKLY_MENU = [
  {
    day: "Monday",
    breakfast: "Poha with Roasted Peanuts, Boiled Eggs / Sprout Salad, Tea & Filter Coffee",
    lunch: "Paneer Butter Masala, Yellow Dal Tadka, Phulkas, Steamed Basmati Rice & Cucumber Raita",
    snacks: "Vegetable Cheese Sandwich, Masala Chai & Green Tea",
    dinner: "Mix Veg Handi, Kali Dal, Jeera Rice, Chapati & Fruit Custard"
  },
  {
    day: "Tuesday",
    breakfast: "Steamed Idli & Medu Vada with Coconut Chutney & Drumstick Sambar",
    lunch: "Chole Masala, Amritsari Kulcha / Phulkas, Jeera Rice, Boondi Raita & Onion Salad",
    snacks: "Corn & Cheese Quesadilla / Mathri with Hot Tea",
    dinner: "Aloo Gobhi Adraki, Moong Dal Fry, Phulkas, Rice & Gulab Jamun"
  },
  {
    day: "Wednesday",
    breakfast: "Aloo Paratha with White Butter, Curd & Pickle, Fresh Cut Papaya",
    lunch: "Dal Makhani, Bhindi Do Pyaza, Phulkas, Ghee Rice & Kachumber",
    snacks: "Samosa Chaat / Bhel Puri with Mint Tea",
    dinner: "Malai Kofta, Palak Corn, Tawa Roti, Veg Pulao & Kheer"
  },
  {
    day: "Thursday",
    breakfast: "Upma with Cashews, Boiled Eggs / Fresh Fruits, South Indian Filter Coffee",
    lunch: "Rajma Masala, Steamed Rice, Phulkas, Baingan Bharta & Curd",
    snacks: "Paneer Kathi Rolls & Lemon Iced Tea",
    dinner: "Kadhai Paneer, Dal Fry, Phulkas, Peas Pulao & Chocolate Mousse"
  },
  {
    day: "Friday",
    breakfast: "Masala Dosa with Sambar & 2 Chutneys, Fresh Watermelon Juice",
    lunch: "Gujarati / Rajasthani Kadhi, Khichdi / Steamed Rice, Batata Nu Shaak & Phulkas",
    snacks: "White Sauce Pasta / Garlic Bread & Hot Cocoa / Tea",
    dinner: "Pav Bhaji (Chef Special with Amul Butter), Pulao, Salad & Brownie"
  },
  {
    day: "Saturday",
    breakfast: "Puri Bhaji (Halwai Style) with Sweet Lassi / Fresh Seasonal Fruits",
    lunch: "Dum Aloo Kashmiri, Dal Tadka, Phulkas, Kashmiri Pulao & Papad",
    snacks: "Crispy Veg Cutlet with Mint Dip & Masala Chai",
    dinner: "Hakka Noodles, Manchurian Gravy, Veg Fried Rice & Ice Cream"
  },
  {
    day: "Sunday (Grand Feast)",
    breakfast: "South Indian Special Uttapam & Masala Omelette / Sprouts, Fresh Orange Juice",
    lunch: "Chef's Hyderabadi Dum Veg Biryani, Mirchi Ka Salan, Burani Raita & Shahi Tukda",
    snacks: "Mumbai Style Bun Maska & Irani Chai / Cold Coffee",
    dinner: "Shahi Paneer, Dal Maharani, Laccha Paratha, Matar Pulao & Rasmalai"
  }
];
