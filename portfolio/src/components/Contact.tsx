"use client"

import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-20 min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 w-full flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted uppercase tracking-widest mb-2 font-medium">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="glass-card p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full"
        >
          <a href="mailto:umar632708@gmail.com" className="flex items-center gap-4 hover:scale-105 transition-transform">
            <div className="glass w-14 h-14 flex items-center justify-center rounded-full shrink-0">
              <img src="/assets/email.png" alt="Email" className="w-7 h-7 object-contain invert dark:invert-0" />
            </div>
            <span className="text-lg md:text-xl font-medium truncate">umar632708@gmail.com</span>
          </a>

          <a href="https://www.linkedin.com/in/umar-ilyas-b98241336" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:scale-105 transition-transform">
            <div className="glass w-14 h-14 flex items-center justify-center rounded-full shrink-0">
              <img src="/assets/linkedin.png" alt="LinkedIn" className="w-7 h-7 object-contain invert dark:invert-0" />
            </div>
            <span className="text-lg md:text-xl font-medium shrink-0">LinkedIn</span>
          </a>

          <div className="flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
            <div className="glass w-14 h-14 flex items-center justify-center rounded-full shrink-0">
              <img src="/assets/call.png" alt="Call" className="w-7 h-7 object-contain invert dark:invert-0" />
            </div>
            <span className="text-lg md:text-xl font-medium shrink-0">+923104994473</span>
          </div>
        </motion.div>
      </div>

      <footer className="mt-20 text-center">
        <div className="flex justify-center gap-8 mb-6">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-blue-500 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted">Copyright &#169; 2026 Umar Ilyas. All Rights Reserved.</p>
      </footer>
    </section>
  )
}
