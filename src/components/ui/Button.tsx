import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-stellar-400/50 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-cosmic-600 hover:bg-cosmic-500 text-white shadow-lg shadow-cosmic-600/20 border border-cosmic-400/30 hover:border-cosmic-300',
    secondary: 'bg-space-850 hover:bg-space-800 text-slate-200 border border-slate-700/60 hover:border-slate-500/80 shadow-sm',
    outline: 'border border-slate-700 hover:border-stellar-400 text-slate-300 hover:text-stellar-300 bg-transparent hover:bg-space-850/50',
    ghost: 'text-slate-400 hover:text-slate-100 hover:bg-space-850/60',
    accent: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 border border-cyan-300/30',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
