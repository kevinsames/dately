export interface LocationConfig {
  venue: string;
  address: string;
  mapsUrl?: string;
}

export interface GalleryConfig {
  images: string[];
}

export interface FeaturesConfig {
  countdown: boolean;
  gallery: boolean;
  rsvp: boolean;
  map: boolean;
}

export interface EventConfig {
  title: string;
  subtitle: string;
  date: string;
  location: LocationConfig;
  message: string;
  dresscode?: string;
  features: FeaturesConfig;
  gallery?: GalleryConfig;
  heroImage?: string;
}
