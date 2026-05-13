"use client";

import { useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll();

  useEffect(() => {
    // Custom Cursor Logic
    const cursor = document.getElementById("cursor");
    const follower = document.getElementById("cursor-follower");

    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      follower.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
    };

    const onMouseEnter = () => {
      cursor.classList.add("cursor-hover");
      follower.classList.add("follower-hover");
    };

    const onMouseLeave = () => {
      cursor.classList.remove("cursor-hover");
      follower.classList.remove("follower-hover");
    };

    window.addEventListener("mousemove", onMouseMove);

    const interactiveElements = document.querySelectorAll("a, button, input, textarea, .project-card");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    // Scroll Progress Logic
    const progressBar = document.getElementById("scroll-progress");
    const updateScrollProgress = () => {
      const h = document.documentElement;
      const b = document.body;
      const st = "scrollTop";
      const sh = "scrollHeight";
      const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
      if (progressBar) progressBar.style.width = percent + "%";
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", updateScrollProgress);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <div className="relative">
      <div id="scroll-progress" className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent-cyan to-accent-violet z-[1000] w-0 transition-all duration-100" />
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
      
      {/* Simple Footer */}
      <footer className="py-10 text-center border-t border-white/5 bg-black">
        <p className="text-gray-600 text-sm font-mono">
          &copy; {new Date().getFullYear()} ASHIK. BUILT WITH NEXT.JS & THREE.JS.
        </p>
      </footer>
    </div>
  );
}
