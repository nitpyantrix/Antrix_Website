import React from 'react';
import type { CelestialObject } from '../../types';
import { Info, Target } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface CelestialObjectCardProps {
  object: CelestialObject | null;
  onCenterInSky?: (object: CelestialObject) => void;
}

export const CelestialObjectCard: React.FC<CelestialObjectCardProps> = ({
  object,
  onCenterInSky,
}) => {
  if (!object) {
    return (
      <div className="p-6 rounded-2xl bg-space-900/90 border border-slate-800 text-center space-y-3">
        <div className="w-12 h-12 mx-auto rounded-full bg-space-850 border border-slate-700 flex items-center justify-center text-slate-400">
          <Target className="w-6 h-6 animate-pulse" />
        </div>
        <h4 className="text-sm font-semibold text-slate-300 font-display">
          No Celestial Target Selected
        </h4>
        <p className="text-xs text-slate-400 max-w-xs mx-auto">
          Click any star, planet, or deep sky object on the interactive sky map to view real-time equatorial coordinates, magnitude, and observation notes.
        </p>
      </div>
    );
  }

  const getTypeVariant = (type: string) => {
    switch (type) {
      case 'Planet':
        return 'amber';
      case 'Star':
        return 'cyan';
      case 'Nebula':
        return 'purple';
      case 'Galaxy':
        return 'purple';
      case 'Cluster':
        return 'cyan';
      default:
        return 'default';
    }
  };

  return (
    <div className="bg-space-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 flex flex-col">
      {/* Header Banner */}
      <div className="p-5 pb-4 border-b border-slate-800 bg-gradient-to-r from-space-850 to-space-900">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant={getTypeVariant(object.type)} size="sm">
                {object.type}
              </Badge>
              {object.constellation && (
                <span className="text-xs font-mono text-slate-400">
                  in {object.constellation}
                </span>
              )}
            </div>
            <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full inline-block shrink-0 shadow-sm"
                style={{ backgroundColor: object.color }}
              />
              {object.name}
            </h3>
          </div>

          {onCenterInSky && (
            <button
              onClick={() => onCenterInSky(object)}
              title="Target on sky map"
              className="p-2 rounded-lg bg-space-800 hover:bg-space-700 text-stellar-300 border border-slate-700 transition-colors"
            >
              <Target className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Numerical Data Grid */}
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="p-2.5 rounded-xl bg-space-850 border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block uppercase">Apparent Mag</span>
            <span className="text-sm font-bold text-white">{object.magnitude}</span>
          </div>

          <div className="p-2.5 rounded-xl bg-space-850 border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block uppercase">Visibility</span>
            <span className="text-sm font-bold text-emerald-400">{object.visibility}</span>
          </div>

          <div className="p-2.5 rounded-xl bg-space-850 border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block uppercase">Altitude</span>
            <span className="text-sm font-semibold text-stellar-300">{object.altitude}</span>
          </div>

          <div className="p-2.5 rounded-xl bg-space-850 border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block uppercase">Azimuth</span>
            <span className="text-sm font-semibold text-stellar-300">{object.azimuth}</span>
          </div>

          <div className="p-2.5 rounded-xl bg-space-850 border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block uppercase">Right Ascension</span>
            <span className="text-xs text-slate-200">{object.rightAscension}</span>
          </div>

          <div className="p-2.5 rounded-xl bg-space-850 border border-slate-800/80">
            <span className="text-[10px] text-slate-400 block uppercase">Declination</span>
            <span className="text-xs text-slate-200">{object.declination}</span>
          </div>
        </div>

        {/* Distance / Spectral Info */}
        <div className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-space-850/60 border border-slate-800/60 text-slate-300">
          <span className="text-slate-400">Distance:</span>
          <span className="font-mono font-medium text-white">{object.distance}</span>
        </div>

        {object.spectralType && (
          <div className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-space-850/60 border border-slate-800/60 text-slate-300">
            <span className="text-slate-400">Spectral Class:</span>
            <span className="font-mono text-cyan-300">{object.spectralType}</span>
          </div>
        )}

        {/* Scientific Description */}
        <div className="space-y-1.5 pt-1">
          <h5 className="text-[11px] uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-stellar-400" />
            Observation Details
          </h5>
          <p className="text-xs text-slate-300 leading-relaxed bg-space-850/40 p-3 rounded-xl border border-slate-800">
            {object.description}
          </p>
        </div>

        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Obs Datum: NITPY Coast</span>
          <span className="text-emerald-400">● Live Position</span>
        </div>
      </div>
    </div>
  );
};
