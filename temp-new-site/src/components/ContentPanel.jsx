import { motion, AnimatePresence } from 'framer-motion';
import About from './sections/About';
import Resume from './sections/Resume';
import Projects from './sections/Projects';
import Articles from './sections/Articles';
import Contact from './sections/Contact';

const sectionComponents = [About, Resume, Projects, Articles, Contact];

const liquidEase = [0.32, 0.72, 0, 1];

export default function ContentPanel({ currentSection }) {
  const CurrentComponent = sectionComponents[currentSection];

  return (
    <div className="content-panel">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentSection}
          className="section-wrapper"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -48 }}
          transition={{
            type: 'tween',
            duration: 0.45,
            ease: liquidEase,
          }}
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
