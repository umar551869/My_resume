import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { BackgroundSpline } from "@/components/BackgroundSpline"

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <BackgroundSpline />
      <div className="relative z-10 w-full backdrop-blur-[2px] bg-white/10 dark:bg-black/10 transition-colors">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
