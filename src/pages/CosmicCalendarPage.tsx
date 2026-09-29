import React, { useState, useMemo } from 'react';
import type { CosmicEvent } from '../types';
import { cosmicEvents } from '../data/cosmicEvents';
import { CosmicEventCard } from '../components/cards/CosmicEventCard';
import { FilterBar } from '../components/ui/FilterBar';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Modal } from '../components/ui/Modal';
import { Button } from '../components/ui/Button';
import { Telescope } from 'lucide-react';

export const CosmicCalendarPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [onlyNITPY, setOnlyNITPY] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CosmicEvent | null>(null);

  const filterOptions = [
    { id: 'All', label: 'All Events', count: cosmicEvents.length },
    { id: 'Meteor Shower', label: '🌠 Meteor Showers', count: cosmicEvents.filter(e => e.category === 'Meteor Shower').length },
    { id: 'Planetary', label: '🪐 Planetary', count: cosmicEvents.filter(e => e.category === 'Planetary').length },
    { id: 'Lunar', label: '🌙 Lunar Phases', count: cosmicEvents.filter(e => e.category === 'Lunar').length },
    { id: 'Eclipse', label: '🌑 Eclipses', count: cosmicEvents.filter(e => e.category === 'Eclipse').length },
    { id: 'Comet', label: '☄️ Comets', count: cosmicEvents.filter(e => e.category === 'Comet').length },
    { id: 'Space Mission', label: '🚀 Missions', count: cosmicEvents.filter(e => e.category === 'Space Mission').length },
  ];

  const filteredEvents = useMemo(() => {
    return cosmicEvents.filter(e => {
      if (activeCategory !== 'All' && e.category !== activeCategory) return false;
      if (onlyNITPY && !e.isLocalToNITPY) return false;
      return true;
    });
  }, [activeCategory, onlyNITPY]);

  return (
    <div className="py-12 sm:py-16 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader
        tag="ASTRONOMICAL EPHEMERIS"
        title="COSMIC CALENDAR"
        subtitle="Chronological almanac of celestial occurrences, meteor shower zeniths, planetary oppositions, and space exploration milestones."
        action={
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOnlyNITPY(!onlyNITPY)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono border transition-all flex items-center gap-1.5 ${
                onlyNITPY
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-700 shadow-md'
                  : 'bg-space-850 text-slate-300 border-slate-700 hover:text-white'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${onlyNITPY ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
              Visible from NIT Puducherry
            </button>
          </div>
        }
      />

      {/* Category Filter Bar */}
      <div className="border-b border-slate-800 pb-4">
        <FilterBar
          options={filterOptions}
          activeFilter={activeCategory}
          onFilterChange={(cat) => setActiveCategory(cat)}
        />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <CosmicEventCard
            key={event.id}
            event={event}
            onSelect={(ev) => setSelectedEvent(ev)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-16 bg-space-900 rounded-2xl border border-slate-800 space-y-3">
          <p className="text-slate-400 text-sm">No celestial events matched your active filters.</p>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setActiveCategory('All');
              setOnlyNITPY(false);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Event Details Inspector Modal */}
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent.name}
          subtitle={`${selectedEvent.category} • ${selectedEvent.date}`}
          maxWidth="lg"
        >
          <div className="space-y-5">
            {/* Status Strip */}
            <div className="p-3.5 rounded-xl bg-space-850 border border-slate-800 grid grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <span className="text-slate-400 block">Peak Window:</span>
                <span className="text-stellar-300 font-semibold">{selectedEvent.time}</span>
              </div>
              <div>
                <span className="text-slate-400 block">NITPY Horizon:</span>
                <span className={selectedEvent.isLocalToNITPY ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
                  {selectedEvent.isLocalToNITPY ? 'Directly Observable' : 'Global / Deep Sky'}
                </span>
              </div>
              {selectedEvent.magnitude && (
                <div>
                  <span className="text-slate-400 block">Expected Mag / ZHR:</span>
                  <span className="text-slate-200">{selectedEvent.magnitude}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold">
                Phenomenon Mechanics
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>

            {/* NIT Puducherry Observation Advice */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-2">
              <h4 className="text-xs font-mono uppercase text-stellar-300 font-semibold flex items-center gap-1.5">
                <Telescope className="w-4 h-4 text-stellar-400" />
                NITPY Campus Observation Guidelines
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedEvent.observationTips}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedEvent(null)}
              >
                Close Inspector
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
