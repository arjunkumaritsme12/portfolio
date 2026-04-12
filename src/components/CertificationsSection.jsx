import { motion } from 'framer-motion'

const certifications = [
  'Microsoft Fabric Data Engineer Associate',
  'Oracle Cloud GenAI Professional',
  'Google Gemini Certified Student',
  'GenAI Data Analytics – TATA',
  'Introduction to GenAI – Google Cloud',
  'Deloitte Data Analytics',
  'Java – HackerRank',
  'Python – Infosys',
  'Cisco thingQbator',
  'NPTEL Courses'
]

export default function CertificationsSection() {
  return (
    <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(255,255,255,0.02)] backdrop-blur-xl md:p-10">
      <div className="space-y-3">
        <span className="text-sm uppercase tracking-[0.28em] text-cyan-300">Certifications</span>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Verified skills and credentials for modern AI and cloud engineering.</h2>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div key={cert} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.55, delay: 0.06 * index }} className="interactive-card rounded-[28px] border border-white/10 bg-slate-950/60 p-5 text-sm text-slate-300 shadow-glow">
            {cert}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
