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
    if (!revealRef.current) return;

    gsap.fromTo(
      revealRef.current,
      { ...from },
      {
        ...to,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: revealRef.current,
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