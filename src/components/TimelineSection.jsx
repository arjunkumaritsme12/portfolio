import { motion } from 'framer-motion'

const timeline = [
  { year: '2025', title: 'Deloitte (Virtual)', description: 'Data Analytics Intern building dashboards, ETL pipelines, and predictive insights.' },
  { year: '2025', title: 'Codex Techno', description: 'Data Analytics Intern focused on data modeling, reporting, and automation.' },
  { year: '2026', title: 'Micro IT Services', description: 'AI/ML Intern building predictive and explainable machine learning solutions.' }
]

export default function TimelineSection() {
  return (
    <section id="experience" className="grid gap-8 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-2xl md:p-10">
      <div className="space-y-3">
        <span className="text-sm uppercase tracking-[0.28em] text-purple-400 font-bold">Journey</span>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Education and experience timeline.</h2>
        <p className="max-w-2xl text-slate-400 font-medium leading-relaxed">
          A strong foundation in AIML and IoT with hands-on internships, hackathon wins, and a mindset for scalable engineering.
        </p>
      </div>
      <div className="relative border-l-2 border-white/10 pl-8 ml-2">
        {timeline.map((item, index) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 * index }} className="interactive-card mb-10 relative rounded-[28px] border border-white/10 bg-slate-900/50 p-6">
            <div className="absolute left-[-43px] top-6 h-5 w-5 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] ring-4 ring-[#020617]" />
            <span className="text-sm uppercase tracking-[0.24em] font-semibold text-slate-500">{item.year}</span>
            <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 max-w-xl text-slate-400 font-medium">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
