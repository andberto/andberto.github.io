import { motion } from 'framer-motion';
import { education, experience, certifications, skills } from '../../data/portfolioData';

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

function TimelineSection({ title, items, icon }) {
  return (
    <motion.section className="timeline-section" variants={itemVariants}>
      <div className="timeline-header">
        <div className="timeline-icon">{icon}</div>
        <h3 className="subsection-title">{title}</h3>
      </div>
      <ol className="timeline-list">
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className="timeline-item"
            variants={itemVariants}
          >
            <div className="timeline-dot"></div>
            <h4>{item.institution || item.role || item.title}</h4>
            <span className="timeline-period">{item.period}</span>
            <p>{item.description}</p>
            {(item.grade || item.score) && (
              <span className="timeline-grade">
                {item.grade ? `Grade: ${item.grade}` : `Score: ${item.score}`}
              </span>
            )}
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}

export default function Resume() {
  return (
    <motion.article
      className="section resume"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header variants={itemVariants}>
        <h2 className="section-title">
          <span className="title-text">Resume</span>
          <span className="title-glow"></span>
        </h2>
      </motion.header>

      <TimelineSection
        title="Education"
        items={education}
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        }
      />

      <TimelineSection
        title="Experience"
        items={experience}
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
          </svg>
        }
      />

      <TimelineSection
        title="Certifications"
        items={certifications}
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="8" r="7"/>
            <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
          </svg>
        }
      />

      <motion.section className="skills-section" variants={itemVariants}>
        <h3 className="subsection-title">My Skills</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              variants={itemVariants}
            >
              <div className="skill-header">
                <h5>{skill.name}</h5>
                <span className="skill-value">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.article>
  );
}
