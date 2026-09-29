import React from 'react';
import type { GalleryItem } from '../../types';
import { Maximize2, Calendar, MapPin } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface GalleryCardProps {
  item: GalleryItem;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, onOpenLightbox }) => {
  return (
    <div
      onClick={() => onOpenLightbox(item)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-space-900 border border-slate-800/80 transition-all duration-300 hover:border-stellar-400/50 hover:shadow-2xl hover:shadow-black/70"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-space-950">
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Top Tag */}
        <div className="absolute top-3 left-3">
          <Badge variant="cyan" size="sm" className="bg-space-950/80 backdrop-blur-md">
            {item.category}
          </Badge>
        </div>

        {/* Zoom icon on hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="p-2 rounded-full bg-space-900/90 text-stellar-300 border border-stellar-400/40 backdrop-blur-md shadow-lg">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Bottom Info overlay */}
        <div className="absolute bottom-0 inset-x-0 p-4 space-y-1.5 transition-transform duration-300">
          <h4 className="font-display font-bold text-sm text-white group-hover:text-stellar-300 transition-colors line-clamp-1">
            {item.title}
          </h4>
          
          <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed opacity-90">
            {item.description}
          </p>

          <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              {item.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              {item.location.split(',')[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
