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
  map: boolean;
}

export interface EventConfig {
  title: string;
  subtitle: string;
  date: string;
  location: LocationConfig;
  features: FeaturesConfig;
  heroImage?: string;
  gallery?: GalleryConfig;
}
