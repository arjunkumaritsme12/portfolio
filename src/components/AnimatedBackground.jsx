import { motion } from 'framer-motion'

const circleVariants = {
  animate: {
    opacity: [0.45, 0.1, 0.45],
    scale: [1, 1.35, 1],
    transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' }
  }
}

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-10 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        variants={circleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"
        variants={circleVariants}
        animate="animate"
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl"
        variants={circleVariants}
        animate="animate"
        transition={{ duration: 16, repeat: Infinity }}
      />
    </div>
  )
}
