import React, { useState, useMemo } from 'react';
import type { Project, ProjectCategory } from '../types';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/cards/ProjectCard';
import { FilterBar } from '../components/ui/FilterBar';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Modal } from '../components/ui/Modal';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/icons/SocialIcons';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'All', label: 'All Projects', count: projects.length },
    { id: 'Astronomy', label: 'Astronomy', count: projects.filter(p => p.category === 'Astronomy').length },
    { id: 'Aerospace', label: 'Aerospace', count: projects.filter(p => p.category === 'Aerospace').length },
    { id: 'Electronics', label: 'Electronics', count: projects.filter(p => p.category === 'Electronics').length },
    { id: 'Embedded Systems', label: 'Embedded Systems', count: projects.filter(p => p.category === 'Embedded Systems').length },
    { id: 'Robotics', label: 'Robotics', count: projects.filter(p => p.category === 'Robotics').length },
    { id: 'Space Technology', label: 'Space Tech', count: projects.filter(p => p.category === 'Space Technology').length },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-12 sm:py-16 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <SectionHeader
        tag="HARDWARE & SOFTWARE"
        title="TECHNICAL PROJECTS"
        subtitle="Explore undergraduate student research prototypes across avionics, autonomous planetary rovers, harmonic star trackers, and atmospheric CanSats."
      />

      {/* Filter Bar */}
      <div className="border-b border-slate-800 pb-4">
        <FilterBar
          options={categories}
          activeFilter={activeCategory}
          onFilterChange={(cat) => setActiveCategory(cat)}
        />
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Empty state fallback */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-space-900 rounded-2xl border border-slate-800 space-y-3">
          <p className="text-slate-400 text-sm">No projects currently listed in this category.</p>
          <Button variant="secondary" size="sm" onClick={() => setActiveCategory('All')}>
            Reset Category Filters
          </Button>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.name}
          subtitle={`${selectedProject.category} • ${selectedProject.status}`}
          maxWidth="2xl"
        >
          <div className="space-y-6">
            {/* Project Banner Image */}
            <div className="relative h-60 w-full rounded-xl overflow-hidden bg-space-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <Badge variant="cyan" size="sm">
                  {selectedProject.status}
                </Badge>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold">
                Architecture & Engineering Summary
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedProject.fullDescription}
              </p>
            </div>

            {/* Key Highlights */}
            {selectedProject.highlights && (
              <div className="space-y-2 p-4 rounded-xl bg-space-850/80 border border-slate-800">
                <h4 className="text-xs font-mono uppercase text-stellar-300 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-stellar-400" />
                  Key Benchmarks & Achievements
                </h4>
                <ul className="space-y-1.5">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stellar-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold">
                Technology Stack & Components
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-space-850 text-cyan-300 border border-slate-700/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Student Contributors */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold">
                Project Team Leads
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.team.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-space-850 border border-slate-800 flex items-center justify-between text-xs"
                  >
                    <span className="font-semibold text-white">{m.name}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{m.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions / Links */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-850 hover:bg-space-800 text-xs font-mono text-slate-200 border border-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    Source Code
                  </a>
                )}
              </div>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedProject(null)}
              >
                Close Details
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
