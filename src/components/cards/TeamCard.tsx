import React from 'react';
import type { TeamMember } from '../../types';
import { Mail, GraduationCap, Compass } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/SocialIcons';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const isFaculty = member.category === 'faculty';
  const isCore = member.category === 'core';

  return (
    <div className={`group flex flex-col bg-space-900 border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      isFaculty
        ? 'border-indigo-800/60 bg-gradient-to-b from-space-900 to-space-850'
        : isCore
        ? 'border-slate-800 hover:border-stellar-400/50'
        : 'border-slate-800/80 hover:border-slate-700'
    }`}>
      {/* Header and Avatar */}
      <div className="p-6 pb-4 flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-slate-700/80 group-hover:border-stellar-400/70 transition-colors shadow-lg shadow-black/40">
            <img
              src={member.avatar}
              alt={member.name}
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          {isFaculty && (
            <span className="absolute -bottom-2 -right-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-indigo-950 text-indigo-300 border border-indigo-700 shadow">
              Faculty
            </span>
          )}
          {isCore && (
            <span className="absolute -bottom-2 -right-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-950 text-cyan-300 border border-cyan-700 shadow">
              Core Lead
            </span>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="font-display font-bold text-base text-white group-hover:text-stellar-300 transition-colors">
            {member.name}
          </h3>
          <p className="text-xs font-medium text-stellar-400">
            {member.role}
          </p>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate max-w-[200px]">{member.department}</span>
          </div>
          {member.year && (
            <p className="text-[10px] font-mono text-slate-400">
              {member.year}
            </p>
          )}
        </div>
      </div>

      {/* Area of Interest */}
      <div className="flex-1 px-6 pb-4 flex flex-col justify-between space-y-3">
        <div className="p-2.5 rounded-xl bg-space-850/80 border border-slate-800 text-left">
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider text-slate-400 font-semibold mb-1">
            <Compass className="w-3 h-3 text-stellar-400" />
            Focus Area
          </div>
          <p className="text-xs text-slate-300 leading-snug">
            {member.areaOfInterest}
          </p>
        </div>

        {member.bio && (
          <p className="text-xs text-slate-400 leading-relaxed text-left line-clamp-2">
            {member.bio}
          </p>
        )}

        {/* Social Links */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-center gap-3">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-space-800 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on GitHub`}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-space-800 rounded-lg transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-space-800 rounded-lg transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
