import React, { useEffect, useRef } from 'react';

export const CelestialCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Generate stars
    const starCount = Math.floor((width * height) / 9000);
    const stars = Array.from({ length: Math.min(starCount, 160) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.4,
      baseAlpha: Math.random() * 0.5 + 0.2,
      alpha: Math.random() * 0.5 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));

    // Constellation points (a few fixed points to connect)
    const constellationStars = [
      { x: 0.15 * width, y: 0.25 * height },
      { x: 0.22 * width, y: 0.32 * height },
      { x: 0.28 * width, y: 0.20 * height },
      { x: 0.35 * width, y: 0.38 * height },
      { x: 0.72 * width, y: 0.18 * height },
      { x: 0.80 * width, y: 0.26 * height },
      { x: 0.88 * width, y: 0.22 * height },
    ];

    const constellationLines = [
      [0, 1], [1, 2], [1, 3],
      [4, 5], [5, 6]
    ];

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let t = 0;

    const render = () => {
      t += 0.01;
      // Smooth mouse parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      const offsetX = (mouseX - width / 2) * 0.015;
      const offsetY = (mouseY - height / 2) * 0.015;

      ctx.clearRect(0, 0, width, height);

      // Subtle celestial background gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.6 + offsetX, height * 0.3 + offsetY, 50,
        width / 2, height / 2, Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, 'rgba(16, 26, 53, 0.45)');
      bgGrad.addColorStop(0.5, 'rgba(7, 13, 30, 0.2)');
      bgGrad.addColorStop(1, 'rgba(3, 6, 17, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle orbital ellipse
      ctx.save();
      ctx.translate(width * 0.5 + offsetX * 0.5, height * 0.4 + offsetY * 0.5);
      ctx.rotate(-0.25);
      ctx.beginPath();
      ctx.ellipse(0, 0, width * 0.38, height * 0.22, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.06)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 12]);
      ctx.stroke();

      // Second outer orbital ellipse
      ctx.beginPath();
      ctx.ellipse(0, 0, width * 0.55, height * 0.32, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.04)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 16]);
      ctx.stroke();

      // Orbiting tiny satellite indicator along path
      const satAngle = t * 0.2;
      const satX = Math.cos(satAngle) * (width * 0.38);
      const satY = Math.sin(satAngle) * (height * 0.22);
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(satX, satY, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(34, 211, 238, 0.6)';
      ctx.shadowColor = '#22d3ee';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();

      // Constellation Lines
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.18)';
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      constellationLines.forEach(([i, j]) => {
        const p1 = constellationStars[i];
        const p2 = constellationStars[j];
        if (p1 && p2) {
          ctx.beginPath();
          ctx.moveTo(p1.x + offsetX * 0.6, p1.y + offsetY * 0.6);
          ctx.lineTo(p2.x + offsetX * 0.6, p2.y + offsetY * 0.6);
          ctx.stroke();
        }
      });

      // Constellation node stars
      constellationStars.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x + offsetX * 0.6, p.y + offsetY * 0.6, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(165, 180, 252, 0.7)';
        ctx.fill();
      });

      // Stars
      stars.forEach(star => {
        if (!prefersReducedMotion) {
          star.alpha = star.baseAlpha + Math.sin(t * star.twinkleSpeed * 50 + star.phase) * 0.15;
        }
        ctx.beginPath();
        ctx.arc(star.x + offsetX, star.y + offsetY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 232, 240, ${Math.max(0.1, star.alpha)})`;
        ctx.shadowBlur = 0;
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 celestial-grid"
    />
  );
};
