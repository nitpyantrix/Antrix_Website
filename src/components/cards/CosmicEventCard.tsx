import React from 'react';
import type { CosmicEvent } from '../../types';
import { Calendar, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface CosmicEventCardProps {
  event: CosmicEvent;
  onSelect: (event: CosmicEvent) => void;
}

export const CosmicEventCard: React.FC<CosmicEventCardProps> = ({ event, onSelect }) => {
  const getCategoryIcon = () => {
    switch (event.category) {
      case 'Meteor Shower':
        return '🌠';
      case 'Lunar':
        return '🌕';
      case 'Planetary':
        return '🪐';
      case 'Eclipse':
        return '🌘';
      case 'Comet':
        return '☄️';
      case 'Space Mission':
        return '🚀';
      default:
        return '✨';
    }
  };

  return (
    <div className="group relative bg-space-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 hover:-translate-y-1 flex flex-col justify-between">
      {/* Top row */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-label={event.category}>
              {getCategoryIcon()}
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-stellar-400 font-semibold">
                {event.category}
              </span>
              <h3 className="font-display font-bold text-base text-white group-hover:text-stellar-300 transition-colors">
                {event.name}
              </h3>
            </div>
          </div>
          {event.featured && (
            <Badge variant="cyan" size="sm">
              <Sparkles className="w-2.5 h-2.5" />
              Key Event
            </Badge>
          )}
        </div>

        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        {/* Date and visibility */}
        <div className="pt-2 space-y-2 border-t border-slate-800/60 text-xs">
          <div className="flex items-center justify-between text-slate-300">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Date:
            </span>
            <span className="font-medium text-slate-200">{event.date}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              Visibility:
            </span>
            {event.isLocalToNITPY ? (
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                NITPY Sky
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 bg-space-800 px-2 py-0.5 rounded-full font-mono">
                Global / Scope
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card action */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-400">
          Peak: {event.peakWindow ? event.peakWindow.split(' ')[0] : 'All Night'}
        </span>
        <button
          onClick={() => onSelect(event)}
          className="text-xs font-semibold text-stellar-400 hover:text-stellar-300 flex items-center gap-1 transition-colors group-hover:translate-x-0.5"
        >
          View Details
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
