"use client";

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface LogoLoopProps {
  items: { name: string; icon?: string; }[]; // Now accepts objects with name and optional icon
  duration?: number; // Duration for one full loop cycle in seconds
  className?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({ items, duration = 25, className = '' }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [duplicatedItems, setDuplicatedItems] = useState<typeof items>([]);

  useEffect(() => {
    // Duplicate items to create a seamless loop
    if (items.length > 0) {
      setDuplicatedItems([...items, ...items]);
    }
  }, [items]);

  useGSAP(() => {
    if (!wrapperRef.current || duplicatedItems.length === 0) return;

    const wrapper = wrapperRef.current;
    const itemElements = Array.from(wrapper.children) as HTMLElement[];

    // Calculate total width based on the first set of original items
    let totalOriginalWidth = 0;
    for (let i = 0; i < items.length; i++) {
      const item = itemElements[i];
      totalOriginalWidth += item.offsetWidth + (parseInt(getComputedStyle(item).marginLeft) || 0) + (parseInt(getComputedStyle(item).marginRight) || 0);
    }

    if (totalOriginalWidth === 0) {
      console.warn("LogoLoop: Could not calculate total width. Items might not have rendered or have zero width.");
      return;
    }

    gsap.to(wrapper, {
      x: -totalOriginalWidth, // Move left by the width of one set of items
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

    // Cleanup function for GSAP animation
    return () => {
      gsap.killTweensOf(wrapper);
    };

  }, [duplicatedItems, duration]); // Rerun when duplicatedItems or duration changes

  return (
    <div className={`overflow-hidden w-full py-8 ${className}`}>
      <div ref={wrapperRef} className="flex items-center justify-start w-max">
        {duplicatedItems.map((item, index) => (
          <div
            key={index} // Using index as key is acceptable here because the list is static after duplication
            className="h-16 flex items-center justify-center mx-8 flex-shrink-0 w-40 text-center text-lg font-semibold text-gray-600 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;