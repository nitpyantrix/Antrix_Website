export type NavigationTab = 
  | 'home' 
  | 'about' 
  | 'events' 
  | 'projects' 
  | 'gallery' 
  | 'tracker' 
  | 'calendar' 
  | 'team';

export interface TonightSkyData {
  location: {
    name: string;
    campus: string;
    coordinates: string;
    bortleClass: number;
    skyQualityMeter: string;
  };
  observationWindow: {
    start: string;
    end: string;
    condition: 'Excellent' | 'Good' | 'Fair' | 'Poor';
    cloudCoverPercent: number;
    humidityPercent: number;
  };
  moon: {
    phase: string;
    illuminationPercent: number;
    phaseIcon: string;
    moonrise: string;
    moonset: string;
    altitude: string;
    ageDays: number;
  };
  visiblePlanets: {
    name: string;
    altitude: string;
    magnitude: string;
    direction: string;
    bestTime: string;
    highlight: string;
  }[];
  featuredConstellations: {
    name: string;
    latinName: string;
    prominentStars: string[];
    direction: string;
    altitude: string;
  }[];
  quickMetrics: {
    issPass: string;
    seeingRating: string;
    satellitePassesCount: number;
  };
}

export type CosmicCategory = 'Lunar' | 'Meteor Shower' | 'Planetary' | 'Comet' | 'Eclipse' | 'Space Mission';

export interface CosmicEvent {
  id: string;
  name: string;
  category: CosmicCategory;
  date: string;
  time: string;
  description: string;
  visibility: 'Visible from NIT Puducherry' | 'Global / Requires Telescope' | 'Visible with Naked Eye';
  isLocalToNITPY: boolean;
  magnitude?: string;
  peakWindow?: string;
  observationTips: string;
  featured?: boolean;
}

export type ClubEventStatus = 'upcoming' | 'ongoing' | 'past';
export type RegistrationStatus = 'Open' | 'Closed' | 'Upcoming' | 'Completed';

export interface ClubEvent {
  id: string;
  title: string;
  category: 'Observation' | 'Workshop' | 'Astrophotography' | 'Showcase' | 'Lecture';
  date: string;
  time: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  status: ClubEventStatus;
  registrationStatus: RegistrationStatus;
  bannerImage: string;
  capacity?: string;
  leadCoordinator?: string;
  prerequisites?: string[];
  tags: string[];
}

export type ProjectCategory = 'All' | 'Astronomy' | 'Aerospace' | 'Electronics' | 'Embedded Systems' | 'Robotics' | 'Space Technology';

export interface Project {
  id: string;
  name: string;
  category: 'Astronomy' | 'Aerospace' | 'Electronics' | 'Embedded Systems' | 'Robotics' | 'Space Technology';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  status: 'Active Prototype' | 'Completed' | 'Research & Dev' | 'Flight Ready';
  team: { name: string; role: string }[];
  image: string;
  highlights?: string[];
  githubUrl?: string;
  docsUrl?: string;
}

export type GalleryCategory = 'All' | 'Astronomy' | 'Events' | 'Workshops' | 'Telescope Sessions' | 'Projects' | 'Team';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Astronomy' | 'Events' | 'Workshops' | 'Telescope Sessions' | 'Projects' | 'Team';
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  equipment?: string;
  credit?: string;
}

export interface CelestialObject {
  id: string;
  name: string;
  type: 'Star' | 'Planet' | 'Nebula' | 'Galaxy' | 'Cluster' | 'Constellation';
  magnitude: number | string;
  altitude: string;
  azimuth: string;
  constellation: string;
  distance: string;
  visibility: 'Naked Eye' | 'Binocular' | 'Telescopic' | 'Below Horizon';
  rightAscension: string;
  declination: string;
  description: string;
  spectralType?: string;
  color: string;
  xPercent: number; // For sky map positioning (0-100)
  yPercent: number; // For sky map positioning (0-100)
  size: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'faculty' | 'core' | 'member';
  department: string;
  year?: string;
  areaOfInterest: string;
  bio?: string;
  avatar: string;
  email?: string;
  linkedin?: string;
  github?: string;
}
