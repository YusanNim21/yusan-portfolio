import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiFolder, FiUsers, FiStar } from 'react-icons/fi';

export default function GithubStats() {
  const [stats, setStats] = useState({ repos: 0, followers: 0, following: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching live data directly from GitHub's API
    fetch('https://api.github.com/users/YusanNim21')
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following
        });
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching GitHub stats:", err);
        setLoading(false);
      });
  }, []);

  const statCards = [
    { label: "Public Repos", value: stats.repos, icon: <FiFolder className="text-blue-400" size={20} /> },
    { label: "Followers", value: stats.followers, icon: <FiUsers className="text-cyan-400" size={20} /> },
    { label: "Following", value: stats.following, icon: <FiStar className="text-purple-400" size={20} /> }
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-12 px-6 md:px-20 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
          <FiGithub size={24} className="text-neutral-400" />
          <h3 className="text-xl font-bold tracking-tight">Live GitHub Activity</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statCards.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 flex items-center justify-between hover:border-neutral-600 transition-colors duration-300"
            >
              <div>
                <p className="text-neutral-500 text-sm font-mono mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">
                  {loading ? <span className="animate-pulse text-neutral-700">...</span> : stat.value}
                </p>
              </div>
              <div className="p-3 bg-neutral-800/50 rounded-lg">
                {stat.icon}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}