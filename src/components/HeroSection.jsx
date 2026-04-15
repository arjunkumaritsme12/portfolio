import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Linkedin, Github, Twitter } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="about" className="relative flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between w-full mt-8 md:mt-16">

      {/* Left Column (Text) */}
      <div className="flex flex-col max-w-xl space-y-6 lg:w-1/2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-[40px] leading-tight font-extrabold tracking-tight text-white sm:text-6xl md:leading-[1.1]">
            Hi, I'm <span className="text-purple-500">Arjun Kumar</span>
          </h1>
          <h2 className="mt-3 text-[22px] font-bold text-slate-200 sm:text-3xl">
            AIML Enthusiast & Full Stack Developer
          </h2>
          <p className="mt-6 text-[17px] text-slate-400 leading-relaxed font-medium">
            B.Tech CSE student specializing in AIML & IoT, passionate about building real-world applications and exploring AI technologies.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="flex flex-wrap items-center gap-4 pt-4">
          <Link to="/hire" className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_0_rgba(168,85,247,0.39)] transition hover:bg-purple-700 hover:shadow-[0_6px_20px_rgba(168,85,247,0.23)] hover:-translate-y-0.5">
            Hire Me
          </Link>
          <a href="/projects" className="inline-flex items-center justify-center rounded-xl border-2 border-slate-700 bg-transparent px-8 py-3.5 text-[15px] font-bold text-slate-300 transition hover:border-purple-500 hover:text-purple-500 hover:bg-purple-500/5">
            See Projects
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center gap-3 pt-6">
          <a href="https://www.linkedin.com/in/arjun-kumar-89343228b/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white transition hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <Linkedin size={18} fill="currentColor" strokeWidth={0} />
          </a>
          <a href="https://github.com/arjunkumaritsme12" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white transition hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <Github size={18} fill="currentColor" strokeWidth={0} />
          </a>
          <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white transition hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <Twitter size={18} fill="currentColor" strokeWidth={0} />
          </a>
        </motion.div>
      </div>

      {/* Right Column (Image) */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative mx-auto flex w-full max-w-sm items-center justify-center lg:w-1/2">
        <div className="interactive-card relative w-full overflow-hidden rounded-full border-8 border-white/10 shadow-2xl aspect-square bg-gradient-to-br from-purple-500/20 to-transparent group cursor-pointer transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.4)]">
          <img
            src="/profile.jpeg"
            alt="Arjun Kumar Portrait"
            className="relative z-10 w-full h-full object-cover scale-125 object-[center_20%] transition-transform duration-500 group-hover:scale-[1.35]"
          />
        </div>
      </motion.div>

    </section>
  )
}
