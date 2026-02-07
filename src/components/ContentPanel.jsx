import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from './sections/About';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import Articles from './sections/Articles';
import Contact from './sections/Contact';

const sectionComponents = [About, Resume, Projects, Articles, Contact];
const totalSections = sectionComponents.length;

const liquidEase = [0.32, 0.72, 0, 1];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 280 : -280,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -280 : 280,
    opacity: 0,
  }),
};

export default function ContentPanel({ currentSection }) {
  const prevSection = useRef(currentSection);

  // Determine slide direction, handling wrap-around
  let direction;
  if (currentSection === 0 && prevSection.current === totalSections - 1) {
    direction = 1; // forward wrap
  } else if (currentSection === totalSections - 1 && prevSection.current === 0) {
    direction = -1; // backward wrap
  } else {
    direction = currentSection >= prevSection.current ? 1 : -1;
  }
  prevSection.current = currentSection;

  const CurrentComponent = sectionComponents[currentSection];

  return (
    <div className="content-panel">
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={currentSection}
          custom={direction}
          className="section-wrapper"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: 'tween',
            duration: 0.38,
            ease: liquidEase,
          }}
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
