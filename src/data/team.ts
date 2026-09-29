import type { TeamMember } from '../types';

export const teamMembers: TeamMember[] = [
  // Faculty Advisor
  {
    id: 'fac-1',
    name: 'Dr. Naveen Raj',
    role: 'Faculty Advisor',
    category: 'faculty',
    department: 'Department of Mechanical Engineering',
    areaOfInterest: 'Thermal Systems, Aerospace Aerodynamics & Mechanical Prototyping',
    bio: 'Assistant Professor, Department of Mechanical Engineering. Mentoring student research in aerospace systems, mechanical fabrication, and scientific club activities at NIT Puducherry.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    email: 'naveenraj@nitpy.ac.in',
  },

  // Core Leadership Team
  {
    id: 'core-1',
    name: 'Dimitri Terell',
    role: 'Club Head',
    category: 'core',
    department: 'Computer Science & Engineering',
    year: '3rd Year (B.Tech)',
    areaOfInterest: 'Software Architecture, Scientific Computing & Web Platforms',
    bio: 'Co-leading club initiatives, software infrastructure, and computational astrophysics outreach at NIT Puducherry.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com/dimitri-terell',
    email: 'head.antrix@nitpy.ac.in',
  },
  {
    id: 'core-2',
    name: 'Sourav',
    role: 'Club Head',
    category: 'core',
    department: 'Electrical & Electronics Engineering',
    year: '3rd Year (B.Tech)',
    areaOfInterest: 'Power Systems, High-Energy Avionics & Observational Instrumentation',
    bio: 'Co-leading overall club administration, telescope observation camps, and interdisciplinary technical activities.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    email: 'head.antrix@nitpy.ac.in',
  },
  {
    id: 'core-3',
    name: 'Jaikrishnan P',
    role: 'Project Head',
    category: 'core',
    department: 'Electronics & Communication Engineering',
    year: '3rd Year (B.Tech)',
    areaOfInterest: 'Embedded Systems, Telemetry Avionics & Autonomous Robotics',
    bio: 'Directing all student technical projects, CanSat payloads, SANKALP-1 planetary rover systems, and RF communications.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    github: 'https://github.com/jaikrishnan-p',
    linkedin: 'https://linkedin.com/in/jaikrishnan-p',
    email: 'projects.antrix@nitpy.ac.in',
  },

  // Student Contributors & Wing Associates
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
