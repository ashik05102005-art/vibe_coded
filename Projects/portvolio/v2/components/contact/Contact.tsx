"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-violet/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet underline decoration-accent-cyan/20">
              TOGETHER
            </span>
          </motion.h2>
          
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Ready to elevate your digital presence? Send me a message and let's create something extraordinary.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <a href="mailto:ashik05102005@gmail.com" className="glass p-6 rounded-2xl group hover:border-accent-cyan/50 transition-all">
              <Mail className="w-8 h-8 text-accent-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email Me</p>
              <p className="text-white font-bold truncate">ashik05102005@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/ashik-p-k-723a73387" target="_blank" className="glass p-6 rounded-2xl group hover:border-accent-violet/50 transition-all">
              <MessageSquare className="w-8 h-8 text-accent-violet mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">LinkedIn</p>
              <p className="text-white font-bold">ASHIK P K</p>
            </a>
            <a href="https://github.com/Ashik05102005" target="_blank" className="glass p-6 rounded-2xl group hover:border-white/50 transition-all">
              <Send className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">GitHub</p>
              <p className="text-white font-bold">@Ashik05102005</p>
            </a>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a href="tel:+917012613984" className="text-gray-400 hover:text-accent-cyan transition-colors font-mono">
              +91 7012613984
            </a>
            <a href="https://drive.google.com/file/d/1CDMON669cyR82ukKsIJuttN484u3MzYj/view?usp=drive_link" target="_blank" className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Download Resume
            </a>
          </div>

          <form className="glass p-8 md:p-12 rounded-[2rem] text-left">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-accent-cyan outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-accent-cyan outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2 mb-8">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-2">Message</label>
              <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-accent-cyan outline-none transition-all resize-none" />
            </div>
            <button className="w-full py-5 bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-black rounded-2xl hover:opacity-90 transition-all transform hover:scale-[1.01]">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
