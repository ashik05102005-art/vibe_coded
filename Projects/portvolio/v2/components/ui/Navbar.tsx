"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? "py-4 bg-black/50 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Magnetic>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, color: "var(--accent-cyan)" }}
            className="text-2xl font-black tracking-tighter cursor-pointer"
          >
            ASHIK
          </motion.div>
        </Magnetic>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <Magnetic key={item} strength={0.2}>
              <motion.a
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-sm font-bold text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            </Magnetic>
          ))}
          <Magnetic>
            <button className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:bg-accent-cyan transition-all">
              Hire Me
            </button>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-bold text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
