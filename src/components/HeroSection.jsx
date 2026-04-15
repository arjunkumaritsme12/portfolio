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
      <motion.div
        initial={{ opacity: 0, y: -90, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        className="relative mx-auto flex w-full max-w-sm items-center justify-center lg:w-1/2"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="relative w-full"
        >
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-400/10 blur-3xl opacity-80" />
          <motion.div
            className="interactive-card relative w-full overflow-hidden rounded-full border-8 border-white/10 shadow-2xl aspect-square bg-[#0b1324]/80 backdrop-blur-xl"
          >
            <motion.img
              src="/profile.jpeg"
              alt="Arjun Kumar Portrait"
              initial={{ scale: 0.97 }}
              animate={{ scale: [0.97, 1.03, 0.97] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="relative z-10 w-full h-full object-cover object-[center_20%]"
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full bg-white/5"
              animate={{ opacity: [0.35, 0.08, 0.35] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute -right-6 top-1/4 h-16 w-16 rounded-full border border-purple-300/30 bg-purple-500/10 blur-2xl"
              animate={{ opacity: [0.7, 0.2, 0.7] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute -left-5 bottom-10 h-12 w-12 rounded-full border border-cyan-300/30 bg-cyan-400/10 blur-2xl"
              animate={{ opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  )
}
