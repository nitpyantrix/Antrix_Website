import React from 'react';
import type { Project } from '../../types';
import { Users, ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getStatusBadge = () => {
    switch (project.status) {
      case 'Active Prototype':
        return <Badge variant="cyan" size="sm">Active Prototype</Badge>;
      case 'Flight Ready':
        return <Badge variant="emerald" size="sm">Flight Ready</Badge>;
      case 'Completed':
        return <Badge variant="purple" size="sm">Completed</Badge>;
      case 'Research & Dev':
        return <Badge variant="amber" size="sm">Research & Dev</Badge>;
    }
  };

  return (
    <div className="group flex flex-col bg-space-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/60 hover:-translate-y-1">
      {/* Project Thumbnail */}
      <div className="relative h-44 w-full overflow-hidden bg-space-950">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/30 to-transparent" />
        
        <div className="absolute top-3 left-3">
          <Badge variant="default" size="sm" className="bg-space-950/80 backdrop-blur-sm">
            {project.category}
          </Badge>
        </div>

        <div className="absolute top-3 right-3">
          {getStatusBadge()}
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3 className="font-display font-bold text-lg text-white group-hover:text-stellar-300 transition-colors line-clamp-1">
            {project.name}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech tags */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-space-850 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-slate-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Team and action */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-400">
            <Users className="w-3.5 h-3.5 text-stellar-400" />
            <span className="truncate max-w-[130px] font-mono text-[11px]">
              {project.team.map(t => t.name.split(' ')[0]).join(', ')}
            </span>
          </div>

          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1 font-semibold text-stellar-400 hover:text-white transition-colors"
          >
            Details
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
