import React, { useState } from 'react';
import type { NavigationTab, CosmicEvent, ClubEvent } from '../types';
import { Hero } from '../components/home/Hero';
import { TonightSection } from '../components/home/TonightSection';
import { tonightData } from '../data/tonightData';
import { cosmicEvents } from '../data/cosmicEvents';
import { clubEvents } from '../data/clubEvents';
import { projects } from '../data/projects';
import { CosmicEventCard } from '../components/cards/CosmicEventCard';
import { EventCard } from '../components/cards/EventCard';
import { ProjectCard } from '../components/cards/ProjectCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { 
  Sparkles, 
  Calendar, 
  Compass, 
  Telescope, 
  Rocket, 
  Cpu, 
  Bot, 
  Radio, 
  Satellite,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedCosmicEvent, setSelectedCosmicEvent] = useState<CosmicEvent | null>(null);
  const [selectedClubEvent, setSelectedClubEvent] = useState<ClubEvent | null>(null);
  const [registeringEvent, setRegisteringEvent] = useState<ClubEvent | null>(null);
  const [regSuccess, setRegSuccess] = useState(false);

  // Take top preview items
  const previewCosmicEvents = cosmicEvents.slice(0, 3);
  const previewClubEvents = clubEvents.filter(e => e.status === 'upcoming').slice(0, 3);
  const previewProjects = projects.slice(0, 3);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegSuccess(true);
    setTimeout(() => {
      setRegSuccess(false);
      setRegisteringEvent(null);
    }, 2000);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Signature "Tonight at NITPY" Section */}
      <TonightSection data={tonightData} onNavigate={onNavigate} />

      {/* 3. Cosmic Events Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="ASTRONOMICAL PHENOMENA"
          title="COSMIC CALENDAR PREVIEW"
          subtitle="Key meteor showers, planetary conjunctions, and eclipses visible over the coming months."
          action={
            <Button
              variant="outline"
              icon={<Calendar className="w-4 h-4 text-stellar-400" />}
              onClick={() => onNavigate('calendar')}
            >
              View Cosmic Calendar →
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewCosmicEvents.map((event) => (
            <CosmicEventCard
              key={event.id}
              event={event}
              onSelect={(ev) => setSelectedCosmicEvent(ev)}
            />
          ))}
        </div>
      </section>

      {/* 4. Upcoming Antrix Club Activities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-space-900 via-space-900/90 to-space-950 border border-slate-800 shadow-2xl">
          <SectionHeader
            tag="CLUB CALENDAR"
            title="UPCOMING ANTRIX EVENTS"
            subtitle="Hands-on telescope observation nights, aerospace workshops, and engineering project showcases organized by student wings."
            action={
              <Button
                variant="primary"
                onClick={() => onNavigate('events')}
              >
                View All Club Events →
              </Button>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewClubEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onSelect={(ev) => setSelectedClubEvent(ev)}
                onRegister={(ev) => setRegisteringEvent(ev)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. What We Do: Technical & Scientific Wings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="DISCIPLINES"
          title="ENGINEERING THE COSMOS"
          subtitle="Antrix unites physics students, electronic engineers, computer scientists, and mechanical designers under one interdisciplinary umbrella."
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Astronomy', icon: Telescope, desc: 'Sky tours, optical collimation, deep sky observation' },
            { name: 'Aerospace', icon: Rocket, desc: 'Fixed-wing RC avionics, trajectory analysis' },
            { name: 'Electronics', icon: Cpu, desc: '433MHz LoRa telemetry, sensor PCB design' },
            { name: 'Robotics', icon: Bot, desc: 'Rocker-bogie planetary rover systems' },
            { name: 'Space Tech', icon: Satellite, desc: 'CanSat payloads, atmospheric sounding' },
            { name: 'Comms', icon: Radio, desc: 'SDR weather satellite telemetry intercepts' },
          ].map((wing) => {
            const Icon = wing.icon;
            return (
              <div
                key={wing.name}
                className="group p-5 rounded-2xl bg-space-900 border border-slate-800 hover:border-stellar-400/50 transition-all duration-300 hover:shadow-xl flex flex-col items-center text-center space-y-2.5"
              >
                <div className="w-12 h-12 rounded-xl bg-space-850 border border-slate-700/80 flex items-center justify-center text-stellar-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-sm text-white group-hover:text-stellar-300 transition-colors">
                  {wing.name}
                </h4>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {wing.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Technical Projects Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="INNOVATION & HARDWARE"
          title="FLAGSHIP PROJECTS"
          subtitle="Student-engineered hardware from long-range telemetry transmitters to automated star tracker mounts."
          action={
            <Button
              variant="outline"
              onClick={() => onNavigate('projects')}
            >
              Explore All Projects →
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={() => onNavigate('projects')}
            />
          ))}
        </div>
      </section>

      {/* 7. Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-space-900 via-space-850 to-space-900 border border-slate-700/80 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-stellar-400 font-semibold">
              JOIN THE EXPEDITION
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              Ready to Explore the Universe?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Whether you are an aspiring astrophysicist, an embedded electronics hobbyist, or simply someone who gazes up at the night sky in awe, Antrix welcomes you.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="accent"
              icon={<Compass className="w-4 h-4 text-cyan-200" />}
              onClick={() => onNavigate('tracker')}
            >
              Launch Star Tracker
            </Button>
            <Button
              variant="secondary"
              onClick={() => onNavigate('team')}
            >
              Meet the Team
            </Button>
          </div>
        </div>
      </section>

      {/* Cosmic Event Details Modal */}
      {selectedCosmicEvent && (
        <Modal
          isOpen={!!selectedCosmicEvent}
          onClose={() => setSelectedCosmicEvent(null)}
          title={selectedCosmicEvent.name}
          subtitle={`${selectedCosmicEvent.category} • ${selectedCosmicEvent.date}`}
        >
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-space-850 border border-slate-800 text-xs font-mono grid grid-cols-2 gap-2">
              <div>
                <span className="text-slate-400 block">Peak Window:</span>
                <span className="text-stellar-300 font-semibold">{selectedCosmicEvent.peakWindow || 'All Night'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Visibility:</span>
                <span className={selectedCosmicEvent.isLocalToNITPY ? 'text-emerald-400' : 'text-slate-300'}>
                  {selectedCosmicEvent.visibility}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-semibold uppercase font-mono text-slate-400">
                Astronomical Description
              </h5>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedCosmicEvent.description}
              </p>
            </div>

            <div className="space-y-2 p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-800/40">
              <h5 className="text-xs font-semibold font-mono text-stellar-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                NIT Puducherry Observation Advice
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedCosmicEvent.observationTips}
              </p>
            </div>
          </div>
        </Modal>
      )}

      {/* Club Event Modal */}
      {selectedClubEvent && (
        <Modal
          isOpen={!!selectedClubEvent}
          onClose={() => setSelectedClubEvent(null)}
          title={selectedClubEvent.title}
          subtitle={`${selectedClubEvent.date} • ${selectedClubEvent.location}`}
          maxWidth="xl"
        >
          <div className="space-y-5">
            <div className="h-52 w-full rounded-xl overflow-hidden bg-space-950">
              <img
                src={selectedClubEvent.bannerImage}
                alt={selectedClubEvent.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400">Overview</h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedClubEvent.fullDescription}
              </p>
            </div>

            {selectedClubEvent.prerequisites && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400">What to Bring / Prerequisites</h4>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                  {selectedClubEvent.prerequisites.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Lead: {selectedClubEvent.leadCoordinator || 'Antrix Team'}
              </span>
              {selectedClubEvent.registrationStatus === 'Open' && (
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => {
                    const ev = selectedClubEvent;
                    setSelectedClubEvent(null);
                    setRegisteringEvent(ev);
                  }}
                >
                  Proceed to Register
                </Button>
              )}
            </div>
          </div>
        </Modal>
      )}

      {/* Registration Mock Modal */}
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
                You are registered for {registeringEvent.title}. Check your institute email for calendar invites and instructions.
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
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Department & Year</label>
                <input
                  type="text"
                  placeholder="e.g. ECE, 2nd Year"
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
