
import { useEffect } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const { 
    threshold = 0.1, 
    rootMargin = "0px 0px -100px 0px",
    once = true,
    delay = 0,
    duration = 800
  } = options;

  useEffect(() => {
    // Add a small delay for elements to initialize
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered animation effect
            setTimeout(() => {
              entry.target.classList.add('revealed');
              
              // Add random subtle movement effect
              const randomX = Math.random() * 10 - 5; // -5 to 5
              const randomY = Math.random() * 10; // 0 to 10
              const element = entry.target as HTMLElement;
              
              // Apply the subtle random transform for a more organic feel
              element.style.transform = `translate3d(0, 0, 0)`;
              element.style.transition = `all ${duration/1000}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
            }, delay + (index * 150)); // Stagger effect - 150ms between items
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove('revealed');
          }
        });
      }, { 
        threshold,
        rootMargin
      });
      
      // Select all elements to reveal with different classes for different effects
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      const revealElementsLeft = document.querySelectorAll('.reveal-from-left');
      const revealElementsRight = document.querySelectorAll('.reveal-from-right');
      const revealElementsBottom = document.querySelectorAll('.reveal-from-bottom');
      const revealElementsTop = document.querySelectorAll('.reveal-from-top');
      
      // Observe all types of reveal elements
      revealElements.forEach(el => observer.observe(el));
      revealElementsLeft.forEach(el => observer.observe(el));
      revealElementsRight.forEach(el => observer.observe(el));
      revealElementsBottom.forEach(el => observer.observe(el));
      revealElementsTop.forEach(el => observer.observe(el));
      
      return () => {
        // Clean up by unobserving all elements
        [
          ...Array.from(revealElements),
          ...Array.from(revealElementsLeft),
          ...Array.from(revealElementsRight),
          ...Array.from(revealElementsBottom),
          ...Array.from(revealElementsTop)
        ].forEach(el => observer.unobserve(el));
      };
    }, 100); // Small delay for DOM to fully load
  }, [threshold, rootMargin, once, delay, duration]);
};

export default useScrollReveal;
