"use client"

import { motion } from "framer-motion"

export function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="about" className="py-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-muted uppercase tracking-widest mb-2 font-medium">Get To Know More</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="glass-card max-w-4xl mx-auto p-8 md:p-12 rounded-3xl text-center mb-16"
        >
          <p className="text-lg leading-relaxed text-[var(--foreground)] opacity-90">
            Data Scientist and Machine Learning Engineer specializing in Generative AI, Retrieval-Augmented Generation (RAG),
            and multimodal systems. Experienced in building production-style ML pipelines, optimizing vector search (FAISS),
            and deploying scalable APIs using Docker and AWS. Proven ability to translate research models into real-world
            applications with measurable performance gains.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden glass p-2"
          >
            <img src="/assets/main2.jpg" alt="About Profile" className="w-full h-full object-cover rounded-2xl" />
          </motion.div>

          <div className="flex flex-col gap-6 w-full max-w-md">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl flex flex-col items-center text-center h-full justify-center"
            >
              <img src="/assets/experience.png" alt="Experience" className="w-12 h-12 mb-4 invert dark:invert-0" />
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className="text-muted">Gained hands-on experience in QA, Web Development, Machine Learning and Data Science.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8 rounded-3xl flex flex-col items-center text-center h-full justify-center"
            >
              <img src="/assets/education.png" alt="Education" className="w-12 h-12 mb-4 invert dark:invert-0" />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-muted">B.Sc. Bachelors in Data Science<br />FAST NUCES LAHORE</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
