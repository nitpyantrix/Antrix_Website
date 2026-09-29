import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { 
  Telescope, 
  Rocket, 
  Cpu, 
  Bot, 
  Satellite, 
  Radio, 
  Compass, 
  Sparkles,
  Users,
  Target
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const wings = [
    {
      title: 'Observational Astronomy',
      icon: Telescope,
      emoji: '🔭',
      description: 'Hands-on sky tracking using optical reflector and refractor telescopes, star charting, messier catalog marathons, and lunar surface spectroscopy.',
      highlights: ['8" Motorized Dobsonian Mount', 'Planetary & Deep Sky Sessions', 'Public Stargazing Outreach']
    },
    {
      title: 'Aerospace Engineering',
      icon: Rocket,
      emoji: '🚀',
      description: 'Aerodynamic design of fixed-wing remote-controlled drones, flight telemetry integration, Pitot tube airspeed sensing, and computational fluid dynamics (CFD).',
      highlights: ['RC Fixed-Wing Research Platform', 'Sub-sonic Airfoil Testing', 'LoRa 433MHz Telemetry Link']
    },
    {
      title: 'Electronics & Embedded Systems',
      icon: Cpu,
      emoji: '⚡',
      description: 'Custom PCB design, low-power microcontroller architectures (ESP32, STM32, RP2040), sensor bus synchronization, and power-distribution circuitry.',
      highlights: ['Custom Eagle / KiCad PCB Layouts', 'FreeRTOS Task Scheduling', 'Fail-Safe Battery Management']
    },
    {
      title: 'Robotics & Automation',
      icon: Bot,
      emoji: '🤖',
      description: 'Design and fabrication of planetary rovers featuring rocker-bogie passive suspension mechanisms, LiDAR 2D SLAM, and ROS 2 autonomous navigation.',
      highlights: ['SANKALP-1 6-Wheel Rover', 'ROS 2 Nav2 Navigation Stack', 'Obstacle Traversal up to 20cm']
    },
    {
      title: 'Space Technology & Payloads',
      icon: Satellite,
      emoji: '🛰️',
      description: 'Engineering miniature CanSat atmospheric probes, high-altitude sounding balloon payloads, cosmic ray Geiger sensors, and parachute recovery modules.',
      highlights: ['330ml Form-Factor CanSat', 'Barometric & UV Radiation Logging', 'Active Buzzer & GPS Recovery']
    },
    {
      title: 'Communication & SDR Systems',
      icon: Radio,
      emoji: '📡',
      description: 'Rooftop Software Defined Radio (SDR) ground stations tracking and decoding automatic picture transmissions (APT) from NOAA and Meteor weather satellites.',
      highlights: ['137.5MHz Double-Cross VHF Antenna', 'Live Orbital Doppler Tracking', 'Subcontinent Cloud Imaging']
    }
  ];

  const timelineEvents = [
    {
      year: '2023',
      title: 'Genesis of Antrix at NITPY',
      tag: 'Club Formation',
      description: 'A passionate group of physics and electronics engineering students banded together to establish the official astronomy and space tech club at National Institute of Technology Puducherry.',
      badgeVariant: 'cyan' as const
    },
    {
      year: '2024',
      title: 'First Campus Star-Party & 8" Telescope Induction',
      tag: 'Major Event',
      description: 'Commissioned the club\'s flagship 8-inch Dobsonian telescope and hosted the inaugural campus-wide stargazing night with over 300 students and faculty in attendance.',
      badgeVariant: 'purple' as const
    },
    {
      year: '2024',
      title: 'Maiden CanSat Atmospheric Launch',
      tag: 'Technical Milestone',
      description: 'Fabricated and launched the institute\'s first student CanSat payload to an altitude of 800m, transmitting live LoRa environmental telemetry back to our ground station.',
      badgeVariant: 'emerald' as const
    },
    {
      year: '2025',
      title: 'SANKALP-1 Planetary Rover Unveiled',
      tag: 'Robotics Breakthrough',
      description: 'Completed the prototype of our six-wheel rocker-bogie planetary rover with ROS 2 autonomous obstacle avoidance and presented live trials on Karaikal beach dunes.',
      badgeVariant: 'amber' as const
    },
    {
      year: '2025',
      title: 'National Space Conclave Honors',
      tag: 'Achievement',
      description: 'Awarded 2nd Prize at the National Technical Symposium for our paper on "Cost-Effective Micro-Observatory Automation and Open Telemetry Protocols".',
      badgeVariant: 'rose' as const
    },
    {
      year: '2026',
      title: 'Autonomous Star Tracker & Coastal Ground Station',
      tag: 'Current Frontier',
      description: 'Developing high-precision harmonic drive equatorial tracking mounts and expanding automated satellite intercept capabilities for maritime atmospheric monitoring.',
      badgeVariant: 'cyan' as const
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header & Introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-slate-700/80 text-xs text-stellar-400 font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          DISCOVER OUR GENESIS & MOTIVATION
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Pioneering Space Science on the Puducherry Coast
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Antrix is the student-driven technical and astronomical hub of the National Institute of Technology Puducherry (NITPY), bridging theoretical astrophysics with real-world aerospace engineering and hardware innovation.
        </p>
      </div>

      {/* 2. Mission & Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-space-850 border border-slate-700 flex items-center justify-center text-stellar-400">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-lg text-white">Our Mission</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            To inspire and equip undergraduate students to demystify the cosmos through active observation, autonomous embedded robotics, open-source astrophysics code, and aerospace experimentation.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-space-850 border border-slate-700 flex items-center justify-center text-cosmic-400">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-lg text-white">Collaborative Ethos</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            We operate as an open incubator where curious freshmen pair with senior engineers across physics, electronics, mechanical, and computing domains to build functional space tech.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-space-900 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-space-850 border border-slate-700 flex items-center justify-center text-emerald-400">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-lg text-white">Scientific Credibility</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Our initiatives prioritize rigorous calibration, empirical data collection, and reproducible engineering — maintaining academic standards guided by department mentors.
          </p>
        </div>
      </div>

      {/* 3. What We Do: 6 Technical Wings */}
      <div className="space-y-8">
        <SectionHeader
          tag="OUR TECHNICAL DIVISIONS"
          title="WHAT WE DO"
          subtitle="Specialized wings collaborating on multi-disciplinary aerospace and space science problems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wings.map((wing) => {
            const Icon = wing.icon;
            return (
              <div
                key={wing.title}
                className="group p-6 rounded-2xl bg-space-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-space-850 border border-slate-700 flex items-center justify-center text-stellar-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl">{wing.emoji}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-stellar-300 transition-colors">
                    {wing.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {wing.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                    Core Capabilities:
                  </span>
                  <ul className="space-y-1">
                    {wing.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-stellar-400 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Our Journey Timeline */}
      <div className="space-y-8">
        <SectionHeader
          tag="MILESTONES & HISTORY"
          title="OUR JOURNEY"
          subtitle="From a grassroots campus stargazing group to a recognized collegiate space technology community."
        />

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative group">
              {/* Timeline circle node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-space-950 border-2 border-stellar-400 group-hover:scale-125 transition-transform" />

              <div className="p-5 rounded-2xl bg-space-900 border border-slate-800/90 hover:border-slate-700 transition-colors space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold font-mono text-stellar-300">
                      {event.year}
                    </span>
                    <span className="text-slate-400">•</span>
                    <h4 className="font-display font-bold text-base text-white">
                      {event.title}
                    </h4>
                  </div>
                  <Badge variant={event.badgeVariant} size="sm">
                    {event.tag}
                  </Badge>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
