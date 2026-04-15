import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative sticky top-0 z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8 bg-[#020617]/80 backdrop-blur-xl"
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

      <div className="flex items-center gap-3">
        <Link to="/hire" className="hidden rounded-xl bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(168,85,247,0.39)] transition hover:bg-purple-700 hover:shadow-[0_6px_20px_rgba(168,85,247,0.23)] hover:-translate-y-0.5 md:inline-flex">
          Hire Me
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute inset-x-0 top-full z-40 rounded-b-[32px] border border-white/10 bg-[#020617]/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-3">
                {links.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-white/10 text-purple-300' : 'text-slate-200 hover:bg-white/5 hover:text-white'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
