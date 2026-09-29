import React, { useRef, useEffect, useState, useMemo } from 'react';
import type { CelestialObject } from '../../types';
import { constellationLines } from '../../data/celestialObjects';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface StarMapProps {
  objects: CelestialObject[];
  selectedObject: CelestialObject | null;
  onSelectObject: (obj: CelestialObject) => void;
  showConstellations: boolean;
  showPlanets: boolean;
  showDSO: boolean;
  showGrid: boolean;
  searchQuery: string;
}

export const StarMap: React.FC<StarMapProps> = ({
  objects,
  selectedObject,
  onSelectObject,
  showConstellations,
  showPlanets,
  showDSO,
  showGrid,
  searchQuery,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [hoveredObject, setHoveredObject] = useState<CelestialObject | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Filter objects based on visibility toggles and search query
  const filteredObjects = useMemo(() => {
    return objects.filter(obj => {
      if (searchQuery.trim()) {
        const matchesQuery = obj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          obj.constellation.toLowerCase().includes(searchQuery.toLowerCase()) ||
          obj.type.toLowerCase().includes(searchQuery.toLowerCase());
        if (!matchesQuery) return false;
      }

      if (obj.type === 'Planet' && !showPlanets) return false;
      if ((obj.type === 'Nebula' || obj.type === 'Galaxy' || obj.type === 'Cluster') && !showDSO) return false;
      return true;
    });
  }, [objects, showPlanets, showDSO, searchQuery]);

  // Canvas drawing effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const radius = Math.min(width, height) * 0.44 * zoom;
    const centerX = width / 2 + pan.x;
    const centerY = height / 2 + pan.y;

    ctx.clearRect(0, 0, width, height);

    // 1. Draw Celestial Dome / Planisphere Circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.clip();

    // Dark celestial sphere background
    const skyGradient = ctx.createRadialGradient(
      centerX, centerY, radius * 0.1,
      centerX, centerY, radius
    );
    skyGradient.addColorStop(0, '#0a1226');
    skyGradient.addColorStop(0.7, '#060b18');
    skyGradient.addColorStop(1, '#02050e');
    ctx.fillStyle = skyGradient;
    ctx.fillRect(centerX - radius, centerY - radius, radius * 2, radius * 2);

    // 2. Coordinate Grid (Azimuthal / Altitude Rings)
    if (showGrid) {
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);

      // Altitude concentric circles (30°, 60°)
      [0.33, 0.66].forEach(factor => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * factor, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Cardinal axis spokes (N-S, E-W)
      ctx.beginPath();
      ctx.moveTo(centerX - radius, centerY);
      ctx.lineTo(centerX + radius, centerY);
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX, centerY + radius);
      ctx.stroke();

      // Zenith crosshair at center
      ctx.setLineDash([]);
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.3)';
      ctx.beginPath();
      ctx.moveTo(centerX - 8, centerY);
      ctx.lineTo(centerX + 8, centerY);
      ctx.moveTo(centerX, centerY - 8);
      ctx.lineTo(centerX, centerY + 8);
      ctx.stroke();
    }

    // 3. Background Field Stars (faint static star field)
    ctx.setLineDash([]);
    for (let i = 0; i < 90; i++) {
      const angle = (i * 137.5 * Math.PI) / 180;
      const r = Math.sqrt((i + 1) / 90) * (radius * 0.95);
      const sx = centerX + Math.cos(angle) * r;
      const sy = centerY + Math.sin(angle) * r;
      const brightness = ((i * 7) % 60 + 20) / 100;
      ctx.beginPath();
      ctx.arc(sx, sy, 0.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(226, 232, 240, ${brightness * 0.4})`;
      ctx.fill();
    }

    // 4. Constellation Stick Lines
    if (showConstellations) {
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 4]);

      constellationLines.forEach(line => {
        line.stars.forEach(([id1, id2]) => {
          const star1 = objects.find(o => o.id === id1);
          const star2 = objects.find(o => o.id === id2);
          if (star1 && star2) {
            const x1 = centerX + (star1.xPercent / 50 - 1) * radius * 0.9;
            const y1 = centerY + (star1.yPercent / 50 - 1) * radius * 0.9;
            const x2 = centerX + (star2.xPercent / 50 - 1) * radius * 0.9;
            const y2 = centerY + (star2.yPercent / 50 - 1) * radius * 0.9;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        });
      });
      ctx.setLineDash([]);
    }

    // 5. Render Celestial Objects
    filteredObjects.forEach(obj => {
      const objX = centerX + (obj.xPercent / 50 - 1) * radius * 0.9;
      const objY = centerY + (obj.yPercent / 50 - 1) * radius * 0.9;

      const isSelected = selectedObject?.id === obj.id;
      const isHovered = hoveredObject?.id === obj.id;

      // Outer Selection / Hover Ring
      if (isSelected || isHovered) {
        ctx.beginPath();
        ctx.arc(objX, objY, (obj.size || 6) + 8, 0, Math.PI * 2);
        ctx.strokeStyle = isSelected ? '#38bdf8' : 'rgba(99, 102, 241, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Target reticle lines if selected
        if (isSelected) {
          ctx.beginPath();
          ctx.moveTo(objX - 16, objY);
          ctx.lineTo(objX - 10, objY);
          ctx.moveTo(objX + 10, objY);
          ctx.lineTo(objX + 16, objY);
          ctx.moveTo(objX, objY - 16);
          ctx.lineTo(objX, objY - 10);
          ctx.moveTo(objX, objY + 10);
          ctx.lineTo(objX, objY + 16);
          ctx.stroke();
        }
      }

      // Glow halo
      const glowGrad = ctx.createRadialGradient(
        objX, objY, 1,
        objX, objY, (obj.size || 5) * 2.5
      );
      glowGrad.addColorStop(0, obj.color);
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(objX, objY, (obj.size || 5) * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Object Core
      ctx.beginPath();
      ctx.arc(objX, objY, (obj.size || 5) * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // Label
      ctx.font = '11px "Space Grotesk", sans-serif';
      ctx.fillStyle = isSelected ? '#38bdf8' : '#cbd5e1';
      ctx.textAlign = 'left';
      ctx.fillText(obj.name, objX + (obj.size || 6) + 4, objY + 3);

      if (obj.type === 'Planet') {
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillStyle = '#fbbf24';
        ctx.fillText(`m: ${obj.magnitude}`, objX + (obj.size || 6) + 4, objY + 14);
      }
    });

    ctx.restore();

    // 6. Outer Horizon Ring & Cardinal Labels
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Cardinal Markers
    const cardinals = [
      { label: 'N', angle: -Math.PI / 2, sub: '0° North (NITPY)' },
      { label: 'E', angle: 0, sub: '90° East (Bay of Bengal)' },
      { label: 'S', angle: Math.PI / 2, sub: '180° South' },
      { label: 'W', angle: Math.PI, sub: '270° West' }
    ];

    cardinals.forEach(c => {
      const cx = centerX + Math.cos(c.angle) * (radius + 22);
      const cy = centerY + Math.sin(c.angle) * (radius + 22);

      ctx.font = 'bold 13px "Space Grotesk", sans-serif';
      ctx.fillStyle = '#38bdf8';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(c.label, cx, cy);
    });

  }, [filteredObjects, selectedObject, hoveredObject, showConstellations, showPlanets, showDSO, showGrid, zoom, pan]);

  // Click & Hover Detection
  const handleCanvasInteraction = (e: React.MouseEvent<HTMLCanvasElement>, isClick: boolean) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const width = canvas.width;
    const height = canvas.height;
    const radius = Math.min(width, height) * 0.44 * zoom;
    const centerX = width / 2 + pan.x;
    const centerY = height / 2 + pan.y;

    let matched: CelestialObject | null = null;
    let minDistance = 18; // Click hit radius

    filteredObjects.forEach(obj => {
      const objX = centerX + (obj.xPercent / 50 - 1) * radius * 0.9;
      const objY = centerY + (obj.yPercent / 50 - 1) * radius * 0.9;

      const dist = Math.hypot(clickX - objX, clickY - objY);
      if (dist < minDistance) {
        matched = obj;
        minDistance = dist;
      }
    });

    if (isClick && matched) {
      onSelectObject(matched);
    } else if (!isClick) {
      setHoveredObject(matched);
      canvas.style.cursor = matched ? 'pointer' : isDragging ? 'grabbing' : 'grab';
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    } else {
      handleCanvasInteraction(e, false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoom = (delta: number) => {
    setZoom(prev => Math.min(Math.max(0.7, prev + delta), 2.2));
  };

  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px] rounded-2xl overflow-hidden bg-space-950 border border-slate-800 shadow-2xl flex items-center justify-center select-none"
    >
      {/* Sky Canvas */}
      <canvas
        ref={canvasRef}
        onClick={(e) => handleCanvasInteraction(e, true)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          setIsDragging(false);
          setHoveredObject(null);
        }}
        className="w-full h-full block"
      />

      {/* Floating Canvas Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-1.5 z-20">
        <button
          onClick={() => handleZoom(0.2)}
          aria-label="Zoom in"
          className="p-2 rounded-lg bg-space-900/90 hover:bg-space-850 text-slate-200 hover:text-white border border-slate-700/80 shadow-md backdrop-blur-md transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => handleZoom(-0.2)}
          aria-label="Zoom out"
          className="p-2 rounded-lg bg-space-900/90 hover:bg-space-850 text-slate-200 hover:text-white border border-slate-700/80 shadow-md backdrop-blur-md transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleReset}
          aria-label="Reset view"
          className="p-2 rounded-lg bg-space-900/90 hover:bg-space-850 text-slate-200 hover:text-white border border-slate-700/80 shadow-md backdrop-blur-md transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Map Datum Badge */}
      <div className="absolute bottom-4 left-4 z-20 flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-400 bg-space-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
        <span className="flex items-center gap-1 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          NITPY Zenithed
        </span>
        <span>•</span>
        <span>LAT: 10.9850° N</span>
        <span>•</span>
        <span>LON: 79.8450° E</span>
        <span>•</span>
        <span>FOV: {(180 / zoom).toFixed(0)}°</span>
      </div>

      {/* Hover preview tooltip */}
      {hoveredObject && (
        <div className="absolute top-4 left-4 z-20 bg-space-900/95 backdrop-blur-md border border-slate-700 px-3.5 py-2 rounded-xl shadow-xl text-xs space-y-0.5 animate-in fade-in pointer-events-none">
          <div className="flex items-center gap-1.5 font-bold text-white font-display">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: hoveredObject.color }}
            />
            {hoveredObject.name}
            <span className="text-[10px] font-mono text-stellar-300 font-normal">
              ({hoveredObject.type})
            </span>
          </div>
          <div className="text-[10px] font-mono text-slate-400">
            Alt: {hoveredObject.altitude} • Az: {hoveredObject.azimuth} • Mag: {hoveredObject.magnitude}
          </div>
        </div>
      )}
    </div>
  );
};
