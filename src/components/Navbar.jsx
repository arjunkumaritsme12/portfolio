import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Github, Linkedin, Download } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 backdrop-blur-xl"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-3 text-center text-slate-200"
      >
        <div className="h-24 w-24 overflow-hidden rounded-full border border-white/10 shadow-xl shadow-cyan-500/10 ring-2 ring-cyan-400/20 transition duration-300 hover:ring-cyan-300/60">
          <motion.img
            src="/public/profile.jpeg"
            alt="Arjun Kumar profile"
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="h-full w-full object-cover object-[center_40%] scale-150"
          />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">Arjun Kumar</p>
        <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-300">AI & AIML Student</p>
      </motion.div>

      <nav className="hidden items-center gap-6 md:flex">
        {links.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `text-sm transition ${isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-cyan-300'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="interactive-card-soft rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:bg-cyan-500/20">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="interactive-card-soft rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:bg-violet-500/20">
          <Linkedin size={18} />
        </a>
        <a href="/resume.pdf" download className="hidden interactive-card rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:inline-flex">
          <Download size={16} /> Resume
        </a>
      </div>
    </motion.header>
  )
}
