import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { LuQuote } from 'react-icons/lu'

import { testimonials } from '../../data/testimonials'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

const AUTO_PLAY_INTERVAL = 6000

export const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, AUTO_PLAY_INTERVAL)
    return () => window.clearInterval(interval)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Creators and teams scaling with Cosmic Rags LTD"
          description="Hear from leaders who implement our digital systems to supercharge launches, content operations, and customer experiences."
          align="center"
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="relative overflow-hidden rounded-3xl border border-brand-gold/30 bg-white/90 p-10 shadow-2xl dark:bg-surface-dark/90">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="space-y-6"
              >
                <LuQuote className="text-4xl text-brand-gold" />
                <p className="text-lg leading-relaxed text-brand-navy dark:text-white">
                  "{activeTestimonial.quote}"
                </p>
                <div>
                  <p className="text-base font-semibold text-brand-navy dark:text-white">
                    {activeTestimonial.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {activeTestimonial.role} - {activeTestimonial.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-navy/15" />
          </div>
          <div className="flex flex-col gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-4 rounded-3xl border px-4 py-3 text-left transition ${
                  activeIndex === index
                    ? 'border-brand-gold/70 bg-brand-gold/10'
                    : 'border-transparent hover:border-brand-gold/40 hover:bg-brand-gold/5'
                }`}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-brand-navy dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.company}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsCarousel
