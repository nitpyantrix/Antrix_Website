import React from 'react';

interface PlanetCardProps {
  name: string;
  altitude: string;
  magnitude: string;
  direction: string;
  bestTime: string;
  highlight: string;
}

export const PlanetCard: React.FC<PlanetCardProps> = ({
  name,
  altitude,
  magnitude,
  direction,
  bestTime,
  highlight,
}) => {
  const getPlanetVisual = (planetName: string) => {
    switch (planetName.toLowerCase()) {
      case 'saturn':
        return {
          icon: '🪐',
          color: 'from-amber-400 to-yellow-600',
          badge: 'Rings Tilted',
        };
      case 'jupiter':
        return {
          icon: '🟠',
          color: 'from-orange-400 to-amber-700',
          badge: '4 Galilean Moons',
        };
      case 'mars':
        return {
          icon: '🔴',
          color: 'from-red-400 to-rose-700',
          badge: 'Rust Disc',
        };
      case 'venus':
        return {
          icon: '✨',
          color: 'from-cyan-300 to-blue-500',
          badge: 'Morning Star',
        };
      default:
        return {
          icon: '🪐',
          color: 'from-indigo-400 to-purple-700',
          badge: 'Visible',
        };
    }
  };

  const visual = getPlanetVisual(name);

  return (
    <div className="group relative bg-space-900/90 border border-slate-800 hover:border-stellar-400/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-black/60 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl" role="img" aria-label={name}>
              {visual.icon}
            </span>
            <div>
              <h4 className="font-display font-bold text-white text-base group-hover:text-stellar-300 transition-colors">
                {name}
              </h4>
              <span className="text-[10px] font-mono text-slate-400">
                Mag: {magnitude}
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-space-850 text-cyan-300 border border-cyan-900/50">
            {visual.badge}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs py-2 px-2.5 rounded-xl bg-space-850/80 border border-slate-800 font-mono">
          <div>
            <span className="text-[10px] text-slate-400 block">Altitude</span>
            <span className="text-slate-200 font-semibold">{altitude}</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block">Direction</span>
            <span className="text-slate-200 font-semibold">{direction}</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 leading-snug">
          {highlight}
        </p>
      </div>

      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Window:</span>
        <span className="text-stellar-300 font-semibold">{bestTime}</span>
      </div>
    </div>
  );
};
