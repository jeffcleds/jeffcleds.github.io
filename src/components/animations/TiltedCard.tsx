"use client";

import React, { useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface TiltedCardProps {
  children: ReactNode;
  maxTilt?: number; // Maximum tilt angle in degrees
  perspective?: number; // CSS perspective value
  duration?: number; // Animation duration
  ease?: string; // GSAP ease function
  className?: string; // Optional class for the wrapper div
}

const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  maxTilt = 10,
  perspective = 1000,
  duration = 0.3,
  ease = 'power2.out',
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = cardElement.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Calculate tilt based on mouse position relative to the center of the card
      // Invert Y-axis for more natural tilt (moving mouse up tilts top edge away)
      const rotateX = (mouseY / (height / 2)) * maxTilt * -1;
      const rotateY = (mouseX / (width / 2)) * maxTilt;

      gsap.to(cardElement, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: perspective,
        duration,
        ease,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cardElement, {
        rotationX: 0,
        rotationY: 0,
        duration,
        ease,
      });
    };

    cardElement.addEventListener('mousemove', handleMouseMove);
    cardElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cardElement.removeEventListener('mousemove', handleMouseMove);
      cardElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, { scope: cardRef, dependencies: [maxTilt, perspective, duration, ease] });

  return (
    <div ref={cardRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
};

export default TiltedCard;