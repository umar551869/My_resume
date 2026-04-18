"use client"

import { motion, Variants } from "framer-motion"

export function Skills() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  }

  const genAISkills = [
    { name: "RAG / LangChain", level: "Advanced" },
    { name: "LLaMA 3.1 / Qwen3", level: "Advanced" },
    { name: "GPT-3.5 / GPT-4", level: "Advanced" },
    { name: "Hugging Face", level: "Advanced" },
    { name: "BART / CLIP / Ollama", level: "Intermediate" },
    { name: "FAISS / pgvector", level: "Advanced" },
  ]

  const mlopsSkills = [
    { name: "Docker / Compose", level: "Advanced" },
    { name: "FastAPI / REST APIs", level: "Advanced" },
    { name: "PostgreSQL / SQL", level: "Advanced" },
    { name: "Next.js / JWT Auth", level: "Intermediate" },
    { name: "Git / Linux / CI-CD", level: "Intermediate" },
    { name: "NLTK / ROUGE / NLP", level: "Advanced" },
  ]

  return (
    <section id="experience" className="py-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted uppercase tracking-widest mb-2 font-medium">Explore My</p>
          <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
              Generative AI & LLMs
            </h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {genAISkills.map((skill) => (
                <motion.div key={skill.name} variants={item} className="glass p-4 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform">
                  <img src="/assets/checkmark.png" alt="check" className="w-6 h-6 invert dark:invert-0 opacity-70" />
                  <div>
                    <h4 className="font-semibold">{skill.name}</h4>
                    <p className="text-sm text-muted">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              MLOps & Infrastructure
            </h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {mlopsSkills.map((skill) => (
                <motion.div key={skill.name} variants={item} className="glass p-4 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform">
                  <img src="/assets/checkmark.png" alt="check" className="w-6 h-6 dark:invert opacity-70" />
                  <div>
                    <h4 className="font-semibold">{skill.name}</h4>
                    <p className="text-sm text-muted">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
