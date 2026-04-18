"use client"

import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "Legal Case Research Agent",
      stack: "FastAPI • Next.js • FAISS • pgvector • LangChain • Docker",
      desc: "Production-ready Legal Research AI with hybrid RAG retrieval (Supabase pgvector + FAISS + live web), a 3-tier LLM fallback chain (Qwen3 → LLaMA 3.1 → GPT-3.5), hallucination mitigation via sentence-level BART grounding, and a JWT-authenticated REST API with 4-worker Docker deployment and rate limiting."
    },
    {
      title: "Multimodal Semantic Search & Classification",
      stack: "CLIP • FAISS • Transformers • SVM",
      desc: "Multimodal semantic search engine using CLIP for text-to-image and image-to-image retrieval. FAISS with Product Quantization reduces memory usage while maintaining retrieval quality. Includes email intent classification benchmarking transformers vs traditional SVMs."
    },
    {
      title: "Semantic Sentiment Engine & Forecasting",
      stack: "Hugging Face • NLP • Ensemble Methods",
      desc: "Real-time sentiment analysis pipeline using Hugging Face Transformers for continuous social media stream classification. Forecasting models leveraging advanced feature engineering and ensemble methods to improve time-series prediction accuracy over standard baselines."
    },
    {
      title: "AI Recipe Generator",
      stack: "CNNs • MobileNet • GPT • Computer Vision",
      desc: "Hybrid multimodal system generating structured recipes from food images via a CV→NLP pipeline. Combines MobileNet-based food recognition with LLM-driven recipe generation for end-to-end food-to-recipe inference."
    }
  ]

  return (
    <section id="projects" className="py-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted uppercase tracking-widest mb-2 font-medium">Browse My Recent</p>
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">
                {project.stack}
              </p>
              <p className="text-sm leading-relaxed opacity-90 flex-grow">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
