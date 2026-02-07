import { useRef, useLayoutEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { sections } from '../data/portfolioData';

export default function Navigation({ currentSection, onSectionChange }) {
  const listRef = useRef(null);
  const btnRefs = useRef([]);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  const measure = useCallback(() => {
    const btn = btnRefs.current[currentSection];
    if (btn) {
      setPill({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  }, [currentSection]);

  // Measure immediately (before paint) when section changes
  useLayoutEffect(() => {
    measure();
  }, [measure]);

  // Recalculate on resize
  useLayoutEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return (
    <nav className="navigation">
      <div className="nav-list" ref={listRef}>
        {/* Single sliding pill – animated via left/width */}
        <motion.div
          className="nav-pill"
          animate={{ left: pill.left, width: pill.width }}
          transition={{
            type: 'tween',
            duration: 0.32,
            ease: [0.4, 0, 0.2, 1],
          }}
        />

        {sections.map((section, index) => (
          <button
            key={section}
            ref={(el) => { btnRefs.current[index] = el; }}
            className={`nav-btn ${currentSection === index ? 'active' : ''}`}
            onClick={() => onSectionChange(index)}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  );
}
