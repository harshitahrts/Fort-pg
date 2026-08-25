export type RoomType = 'single' | 'double' | 'triple';

export interface RoomOption {
  id: string;
  type: RoomType;
  title: string;
  subtitle: string;
  pricePerMonth: number;
  deposit: number;
  availableBeds: number;
  totalBeds: number;
  areaSqFt: number;
  image: string;
  gallery: string[];
  features: string[];
  description: string;
  floorPlanInfo: string;
  badge?: string;
}

export interface AmenityCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  badge: string;
  items: {
    name: string;
    description: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export interface LocationLandmark {
  id: string;
  name: string;
  category: 'college' | 'transit' | 'cafe' | 'healthcare' | 'shopping';
  distance: string;
  walkingTime: string;
  drivingTime?: string;
  description: string;
  coordinates: { x: number; y: number }; // percentage on custom map
  icon: string;
  isKeyCollege?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string; // e.g. "St. Xavier's College (3rd Year)" or "Parent of Riya (HR College)"
  avatar: string;
  rating: number;
  stayDuration: string;
  tags: string[];
  text: string;
  isParent?: boolean;
  roomType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'food' | 'safety' | 'policies' | 'rent' | 'amenities';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bedrooms' | 'common' | 'dining' | 'washrooms' | 'security';
  image: string;
  caption: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  category: 'wellness' | 'career' | 'social' | 'heritage';
  location: string;
  description: string;
  attendeesCount: number;
}

export interface BookingInquiry {
  fullName: string;
  age: string;
  phone: string;
  email: string;
  collegeOrCompany: string;
  preferredRoomType: RoomType;
  moveInDate: string;
  durationMonths: string;
  parentName: string;
  parentPhone: string;
  additionalNotes: string;
  visitDate?: string;
  visitTimeSlot?: string;
  isVisitOnly?: boolean;
}
