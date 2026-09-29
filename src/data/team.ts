import type { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  // Faculty Coordinators
  {
    id: 'fac-1',
    name: 'Dr. G. Lakshmi Narayanan',
    role: 'Faculty Advisor & Patron',
    category: 'faculty',
    department: 'Department of Physics & Applied Sciences',
    areaOfInterest: 'Observational Astrophysics, High-Energy Astronomy & Space Science',
    bio: 'Guiding student research in instrumentation, optical spectrometry, and fostering astronomy culture at NIT Puducherry.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    email: 'advisor.antrix@nitpy.ac.in',
  },
  {
    id: 'fac-2',
    name: 'Dr. R. Vigneshwaran',
    role: 'Technical Faculty Mentor',
    category: 'faculty',
    department: 'Electronics & Communication Engineering',
    areaOfInterest: 'Satellite Telemetry, Embedded RF Systems, SDR & Ground Stations',
    bio: 'Mentoring club engineering teams in RF hardware design, CanSat avionics, and low-altitude balloon telecommunications.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    email: 'rf.mentor@nitpy.ac.in',
  },

  // Core Team
  {
    id: 'core-1',
    name: 'Jaikrishnan B.',
    role: 'Club President & Systems Lead',
    category: 'core',
    department: 'Electronics & Communication Engg.',
    year: 'Final Year (B.Tech)',
    areaOfInterest: 'Avionics, Autonomous Rover Navigation & Club Operations',
    bio: 'Directing club initiatives, cross-functional engineering projects, and outdoor observation camps.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com/jaikrishnan-b',
    linkedin: 'https://linkedin.com/in/jaikrishnan-b',
    email: 'president.antrix@nitpy.ac.in'
  },
  {
    id: 'core-2',
    name: 'Sneha Ramachandran',
    role: 'Vice President & Aerospace Head',
    category: 'core',
    department: 'Mechanical Engineering',
    year: 'Final Year (B.Tech)',
    areaOfInterest: 'Fixed-Wing Drone Aerodynamics, CanSat Mechanical Structures & Recovery',
    bio: 'Oversees fixed-wing aerodynamics, parachute deceleration systems, and CAD rapid prototyping.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com/in/sneha-ram',
    email: 'aerospace.antrix@nitpy.ac.in'
  },
  {
    id: 'core-3',
    name: 'Aditya Swaminathan',
    role: 'Astronomy & Observation Wing Lead',
    category: 'core',
    department: 'Electrical & Electronics Engg.',
    year: '3rd Year (B.Tech)',
    areaOfInterest: 'Optical Telescopes, Deep Sky Catalogues & Sky Tour Public Outreach',
    bio: 'Chief sky guide responsible for maintaining club Dobsonian telescopes and organizing campus star-parties.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com/aditya-astro',
    email: 'observation.antrix@nitpy.ac.in'
  },
  {
    id: 'core-4',
    name: 'Karthik Venkatesh',
    role: 'Astrophotography & Image Processing Lead',
    category: 'core',
    department: 'Computer Science & Engineering',
    year: '3rd Year (B.Tech)',
    areaOfInterest: 'Computational Imaging, Siril Stacking Pipelines & Sensor Noise Analysis',
    bio: 'Lead imager managing camera rigs, harmonic tracking mounts, and post-processing workshops.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com/karthik-v',
    linkedin: 'https://linkedin.com/in/karthik-v'
  },
  {
    id: 'core-5',
    name: 'Pooja Mohan',
    role: 'Electronics & Sensor Systems Lead',
    category: 'core',
    department: 'Electronics & Communication Engg.',
    year: '3rd Year (B.Tech)',
    areaOfInterest: 'Embedded C, LoRa 433/868MHz Telemetry & PCB Circuit Layouts',
    bio: 'Architect of club telemetry sensors, power management units, and microcontroller firmware.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com/pooja-m',
    email: 'electronics.antrix@nitpy.ac.in'
  },

  // Student Members
  {
    id: 'mem-1',
    name: 'Rohan Kulkarni',
    role: 'SDR Ground Station Researcher',
    category: 'member',
    department: 'Electronics & Communication Engg.',
    year: '2nd Year (B.Tech)',
    areaOfInterest: 'Software Defined Radio, Weather Satellites & Orbital Mechanics',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'mem-2',
    name: 'Meera Nambiar',
    role: 'Telemetry Dashboard Developer',
    category: 'member',
    department: 'Computer Science & Engineering',
    year: '2nd Year (B.Tech)',
    areaOfInterest: 'WebSockets, Real-time Sensor Data Visualization & UI/UX',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'mem-3',
    name: 'Naveen Thevar',
    role: 'Robotics Chassis & Motor Control',
    category: 'member',
    department: 'Mechanical Engineering',
    year: '2nd Year (B.Tech)',
    areaOfInterest: 'Rocker-Bogie Dynamics, BLDC Actuators & 3D Prototyping',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'mem-4',
    name: 'Ananya Deshpande',
    role: 'Outreach & Astrophotography Apprentice',
    category: 'member',
    department: 'Civil Engineering',
    year: '1st Year (B.Tech)',
    areaOfInterest: 'Constellation Mapping, Visual Astronomy & Science Communication',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'mem-5',
    name: 'Farhan Akhtar M.',
    role: 'Embedded Firmware Developer',
    category: 'member',
    department: 'Electrical & Electronics Engg.',
    year: '2nd Year (B.Tech)',
    areaOfInterest: 'STM32 Microcontrollers, SPI/I2C Buses & Brushless ESCs',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'mem-6',
    name: 'Divya Sree',
    role: 'Atmospheric Science Associate',
    category: 'member',
    department: 'Physics & Applied Sciences',
    year: '2nd Year (M.Sc)',
    areaOfInterest: 'Aerosol Optical Depth, Seeing Indices & Marine Boundary Layers',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  }
];
