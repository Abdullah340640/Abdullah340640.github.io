import { motion } from 'framer-motion'

import { timeline } from '../../data/company'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

export const CompanyTimeline = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Journey"
          title="Milestones that shaped Cosmic Rags LTD"
          description="From boutique studio to global digital product powerhouse, we are committed to continuous innovation and measurable success for our clients."
          align="center"
        />
        <div className="mt-16 space-y-8">
          {timeline.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-3xl border border-brand-gold/30 bg-white/85 p-8 shadow-lg dark:bg-surface-dark/85"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-gold/70 via-brand-gold/40 to-transparent" />
              <div className="ml-6 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-gold">
                  {event.year}
                </p>
                <h3 className="text-xl font-semibold text-brand-navy dark:text-white">
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CompanyTimeline
