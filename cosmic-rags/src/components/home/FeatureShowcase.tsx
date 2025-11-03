import { motion } from 'framer-motion'
import {
  LuRocket,
  LuSparkles,
  LuShieldCheck,
  LuCompass,
  LuGauge,
} from 'react-icons/lu'

import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

const features = [
  {
    id: 'feature-curation',
    title: 'Conversion-Ready Curation',
    description:
      'Every asset is battle-tested across 12+ sales platforms with performance benchmarks and ROI templates.',
    icon: LuSparkles,
  },
  {
    id: 'feature-security',
    title: 'Secure & Compliant',
    description:
      'GDPR-ready processes, transparent licensing, and privacy-first data flows to protect your customers and brand.',
    icon: LuShieldCheck,
  },
  {
    id: 'feature-strategy',
    title: 'Strategic Guidance Included',
    description:
      'Launch roadmaps, analytics dashboards, and concierge onboarding to help you implement with confidence.',
    icon: LuCompass,
  },
  {
    id: 'feature-speed',
    title: 'Future-Proof Automations',
    description:
      'Connected workflows spanning Notion, Airtable, Zapier, and GA4 to eliminate manual ops and scale faster.',
    icon: LuRocket,
  },
  {
    id: 'feature-analytics',
    title: 'Insights at Every Step',
    description:
      'Real-time dashboards with GA4, Meta Pixel, and Looker Studio templates to track performance with clarity.',
    icon: LuGauge,
  },
]

export const FeatureShowcase = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Cosmic Rags LTD"
          title="Built for ambitious digital teams"
          description="We combine premium creative assets with operations, analytics, and support so you can ship sophisticated digital products at scale."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ id, title, description, icon: Icon }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-3xl border border-brand-gold/20 bg-white/70 p-8 shadow-lg transition hover:-translate-y-2 hover:bg-white/90 dark:bg-surface-dark/80 dark:hover:bg-surface-dark"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold">
                <Icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy dark:text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 transition group-hover:text-slate-700 dark:text-slate-300 dark:group-hover:text-slate-200">
                {description}
              </p>
              <motion.span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeatureShowcase
