"use client";

import React, { useState, useEffect } from 'react';

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

  return <span className={className}>{currentText}</span>;
};

export default TypewriterEffect;