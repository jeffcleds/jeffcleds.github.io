"use client";

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface LogoLoopProps {
  logos: string[];
  duration?: number; // Duration for one full loop cycle in seconds
  className?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({ logos, duration = 25, className = '' }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [duplicatedLogos, setDuplicatedLogos] = useState<string[]>([]);

  useEffect(() => {
    // Duplicate logos to create a seamless loop
    if (logos.length > 0) {
      setDuplicatedLogos([...logos, ...logos]);
    }
  }, [logos]);

  useGSAP(() => {
    if (!wrapperRef.current || duplicatedLogos.length === 0) return;

    const wrapper = wrapperRef.current;
    const images = Array.from(wrapper.children) as HTMLImageElement[];

    let loadedCount = 0;
    let totalOriginalWidth = 0;

    const checkAllImagesLoaded = () => {
      loadedCount++;
      if (loadedCount === logos.length) {
        // All original logos loaded, calculate total width
        totalOriginalWidth = 0;
        for (let i = 0; i < logos.length; i++) {
          const img = images[i];
          totalOriginalWidth += img.offsetWidth + (parseInt(getComputedStyle(img).marginLeft) || 0) + (parseInt(getComputedStyle(img).marginRight) || 0);
        }

        if (totalOriginalWidth === 0) {
          console.warn("LogoLoop: Could not calculate total width. Images might not have loaded or have zero width.");
          return;
        }

        gsap.to(wrapper, {
          x: -totalOriginalWidth, // Move left by the width of one set of logos
          ease: "none",
          duration: duration,
          repeat: -1,
          modifiers: {
            x: (x) => {
              // This modifier ensures the loop is seamless
              return parseFloat(x) % totalOriginalWidth + "px";
            }
          }
        });
      }
    };

    // Attach load listeners to original set of images
    images.slice(0, logos.length).forEach(img => {
      if (img.complete) {
        checkAllImagesLoaded();
      } else {
        img.addEventListener('load', checkAllImagesLoaded);
      }
    });

    // Cleanup function for GSAP animation and event listeners
    return () => {
      gsap.killTweensOf(wrapper);
      images.forEach(img => img.removeEventListener('load', checkAllImagesLoaded));
    };

  }, [duplicatedLogos, duration]); // Rerun when duplicatedLogos or duration changes

  return (
    <div className={`overflow-hidden w-full py-8 ${className}`}>
      <div ref={wrapperRef} className="flex items-center justify-start w-max">
        {duplicatedLogos.map((src, index) => (
          <img
            key={index} // Using index as key is acceptable here because the list is static after duplication
            src={src}
            alt={`Company Logo ${index}`}
            className="h-16 object-contain mx-8 flex-shrink-0" // Tailwind classes for styling
          />
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;