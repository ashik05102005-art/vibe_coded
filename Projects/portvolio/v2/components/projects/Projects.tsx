"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Reado Book Exchange",
    category: "Django / PGSQL / HTML5",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2074&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Personal Digital Showcase",
    category: "HTML5 / CSS3 / Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-accent-violet">Work</span></h2>
            <p className="text-gray-500">A selection of my recent high-end digital experiments.</p>
          </div>
          <button className="hidden md:block px-6 py-3 glass rounded-full text-sm font-bold hover:bg-white/10 transition-all">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateX: -5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: 1000 }}
              className="group relative project-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass border-white/5 transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-accent-cyan font-mono text-xs mb-2 uppercase tracking-widest">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex gap-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <a href={project.link} className="p-3 bg-white text-black rounded-full hover:bg-accent-cyan transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 glass text-white rounded-full hover:bg-white/10 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
