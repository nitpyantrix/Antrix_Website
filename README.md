# ANTRIX CLUB — NIT PUDUCHERRY
## Modern Astronomy & Space Technology Portal (Frontend Prototype)

A modern, responsive frontend prototype for the **Antrix Club at NIT Puducherry**, combining an **astronomy portal**, **technical student club**, and an **interactive celestial dashboard**.

---

### 🌐 System Overview & Architecture

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom deep space navy/black palette (`#030611`, `#070d1e`, `#101a35`), cosmic indigo/violet accents, and cyan stellar glows
- **Typography**: Inter (UI / body), Space Grotesk (display / titles), JetBrains Mono (astronomical coordinates and telemetry data)
- **Interactive Sky Map**: Pure HTML5 Canvas & vector rendering with zero heavy dependencies, supporting constellations, planets, deep-sky objects, equatorial coordinate rings, zoom/pan, and target locking
- **Data Architecture**: Decoupled, typed mock data layer in `src/data/` designed for seamless swap with real astronomy APIs and backend endpoints

---

### 📂 Directory & Component Structure

```
c:/Antrix/Web_dev/
├── src/
│   ├── types/
│   │   └── index.ts                 # Full TypeScript definitions for all domain entities
│   ├── data/
│   │   ├── tonightData.ts           # Tonight at NITPY sky observations & metrics
│   │   ├── cosmicEvents.ts          # Astronomical phenomena (meteor showers, conjunctions)
│   │   ├── clubEvents.ts            # Antrix club activities, workshops, and observation camps
│   │   ├── projects.ts              # Student technical projects (CanSat, SANKALP-1 rover, etc.)
│   │   ├── gallery.ts               # Astrophotography and club media records
│   │   ├── celestialObjects.ts      # Star Tracker celestial positions, magnitudes, and links
│   │   └── team.ts                  # Faculty mentors, core leads, and student members
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx           # Multi-variant button system
│   │   │   ├── Badge.tsx            # Semantic status and category tags
│   │   │   ├── Modal.tsx            # Accessible dialog with ESC & backdrop handling
│   │   │   ├── SectionHeader.tsx    # Standardized section headings
│   │   │   └── FilterBar.tsx        # Pill-style filter bar with badge counts
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Sticky responsive navigation with hash sync
│   │   │   ├── Footer.tsx           # Campus datum, quick links, and telemetry status
│   │   │   └── CelestialCanvas.tsx  # Canvas background with stars, orbits & parallax
│   │   ├── home/
│   │   │   ├── Hero.tsx             # Landing hero with club focus
│   │   │   └── TonightSection.tsx   # Signature "Tonight at NITPY" dashboard
│   │   ├── cards/
│   │   │   ├── EventCard.tsx        # Club activity cards with registration badges
│   │   │   ├── CosmicEventCard.tsx  # Astronomical events with NITPY visibility tags
│   │   │   ├── ProjectCard.tsx      # Technical project cards with tech stack
│   │   │   ├── GalleryCard.tsx      # Astrophotography cards
│   │   │   ├── TeamCard.tsx         # Faculty and student profiles
│   │   │   ├── PlanetCard.tsx       # Visible planet telemetry cards
│   │   │   └── CelestialObjectCard.tsx # Star Tracker inspector panel
│   │   ├── tracker/
│   │   │   └── StarMap.tsx          # Interactive celestial sphere canvas
│   │   └── icons/
│   │       └── SocialIcons.tsx      # Vector social and GitHub brand icons
│   ├── pages/
│   │   ├── HomePage.tsx             # Hero, Tonight at NITPY, previews & CTA
│   │   ├── AboutPage.tsx            # Mission, 6 technical wings, and club history timeline
│   │   ├── EventsPage.tsx           # Upcoming, Ongoing, and Past club sessions + registration modal
│   │   ├── ProjectsPage.tsx         # Filterable engineering showcase with modal inspector
│   │   ├── GalleryPage.tsx          # Media gallery with interactive lightbox
│   │   ├── StarTrackerPage.tsx      # Virtual planisphere with dedicated mobile layout
│   │   ├── CosmicCalendarPage.tsx   # Astronomical ephemeris with NITPY visibility filter
│   │   └── TeamPage.tsx             # Faculty advisors, core leads, and student researchers
│   ├── App.tsx                      # Root state router with URL hash synchronization
│   └── index.css                    # Tailwind layers, glassmorphism & celestial scrollbars
```

---

### 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

---

### 🔭 Integration Readiness for Future Phases

1. **Astronomy APIs**:
   - Replace `src/data/tonightData.ts` and `src/data/celestialObjects.ts` with API endpoints (e.g. US Naval Observatory, Stellarium API, or custom Python Ephemeris microservice via PyEphem/Astropy).
2. **Space & Satellite Tracking**:
   - Connect live NORAD Two-Line Element (TLE) feeds from Celestrak / Space-Track for real-time ISS and NOAA satellite passes.
3. **Club Backend & Admin Portal**:
   - Replace `src/data/clubEvents.ts`, `projects.ts`, `gallery.ts`, and `team.ts` with REST/GraphQL endpoints connected to PostgreSQL / Supabase / Directus.
