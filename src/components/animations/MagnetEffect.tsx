"use client";

import React, { useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface MagnetEffectProps {
  children: ReactNode;
  strength?: number; // How strong the magnet effect is
  tolerance?: number; // How far from the element the effect starts
  duration?: number; // Animation duration
  ease?: string; // GSAP ease function
  className?: string; // Optional class for the wrapper div
}

const MagnetEffect: React.FC<MagnetEffectProps> = ({
  children,
  strength = 20,
  tolerance = 0.4, // Percentage of element's size
  duration = 0.4,
  ease = 'power2.out',
  className = '',
}) => {
  const magnetRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const magnetElement = magnetRef.current;
    if (!magnetElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = magnetElement.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const maxDistanceX = width * tolerance;
      const maxDistanceY = height * tolerance;

      // Check if mouse is within the tolerance zone
      if (
        Math.abs(distanceX) < maxDistanceX &&
        Math.abs(distanceY) < maxDistanceY
      ) {
        const moveX = (distanceX / maxDistanceX) * strength;
        const moveY = (distanceY / maxDistanceY) * strength;

        gsap.to(magnetElement, {
          x: moveX,
          y: moveY,
          duration,
          ease,
        });
      } else {
        // Reset position if mouse is outside tolerance zone
        gsap.to(magnetElement, {
          x: 0,
          y: 0,
          duration,
          ease,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(magnetElement, {
        x: 0,
        y: 0,
        duration,
        ease,
      });
    };

    // Attach event listeners to the parent container (document body or a larger container)
    // to detect mouse movement near the magnet element.
    // For simplicity, we'll attach to the document and check bounds.
    document.addEventListener('mousemove', handleMouseMove);
    magnetElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      magnetElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, tolerance, duration, ease]);

  return (
    <div ref={magnetRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
};

export default MagnetEffect;