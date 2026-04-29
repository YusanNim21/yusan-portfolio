import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiYoutube } from 'react-icons/fi';

const projects = [
  {  
    title: "Gamer Zone (2026 Reboot)",
    description: "Led the end-to-end migration of a legacy static site into a modern, component-driven React SPA. Features dynamic routing and state persistence.",
    tech: ["React.js", "Tailwind CSS", "Vite", "Vercel CI/CD"],
    liveLink: "https://gamer-zone-fawn.vercel.app/",
    githubLink: "https://github.com/YusanNim21/Gamer-Zone", 
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
  },
  {
    title: "Containerized Library Management System",
    description: "An OOP-driven Python/Flask backend for media inventory. Containerized via Docker and fully automated using GitHub Actions CI/CD.",
    tech: ["Python", "Flask", "SQLite", "Docker", "GitHub Actions"],
    githubLink: "https://github.com/YusanNim21/LibraryOS",
    videoLink: "https://youtu.be/qLoGAdh1Giw?si=ekKNJtUtLkHS5r5y",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop" 
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 md:px-20 relative z-10">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured Work</h2>
        <div className="w-20 h-1 bg-blue-500 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition-colors duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-blue-900/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                
                <p className="text-neutral-400 text-sm mb-6 line-clamp-3 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    <FiGithub size={18} /> Code
                  </a>
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      <FiExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  {project.videoLink && (
                    <a 
                      href={project.videoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-400 hover:text-[#ff0000] transition-colors"
                    >
                      <FiYoutube size={18} /> Watch Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}