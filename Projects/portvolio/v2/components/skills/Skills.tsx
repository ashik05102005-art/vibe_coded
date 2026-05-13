"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python / Django", level: 90, color: "from-green-400 to-emerald-600" },
  { name: "JavaScript / HTML5 / CSS3", level: 95, color: "from-blue-400 to-cyan-400" },
  { name: "PostgreSQL / MySQL / SQLite", level: 85, color: "from-indigo-400 to-purple-400" },
  { name: "Git / VS Code", level: 92, color: "from-orange-400 to-red-400" },
  { name: "Antigravity / Cursor", level: 88, color: "from-pink-400 to-rose-400" },
  { name: "Render / Deployment", level: 80, color: "from-yellow-400 to-amber-600" },
];

export default function Skills() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-accent-cyan">Arsenal</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The modern technologies I use to build high-performance, interactive, and visually stunning digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-accent-cyan/50 transition-all duration-300 group"
            >
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                  {skill.name}
                </h3>
                <span className="text-gray-500 font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
