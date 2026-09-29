import React from 'react';
import type { NavigationTab } from '../../types';
import { Orbit, Compass, MapPin, Mail, Radio, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../icons/SocialIcons';

interface FooterProps {
  onSelectTab: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="relative bg-space-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cosmic-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-space-900 border border-slate-700 flex items-center justify-center text-stellar-400">
                <Orbit className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-wider">
                  ANTRIX
                </span>
                <span className="ml-2 text-xs font-mono text-cosmic-400 bg-cosmic-950/60 px-2 py-0.5 rounded border border-cosmic-800/50">
                  NIT PUDUCHERRY
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The astronomy and space technology student club of the National Institute of Technology Puducherry. Dedicated to observational astronomy, aerospace engineering, robotics, and scientific inquiry.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-stellar-400 shrink-0" />
              <span>10.9850° N, 79.8450° E • Karaikal Coastal Corridor</span>
            </div>
          </div>

          {/* Quick Links: Exploration */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-stellar-400" />
              Exploration
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onSelectTab('tracker')}
                  className="hover:text-stellar-300 transition-colors flex items-center gap-1"
                >
                  Interactive Star Tracker
                  <span className="text-[10px] text-cyan-400 font-mono">Live</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('calendar')}
                  className="hover:text-stellar-300 transition-colors"
                >
                  Cosmic Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('gallery')}
                  className="hover:text-stellar-300 transition-colors"
                >
                  Astrophotography Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-stellar-300 transition-colors"
                >
                  Our Mission & Wings
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links: Club & Tech */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-cosmic-400" />
              Engineering
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onSelectTab('projects')}
                  className="hover:text-cosmic-300 transition-colors"
                >
                  All Technical Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('events')}
                  className="hover:text-cosmic-300 transition-colors"
                >
                  Workshops & Expos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('team')}
                  className="hover:text-cosmic-300 transition-colors"
                >
                  Core Team & Mentors
                </button>
              </li>
              <li>
                <a
                  href="https://www.nitpy.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cosmic-300 transition-colors inline-flex items-center gap-1"
                >
                  NITPY Official Portal
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Connect
            </h4>
            <p className="text-xs text-slate-400">
              Reach out for student collaborations, telescope sessions, or project queries.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Antrix on GitHub"
                className="w-8 h-8 rounded-lg bg-space-850 hover:bg-space-800 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Antrix on LinkedIn"
                className="w-8 h-8 rounded-lg bg-space-850 hover:bg-space-800 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Antrix on Instagram"
                className="w-8 h-8 rounded-lg bg-space-850 hover:bg-space-800 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:antrix@nitpy.ac.in"
                aria-label="Email Antrix"
                className="w-8 h-8 rounded-lg bg-space-850 hover:bg-space-800 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                ● Telemetry Beacon: Operational
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} ANTRIX Club, NIT Puducherry. Designed for scientific & educational exploration.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>STN: NITPY-OBS-01</span>
            <span>ELEV: 8m MSL</span>
            <span>BORTLE: 4.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
