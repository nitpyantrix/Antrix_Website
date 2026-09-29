import React from 'react';
import type { TonightSkyData, NavigationTab } from '../../types';
import { PlanetCard } from '../cards/PlanetCard';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  Moon, 
  Compass, 
  Clock, 
  Sparkles, 
  MapPin, 
  Layers, 
  Radio
} from 'lucide-react';

interface TonightSectionProps {
  data: TonightSkyData;
  onNavigate: (tab: NavigationTab) => void;
}

export const TonightSection: React.FC<TonightSectionProps> = ({ data, onNavigate }) => {
  return (
    <section className="relative py-16 sm:py-20 bg-space-950 border-y border-slate-800/80 overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          tag="OBSERVATORY TELEMETRY"
          title="TONIGHT AT NITPY"
          subtitle="Real-time celestial observation conditions, planetary alignments, and prime sky windows over the Karaikal coast."
          action={
            <Button
              variant="accent"
              icon={<Compass className="w-4 h-4 text-cyan-200" />}
              onClick={() => onNavigate('tracker')}
            >
              Open Star Tracker →
            </Button>
          }
        />

        {/* Top 4 Key Observation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {/* Card 1: Moon Phase */}
          <div className="bg-space-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                  <Moon className="w-3.5 h-3.5 text-stellar-400" />
                  Lunar Phase
                </span>
                <span className="text-xl" role="img" aria-label="Moon phase">
                  {data.moon.phaseIcon}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-white">
                  {data.moon.illuminationPercent}% Illuminated
                </h3>
                <p className="text-sm text-stellar-300 font-medium">
                  {data.moon.phase}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs font-mono text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Moonrise:</span>
                  <span>{data.moon.moonrise}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Moonset:</span>
                  <span>{data.moon.moonset}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Lunar Alt:</span>
                  <span className="text-stellar-300">{data.moon.altitude}</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-[10px] font-mono text-slate-400 text-right">
              Age: {data.moon.ageDays} days
            </div>
          </div>

          {/* Card 2: Prime Observation Window */}
          <div className="bg-space-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  Best Window
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {data.observationWindow.condition}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-white">
                  {data.observationWindow.start} – {data.observationWindow.end.split(' ')[0]}
                </h3>
                <p className="text-sm text-emerald-400 font-medium">
                  Peak Darkness & Clear Transparency
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs font-mono text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Cloud Cover:</span>
                  <span className="text-emerald-300">{data.observationWindow.cloudCoverPercent}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Relative Humidity:</span>
                  <span>{data.observationWindow.humidityPercent}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Atmospheric Seeing:</span>
                  <span className="text-stellar-300">Pickering 7/10</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-[10px] font-mono text-slate-400 text-right">
              Recommended: 80mm - 200mm Optics
            </div>
          </div>

          {/* Card 3: Sky Quality & Location */}
          <div className="bg-space-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cosmic-400" />
                  Site Coordinates
                </span>
                <span className="text-xs font-mono text-cosmic-300 bg-cosmic-950/80 px-2 py-0.5 rounded border border-cosmic-800/80">
                  Bortle {data.location.bortleClass}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-white">
                  NIT Puducherry
                </h3>
                <p className="text-xs text-slate-400">
                  {data.location.campus}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs font-mono text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Coordinates:</span>
                  <span>{data.location.coordinates}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">SQM Reading:</span>
                  <span className="text-cyan-300">{data.location.skyQualityMeter}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Horizon:</span>
                  <span>Clear East (Bay of Bengal)</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-[10px] font-mono text-emerald-400 text-right">
              ● Minimal Coastal Light Pollution
            </div>
          </div>

          {/* Card 4: Satellite Passes & ISS */}
          <div className="bg-space-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-amber-400" />
                  Orbital Telemetry
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800">
                  ISS Pass Tonight
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-white">
                  ISS Naked-Eye Pass
                </h3>
                <p className="text-xs text-amber-300">
                  Magnitude -3.1 (Brilliant)
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs font-mono text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Pass Window:</span>
                  <span className="text-amber-200">20:14 – 20:20 IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Max Elevation:</span>
                  <span>68° (SW to NE)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Passes Logged:</span>
                  <span>{data.quickMetrics.satellitePassesCount} Birds Overhead</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-[10px] font-mono text-slate-400 text-right">
              Source: NORAD TLE Model
            </div>
          </div>
        </div>

        {/* Visible Planets Showcase */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm uppercase font-mono tracking-wider text-slate-300 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-stellar-400" />
              Visible Planets Above NITPY Tonight
            </h3>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Data synchronized to coastal horizon
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.visiblePlanets.map((planet) => (
              <PlanetCard key={planet.name} {...planet} />
            ))}
          </div>
        </div>

        {/* Featured Constellations strip */}
        <div className="mt-8 p-5 rounded-2xl bg-space-900/60 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-white font-display flex items-center gap-2">
                <Layers className="w-4 h-4 text-cosmic-400" />
                Featured Overhead Constellations
              </h4>
              <p className="text-xs text-slate-400">
                Prime constellations anchoring tonight's observation sessions on the NIT Puducherry grounds.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {data.featuredConstellations.map((c) => (
                <div
                  key={c.name}
                  className="px-3 py-1.5 rounded-xl bg-space-850 border border-slate-700/80 text-xs flex items-center gap-2"
                >
                  <span className="font-semibold text-slate-200">{c.name}</span>
                  <span className="text-[10px] text-stellar-400 font-mono">({c.altitude} {c.direction})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
