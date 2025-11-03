import CountUp from 'react-countup'

import { companyStats } from '../../data/company'
import Container from '../common/Container'

export const StatsStrip = () => {
  return (
    <section className="relative py-16">
      <Container className="rounded-3xl border border-brand-gold/30 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-black px-8 py-12 text-white shadow-xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat) => (
            <div key={stat.id} className="space-y-2 text-center lg:text-left">
              <p className="text-4xl font-semibold text-brand-gold">
                <CountUp end={stat.value} duration={3} suffix={stat.suffix ?? ''} />
              </p>
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default StatsStrip
