import { motion } from 'framer-motion'

const achievements = [
  'Winner: Hack-D-PY Python Hackathon',
  'Smart India Hackathon Participant',
  'NPTEL STAR Performer',
  '10+ Hackathons participated',
  'Winner: Poster Competition'
]

export default function AchievementsSection() {
  return (
    <section className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(255,255,255,0.02)] backdrop-blur-xl md:p-10">
      <div className="space-y-3">
        <span className="text-sm uppercase tracking-[0.28em] text-cyan-300">Achievements</span>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Recognitions and milestones across competitions and programs.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((achievement, index) => (
          <motion.div key={achievement} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.08 * index }} className="interactive-card rounded-[28px] border border-white/10 bg-slate-950/60 p-6 text-slate-200 shadow-glow">
            <p className="text-sm leading-7">{achievement}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
