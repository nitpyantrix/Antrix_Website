import React from 'react';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  align = 'left',
  action,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 sm:mb-12 ${className}`}>
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 ${isCenter ? 'text-center items-center' : ''}`}>
        <div className={`space-y-2 ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {tag && (
            <div className={`flex items-center gap-2 ${isCenter ? 'justify-center' : ''}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-stellar-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-stellar-400 font-mono font-semibold">
                {tag}
              </span>
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>
        {action && (
          <div className="shrink-0 pt-2 md:pt-0">
            {action}
          </div>
        )}
      </div>
    </div>
  );
};
