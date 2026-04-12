import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI-Based Resume Screening & Job Matching System',
    tech: 'Python, NLP, BERT, Django REST, ReactJS',
    description: 'Automated resume scoring and job fit matching with semantic skill extraction and model-driven recommendations.'
  },
  {
    title: 'Voice Calendar Assistant',
    tech: 'OpenAI Whisper, LangChain, CrewAI, Google Calendar API',
    description: 'Conversational scheduling assistant with voice capture, intent routing, and calendar automation.'
  },
  {
    title: 'Deepfake Detection (Multimodal & Explainable AI)',
    tech: 'Computer Vision, Explainability, Ensemble Models',
    description: 'A detection pipeline combining video, audio, and explainable signals for trusted deepfake identification.'
  },
  {
    title: 'Document Intelligence Platform',
    tech: 'RAG, LLM, Django, React',
    description: 'Intelligent document search and retrieval platform powered by retrieval augmentation and conversational AI.'
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(255,255,255,0.02)] backdrop-blur-xl md:p-10">
      <div className="space-y-3">
        <span className="text-sm uppercase tracking-[0.28em] text-cyan-300">Projects</span>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Recent work that blends AI, data, and polished delivery.</h2>
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article key={project.title} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 * index }} className="interactive-card group rounded-[32px] border border-white/10 bg-slate-950/60 p-6 shadow-glow hover:border-cyan-400/20 hover:bg-slate-900/70">
            <div className="mb-4 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300">Featured</div>
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-slate-300">{project.description}</p>
            <div className="mt-6 rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-300">Tech stack: {project.tech}</div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
