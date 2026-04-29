import { motion } from 'framer-motion';
import { Terminal, Download } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] text-white px-6 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        className="max-w-3xl text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Floating Profile Picture */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
              <img 
                src="/profile.jpg" 
                alt="Yusan Nimtharu" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-mono font-medium">
            <Terminal size={16} />
            <span>DevOps & Full-Stack Developer</span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
          Hi, I'm <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Yusan Nuwarawewa.
          </span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-semibold text-neutral-400 mb-6">
          I build scalable apps and automated pipelines.
        </motion.h2>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          I'm an Undergrad at the Open University of Sri Lanka specializing in Full-Stack Development and DevOps. 
          I escape "tutorial hell" by taking complex ideas from local host, automating the deployment, and shipping them to production.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#projects"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors duration-300 w-full sm:w-auto text-center"
          >
            View My Work
          </a>
          
          <button 
            onClick={() => alert("My 2026 DevOps Resume is currently compiling... check back soon!")}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-neutral-700 text-white font-semibold rounded-lg hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-300 w-full sm:w-auto text-center"
          >
            <Download size={18} className="text-neutral-400" />
            Download CV
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}