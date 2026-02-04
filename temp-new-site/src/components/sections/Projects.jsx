import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolioData';

const categories = ['All', 'Applications', 'Scientific', 'Games'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter.toLowerCase());

  return (
    <motion.article
      className="section projects"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header variants={itemVariants}>
        <h2 className="section-title">
          <span className="title-text">Projects</span>
          <span className="title-glow"></span>
        </h2>
      </motion.header>

      <motion.div className="filter-list" variants={itemVariants}>
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
            {activeFilter === category && (
              <motion.span
                className="filter-indicator"
                layoutId="filter-indicator"
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              variants={itemVariants}
              layout
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 40px rgba(255, 0, 255, 0.3)'
              }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <span className="project-label">{project.label}</span>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}
