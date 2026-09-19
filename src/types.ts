export type Currency = 'BRL' | 'USD' | 'EUR';

export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: 'Europa' | 'Ásia' | 'Américas' | 'África e Oriente Médio' | 'Oceania';
  category: 'Romance' | 'Família' | 'Luxo' | 'Aventura' | 'Cultural';
  tagline: string;
  image: string;
  gallery: string[];
  durationDays: number;
  priceBRL: number;
  bestSeason: string;
  visaRequiredForBrazilians: boolean;
  visaNote: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
  rating: number;
  reviewsCount: number;
  featured?: boolean;
}

export interface PackageOffer {
  id: string;
  title: string;
  destinations: string;
  image: string;
  nights: number;
  priceBRL: number;
  discountPercentage?: number;
  departureDates: string;
  hotelCategory: string;
  flightIncluded: boolean;
  featuredBadge?: string;
  perks: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  trip: string;
  year: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface TravelChecklistItem {
  id: string;
  category: string;
  title: string;
  description: string;
  importance: 'Essencial' | 'Recomendado';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
