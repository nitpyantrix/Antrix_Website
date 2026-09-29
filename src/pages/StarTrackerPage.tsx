import React, { useState } from 'react';
import type { CelestialObject } from '../types';
import { celestialObjects } from '../data/celestialObjects';
import { StarMap } from '../components/tracker/StarMap';
import { CelestialObjectCard } from '../components/cards/CelestialObjectCard';
import { 
  Search, 
  MapPin, 
  Clock, 
  Calendar as CalendarIcon,
  RefreshCw
} from 'lucide-react';

export const StarTrackerPage: React.FC = () => {
  const [selectedObject, setSelectedObject] = useState<CelestialObject | null>(
    celestialObjects.find(o => o.id === 'sirius') || celestialObjects[0]
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [showConstellations, setShowConstellations] = useState(true);
  const [showPlanets, setShowPlanets] = useState(true);
  const [showDSO, setShowDSO] = useState(true);
  const [showGrid, setShowGrid] = useState(true);

  // Time controls
  const [selectedDate, setSelectedDate] = useState('2026-10-17');
  const [selectedTime, setSelectedTime] = useState('21:30');
  const [isLiveTime, setIsLiveTime] = useState(true);

  // Dedicated mobile tab ('map' | 'details' | 'controls')
  const [mobileTab, setMobileTab] = useState<'map' | 'details' | 'controls'>('map');

  const handleQuickSelect = (id: string) => {
    const obj = celestialObjects.find(o => o.id === id);
    if (obj) {
      setSelectedObject(obj);
      setMobileTab('details');
    }
  };

  return (
    <div className="py-10 sm:py-14 space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs uppercase font-mono tracking-widest text-stellar-400 font-semibold">
              VIRTUAL PLANISPHERE & CELESTIAL POSITIONING
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            STAR TRACKER
          </h1>
          <p className="text-sm text-slate-300">
            Explore the night sky above <span className="text-cyan-300 font-medium">NIT Puducherry (10.9850° N, 79.8450° E)</span>.
          </p>
        </div>

        {/* Status Pill */}
        <div className="flex items-center gap-2 text-xs font-mono bg-space-900 px-3.5 py-2 rounded-xl border border-slate-800 self-start md:self-auto">
          <MapPin className="w-3.5 h-3.5 text-stellar-400 shrink-0" />
          <span className="text-slate-200">Karaikal Coastal Datum</span>
          <span className="text-slate-500">•</span>
          <span className="text-emerald-400">Zenith Calibrated</span>
        </div>
      </div>

      {/* Control Bar: Location, Search, Time & Toggles */}
      <div className="p-4 sm:p-5 rounded-2xl bg-space-900 border border-slate-800 shadow-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search star, planet, or nebula (e.g. Sirius, Jupiter)..."
              className="w-full pl-9 pr-4 py-2 bg-space-850 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-stellar-400 transition-colors"
            />
          </div>

          {/* Date & Time Selectors */}
          <div className="md:col-span-5 flex items-center gap-2">
            <div className="flex-1 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-space-850 border border-slate-700/80 text-xs font-mono text-slate-300">
              <CalendarIcon className="w-3.5 h-3.5 text-stellar-400 shrink-0" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent text-slate-200 focus:outline-none w-full cursor-pointer text-xs"
              />
            </div>

            <div className="flex-1 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-space-850 border border-slate-700/80 text-xs font-mono text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cosmic-400 shrink-0" />
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => {
                  setSelectedTime(e.target.value);
                  setIsLiveTime(false);
                }}
                className="bg-transparent text-slate-200 focus:outline-none w-full cursor-pointer text-xs"
              />
            </div>

            <button
              onClick={() => setIsLiveTime(!isLiveTime)}
              title="Sync with current observation clock"
              className={`p-2 rounded-xl border text-xs font-mono transition-colors shrink-0 ${
                isLiveTime
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-800'
                  : 'bg-space-850 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLiveTime ? 'animate-spin-slow text-cyan-300' : ''}`} />
            </button>
          </div>

          {/* Quick Target Select Dropdown */}
          <div className="md:col-span-3">
            <select
              value={selectedObject?.id || ''}
              onChange={(e) => handleQuickSelect(e.target.value)}
              aria-label="Select target celestial object"
              className="w-full px-3 py-2 bg-space-850 border border-slate-700/80 rounded-xl text-xs text-slate-200 font-mono focus:outline-none focus:border-stellar-400 cursor-pointer"
            >
              <option value="" disabled>Select Target Object...</option>
              {celestialObjects.map(obj => (
                <option key={obj.id} value={obj.id}>
                  {obj.name} ({obj.type})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Feature Toggles Row */}
        <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold mr-1">
              Layers:
            </span>
            <button
              onClick={() => setShowConstellations(!showConstellations)}
              className={`px-3 py-1 rounded-lg border font-mono transition-colors ${
                showConstellations
                  ? 'bg-indigo-950/80 text-indigo-300 border-indigo-700'
                  : 'bg-space-850 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              ✦ Constellations
            </button>
            <button
              onClick={() => setShowPlanets(!showPlanets)}
              className={`px-3 py-1 rounded-lg border font-mono transition-colors ${
                showPlanets
                  ? 'bg-amber-950/80 text-amber-300 border-amber-700'
                  : 'bg-space-850 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              🪐 Planets
            </button>
            <button
              onClick={() => setShowDSO(!showDSO)}
              className={`px-3 py-1 rounded-lg border font-mono transition-colors ${
                showDSO
                  ? 'bg-purple-950/80 text-purple-300 border-purple-700'
                  : 'bg-space-850 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              🌌 Deep Sky (M42/M31)
            </button>
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`px-3 py-1 rounded-lg border font-mono transition-colors ${
                showGrid
                  ? 'bg-cyan-950/80 text-cyan-300 border-cyan-700'
                  : 'bg-space-850 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              ⊕ Altitude/Azimuth Grid
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-400 hidden lg:block">
            Targeting: <span className="text-white font-semibold">{selectedObject?.name || 'None'}</span>
          </div>
        </div>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="lg:hidden flex rounded-xl bg-space-900 p-1 border border-slate-800 text-xs font-medium">
        <button
          onClick={() => setMobileTab('map')}
          className={`flex-1 py-2 rounded-lg transition-colors ${
            mobileTab === 'map' ? 'bg-space-800 text-white font-bold' : 'text-slate-400'
          }`}
        >
          Interactive Sky Map
        </button>
        <button
          onClick={() => setMobileTab('details')}
          className={`flex-1 py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
            mobileTab === 'details' ? 'bg-space-800 text-white font-bold' : 'text-slate-400'
          }`}
        >
          Target Inspector
          {selectedObject && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
        </button>
      </div>

      {/* Main Layout: Sky Map & Target Information Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Central Sky Map */}
        <div className={`lg:col-span-8 ${mobileTab === 'details' ? 'hidden lg:block' : 'block'}`}>
          <StarMap
            objects={celestialObjects}
            selectedObject={selectedObject}
            onSelectObject={(obj) => {
              setSelectedObject(obj);
              setMobileTab('details');
            }}
            showConstellations={showConstellations}
            showPlanets={showPlanets}
            showDSO={showDSO}
            showGrid={showGrid}
            searchQuery={searchQuery}
          />
          <p className="text-[11px] font-mono text-slate-400 mt-2 text-center sm:text-left">
            Tip: Drag to pan the sky dome. Use zoom buttons or mouse wheel. Click any star or planet marker to lock crosshairs.
          </p>
        </div>

        {/* Right Side: Object Inspector Panel */}
        <div className={`lg:col-span-4 ${mobileTab === 'map' ? 'hidden lg:block' : 'block'}`}>
          <CelestialObjectCard
            object={selectedObject}
            onCenterInSky={(obj) => {
              setSelectedObject(obj);
              setMobileTab('map');
            }}
          />

          {/* Quick Targets Strip */}
          <div className="mt-4 p-4 rounded-2xl bg-space-900 border border-slate-800 space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold">
              Popular Overhead Targets Tonight
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['sirius', 'jupiter', 'betelgeuse', 'orion-nebula', 'pleiades', 'saturn'].map((id) => {
                const item = celestialObjects.find(o => o.id === id);
                if (!item) return null;
                const isSelected = selectedObject?.id === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleQuickSelect(id)}
                    className={`text-xs px-2.5 py-1 rounded-lg font-mono border transition-all ${
                      isSelected
                        ? 'bg-cyan-950 text-cyan-300 border-cyan-700 shadow-sm'
                        : 'bg-space-850 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {item.name.split(' ')[0]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
