import React, { useState, useEffect } from 'react';
import type { NavigationTab } from '../../types';
import { Compass, Menu, X, Sparkles, Orbit } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavigationTab; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'tracker', label: 'Star Tracker', badge: 'Live' },
    { id: 'calendar', label: 'Cosmic Calendar' },
    { id: 'team', label: 'Team' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onSelectTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-space-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/50 py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-stellar-400/50 rounded-lg p-1 text-left"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-space-900 border border-slate-700/80 group-hover:border-stellar-400/50 transition-colors shadow-inner">
              <Orbit className="w-5 h-5 text-stellar-400 group-hover:rotate-45 transition-transform duration-500" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cosmic-400 animate-ping opacity-75" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-lg tracking-wider text-white">
                  ANTRIX
                </span>
                <span className="text-[10px] px-1.5 py-0.2 font-mono font-semibold bg-cosmic-600/30 text-cosmic-300 rounded border border-cosmic-500/30">
                  NITPY
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono tracking-tight hidden sm:block">
                Astronomy & Space Tech Club
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 select-none ${
                    isActive
                      ? 'text-white bg-space-800/90 shadow-sm border border-slate-700/80'
                      : 'text-slate-300 hover:text-white hover:bg-space-850/50'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cosmic-400 to-stellar-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="accent"
              size="sm"
              icon={<Compass className="w-3.5 h-3.5 text-cyan-200" />}
              onClick={() => handleNavClick('tracker')}
            >
              Explore the Sky →
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('tracker')}
              aria-label="Star Tracker"
              className="p-2 text-cyan-300 bg-space-850 border border-cyan-900/60 rounded-lg hover:bg-space-800"
            >
              <Compass className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-space-850 border border-slate-800 hover:bg-space-800 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800 bg-space-900/95 backdrop-blur-xl rounded-2xl px-4 shadow-2xl animate-in slide-in-from-top-2">
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                      isActive
                        ? 'text-white bg-space-800 border border-slate-700'
                        : 'text-slate-300 hover:text-white hover:bg-space-850'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <Button
                variant="accent"
                size="md"
                className="w-full"
                icon={<Sparkles className="w-4 h-4" />}
                onClick={() => handleNavClick('tracker')}
              >
                Explore the Sky →
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
