import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { LuArrowRight } from 'react-icons/lu'

import Container from '../common/Container'

export const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Placeholder for integration with email marketing platform
    if (email.trim()) {
      setStatus('success')
      setEmail('')
      window.setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className="py-24">
      <Container className="relative overflow-hidden rounded-3xl border border-brand-gold/40 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-black px-8 py-16 text-white shadow-2xl">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.35),_transparent_55%)]" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-gold">
              Newsletter
            </p>
            <h3 className="text-3xl font-semibold">
              Join 12,000+ creators receiving launch strategies, templates, and private offers.
            </h3>
            <p className="text-sm text-white/70">
              Weekly digest featuring product playbooks, automation recipes, and insights from the Cosmic Rags LTD team. No spam, unsubscribe anytime.
            </p>
          </div>
          <motion.form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <label className="text-xs uppercase tracking-[0.35em] text-white/60">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white outline-none transition focus:border-brand-gold/80 focus:bg-white/15"
              />
              <motion.button
                type="submit"
                className="button-primary flex h-12 items-center justify-center gap-2 bg-brand-gold px-6 text-brand-navy"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe
                <LuArrowRight />
              </motion.button>
            </div>
            <p className="text-xs text-white/60">
              Protected by reCAPTCHA Enterprise. Read our{' '}
              <a href="/legal/privacy-policy" className="underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/legal/terms-of-service" className="underline">
                Terms
              </a>
              .
            </p>
            {status === 'success' && (
              <p className="rounded-xl bg-brand-gold/15 px-4 py-2 text-xs text-brand-gold">
                Thank you! Check your inbox to confirm your subscription.
              </p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  )
}

export default NewsletterSection
