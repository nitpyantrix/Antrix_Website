import { useState, useEffect } from 'react';
import type { NavigationTab } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CelestialCanvas } from './components/layout/CelestialCanvas';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { StarTrackerPage } from './pages/StarTrackerPage';
import { CosmicCalendarPage } from './pages/CosmicCalendarPage';
import { TeamPage } from './pages/TeamPage';

export function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');

  // Sync tab with URL hash on load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavigationTab;
      const validTabs: NavigationTab[] = [
        'home', 'about', 'events', 'projects', 'gallery', 'tracker', 'calendar', 'team'
      ];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: NavigationTab) => {
    setCurrentTab(tab);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (currentTab) {
      case 'home':
        return <HomePage onNavigate={handleTabChange} />;
      case 'about':
        return <AboutPage />;
      case 'events':
        return <EventsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'tracker':
        return <StarTrackerPage />;
      case 'calendar':
        return <CosmicCalendarPage />;
      case 'team':
        return <TeamPage />;
      default:
        return <HomePage onNavigate={handleTabChange} />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-space-950 text-slate-100 selection:bg-cosmic-500/30 selection:text-stellar-300">
      {/* Subtle interactive celestial canvas background */}
      <CelestialCanvas />

      {/* Primary Navigation */}
      <Navbar currentTab={currentTab} onSelectTab={handleTabChange} />

      {/* Main Page Body */}
      <main className="flex-1 relative z-10 pt-20">
        <div className="animate-in fade-in duration-300">
          {renderActivePage()}
        </div>
      </main>

      {/* Global Footer */}
      <Footer onSelectTab={handleTabChange} />
    </div>
  );
}

export default App;
