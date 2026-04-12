import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02060f] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <div className="interactive-card rounded-[32px] border border-white/10 bg-slate-950/60 p-10 shadow-glow">
          <h1 className="text-4xl font-semibold text-white">Thank you!</h1>
          <p className="mt-4 text-slate-300">
            Your message has been sent successfully. I’ll review it and get back to you soon.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
