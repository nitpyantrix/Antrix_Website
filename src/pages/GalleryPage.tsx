import React, { useState, useMemo } from 'react';
import type { GalleryCategory } from '../types';
import { galleryItems } from '../data/gallery';
import { GalleryCard } from '../components/cards/GalleryCard';
import { FilterBar } from '../components/ui/FilterBar';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Camera, User, X } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { id: GalleryCategory; label: string; count: number }[] = [
    { id: 'All', label: 'All Media', count: galleryItems.length },
    { id: 'Astronomy', label: 'Deep Sky & Astro', count: galleryItems.filter(i => i.category === 'Astronomy').length },
    { id: 'Telescope Sessions', label: 'Telescope Sessions', count: galleryItems.filter(i => i.category === 'Telescope Sessions').length },
    { id: 'Workshops', label: 'Workshops & Labs', count: galleryItems.filter(i => i.category === 'Workshops').length },
    { id: 'Projects', label: 'Project Trials', count: galleryItems.filter(i => i.category === 'Projects').length },
    { id: 'Events', label: 'Campus Events', count: galleryItems.filter(i => i.category === 'Events').length },
    { id: 'Team', label: 'Conferences & Team', count: galleryItems.filter(i => i.category === 'Team').length },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems;
    return galleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader
        tag="OBSERVATORY & CLUB MEDIA"
        title="ASTROPHOTOGRAPHY & GALLERY"
        subtitle="Visual records of deep-sky exposures, coastal planetary sessions, rocket payload builds, and campus stargazing camps."
      />

      {/* Filter Bar */}
      <div className="border-b border-slate-800 pb-4">
        <FilterBar
          options={categories}
          activeFilter={activeCategory}
          onFilterChange={(cat) => {
            setActiveCategory(cat);
            setLightboxIndex(null);
          }}
        />
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <GalleryCard
            key={item.id}
            item={item}
            onOpenLightbox={() => setLightboxIndex(index)}
          />
        ))}
      </div>

      {/* Interactive Lightbox Overlay Modal */}
      {activeLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-space-950/95 backdrop-blur-xl animate-in fade-in"
            onClick={() => setLightboxIndex(null)}
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-5xl bg-space-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-800 bg-space-850">
              <div className="flex items-center gap-3">
                <Badge variant="cyan" size="sm">
                  {activeLightboxItem.category}
                </Badge>
                <span className="font-display font-bold text-white text-base truncate max-w-md">
                  {activeLightboxItem.title}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close image viewer"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-space-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Area with navigation arrows */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[350px] sm:min-h-[460px] overflow-hidden group">
              <img
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.title}
                className="max-h-[62vh] w-auto max-w-full object-contain select-none"
              />

              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous image"
                className="absolute left-4 p-2.5 rounded-full bg-space-900/80 hover:bg-space-850 text-white border border-slate-700/80 shadow-lg backdrop-blur-md transition-all group-hover:opacity-100 opacity-80"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next image"
                className="absolute right-4 p-2.5 rounded-full bg-space-900/80 hover:bg-space-850 text-white border border-slate-700/80 shadow-lg backdrop-blur-md transition-all group-hover:opacity-100 opacity-80"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Metadata Info Bar */}
            <div className="p-5 sm:p-6 bg-space-900 border-t border-slate-800 space-y-3">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeLightboxItem.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stellar-400" />
                    {activeLightboxItem.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cosmic-400" />
                    {activeLightboxItem.location}
                  </span>
                  {activeLightboxItem.equipment && (
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Camera className="w-3.5 h-3.5 text-cyan-400" />
                      {activeLightboxItem.equipment}
                    </span>
                  )}
                </div>

                {activeLightboxItem.credit && (
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    Credit: {activeLightboxItem.credit}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
