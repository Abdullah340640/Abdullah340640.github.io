import { motion } from 'framer-motion'
import Container from '../common/Container'

const missionPoints = [
  'Champion creators by providing premium digital products that accelerate launches and revenue.',
  'Deliver concierge-level support, analytics, and compliance expertise for every client engagement.',
  'Innovate responsibly with data-secure, ethically sourced assets and transparent pricing models.',
]

const visionPoints = [
  'A world where digital entrepreneurs scale with confidence, creativity, and measurable impact.',
  'A marketplace of best-in-class assets powering equitable, sustainable growth for modern teams.',
]

export const MissionVision = () => {
  return (
    <section className="py-20" id="about">
      <Container className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-flex items-center rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Mission
          </span>
          <h2 className="text-3xl font-semibold text-brand-navy dark:text-white">
            Empowering creators with the tools, systems, and support to launch premium digital experiences.
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {missionPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="space-y-6 rounded-3xl border border-brand-gold/30 bg-white/80 p-8 shadow-xl dark:bg-surface-dark/80"
        >
          <span className="inline-flex items-center rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Vision
          </span>
          <p className="text-lg font-semibold text-brand-navy dark:text-white">
            Lead the digital product revolution in the United Kingdom with trusted assets, AI-powered insights, and inclusive ecosystems.
          </p>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {visionPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-brand-gold/30 bg-brand-gold/10 p-4 text-sm text-brand-navy dark:text-white">
            Recognised for excellence across multi-platform commerce, Cosmic Rags LTD is registered at Office 15280, 182-184 High Street North, East Ham, London, E6 2JA.
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default MissionVision
