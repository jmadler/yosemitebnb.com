import { SeasonalActivities } from './activities';

export interface NearbyAttraction {
  name: string;
  description: string;
  url: string;
}

export interface TransportationOption {
  description: string;
  url?: string;
  schedule?: string;
  cost?: string;
  locations?: string[];
  providers?: string[];
}

export interface SiteInfo {
  address: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  parking: string;
  distances: Record<string, string>;
  nearbyAttractions: NearbyAttraction[];
  seasonalActivities: SeasonalActivities;
  houseRules: string[];
  transportation: Record<string, TransportationOption>;
  maps: {
    google: string;
    apple: string;
    coordinates: {
      lat: number;
      lng: number;
    }
  }
} 