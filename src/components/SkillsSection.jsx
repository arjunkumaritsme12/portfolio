import { motion } from 'framer-motion'

const skills = [
  { title: 'Programming', items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Python', 'Java'] },
  { title: 'AI / ML', items: ['Machine Learning', 'Deep Learning', 'NLP', 'Generative AI', 'LLMs', 'Reinforcement Learning'] },
  { title: 'Stack & Tools', items: ['TensorFlow', 'Scikit-Learn', 'HuggingFace', 'LangChain', 'LangGraph', 'CrewAI', 'MERN'] },
  { title: 'Cloud & Data', items: ['PostgreSQL', 'MongoDB', 'AWS', 'Git', 'GitHub'] }
]

const progress = [
  { label: 'AI/ML Engineering', value: 96 },
  { label: 'Full Stack Design', value: 88 },
  { label: 'Product Analytics', value: 84 },
  { label: 'Generative Systems', value: 91 }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(255,255,255,0.02)] backdrop-blur-xl md:grid-cols-[1.3fr_1fr] md:p-10">
      <div className="space-y-6">
        <div className="space-y-3">
          <span className="text-sm uppercase tracking-[0.28em] text-cyan-300">Capabilities</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Skill systems with animated clarity.</h2>
          <p className="max-w-xl text-slate-300">
            From data engineering to prompt design, I build modular systems and craft interfaces that feel premium and polished.
          </p>
        </div>
        <div className="space-y-4">
          {progress.map((skill, index) => (
            <motion.div key={skill.label} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>{skill.label}</span>
                <span className="font-semibold text-white">{skill.value}%</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500" style={{ width: `${skill.value}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        {skills.map((group, index) => (
          <motion.div key={group.title} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.65, delay: 0.08 * index }} className="interactive-card rounded-[32px] border border-white/10 bg-slate-950/60 p-6">
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
