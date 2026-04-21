import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function ContactDock() {
  // A clean fade/scale animation that works flawlessly on both mobile and desktop positions
  const dockVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20, delay: 1.2 } 
    }
  };

  return (
    <motion.div 
      variants={dockVariants}
      initial="hidden"
      animate="visible"
      // MOBILE: bottom center | DESKTOP (md): left side, vertically centered
      className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:left-6 md:bottom-auto md:translate-x-0"
    >
      {/* MOBILE: row layout, horizontal padding | DESKTOP (md): column layout, vertical padding */}
      <div className="flex flex-row md:flex-col items-center gap-6 md:gap-8 px-8 py-4 md:px-4 md:py-8 bg-neutral-900/60 backdrop-blur-lg border border-neutral-700/50 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        
        <a 
          href="mailto:reach.yusan@gmail.com" 
          className="text-neutral-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 md:hover:translate-x-1 md:hover:-translate-y-0"
          aria-label="Email"
        >
          <FiMail size={24} />
        </a>

        <a 
          href="https://github.com/yusannim21" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 md:hover:translate-x-1 md:hover:-translate-y-0"
          aria-label="GitHub"
        >
          <FiGithub size={24} />
        </a>

        <a 
          href="https://linkedin.com/in/your-profile-url" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 md:hover:translate-x-1 md:hover:-translate-y-0"
          aria-label="LinkedIn"
        >
          <FiLinkedin size={24} />
        </a>

      </div>
    </motion.div>
  );
}