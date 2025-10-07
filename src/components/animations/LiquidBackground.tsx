"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';

interface LiquidBackgroundProps {
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  numBlobs?: number;
  minBlobSize?: number;
  maxBlobSize?: number;
  speed?: number;
}

const LiquidBackground: React.FC<LiquidBackgroundProps> = ({
  className = '',
  color1 = 'hsl(var(--primary) / 0.1)',
  color2 = 'hsl(var(--secondary) / 0.1)',
  color3 = 'hsl(var(--accent) / 0.1)',
  numBlobs = 10,
  minBlobSize = 100,
  maxBlobSize = 300,
  speed = 0.0005,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const blobs = useRef<any[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const generateBlobs = useCallback((width: number, height: number) => {
    blobs.current = Array.from({ length: numBlobs }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: minBlobSize + Math.random() * (maxBlobSize - minBlobSize),
      vx: (Math.random() - 0.5) * speed * 1000,
      vy: (Math.random() - 0.5) * speed * 1000,
      color: [color1, color2, color3][Math.floor(Math.random() * 3)],
    }));
  }, [numBlobs, minBlobSize, maxBlobSize, speed, color1, color2, color3]);

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    ctx.filter = 'blur(20px)'; // Apply blur for liquid effect
    ctx.globalCompositeOperation = 'lighter'; // Blend colors

    blobs.current.forEach(blob => {
      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
      ctx.fillStyle = blob.color;
      ctx.fill();

      // Update position
      blob.x += blob.vx;
      blob.y += blob.vy;

      // Bounce off walls
      if (blob.x + blob.radius > width || blob.x - blob.radius < 0) {
        blob.vx *= -1;
      }
      if (blob.y + blob.radius > height || blob.y - blob.radius < 0) {
        blob.vy *= -1;
      }
    });

    ctx.filter = 'none'; // Reset filter for other drawings if any
    ctx.globalCompositeOperation = 'source-over'; // Reset composite operation
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    draw(ctx, dimensions.width, dimensions.height);
    animationFrameId.current = requestAnimationFrame(animate);
  }, [draw, dimensions]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const newWidth = parent.offsetWidth;
        const newHeight = parent.offsetHeight;
        setDimensions({ width: newWidth, height: newHeight });
        canvas.width = newWidth;
        canvas.height = newHeight;
        generateBlobs(newWidth, newHeight); // Regenerate blobs on resize
      }
    };

    // Initial size setup
    handleResize();

    // Use ResizeObserver for more efficient resizing
    const resizeObserver = new ResizeObserver(handleResize);
    const parent = canvas.parentElement;
    if (parent) {
      resizeObserver.observe(parent);
    }

    generateBlobs(dimensions.width, dimensions.height); // Initial blob generation

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (parent) {
        resizeObserver.unobserve(parent);
      }
    };
  }, [animate, generateBlobs, dimensions.width, dimensions.height]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: -1 }} // Ensure it's in the background
    />
  );
};

export default LiquidBackground;