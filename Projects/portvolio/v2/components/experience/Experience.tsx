"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "Present",
    role: "Developer Intern",
    company: "Bridgeon Solutions",
    desc: "Currently working as an intern, building robust backend architectures and gaining hands-on experience with Python and Django.",
  },
  {
    year: "2023 — 2026",
    role: "BSc Computer Science",
    company: "Calicut University",
    desc: "Learning core computer science concepts, algorithms, and data structures. Building a strong foundation in programming.",
  },
  {
    year: "2021 — 2023",
    role: "High School (Commerce)",
    company: "National HSS Vaattoli",
    desc: "Studied Commerce stream subjects before pivoting to pursue a passion for programming and software development.",
  },
];

export default function Experience() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-20 text-center">
          MY <span className="text-accent-violet">JOURNEY</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          <motion.div 
            style={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-violet to-transparent hidden md:block"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`flex flex-col md:flex-row gap-8 mb-24 items-center relative z-10 ${
                i % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"
              }`}
            >
              <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
                <span className="text-accent-cyan font-mono text-xl mb-2">{exp.year}</span>
                <div className="md:hidden w-px h-12 bg-accent-cyan/30" />
              </div>
              
              {/* Timeline Node */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-accent-cyan rounded-full hidden md:block" />

              <div className="w-full md:w-2/3 glass p-10 rounded-3xl group hover:border-accent-cyan/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {exp.role}
                </h3>
                <p className="text-gray-400 font-medium mb-4">{exp.company}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
