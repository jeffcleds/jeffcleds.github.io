"use client";

import React, { useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  duration?: number;
  delay?: number;
  ease?: string;
  triggerOnce?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  duration = 0.8,
  delay = 0,
  ease = 'power3.out',
  triggerOnce = true,
  start = 'top 80%',
  end = 'bottom top',
  scrub = false,
  className = '',
}) => {
  const revealRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = revealRef.current;
    if (!element) return;

    // If triggerOnce is true, check if the element is already past the trigger point.
    if (triggerOnce) {
      // 'top 80%' means the animation starts when the top of the element hits 80% down the viewport.
      const viewportHeight = window.innerHeight;
      const triggerThreshold = viewportHeight * 0.8;
      const rect = element.getBoundingClientRect();
      
      // If the element's top is already above the trigger threshold, it means it should have been triggered.
      if (rect.top < triggerThreshold) {
        // Set final state immediately and skip ScrollTrigger setup.
        gsap.set(element, { ...to });
        return;
      }
    }

    // Set initial state before setting up the ScrollTrigger
    gsap.set(element, { ...from });

    gsap.to(
      element,
      {
        ...to,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          toggleActions: 'play none none none',
          once: triggerOnce,
          scrub: scrub,
        },
      }
    );
  }, { scope: revealRef, dependencies: [from, to, duration, delay, ease, triggerOnce, start, end, scrub] });

  return (
    <div ref={revealRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;