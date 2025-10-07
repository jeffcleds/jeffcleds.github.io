"use client";

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface DecryptedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  characterSet?: string;
  onComplete?: () => void;
}

const defaultCharacterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?";

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className = '',
  delay = 0.05, // Delay between each character's decryption
  duration = 1.5, // Total duration for the entire text to decrypt
  characterSet = defaultCharacterSet,
  onComplete,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [revealedText, setRevealedText] = useState<string[]>([]);

  useGSAP(() => {
    if (!textRef.current) return;

    const characters = text.split('');
    setRevealedText(Array(characters.length).fill('')); // Initialize with empty strings

    const tl = gsap.timeline({
      onComplete: onComplete,
    });

    characters.forEach((char, index) => {
      if (char === ' ') {
        // Handle spaces immediately
        tl.set({}, {}, index * delay); // Add a small delay for the space
        setRevealedText(prev => {
          const newText = [...prev];
          newText[index] = ' ';
          return newText;
        });
        return;
      }

      let scrambleCount = 0;
      const maxScramble = Math.floor(duration / delay / 2); // Adjust scramble duration

      tl.to({}, {
        duration: delay,
        onRepeat: () => {
          if (scrambleCount < maxScramble) {
            setRevealedText(prev => {
              const newText = [...prev];
              newText[index] = characterSet[Math.floor(Math.random() * characterSet.length)];
              return newText;
            });
            scrambleCount++;
          } else {
            setRevealedText(prev => {
              const newText = [...prev];
              newText[index] = char; // Set to final character
              return newText;
            });
            tl.kill(); // Stop repeating for this character
          }
        },
        repeat: maxScramble,
        ease: "none",
      }, index * delay);
    });

  }, [text, delay, duration, characterSet, onComplete]);

  return (
    <div ref={textRef} className={className}>
      {revealedText.map((char, index) => (
        <span key={index} className={char === ' ' ? 'inline-block w-[0.5em]' : ''}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default DecryptedText;