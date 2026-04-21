import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaDocker, FaAws, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiTerraform, SiGithubactions } from 'react-icons/si';

const skills = [
  { name: "Python", icon: <FaPython size={40} className="group-hover:text-yellow-400 transition-colors duration-300" /> },
  { name: "Java", icon: <FaJava size={40} className="group-hover:text-red-500 transition-colors duration-300" /> },
  { name: "React.js", icon: <FaReact size={40} className="group-hover:text-blue-400 transition-colors duration-300" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="group-hover:text-cyan-400 transition-colors duration-300" /> },
  { name: "Docker", icon: <FaDocker size={40} className="group-hover:text-blue-500 transition-colors duration-300" /> },
  // { name: "Terraform", icon: <SiTerraform size={40} className="group-hover:text-purple-500 transition-colors duration-300" /> },
  { name: "AWS", icon: <FaAws size={40} className="group-hover:text-orange-400 transition-colors duration-300" /> },
  { name: "CI/CD", icon: <SiGithubactions size={40} className="group-hover:text-blue-500 transition-colors duration-300" /> },
  { name: "Linux", icon: <FaLinux size={40} className="group-hover:text-gray-300 transition-colors duration-300" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="group-hover:text-orange-500 transition-colors duration-300" /> },
];

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-[#0a0a0a] text-white py-12 px-6 md:px-20 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-neutral-500 font-mono text-sm mb-8 uppercase tracking-widest">
          Technologies & Tools
        </p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="text-neutral-600 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300">
                {skill.icon}
              </div>
              <span className="text-xs font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}