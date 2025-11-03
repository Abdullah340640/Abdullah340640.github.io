import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { LuMail, LuMapPin, LuPhone, LuSend } from 'react-icons/lu'

import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import SEO from '../../components/common/SEO'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export const ContactPage = () => {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitted')
    setFormData(initialForm)
    window.setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <div className="space-y-12 pb-24">
      <SEO
        title="Contact"
        description="Reach the Cosmic Rags LTD team for product enquiries, enterprise licensing, or partnership opportunities."
        url="https://www.cosmicrags.co.uk/contact"
      />
      <section className="pt-24">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build your next digital breakthrough"
            description="Our London-based specialists are available around the clock to help you implement premium digital products, automation systems, and analytics."
            align="center"
          />
        </Container>
      </section>
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="space-y-6 rounded-3xl border border-brand-gold/30 bg-white/85 p-8 shadow-xl dark:bg-surface-dark/85"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {['name', 'email', 'subject'].map((field) => (
              <label key={field} className="group space-y-2 text-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {field === 'name' && 'Full Name'}
                  {field === 'email' && 'Email Address'}
                  {field === 'subject' && 'Subject'}
                </span>
                <div className="relative">
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    required
                    value={formData[field as keyof typeof formData]}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, [field]: event.target.value }))
                    }
                    className="h-12 w-full rounded-xl border border-brand-gold/40 bg-white/90 px-4 text-sm text-brand-navy outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/40 dark:bg-surface-dark/90 dark:text-white"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition group-focus-within:border-brand-gold/50" />
                </div>
              </label>
            ))}
          </div>
          <label className="group space-y-2 text-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Message
            </span>
            <div className="relative">
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full rounded-xl border border-brand-gold/40 bg-white/90 px-4 py-3 text-sm text-brand-navy outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/40 dark:bg-surface-dark/90 dark:text-white"
              />
              <span className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition group-focus-within:border-brand-gold/50" />
            </div>
          </label>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="button-primary flex items-center justify-center gap-2"
          >
            Send Message
            <LuSend />
          </motion.button>
          {status === 'submitted' && (
            <p className="rounded-xl bg-brand-gold/15 px-4 py-2 text-xs text-brand-gold">
              Thank you! Our support team will respond within 24 hours.
            </p>
          )}
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Protected by reCAPTCHA (coming soon). By submitting, you agree to our Privacy Policy and Terms of Service.
          </p>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          className="space-y-6"
        >
          <div className="rounded-3xl border border-brand-gold/30 bg-white/85 p-6 shadow-xl dark:bg-surface-dark/85">
            <h3 className="text-lg font-semibold text-brand-navy dark:text-white">
              Contact Details
            </h3>
            <div className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <LuMapPin className="mt-1 text-brand-gold" />
                <span>Office 15280, 182-184 High Street North, East Ham, London, E6 2JA</span>
              </div>
              <div className="flex items-center gap-3">
                <LuPhone className="text-brand-gold" />
                <a href="tel:+447400706281" className="transition hover:text-brand-gold">
                  +44 7400 706281
                </a>
              </div>
              <div className="flex items-center gap-3">
                <LuMail className="text-brand-gold" />
                <a href="mailto:info.cosmicragsltd@mail.com" className="transition hover:text-brand-gold">
                  info.cosmicragsltd@mail.com
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-brand-gold/30 shadow-xl">
            <iframe
              title="Cosmic Rags LTD London Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19885.387334839992!2d0.039076248626796826!3d51.53753967094313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a780bc8ae3f7%3A0x636a42c1e603f638!2sHigh%20St%20N%2C%20London%20E6%202JA!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-3xl border border-brand-gold/30 bg-white/85 p-6 shadow-xl dark:bg-surface-dark/85">
            <h3 className="text-lg font-semibold text-brand-navy dark:text-white">
              Connect with us
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Follow Cosmic Rags LTD for product updates, creator resources, and live workshops across social channels.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="https://www.linkedin.com/company/cosmic-rags-ltd"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand-gold/40 px-4 py-2 text-brand-gold transition hover:bg-brand-gold/10"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand-gold/40 px-4 py-2 text-brand-gold transition hover:bg-brand-gold/10"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand-gold/40 px-4 py-2 text-brand-gold transition hover:bg-brand-gold/10"
              >
                Facebook
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default ContactPage
