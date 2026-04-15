import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'AI-Based Resume Screening & Job Matching System',
    tech: 'Python, NLP, BERT, Django REST, ReactJS',
    description: 'Built a system that analyzes resumes and matches candidates with suitable job roles based on their skills and experience.',
    github: '#',
    live: '#'
  },
  {
    title: 'Voice Calendar Assistant',
    tech: 'OpenAI Whisper, LangChain, CrewAI, Google Calendar API',
    description: 'Created a voice-based assistant that helps users schedule and manage events through simple conversations.',
    github: '#',
    live: '#'
  },
  {
    title: 'Deepfake Detection (Multimodal & Explainable AI)',
    tech: 'Computer Vision, Explainability, Ensemble Models',
    description: 'Developed a model that detects deepfake content using Image, video and audio analysis with explainable outputs.',
    github: '#',
    live: '#'
  },
  {
    title: 'Document Intelligence Platform',
    tech: 'RAG, LLM, Django, React',
    description: 'Built a platform where users can upload documents and quickly get answers using AI-based search.',
    github: '#',
    live: '#'
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="grid gap-8 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-2xl md:p-10">

      <div className="space-y-3">
        <span className="text-sm uppercase tracking-[0.28em] text-purple-400 font-bold">
          Projects
        </span>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Projects I’ve worked on
        </h2>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="interactive-card group rounded-[28px] border border-white/10 bg-slate-900/40 p-6 flex flex-col justify-between"
          >

            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-400 font-medium leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6 space-y-4">

              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm font-semibold text-slate-300">
                Tech stack: <span className="text-purple-400">{project.tech}</span>
              </div>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 hover:text-white hover:border-purple-400 transition"
                >
                  <Github size={16} />
                  Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-600 transition"
                >
                  <ExternalLink size={16} />
                  Live
                </a>

              </div>
            </div>

          </motion.article>
        ))}
      </div>
    </section>
  )
}