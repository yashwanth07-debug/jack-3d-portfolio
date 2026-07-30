import React, { useState, useEffect, useRef } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mx = e.clientX;
      const my = e.clientY;

      const dx = mx - centerX;
      const dy = my - centerY;

      let dist = 0;
      const insideX = mx >= rect.left && mx <= rect.right;
      const insideY = my >= rect.top && my <= rect.bottom;

      if (insideX && insideY) {
        dist = 0;
      } else if (insideX) {
        dist = my < rect.top ? rect.top - my : my - rect.bottom;
      } else if (insideY) {
        dist = mx < rect.left ? rect.left - mx : mx - rect.right;
      } else {
        const dxCorner = mx < rect.left ? rect.left - mx : mx - rect.right;
        const dyCorner = my < rect.top ? rect.top - my : my - rect.bottom;
        dist = Math.sqrt(dxCorner * dxCorner + dyCorner * dyCorner);
      }

      if (dist <= padding) {
        setIsHovered(true);
        const targetX = dx / strength;
        const targetY = dy / strength;
        setTransform({ x: targetX, y: targetY });
      } else {
        setIsHovered(false);
        setTransform({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength]);

  const style: React.CSSProperties = {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    transition: isHovered ? activeTransition : inactiveTransition,
    willChange: 'transform',
  };

  return (
    <div
      ref={containerRef}
      className={`inline-block ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
