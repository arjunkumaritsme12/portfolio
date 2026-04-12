import { motion } from 'framer-motion'

const stats = [
  { label: 'Hackathons', value: '10+' },
  { label: 'Internships', value: '3' },
  { label: 'Certifications', value: '10+' },
  { label: 'Projects', value: '4+' }
]

export default function StatsSection() {
  return (
    <section className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(255,255,255,0.02)] backdrop-blur-xl md:grid-cols-2 md:p-10">
      <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="space-y-5">
        <span className="text-sm uppercase tracking-[0.28em] text-cyan-300">Impact metrics</span>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Designing powerful experiences with AI, data, and product thinking.</h2>
        <p className="max-w-xl text-slate-300">
          I blend strong technical foundations in machine learning and full stack development with polished UI/UX design, delivering web experiences built for scale and clarity.
        </p>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((item, index) => (
          <motion.div key={item.label} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 * index }} className="interactive-card rounded-[28px] border border-white/10 bg-slate-950/60 p-6 text-center shadow-glow">
            <p className="text-4xl font-semibold text-white">{item.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
