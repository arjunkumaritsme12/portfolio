import { motion } from 'framer-motion'

export default function ContactSection() {
  const nextUrl = typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : '/thank-you'

  return (
    <section id="contact" className="grid gap-8 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-2xl md:p-10">
      <div className="space-y-3">
        <span className="text-sm uppercase tracking-[0.28em] text-purple-400 font-bold">Get in touch</span>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Reach out for collaborations, internships, or product partnerships.</h2>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="interactive-card space-y-6 rounded-[32px] border border-white/10 bg-slate-900/40 p-8 md:p-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-slate-400 font-medium leading-relaxed">I’m available for AI/ML internships, full stack development roles, and collaborative design systems engagements.</p>
          </motion.div>
          <div className="space-y-4 text-sm font-semibold text-slate-300">
            <div className="interactive-card rounded-3xl bg-white/5 border border-white/10 p-4 shadow-sm text-slate-400">Email: <span className="text-purple-400">roy.prajapat.143@gmail.com</span></div>
            <div className="interactive-card rounded-3xl bg-white/5 border border-white/10 p-4 shadow-sm text-slate-400">Location: <span className="text-purple-400">Mathura, Uttar Pradesh</span></div>
          </div>
        </div>
        <motion.form
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          action="https://formsubmit.co/40132433a339f8ac349b155e38c0c6db"
          method="POST"
          className="interactive-card space-y-5 rounded-[32px] border border-white/10 bg-slate-900/40 p-8 md:p-10"
        >
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={nextUrl} />
          <div>
            <label className="text-sm font-bold text-slate-400">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="text-sm font-bold text-slate-400">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="text-sm font-bold text-slate-400">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="How can I help?"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/10 shadow-sm resize-none"
              required
            />
          </div>
          <button type="submit" className="w-full rounded-xl bg-purple-600 px-5 py-3 text-[15px] font-bold text-white shadow-[0_4px_14px_0_rgba(168,85,247,0.39)] transition hover:bg-purple-700 hover:shadow-[0_6px_20px_rgba(168,85,247,0.23)] hover:-translate-y-0.5">
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  )
}
