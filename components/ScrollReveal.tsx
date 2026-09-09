import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  direction?: 'up' | 'left' | 'right';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Offset slightly to ensure it's well within view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Base transform classes based on direction
  const getTransformClass = () => {
    if (isVisible) return 'opacity-100 translate-y-0 translate-x-0';
    
    switch (direction) {
      case 'left': return 'opacity-0 -translate-x-12';
      case 'right': return 'opacity-0 translate-x-12';
      case 'up': 
      default: return 'opacity-0 translate-y-12';
    }
  };

  const transitionDelay = `${delay}ms`;

  return (
    <div
      ref={ref}
      style={{ transitionDelay }}
      className={`transition-all duration-1000 ease-out will-change-transform ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
};