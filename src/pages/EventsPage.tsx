import React, { useState, useMemo } from 'react';
import type { ClubEvent, ClubEventStatus } from '../types';
import { clubEvents } from '../data/clubEvents';
import { EventCard } from '../components/cards/EventCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Modal } from '../components/ui/Modal';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ClubEventStatus>('upcoming');
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent | null>(null);
  const [registeringEvent, setRegisteringEvent] = useState<ClubEvent | null>(null);
  const [regSuccess, setRegSuccess] = useState(false);

  const featuredEvent = clubEvents[0]; // Flagship observation night

  const filteredEvents = useMemo(() => {
    return clubEvents.filter(e => e.status === activeTab);
  }, [activeTab]);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegSuccess(true);
    setTimeout(() => {
      setRegSuccess(false);
      setRegisteringEvent(null);
    }, 2000);
  };

  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <SectionHeader
        tag="ACTIVITIES & SESSIONS"
        title="ANTRIX CLUB EVENTS"
        subtitle="Stargazing camps, hands-on avionics bootcamps, computational astrophotography workshops, and hardware expos on the NITPY campus."
      />

      {/* Featured Spotlight Banner (Flagship Event) */}
      {featuredEvent && (
        <div className="relative rounded-3xl overflow-hidden bg-space-900 border border-slate-700/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 h-64 lg:h-auto relative overflow-hidden bg-space-950">
              <img
                src={featuredEvent.bannerImage}
                alt={featuredEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-space-900 via-transparent to-transparent opacity-90" />
              <div className="absolute top-4 left-4">
                <Badge variant="cyan" size="sm" className="bg-space-950/80 backdrop-blur-md">
                  ★ Featured Flagship Event
                </Badge>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-stellar-400 font-semibold">
                  NEXT MAJOR CAMPOUT
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  {featuredEvent.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {featuredEvent.shortDescription}
                </p>

                <div className="pt-2 space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-stellar-400 shrink-0" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cosmic-400 shrink-0" />
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedEvent(featuredEvent)}
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Full Agenda →
                </button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setRegisteringEvent(featuredEvent)}
                >
                  Reserve Telescope Slot
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs Row */}
      <div className="border-b border-slate-800 flex items-center gap-2">
        {(['upcoming', 'ongoing', 'past'] as ClubEventStatus[]).map((tab) => {
          const isActive = activeTab === tab;
          const label = tab === 'upcoming' ? 'Upcoming Sessions' : tab === 'ongoing' ? 'Ongoing / Active' : 'Archive & Past Events';
          const count = clubEvents.filter(e => e.status === tab).length;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all relative ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{label}</span>
              <span className={`ml-2 text-[10px] font-mono px-2 py-0.5 rounded-full ${isActive ? 'bg-cosmic-600 text-white' : 'bg-space-850 text-slate-400'}`}>
                {count}
              </span>
              {isActive && (
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-stellar-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onSelect={(ev) => setSelectedEvent(ev)}
            onRegister={(ev) => setRegisteringEvent(ev)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-16 bg-space-900 rounded-2xl border border-slate-800 space-y-2">
          <p className="text-slate-400 text-sm">No events in this section currently.</p>
          <p className="text-xs text-slate-500">Check upcoming events for our next scheduled stargazing night.</p>
        </div>
      )}

      {/* Event Details Modal */}
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent.title}
          subtitle={`${selectedEvent.date} • ${selectedEvent.location}`}
          maxWidth="xl"
        >
          <div className="space-y-5">
            <div className="h-56 w-full rounded-xl overflow-hidden bg-space-950">
              <img
                src={selectedEvent.bannerImage}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold">
                Event Overview
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedEvent.fullDescription}
              </p>
            </div>

            {selectedEvent.prerequisites && (
              <div className="space-y-2 p-4 rounded-xl bg-space-850 border border-slate-800">
                <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold">
                  Required Materials / Guidelines
                </h4>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  {selectedEvent.prerequisites.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Coordinator: {selectedEvent.leadCoordinator || 'Antrix Team'}
              </span>
              {selectedEvent.registrationStatus === 'Open' ? (
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => {
                    const ev = selectedEvent;
                    setSelectedEvent(null);
                    setRegisteringEvent(ev);
                  }}
                >
                  Register Now
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
                </Button>
              )}
            </div>
          </div>
        </Modal>
      )}

      {/* Registration Modal Form */}
      {registeringEvent && (
        <Modal
          isOpen={!!registeringEvent}
          onClose={() => {
            setRegisteringEvent(null);
            setRegSuccess(false);
          }}
          title="Event Registration"
          subtitle={registeringEvent.title}
        >
          {regSuccess ? (
            <div className="p-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-white font-display">Registration Confirmed!</h4>
              <p className="text-xs text-slate-300">
                You are registered for {registeringEvent.title}. Check your institute inbox for access credentials.
              </p>
            </div>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Arun Kumar"
                  className="w-full px-3 py-2 rounded-lg bg-space-850 border border-slate-700 text-sm text-white focus:outline-none focus:border-stellar-400"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Roll / Student ID</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. EC22B1042"
                  className="w-full px-3 py-2 rounded-lg bg-space-850 border border-slate-700 text-sm text-white focus:outline-none focus:border-stellar-400"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Institute Email</label>
                <input
                  required
                  type="email"
                  placeholder="student@nitpy.ac.in"
                  className="w-full px-3 py-2 rounded-lg bg-space-850 border border-slate-700 text-sm text-white focus:outline-none focus:border-stellar-400"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setRegisteringEvent(null)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                >
                  Submit Registration
                </Button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </div>
  );
};
