"use client";

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface FuzzyTextProps {
  text: string;
  className?: string;
  layers?: number; // How many fuzzy layers to create
  maxOffset?: number; // Maximum pixel offset for the fuzzy layers
  baseOpacity?: number; // Base opacity for the fuzzy layers
  duration?: number; // Animation duration for initial reveal
  delay?: number; // Animation delay for initial reveal
}

const FuzzyText: React.FC<FuzzyTextProps> = ({
  text,
  className = '',
  layers = 5,
  maxOffset = 3, // pixels
  baseOpacity = 0.3,
  duration = 1,
  delay = 0.2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainTextRef = useRef<HTMLSpanElement>(null);
  const fuzzyLayersRefs = useRef<HTMLSpanElement[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Animate the main text in
    gsap.fromTo(
      mainTextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: duration, delay: delay, ease: 'power3.out' }
    );

    // Animate fuzzy layers in
    fuzzyLayersRefs.current.forEach((layer, index) => {
      const offset = (index + 1) * (maxOffset / layers);
      const opacity = baseOpacity - (index * (baseOpacity / layers));

      gsap.fromTo(
        layer,
        { opacity: 0, x: -offset, y: -offset },
        {
          opacity: opacity,
          x: 0,
          y: 0,
          duration: duration * 0.8, // Slightly faster for fuzzy layers
          delay: delay + (index * 0.1), // Stagger their appearance
          ease: 'power2.out',
        }
      );
    });

  }, { scope: containerRef, dependencies: [text, layers, maxOffset, baseOpacity, duration, delay] });

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {/* Fuzzy layers */}
      {Array.from({ length: layers }).map((_, index) => {
        const offset = (index + 1) * (maxOffset / layers);
        const opacity = baseOpacity - (index * (baseOpacity / layers));
        return (
          <span
            key={index}
            ref={(el) => { if (el) fuzzyLayersRefs.current[index] = el; }}
            className="absolute top-0 left-0"
            style={{
              color: 'currentColor', // Inherit color
              opacity: opacity,
              filter: `blur(${offset * 0.5}px)`, // Apply blur based on offset
              transform: `translate(${offset}px, ${offset}px)`, // Initial offset
              pointerEvents: 'none', // Don't interfere with main text interaction
            }}
          >
            {text}
          </span>
        );
      })}
      {/* Main text */}
      <span ref={mainTextRef} className="relative z-10">
        {text}
      </span>
    </div>
  );
};

export default FuzzyText;