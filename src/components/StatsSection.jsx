import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { label: 'Hackathons', value: 10, suffix: '+' },
  { label: 'Internships', value: 3, suffix: '' },
  { label: 'Certifications', value: 10, suffix: '+' },
  { label: 'Projects', value: 4, suffix: '+' }
]

export default function StatsSection() {
  return (
    <section className="grid gap-8 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-2xl md:grid-cols-2 md:p-10">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-5"
      >
        <span className="text-sm uppercase tracking-[0.28em] text-purple-400 font-bold">
          Achievements
        </span>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Some things I’ve worked on so far
        </h2>

        <p className="max-w-xl text-slate-400 font-medium leading-relaxed">
          I’ve participated in hackathons, completed internships, and worked on multiple projects while learning AI and full stack development.
        </p>
      </motion.div>

      {/* RIGHT SIDE */}
      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="interactive-card rounded-[28px] border border-white/10 bg-slate-900/50 p-6 text-center"
          >
            <p className="text-4xl font-bold text-white">
              <CountUp end={item.value} duration={2.5} enableScrollSpy scrollSpyOnce />
              {item.suffix}
            </p>

            <p className="mt-2 text-sm uppercase font-semibold tracking-wide text-slate-400">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}