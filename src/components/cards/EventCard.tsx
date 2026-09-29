import React from 'react';
import type { ClubEvent } from '../../types';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface EventCardProps {
  event: ClubEvent;
  onSelect: (event: ClubEvent) => void;
  onRegister?: (event: ClubEvent) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelect, onRegister }) => {
  const getRegStatusBadge = () => {
    switch (event.registrationStatus) {
      case 'Open':
        return <Badge variant="emerald" size="sm">Registration Open</Badge>;
      case 'Upcoming':
        return <Badge variant="amber" size="sm">Opening Soon</Badge>;
      case 'Closed':
        return <Badge variant="rose" size="sm">Registration Closed</Badge>;
      case 'Completed':
        return <Badge variant="outline" size="sm">Completed</Badge>;
    }
  };

  const getCategoryBadge = () => {
    switch (event.category) {
      case 'Observation':
        return <Badge variant="cyan" size="sm">🔭 Stargazing</Badge>;
      case 'Workshop':
        return <Badge variant="purple" size="sm">⚡ Workshop</Badge>;
      case 'Astrophotography':
        return <Badge variant="cyan" size="sm">📷 Astrophoto</Badge>;
      case 'Showcase':
        return <Badge variant="amber" size="sm">🚀 Showcase</Badge>;
      case 'Lecture':
        return <Badge variant="purple" size="sm">🎓 Lecture</Badge>;
    }
  };

  return (
    <div className="group flex flex-col bg-space-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1">
      {/* Banner Image */}
      <div className="relative h-48 w-full overflow-hidden bg-space-950">
        <img
          src={event.bannerImage}
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/40 to-transparent" />
        
        {/* Badges on banner */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          {getCategoryBadge()}
          {getRegStatusBadge()}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="font-display font-bold text-lg text-white group-hover:text-stellar-300 transition-colors line-clamp-1">
            {event.title}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {event.shortDescription}
          </p>

          {/* Metadata */}
          <div className="pt-2 space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-stellar-400 shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="font-mono text-[11px] text-slate-400">{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cosmic-400 shrink-0" />
              <span className="line-clamp-1">{event.location}</span>
            </div>
          </div>
        </div>

        {/* Action footer */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(event)}
            className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
          >
            Details
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>

          {event.registrationStatus === 'Open' ? (
            <Button
              size="sm"
              variant="primary"
              onClick={() => (onRegister ? onRegister(event) : onSelect(event))}
            >
              Register Now
            </Button>
          ) : (
            <Button
              size="sm"
              variant="secondary"
              onClick={() => onSelect(event)}
            >
              View Info
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
