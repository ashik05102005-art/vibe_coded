"use client";

import { motion } from "framer-motion";
import { User, Code, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: <Code className="w-6 h-6 text-accent-cyan" />,
    title: "Clean Code",
    desc: "Scalable and maintainable architecture using the latest industry standards.",
  },
  {
    icon: <Palette className="w-6 h-6 text-accent-violet" />,
    title: "Modern UI/UX",
    desc: "Visually stunning designs focused on user engagement and accessibility.",
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Performance",
    desc: "Lightning fast load times and optimized GPU-accelerated animations.",
  },
];

export default function About() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Pioneering the next wave of <br />
              <span className="text-accent-cyan">Digital Interaction</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I'm Ashik PK — a passionate Python Django developer eager to build scalable and efficient web applications.
              I love solving problems through code and constantly learning new backend architectures. Every API call
              and database query is a chance to do something extraordinary.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Code className="w-6 h-6 text-accent-cyan" />, title: "Backend Mastery", desc: "Expertise in Python and Django for robust server-side logic." },
                { icon: <Palette className="w-6 h-6 text-accent-violet" />, title: "Database Architecture", desc: "Designing efficient schemas with PostgreSQL and MySQL." },
                { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: "Digital Crafting", desc: "Building beautiful digital worlds through clean and maintainable code." }
              ].map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{f.title}</h3>
                    <p className="text-sm text-gray-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-glow-cyan opacity-20" />
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent-cyan/20">
                  <User className="w-12 h-12 text-accent-cyan" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Ashik</h4>
                <p className="text-accent-cyan font-mono text-sm">Ashik</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl animate-float">
              <p className="text-3xl font-black text-white">4+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Years Exp</p>
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl animate-float" style={{ animationDelay: "2s" }}>
              <p className="text-3xl font-black text-white">50+</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
