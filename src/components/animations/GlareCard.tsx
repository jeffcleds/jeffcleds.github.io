"use client";

import React, { useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface GlareCardProps {
  children: ReactNode;
  className?: string;
  glareColor?: string; // Color of the glare
  glareOpacity?: number; // Opacity of the glare
  glareSize?: string; // Size of the glare (e.g., '150%')
  glareSpeed?: number; // Speed of the glare movement
  glareEase?: string; // GSAP ease for glare movement
}

const GlareCard: React.FC<GlareCardProps> = ({
  children,
  className = '',
  glareColor = 'rgba(255, 255, 255, 0.3)',
  glareOpacity = 0.8,
  glareSize = '150%',
  glareSpeed = 0.2,
  glareEase = 'power2.out',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cardElement = cardRef.current;
    const glareElement = glareRef.current;

    if (!cardElement || !glareElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = cardElement.getBoundingClientRect();
      const x = e.clientX - left; // X position relative to the card
      const y = e.clientY - top;  // Y position relative to the card

      // Calculate percentage position
      const xPct = (x / width) * 100;
      const yPct = (y / height) * 100;

      gsap.to(glareElement, {
        x: `${xPct}%`,
        y: `${yPct}%`,
        opacity: glareOpacity,
        duration: glareSpeed,
        ease: glareEase,
        overwrite: true, // Important to prevent animation stacking
      });
    };

    const handleMouseLeave = () => {
      gsap.to(glareElement, {
        opacity: 0,
        duration: glareSpeed,
        ease: glareEase,
      });
    };

    cardElement.addEventListener('mousemove', handleMouseMove);
    cardElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cardElement.removeEventListener('mousemove', handleMouseMove);
      cardElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: cardRef, dependencies: [glareColor, glareOpacity, glareSize, glareSpeed, glareEase] });

  return (
    <div
      ref={cardRef}
      className={`relative inline-flex overflow-hidden isolate group ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        ref={glareRef}
        className="absolute pointer-events-none"
        style={{
          width: glareSize,
          height: glareSize,
          background: `radial-gradient(circle at center, ${glareColor} 0%, transparent 70%)`,
          opacity: 0,
          transform: 'translate(-50%, -50%)', // Center the glare initially
          willChange: 'transform, opacity',
        }}
      />
      {children}
    </div>
  );
};

export default GlareCard;