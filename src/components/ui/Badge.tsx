import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'purple' | 'emerald' | 'amber' | 'rose' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider uppercase font-semibold font-mono',
    md: 'text-xs px-2.5 py-1 font-medium',
  };

  const variantStyles = {
    default: 'bg-space-800 text-slate-300 border border-slate-700/80',
    cyan: 'bg-cyan-950/70 text-cyan-300 border border-cyan-800/80',
    purple: 'bg-indigo-950/70 text-indigo-300 border border-indigo-800/80',
    emerald: 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/80',
    amber: 'bg-amber-950/70 text-amber-300 border border-amber-800/80',
    rose: 'bg-rose-950/70 text-rose-300 border border-rose-800/80',
    outline: 'bg-transparent text-slate-400 border border-slate-700/60',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
