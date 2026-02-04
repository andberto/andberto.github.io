import { motion } from 'framer-motion';
import { personalInfo, aboutText, services, institutions } from '../../data/portfolioData';

const iconMap = {
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
    </svg>
  ),
  laptop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <path d="M2 20h20"/>
    </svg>
  )
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <motion.article
      className="section about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header variants={itemVariants}>
        <h2 className="section-title">
          <span className="title-text">About Me</span>
          <span className="title-glow"></span>
        </h2>
      </motion.header>

      <motion.div className="about-text" variants={itemVariants}>
        {aboutText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </motion.div>

      <motion.section className="services" variants={itemVariants}>
        <h3 className="subsection-title">What I'm Doing</h3>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)' }}
            >
              <div className="service-icon">
                {iconMap[service.icon]}
              </div>
              <div className="service-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="institutions" variants={itemVariants}>
        <h3 className="subsection-title">Related Institutions</h3>
        <div className="institutions-list">
          {institutions.map((inst, index) => (
            <motion.a
              key={index}
              href={inst.url}
              target="_blank"
              rel="noopener noreferrer"
              className="institution-link"
              whileHover={{ scale: 1.05 }}
            >
              <img src={inst.logo} alt={inst.name} />
            </motion.a>
          ))}
        </div>
      </motion.section>
    </motion.article>
  );
}
