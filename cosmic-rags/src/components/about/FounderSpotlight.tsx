import { motion } from 'framer-motion'
import { LuSignature } from 'react-icons/lu'

import { founder } from '../../data/company'
import Container from '../common/Container'

export const FounderSpotlight = () => {
  return (
    <section className="py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-flex items-center rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Leadership
          </span>
          <h2 className="text-3xl font-semibold text-brand-navy dark:text-white">
            Meet {founder.name}, the driving force behind Cosmic Rags LTD.
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {founder.bio}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                Office
              </p>
              <p>Office 15280, 182-184 High Street North, London, E6 2JA</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                Contact
              </p>
              <p>+44 7400 706281 - info.cosmicragsltd@mail.com</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 px-4 py-2 text-sm text-brand-gold">
            <LuSignature /> {founder.signature}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-brand-gold/20 blur-3xl" />
          <img
            src={`${founder.image}&auto=format&fit=crop&w=900&q=80`}
            alt={founder.name}
            className="relative z-10 rounded-3xl object-cover shadow-2xl"
            loading="lazy"
          />
        </motion.div>
      </Container>
    </section>
  )
}

export default FounderSpotlight
