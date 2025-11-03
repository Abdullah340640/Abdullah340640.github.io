import { motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { LuArrowUpRight, LuPlay } from 'react-icons/lu'

import { products } from '../../data/products'
import { formatCurrency, formatDate } from '../../utils/format'
import Container from '../common/Container'

const featureBullets = [
  'Premium digital assets curated for conversion',
  'Trusted by 1,000+ global creators and teams',
  '24/7 strategic support and concierge onboarding',
]

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])

  const heroProduct = useMemo(() => products[0], [])

  return (
    <section className="relative overflow-hidden pt-24" ref={ref}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-brand-gold/20 blur-[180px] dark:bg-brand-gold/10" />
        <motion.div
          style={{ y }}
          className="absolute -right-24 top-24 h-[520px] w-[520px] rounded-full bg-brand-navy/10 blur-[160px] dark:bg-brand-navy/40"
        />
      </div>
      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        <div className="space-y-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-brand-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-brand-gold"
          >
            Digital Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl font-bold leading-tight text-brand-navy dark:text-white sm:text-5xl lg:text-6xl"
          >
            Empowering Creativity Through Digital Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            Cosmic Rags LTD delivers premium eBooks, templates, software tools, and digital assets designed to accelerate growth for modern creators, agencies, and digital-first teams.
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="grid gap-3 text-sm text-slate-600 dark:text-slate-300"
          >
            {featureBullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-gold" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/products" className="button-primary">
              <span>Browse Products</span>
              <LuArrowUpRight className="text-lg" />
            </Link>
            <a
              href="#about"
              className="button-secondary"
            >
              <LuPlay className="text-lg" />
              Watch Company Reel
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300"
          >
            <div>
              <p className="text-2xl font-semibold text-brand-navy dark:text-white">500+</p>
              <p>Digital products delivered</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-brand-navy dark:text-white">1,000+</p>
              <p>Global clients served</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-brand-navy dark:text-white">24/7</p>
              <p>Concierge support</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <div className="glass-panel relative overflow-hidden rounded-3xl border border-brand-gold/20 p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-brand-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
                Featured Release
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Updated {formatDate(heroProduct.createdAt)}</span>
            </div>
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={`${heroProduct.heroImage}&auto=format&fit=crop&w=1200&q=80`}
                  alt={heroProduct.name}
                  className="h-56 w-full rounded-2xl object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-brand-navy dark:text-white">
                  {heroProduct.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {heroProduct.tagline}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    Investment
                  </p>
                  <p className="text-2xl font-semibold text-brand-gold">
                    {formatCurrency(heroProduct.price, heroProduct.currency)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    Satisfaction
                  </p>
                  <p className="text-lg font-semibold text-brand-navy dark:text-white">
                    {heroProduct.rating} / 5.0
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
                {heroProduct.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-gold/10 px-3 py-1 text-brand-gold">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={`/products/${heroProduct.id}`}
                className="button-secondary w-full justify-center"
              >
                Explore Product Details
              </a>
            </div>
          </div>
          <motion.div
            className="absolute -right-8 -top-8 rounded-3xl border border-brand-gold/20 bg-white/80 px-4 py-3 text-sm shadow-lg dark:bg-brand-navy/80"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="font-semibold text-brand-navy dark:text-white">Live Metrics</p>
            <p className="text-xs text-slate-500 dark:text-slate-300">
              1,240 creators scaling with this toolkit.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
