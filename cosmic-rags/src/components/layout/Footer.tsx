import { motion } from 'framer-motion'
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
} from 'react-icons/lu'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Resources', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/legal/privacy-policy' },
  { label: 'Terms of Service', to: '/legal/terms-of-service' },
  { label: 'Refund Policy', to: '/legal/refund-policy' },
  { label: 'Disclaimer', to: '/legal/disclaimer' },
  { label: 'Cookie Policy', to: '/legal/cookie-policy' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: LuFacebook,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: LuInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/cosmic-rags-ltd',
    icon: LuLinkedin,
  },
]

export const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-gradient-to-b from-brand-navy via-brand-navy/95 via-60% to-black text-white">
      <div className="absolute inset-x-0 -top-[3px] h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-gold">
                Cosmic Rags LTD
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Empowering Creativity Through Digital Innovation
              </h3>
            </div>
            <p className="text-sm text-slate-300">
              Cosmic Rags LTD curates high-impact digital products, templates, and software tools to accelerate growth for creators, entrepreneurs, and modern businesses globally.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:-translate-y-1 hover:border-brand-gold/80 hover:text-brand-gold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-xl" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
              Quick Links
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="transition hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
              Legal
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition hover:text-brand-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-brand-gold">
                  <LuMapPin />
                </span>
                <p>
                  Office 15280, 182?184 High Street North, East Ham, London,
                  United Kingdom, E6 2JA
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-brand-gold">
                  <LuPhone />
                </span>
                <a
                  href="tel:+447400706281"
                  className="transition hover:text-brand-gold"
                >
                  +44 7400 706281
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-brand-gold">
                  <LuMail />
                </span>
                <a
                  href="mailto:info.cosmicragsltd@mail.com"
                  className="break-all transition hover:text-brand-gold"
                >
                  info.cosmicragsltd@mail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 md:flex-row">
          <p>
            ? {new Date().getFullYear()} Cosmic Rags LTD. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/legal/privacy-policy" className="hover:text-brand-gold">
              Privacy
            </Link>
            <Link to="/legal/terms-of-service" className="hover:text-brand-gold">
              Terms
            </Link>
            <Link to="/legal/cookie-policy" className="hover:text-brand-gold">
              Cookies
            </Link>
            <button
              type="button"
              onClick={() => {
                window.localStorage.removeItem('cosmic-cookie-consent')
                window.dispatchEvent(new Event('open-cookie-settings'))
              }}
              className="text-left text-brand-gold transition hover:text-brand-gold/80"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
