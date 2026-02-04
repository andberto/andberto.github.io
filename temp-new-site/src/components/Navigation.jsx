import { motion } from 'framer-motion';
import { sections } from '../data/portfolioData';

const liquidEase = [0.32, 0.72, 0, 1];

export default function Navigation({ currentSection, onSectionChange }) {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        {sections.map((section, index) => (
          <motion.li
            key={section}
            className={`nav-item ${currentSection === index ? 'active' : ''}`}
            initial={false}
            animate={{ opacity: 1 }}
          >
            <button
              className="nav-link"
              onClick={() => onSectionChange(index)}
            >
              <span className="nav-text">{section}</span>
              <span className="nav-glow"></span>
            </button>
            {currentSection === index && (
              <motion.div
                className="nav-indicator"
                layoutId="nav-indicator"
                transition={{
                  type: 'tween',
                  duration: 0.4,
                  ease: liquidEase,
                }}
              />
            )}
          </motion.li>
        ))}
      </ul>
      
      <div className="scroll-hint">
        <motion.div
          className="scroll-icon"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <span>Scroll to navigate</span>
      </div>
    </nav>
  );
}
