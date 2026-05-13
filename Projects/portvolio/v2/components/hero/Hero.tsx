"use client";

import { motion } from "framer-motion";
import Experience from "../3d/Experience";
import Magnetic from "../ui/Magnetic";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 3D Scene Background */}
      <Experience />

      {/* Hero Content Overlay */}
      <div className="container mx-auto px-6 z-10 pointer-events-none">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent-cyan font-mono tracking-widest uppercase text-sm mb-4 block">
              Digital Architect & Creative Engineer
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter overflow-hidden">
              {"DESIGNING".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet"
              >
                FUTURE
              </motion.span>{" "}
              {"INTERFACES".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + (0.1 * i), ease: [0.33, 1, 0.68, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            I build high-end interactive experiences that blend cutting-edge frontend technology with cinematic 3D design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 pointer-events-auto"
          >
            <Magnetic>
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent-cyan transition-all duration-300 transform hover:scale-105">
                View Projects
              </button>
            </Magnetic>
            <Magnetic>
              <button className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                Get in Touch
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-accent-cyan to-transparent opacity-50" />
      </div>
    </section>
  );
}
