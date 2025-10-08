"use client";

import React, { useState, useEffect, useRef } from 'react';

interface TypewriterEffectProps {
  words: string[];
  typingDelay?: number;
  deletingDelay?: number;
  pauseDelay?: number;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  typingDelay = 100,
  deletingDelay = 50,
  pauseDelay = 1500,
  className,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [minWidth, setMinWidth] = useState('auto');
  const hiddenSpanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Calculate the width of the longest word to prevent layout shifts
    if (hiddenSpanRef.current && words.length > 0) {
      const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), '');
      hiddenSpanRef.current.innerText = longestWord;
      const timer = setTimeout(() => {
        if (hiddenSpanRef.current) {
          setMinWidth(`${hiddenSpanRef.current.offsetWidth}px`);
        }
      }, 50); 
      return () => clearTimeout(timer);
    }
  }, [words, className]);

  useEffect(() => {
    const handleType = () => {
      const fullText = words[currentWordIndex];
      const currentLength = currentText.length;

      if (isDeleting) {
        if (currentLength > 1) { // Keep deleting until one character is left
          setCurrentText(fullText.substring(0, currentLength - 1));
        } else { // One character left, stop deleting, switch to next word
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          // The currentText will remain as the single character for a brief moment
          // The next typing phase will handle replacing it.
        }
      } else { // Typing
        // If we just switched from deleting (currentLength was 1 from previous word)
        // or if we are starting a new word from scratch (currentLength is 0)
        if (currentLength === 0 || (currentLength === 1 && currentText !== fullText.charAt(0))) {
            // This condition means we are either truly empty, or we have the last char of the *previous* word
            // and need to start typing the *new* word.
            setCurrentText(fullText.charAt(0)); // Start with the first character of the new word
        } else if (currentLength < fullText.length) {
            // Continue typing the current word
            setCurrentText(fullText.substring(0, currentLength + 1));
        } else {
            // Full word typed, pause and then start deleting
            setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      }
    };

    const timeout = setTimeout(
      handleType,
      isDeleting ? deletingDelay : typingDelay
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingDelay, deletingDelay, pauseDelay]);

  return (
    <>
      {/* Hidden span to measure the longest word's width accurately */}
      <span 
        ref={hiddenSpanRef} 
        style={{ visibility: 'hidden', position: 'absolute', whiteSpace: 'nowrap' }} 
        className={className}
      ></span>
      {/* Visible div with min-width to prevent layout shifts */}
      <div 
        className={className} 
        style={{ minWidth: minWidth, display: 'inline-block', whiteSpace: 'nowrap' }}
      >
        {currentText}
      </div>
    </>
  );
};

export default TypewriterEffect;