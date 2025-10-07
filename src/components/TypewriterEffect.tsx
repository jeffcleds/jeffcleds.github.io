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
      // Use a small delay to ensure styles are applied before measuring
      const timer = setTimeout(() => {
        if (hiddenSpanRef.current) {
          setMinWidth(`${hiddenSpanRef.current.offsetWidth}px`);
        }
      }, 50); 
      return () => clearTimeout(timer);
    }
  }, [words, className]); // Recalculate if words or className (styles) change

  useEffect(() => {
    const handleType = () => {
      const fullText = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), pauseDelay);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
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
      {/* Visible span with min-width to prevent layout shifts */}
      <span 
        className={className} 
        style={{ minWidth: minWidth, display: 'inline-block', whiteSpace: 'nowrap' }}
      >
        {currentText}
      </span>
    </>
  );
};

export default TypewriterEffect;