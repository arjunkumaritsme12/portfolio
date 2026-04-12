import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Briefcase } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="about" className="relative flex flex-col gap-10 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(255,255,255,0.02)] backdrop-blur-xl md:p-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-5">
          <motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-cyan-300">
            AI / Full Stack Innovator
          </motion.span>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Arjun Kumar
            </h1>
            <p className="mt-5 max-w-xl text-slate-300 sm:text-lg">
              B.Tech CSE student specializing in AIML & IoT. I design premium data products, build intelligent applications, and bring generative AI experiences to life.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="interactive-card rounded-3xl border border-white/10 bg-slate-950/40 p-5">
              <span className="text-sm uppercase tracking-[0.24em] text-slate-400">Location</span>
              <p className="mt-3 flex items-center gap-2 text-lg text-white"><MapPin size={18} /> Mathura, UP</p>
            </div>
            <div className="interactive-card rounded-3xl border border-white/10 bg-slate-950/40 p-5">
              <span className="text-sm uppercase tracking-[0.24em] text-slate-400">Degree</span>
              <p className="mt-3 text-lg text-white">B.Tech CSE (AIML & IoT)</p>
            </div>
            <div className="interactive-card rounded-3xl border border-white/10 bg-slate-950/40 p-5">
              <span className="text-sm uppercase tracking-[0.24em] text-slate-400">Expected</span>
              <p className="mt-3 text-lg text-white">Graduation 2027</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              <Mail size={16} /> Contact me
            </Link>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200">
              Resume download
            </a>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative mx-auto flex h-[360px] w-full max-w-sm items-center justify-center rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900/40 to-violet-500/10 p-6 shadow-glow">
          <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_38%)]" />
          <div className="relative z-10 flex h-full w-full flex-col justify-between rounded-[28px] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-2xl">
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-900/60 p-4 text-sm text-slate-300">Premium AI, analytics, and product systems with fluid interfaces.</div>
              <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/5 p-4">Deloitte, Codex Techno, Micro IT Services</div>
                <div className="rounded-3xl bg-white/5 p-4">Machine Learning • NLP • Generative AI</div>
              </div>
            </div>

            <div className="interactive-card rounded-3xl border border-cyan-400/10 bg-white/5 p-5 text-center text-slate-100 shadow-xl shadow-cyan-500/10">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Current focus</p>
              <p className="mt-3 text-lg font-semibold">Intelligent systems, predictive modeling, and full-stack product design.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
