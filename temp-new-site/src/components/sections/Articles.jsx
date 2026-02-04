import { motion } from 'framer-motion';
import { articles } from '../../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Articles() {
  return (
    <motion.article
      className="section articles"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header variants={itemVariants}>
        <h2 className="section-title">
          <span className="title-text">Articles</span>
          <span className="title-glow"></span>
        </h2>
      </motion.header>

      <div className="articles-list">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="article-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.01,
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)'
            }}
          >
            <div className="article-header">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-authors">{article.authors}</p>
              <span className="article-publication">{article.publication}</span>
            </div>
            <p className="article-abstract">{article.abstract}</p>
            <motion.a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
              whileHover={{ x: 5 }}
            >
              Read more
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.article>
  );
}
