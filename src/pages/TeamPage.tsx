import React from 'react';
import { teamMembers } from '../data/team';
import { TeamCard } from '../components/cards/TeamCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Users, GraduationCap, Compass, Mail } from 'lucide-react';

export const TeamPage: React.FC = () => {
  const facultyMembers = teamMembers.filter(m => m.category === 'faculty');
  const coreMembers = teamMembers.filter(m => m.category === 'core');
  const generalMembers = teamMembers.filter(m => m.category === 'member');

  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader
        tag="PEOPLE & PASSION"
        title="THE ANTRIX CREW"
        subtitle="Meet the faculty advisors, student wing leads, and passionate researchers engineering telescopes, rovers, and avionics at NIT Puducherry."
      />

      {/* 1. Faculty Advisors */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-indigo-400" />
          <h3 className="font-display font-bold text-xl text-white">
            Faculty Advisors & Research Mentors
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {facultyMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* 2. Core Leadership Team */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-stellar-400" />
            <h3 className="font-display font-bold text-xl text-white">
              Core Technical Leads
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Academic Year 2025–2026
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* 3. Student Members Grid */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-cosmic-400" />
          <h3 className="font-display font-bold text-xl text-white">
            Active Student Researchers & Observers
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {generalMembers.map((member) => (
            <div
              key={member.id}
              className="p-4 rounded-xl bg-space-900 border border-slate-800 hover:border-slate-700 transition-colors space-y-3 flex flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-12 h-12 rounded-xl object-cover border border-slate-700"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    {member.name}
                  </h4>
                  <p className="text-[11px] text-stellar-400 font-mono">
                    {member.role}
                  </p>
                  <p className="text-[10px] text-slate-400 truncate max-w-[140px]">
                    {member.department}
                  </p>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 bg-space-850 p-2 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 font-mono text-[10px] block">Interest:</span>
                <span className="text-slate-300 font-medium">{member.areaOfInterest}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Join the Community / Inductions Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-space-900 via-space-850 to-space-900 border border-slate-800 text-center space-y-4">
        <Badge variant="cyan" size="sm">
          Annual Student Recruitment
        </Badge>
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
          Want to Join Antrix at NIT Puducherry?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Club inductions occur at the beginning of each semester. We welcome all batches and branches — no prior astrophysics experience required, just passion for curiosity and building things.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <a
            href="mailto:antrix@nitpy.ac.in"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cosmic-600 hover:bg-cosmic-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-cosmic-600/30"
          >
            <Mail className="w-4 h-4" />
            Contact Recruitment Lead
          </a>
        </div>
      </div>
    </div>
  );
};
