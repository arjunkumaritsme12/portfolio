import { motion } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Hire Me', to: '/hire' },
  { label: 'Contact', to: '/contact' }
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8 bg-[#020617]/80 backdrop-blur-xl"
    >
      <Link to="/" className="text-2xl font-bold text-white flex items-baseline">
        Arjun<span className="text-purple-500 text-3xl leading-none">.</span>
      </Link>

      <nav className="hidden items-center gap-6 xl:gap-8 md:flex">
        {links.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `text-[14px] font-medium transition ${isActive ? 'text-purple-400' : 'text-slate-400 hover:text-purple-400'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center">
        <Link to="/hire" className="hidden rounded-xl bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(168,85,247,0.39)] transition hover:bg-purple-700 hover:shadow-[0_6px_20px_rgba(168,85,247,0.23)] hover:-translate-y-0.5 md:inline-flex">
          Hire Me
        </Link>
      </div>
    </motion.header>
  )
}
