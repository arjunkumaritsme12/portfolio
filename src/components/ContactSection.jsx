import { motion } from 'framer-motion'

export default function ContactSection() {
  const nextUrl = typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : '/thank-you'

  return (
    <section id="contact" className="grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(255,255,255,0.02)] backdrop-blur-xl md:p-10">
      <div className="space-y-3">
        <span className="text-sm uppercase tracking-[0.28em] text-cyan-300">Get in touch</span>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Reach out for collaborations, internships, or product partnerships.</h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="interactive-card space-y-6 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-glow md:p-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-slate-300">I’m available for AI/ML internships, full stack development roles, and collaborative design systems engagements.</p>
          </motion.div>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="interactive-card rounded-3xl bg-white/5 p-4">Email: roy.prajapat.143@gmail.com</div>
            <div className="interactive-card rounded-3xl bg-white/5 p-4">Location: Mathura, Uttar Pradesh</div>
          </div>
        </div>
        <motion.form
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          action="https://formsubmit.co/roy.prajapat.143@gmail.com"
          method="POST"
          className="interactive-card space-y-5 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-glow md:p-10"
        >
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={nextUrl} />
          <div>
            <label className="text-sm text-slate-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/10"
              required
            />
          </div>
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/10"
              required
            />
          </div>
          <div>
            <label className="text-sm text-slate-300">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="How can I help?"
              className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/10"
              required
            />
          </div>
          <button type="submit" className="w-full rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
