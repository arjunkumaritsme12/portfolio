import { motion } from 'framer-motion'
import { 
  Code2, 
  Binary, 
  Cpu, 
  Layers, 
  Database, 
  Cloud, 
  Github, 
  Terminal 
} from 'lucide-react'

const skills = [
  {
    title: 'Programming',
    items: [
      { name: 'JavaScript', icon: <Terminal size={18} /> },
      { name: 'Python', icon: <Binary size={18} /> },
      { name: 'Java', icon: <Code2 size={18} /> }
    ]
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'Machine Learning', icon: <Cpu size={18} /> },
      { name: 'Deep Learning', icon: <Cpu size={18} /> },
      { name: 'NLP', icon: <Cpu size={18} /> }
    ]
  },
  {
    title: 'Full Stack',
    items: [
      { name: 'React', icon: <Layers size={18} /> },
      { name: 'MongoDB', icon: <Database size={18} /> }
    ]
  },
  {
    title: 'Tools',
    items: [
      { name: 'AWS', icon: <Cloud size={18} /> },
      { name: 'GitHub', icon: <Github size={18} /> }
    ]
  }
]

const progress = [
  { label: 'AI/ML', value: 85 },
  { label: 'Full Stack', value: 80 },
  { label: 'Problem Solving', value: 78 },
  { label: 'Generative AI', value: 82 }
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="grid gap-8 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-2xl md:grid-cols-[1.3fr_1fr] md:p-10"
    >

      {/* LEFT SIDE */}
      <div className="space-y-6">

        <div className="space-y-3">
          <span className="text-sm uppercase tracking-[0.28em] text-purple-400 font-bold">
            Skills
          </span>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Skills & technologies I work with
          </h2>

          <p className="max-w-xl text-slate-400 font-medium leading-relaxed">
            I work on AI projects and build full stack applications using modern tools and frameworks.
          </p>
        </div>

        {/* Progress Bars */}
        <div className="space-y-4">
          {progress.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between text-sm text-slate-300">
                <span>{skill.label}</span>
                <span className="text-white font-semibold">{skill.value}%</span>
              </div>

              <div className="mt-2 h-3 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="grid gap-4">
        {skills.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="interactive-card rounded-[28px] border border-white/10 bg-slate-900/40 p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-white">{group.title}</h3>

            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 hover:text-white hover:border-purple-400 transition"
                >
                  <span className="text-lg text-purple-400">
                    {item.icon}
                  </span>
                  {item.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}