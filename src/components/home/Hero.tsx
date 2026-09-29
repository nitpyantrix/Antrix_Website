import React from 'react';
import type { NavigationTab } from '../../types';
import { Button } from '../ui/Button';
import { Compass, Telescope, Sparkles, Orbit, Radio } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Top telemetry pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-space-900/80 border border-slate-700/80 text-xs text-slate-300 backdrop-blur-md shadow-lg shadow-black/40 animate-in fade-in slide-in-from-bottom-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-[11px] text-stellar-300 font-semibold tracking-wide">
            NIT PUDUCHERRY ASTRONOMY & AEROSPACE
          </span>
          <span className="text-slate-400">•</span>
          <span className="font-mono text-[11px] text-slate-400">10.9850° N</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-display uppercase leading-[1.08]">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400">Beyond</span> Limits.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 font-display max-w-3xl mx-auto">
            Antrix — the astronomy and space technology club of NIT Puducherry.
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Where student engineers, stargazers, and researchers unravel the cosmos through hands-on telescope observation, rocket telemetry, embedded avionics, autonomous planetary robotics, and deep-space imaging.
          </p>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            variant="accent"
            size="lg"
            icon={<Compass className="w-5 h-5 text-cyan-200" />}
            onClick={() => onNavigate('tracker')}
            className="w-full sm:w-auto"
          >
            Explore the Sky
          </Button>

          <Button
            variant="secondary"
            size="lg"
            icon={<Telescope className="w-5 h-5 text-cosmic-400" />}
            onClick={() => onNavigate('about')}
            className="w-full sm:w-auto"
          >
            Discover Antrix
          </Button>
        </div>

        {/* Quick Highlights Grid */}
        <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="p-3.5 rounded-xl bg-space-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-stellar-400 mb-1">
              <Telescope className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase">Optics</span>
            </div>
            <p className="text-sm font-bold text-white">8" Dobsonian</p>
            <p className="text-[11px] text-slate-400">Motorized tracking refractor</p>
          </div>

          <div className="p-3.5 rounded-xl bg-space-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cosmic-400 mb-1">
              <Radio className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase">Telemetry</span>
            </div>
            <p className="text-sm font-bold text-white">433MHz LoRa</p>
            <p className="text-[11px] text-slate-400">Long-range CanSat & avionics</p>
          </div>

          <div className="p-3.5 rounded-xl bg-space-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <Orbit className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase">Robotics</span>
            </div>
            <p className="text-sm font-bold text-white">SANKALP-1 Rover</p>
            <p className="text-[11px] text-slate-400">ROS 2 rocker-bogie platform</p>
          </div>

          <div className="p-3.5 rounded-xl bg-space-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono font-semibold uppercase">Site Datum</span>
            </div>
            <p className="text-sm font-bold text-white">Bortle Class 4</p>
            <p className="text-[11px] text-slate-400">Coastal dark sky corridor</p>
          </div>
        </div>
      </div>
    </section>
  );
};
