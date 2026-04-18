"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section id="profile" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden glass border-4 border-white/20 shadow-2xl shrink-0"
        >
          <img 
            src="/assets/main.png" 
            alt="Muhammad Umar Profile" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center md:text-left flex flex-col items-center md:items-start space-y-6 glass-card p-8 rounded-3xl"
        >
          <div>
            <p className="text-lg text-muted font-medium mb-2 uppercase tracking-widest">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Muhammad Umar
            </h1>
            <p className="text-2xl md:text-3xl font-semibold opacity-90">Data Scientist & ML Engineer</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <button 
              onClick={() => window.open('/assets/resume.pdf')}
              className="px-8 py-3 rounded-full border-2 border-black dark:border-white text-black dark:text-white font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              Download CV
            </button>
            <button 
              onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-bold hover:opacity-80 transition-all duration-300 pointer-events-auto"
            >
              Contact Me
            </button>
          </div>
          
          <div className="flex gap-4 mt-8">
            <a href="https://www.linkedin.com/in/umar-ilyas-b98241336" target="_blank" rel="noreferrer" className="glass w-14 h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform pointer-events-auto">
              <img src="/assets/linkedin.png" alt="LinkedIn" className="w-8 h-8 object-contain invert dark:invert-0" />
            </a>
            <a href="https://github.com/umar551869" target="_blank" rel="noreferrer" className="glass w-14 h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform pointer-events-auto">
              <img src="/assets/github.png" alt="GitHub" className="w-8 h-8 object-contain invert dark:invert-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
