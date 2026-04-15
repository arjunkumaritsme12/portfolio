import { motion } from 'framer-motion'
import { Github, Linkedin, FileText, Globe, Mail, Phone, MapPin } from 'lucide-react'

export default function HireSection() {
  const nextUrl = typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : '/thank-you'

  return (
    <section id="hire" className="grid gap-12 py-8">
      {/* Introduction Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="interactive-card rounded-[32px] border border-white/10 bg-slate-950/60 p-8 md:p-12 text-center space-y-4"
      >
        <h2 className="text-sm uppercase tracking-[0.3em] text-purple-400 font-bold">Open for Opportunities</h2>
        <h1 className="text-3xl font-bold text-white sm:text-5xl leading-tight">
          Let’s build something <span className="text-purple-500">meaningful</span> together.
        </h1>
        <p className="mx-auto max-w-2xl text-slate-400 font-medium text-lg leading-relaxed">
          Hi, I’m Arjun, a B.Tech CSE student specializing in AIML & Full Stack development.
          I build AI-based applications and modern web solutions. I’m currently open to internships
          and project opportunities where I can contribute and grow.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="interactive-card space-y-6 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold text-white">What I Do</h3>
          <ul className="space-y-4">
            {[
              "Build full stack web applications (React + Django)",
              "Develop AI/ML models (NLP, Deep Learning)",
              "Create AI-powered tools (chatbots, resume systems, etc.)",
              "Work on real-world problem-solving projects"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Why Hire Me */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="interactive-card space-y-6 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold text-white">Why Hire Me</h3>
          <ul className="space-y-4">
            {[
              "Strong foundation in AI/ML and full stack development",
              "Hands-on project experience in real-world scenarios",
              "Quick learner, highly adaptable, and passionate about tech",
              "Focus on clean UI and user-friendly, modern design"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Quick Links & Contact Details */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="interactive-card rounded-[32px] border border-white/10 bg-slate-900/40 p-8 space-y-6"
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/arjunkumaritsme12" className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-300 hover:text-white hover:bg-purple-500/10 transition">
                <Github size={20} />
                <span className="font-semibold text-sm">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/arjun-kumar-89343228b/" className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-300 hover:text-white hover:bg-purple-500/10 transition">
                <Linkedin size={20} />
                <span className="font-semibold text-sm">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-300 hover:text-white hover:bg-purple-500/10 transition">
                <FileText size={20} />
                <span className="font-semibold text-sm">Resume</span>
              </a>
              <a href="/" className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-300 hover:text-white hover:bg-purple-500/10 transition">
                <Globe size={20} />
                <span className="font-semibold text-sm">Portfolio</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="interactive-card rounded-[32px] border border-white/10 bg-slate-900/40 p-8 space-y-6"
          >
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <div className="space-y-4">
              <a href="mailto:roy.prajapat.143@gmail.com" className="flex items-center gap-4 text-slate-400 hover:text-purple-400 transition font-medium">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                  <Mail size={18} />
                </div>
                roy.prajapat.143@gmail.com
              </a>
              <div className="flex items-center gap-4 text-slate-400 font-medium">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <Phone size={18} />
                </div>
                +916396303191
              </div>
              <div className="flex items-center gap-4 text-slate-400 font-medium">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-pink-500/10 text-pink-400">
                  <MapPin size={18} />
                </div>
                India
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="interactive-card rounded-[32px] border border-white/10 bg-slate-950 px-8 py-10"
        >
          <form
            action="https://formsubmit.co/40132433a339f8ac349b155e38c0c6db"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_next" value={nextUrl} />
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Ex. John Doe"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10 transition shadow-sm"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10 transition shadow-sm"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Let's talk about..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10 transition shadow-sm resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-4 text-[16px] font-bold text-white shadow-[0_4px_20px_0_rgba(168,85,247,0.3)] transition hover:from-purple-500 hover:to-fuchsia-500 hover:shadow-[0_8px_30px_rgba(168,85,247,0.4)] hover:-translate-y-1"
            >
              Submit Application
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
