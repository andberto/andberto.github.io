import { useState, useEffect, useCallback, useRef } from 'react';
import { sections } from '../data/portfolioData';

export default function useWheelRotation() {
  const [rotation, setRotation] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const lastScrollTime = useRef(Date.now());
  const scrollAccumulator = useRef(0);
  const scrollTimeout = useRef(null);
  
  const sectionCount = sections.length;
  const rotationPerSection = (Math.PI * 2) / sectionCount;
  
  // Threshold for changing section - higher = need more scroll to change
  const SCROLL_THRESHOLD = 120;
  // Minimum time between section changes (ms) - during this time ignore wheel for nav
  const MIN_SCROLL_INTERVAL = 700;

  const handleWheel = useCallback((e) => {
    // Non interferire: se lo scroll avviene dentro il pannello destro (contenuto/menu),
    // lasciamo scrollare solo quello. Rotazione sfera e cambio sezione solo fuori dal pannello.
    if (e.target.closest('.right-content-panel')) {
      return; // non preventDefault: lo scroll del pannello resta normale
    }
    
    e.preventDefault();
    
    const now = Date.now();
    const timeDiff = now - lastScrollTime.current;
    
    // Durante il cooldown non accumulare: evita doppio salto di sezione
    if (timeDiff < MIN_SCROLL_INTERVAL) {
      return;
    }
    
    // Accumulate scroll delta
    scrollAccumulator.current += e.deltaY;
    
    // Only change section when threshold is reached (una sola sezione per volta)
    if (Math.abs(scrollAccumulator.current) < SCROLL_THRESHOLD) {
      return;
    }
    
    const direction = scrollAccumulator.current > 0 ? 1 : -1;
    
    // Reset accumulator e cooldown
    scrollAccumulator.current = 0;
    lastScrollTime.current = now;
    
    setCurrentSection((prev) => {
      let newSection = prev + direction;
      
      // Wrap around
      if (newSection >= sectionCount) newSection = 0;
      if (newSection < 0) newSection = sectionCount - 1;
      
      return newSection;
    });
    
    setRotation((prev) => prev + (direction * rotationPerSection));
  }, [sectionCount, rotationPerSection]);

  const goToSection = useCallback((index) => {
    const diff = index - currentSection;
    setCurrentSection(index);
    setRotation((prev) => prev + (diff * rotationPerSection));
  }, [currentSection, rotationPerSection]);

  useEffect(() => {
    const handleWheelWithPassive = (e) => {
      handleWheel(e);
    };

    window.addEventListener('wheel', handleWheelWithPassive, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheelWithPassive);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleWheel]);

  // Keyboard navigation with debounce
  useEffect(() => {
    let lastKeyTime = 0;
    
    const handleKeyDown = (e) => {
      const now = Date.now();
      if (now - lastKeyTime < MIN_SCROLL_INTERVAL) return;
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        lastKeyTime = now;
        setCurrentSection((prev) => {
          const newSection = (prev + 1) % sectionCount;
          return newSection;
        });
        setRotation((prev) => prev + rotationPerSection);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        lastKeyTime = now;
        setCurrentSection((prev) => {
          const newSection = prev - 1 < 0 ? sectionCount - 1 : prev - 1;
          return newSection;
        });
        setRotation((prev) => prev - rotationPerSection);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sectionCount, rotationPerSection]);

  return {
    rotation,
    currentSection,
    goToSection
  };
}
