"use client";

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Card } from '@/components/ui/card';

interface DomeGalleryProps {
  images: { src: string; alt: string; label: string }[];
  size?: number; // Diameter of the dome/carousel
}

const DomeGallery: React.FC<DomeGalleryProps> = ({ images, size = 400 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const numImages = images.length;
  if (numImages === 0) return null;
  
  // Calculate radius based on the number of items and desired size
  const cardWidth = size * 0.6;
  const radius = Math.round((cardWidth / 2) / Math.tan(Math.PI / numImages));
  const angleStep = 360 / numImages;

  useGSAP(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Set up initial 3D perspective on the container
    gsap.set(container, {
      perspective: 1000,
      transformStyle: 'preserve-3d',
      width: size,
      height: size,
      margin: '0 auto',
    });

    // Position and rotate each card
    cardRefs.current.forEach((card, index) => {
      if (card) {
        const angle = index * angleStep;
        gsap.set(card, {
          position: 'absolute',
          left: '50%',
          top: '50%',
          x: '-50%',
          y: '-50%',
          rotationY: angle,
          z: radius, // Push cards out from the center
          backfaceVisibility: 'hidden',
        });
      }
    });

    // Continuous rotation animation
    gsap.to(container, {
      rotationY: 360,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

  }, { scope: containerRef, dependencies: [images, size, numImages, radius] });

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <div ref={containerRef} className="relative w-full h-full">
        {images.map((image, index) => (
          <Card
            key={index}
            ref={el => cardRefs.current[index] = el}
            className="absolute p-2 flex flex-col items-center justify-center shadow-xl bg-card/80 backdrop-blur-sm border border-primary/20"
            style={{ 
                width: size * 0.6, 
                height: size * 0.8,
                // Initial positioning is handled by GSAP
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-3/4 object-cover rounded-md mb-2"
            />
            <p className="text-xs font-medium text-center text-foreground/80">{image.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DomeGallery;