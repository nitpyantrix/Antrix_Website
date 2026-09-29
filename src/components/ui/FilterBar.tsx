import React from 'react';

interface FilterOption<T extends string> {
  id: T;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

interface FilterBarProps<T extends string> {
  options: FilterOption<T>[];
  activeFilter: T;
  onFilterChange: (id: T) => void;
  className?: string;
}

export function FilterBar<T extends string>({
  options,
  activeFilter,
  onFilterChange,
  className = '',
}: FilterBarProps<T>) {
  return (
    <div className={`flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none ${className}`}>
      {options.map((option) => {
        const isActive = activeFilter === option.id;
        return (
          <button
            key={option.id}
            onClick={() => onFilterChange(option.id)}
            className={`whitespace-nowrap px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 select-none flex items-center gap-1.5 ${
              isActive
                ? 'bg-cosmic-600 text-white shadow-md shadow-cosmic-600/30 border border-cosmic-400/40'
                : 'bg-space-850 hover:bg-space-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            {option.icon && <span className="shrink-0">{option.icon}</span>}
            <span>{option.label}</span>
            {option.count !== undefined && (
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? 'bg-cosmic-800 text-white'
                    : 'bg-space-900 text-slate-400'
                }`}
              >
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
