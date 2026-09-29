import type { TonightSkyData } from '../types';

export const tonightData: TonightSkyData = {
  location: {
    name: 'NIT Puducherry Campus',
    campus: 'Thiruvettakudy, Karaikal',
    coordinates: '10.9850° N, 79.8450° E',
    bortleClass: 4,
    skyQualityMeter: '20.85 mag/arcsec²',
  },
  observationWindow: {
    start: '21:00 IST',
    end: '23:30 IST',
    condition: 'Excellent',
    cloudCoverPercent: 12,
    humidityPercent: 68,
  },
  moon: {
    phase: 'Waxing Gibbous',
    illuminationPercent: 72,
    phaseIcon: '🌔',
    moonrise: '16:48 IST',
    moonset: '04:22 IST',
    altitude: '48° Above SE Horizon',
    ageDays: 9.8,
  },
  visiblePlanets: [
    {
      name: 'Saturn',
      altitude: '42°',
      magnitude: '+0.6',
      direction: 'South-West',
      bestTime: '20:30 – 22:45',
      highlight: 'Rings tilted at ~9°, Titan visible in club 80mm refractor',
    },
    {
      name: 'Jupiter',
      altitude: '64°',
      magnitude: '-2.4',
      direction: 'East',
      bestTime: '21:15 – 02:00',
      highlight: 'Great Red Spot transiting at 22:10; Io and Europa in transit',
    },
    {
      name: 'Mars',
      altitude: '28°',
      magnitude: '+0.8',
      direction: 'East-North-East',
      bestTime: '23:00 – Dawn',
      highlight: 'Distinct rust-orange disc rising near Taurus border',
    },
    {
      name: 'Venus',
      altitude: '18°',
      magnitude: '-4.1',
      direction: 'East (Pre-dawn)',
      bestTime: '04:45 – 05:40',
      highlight: 'Brilliant morning star with 81% illuminated crescent disc',
    }
  ],
  featuredConstellations: [
    {
      name: 'Orion',
      latinName: 'The Celestial Hunter',
      prominentStars: ['Betelgeuse', 'Rigel', 'Bellatrix', 'Saiph'],
      direction: 'East-South-East',
      altitude: '52°',
    },
    {
      name: 'Taurus',
      latinName: 'The Bull',
      prominentStars: ['Aldebaran', 'Elnath', 'Pleiades Cluster'],
      direction: 'East',
      altitude: '64°',
    },
    {
      name: 'Canis Major',
      latinName: 'The Greater Dog',
      prominentStars: ['Sirius (Brightest star in night sky)', 'Adhara'],
      direction: 'South-East',
      altitude: '38°',
    },
    {
      name: 'Cassiopeia',
      latinName: 'The Queen',
      prominentStars: ['Schedar', 'Caph', 'Gamma Cas'],
      direction: 'North-North-West',
      altitude: '24°',
    }
  ],
  quickMetrics: {
    issPass: '20:14 IST (Mag -3.1, Max Alt 68° SW to NE, Duration 5m 40s)',
    seeingRating: 'Pickering 7/10 (Steady atmosphere, fine coastal breeze)',
    satellitePassesCount: 8,
  }
};
