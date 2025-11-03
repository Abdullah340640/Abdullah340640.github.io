import { LuActivity, LuRocket, LuShieldCheck, LuUsers } from 'react-icons/lu'
import { motion } from 'framer-motion'

import { values } from '../../data/company'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

const iconMap = {
  LuRocket,
  LuShieldCheck,
  LuActivity,
  LuUsers,
}

export const ValuesGrid = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Values"
          title="Principles guiding every digital experience we craft"
          description="Transparency, measurable outcomes, and community-first thinking are the foundations of the Cosmic Rags LTD ecosystem."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
                className="rounded-3xl border border-brand-gold/30 bg-white/85 p-6 shadow-lg dark:bg-surface-dark/85"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold">
                  {Icon ? <Icon className="text-xl" /> : null}
                </div>
                <h3 className="text-lg font-semibold text-brand-navy dark:text-white">{value.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ValuesGrid
