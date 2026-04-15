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
    <section id="achievements" className="grid gap-8 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-2xl md:p-10">
      <div className="space-y-3">
        <span className="text-sm uppercase tracking-[0.28em] text-purple-400 font-bold">Achievements</span>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Recognitions and milestones across competitions and programs.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((achievement, index) => (
          <motion.div key={achievement} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 * index }} className="interactive-card rounded-[28px] border border-white/10 bg-slate-900/50 p-6 text-slate-200">
            <p className="text-sm leading-7 font-medium">{achievement}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
