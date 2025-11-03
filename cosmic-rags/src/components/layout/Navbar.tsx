import { Dialog, Transition } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  LuBookOpen,
  LuChevronDown,
  LuMenu,
  LuX,
} from 'react-icons/lu'

import ThemeToggle from '../common/ThemeToggle'

interface NavItem {
  label: string
  path: string
  description?: string
  children?: Array<{
    label: string
    path: string
    description?: string
  }>
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Products',
    path: '/products',
    description: 'Browse templates, eBooks, and digital assets',
    children: [
      { label: 'All Products', path: '/products' },
      { label: 'Latest Releases', path: '/products?sort=newest' },
      { label: 'Top Rated', path: '/products?sort=top-rated' },
    ],
  },
  {
    label: 'About',
    path: '/about',
    description: 'Learn about our story and mission',
  },
  {
    label: 'Resources',
    path: '/blog',
    description: 'Guides, tutorials, and industry insights',
    children: [
      { label: 'Blog & Resources', path: '/blog' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Legal Center', path: '/legal/privacy-policy' },
    ],
  },
  {
    label: 'Contact',
    path: '/contact',
    description: 'Get in touch with our digital experts',
  },
]

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'text-brand-gold'
      : 'text-slate-600 hover:text-brand-gold dark:text-slate-300'
  }`

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const renderedNavItems = useMemo(() => NAV_ITEMS, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow duration-300 ${
        isScrolled
          ? 'shadow-2xl shadow-brand-navy/10 backdrop-blur-md'
          : 'shadow-none'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <NavLink to="/" className="flex items-center gap-3">
          <motion.div
            className="flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-navy text-brand-gold shadow-glow"
            whileHover={{ rotate: -4 }}
          >
            <LuBookOpen className="text-2xl" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
              Cosmic Rags LTD
            </span>
            <span className="text-base font-medium text-slate-600 dark:text-slate-300">
              Digital Innovation Studio
            </span>
          </div>
        </NavLink>

        <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
          {renderedNavItems.map((item) => (
            <div key={item.label} className="relative">
              <NavLink
                to={item.path}
                className={navLinkClass}
                onMouseEnter={() => setActiveDropdown(item.children ? item.label : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>{item.label}</span>
                {item.children && <LuChevronDown className="text-base" />}
              </NavLink>

              {item.children && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute left-0 top-12 min-w-[240px] rounded-2xl border border-white/10 bg-white/95 p-4 shadow-xl dark:bg-surface-dark/95"
                    >
                      <div className="flex flex-col gap-2">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.path}
                            className={({ isActive }) =>
                              `group rounded-xl p-3 transition hover:bg-brand-gold/10 ${
                                isActive ? 'text-brand-gold' : 'text-slate-600 dark:text-slate-200'
                              }`
                            }
                          >
                            <p className="text-sm font-semibold">{child.label}</p>
                            {child.description && (
                              <p className="text-xs text-slate-500 transition group-hover:text-slate-600 dark:text-slate-400 dark:group-hover:text-slate-300">
                                {child.description}
                              </p>
                            )}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <NavLink to="/products" className="button-primary">
            <span>Browse Products</span>
          </NavLink>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-gold/40 bg-white/10 text-brand-gold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 dark:border-brand-gold/60 dark:bg-brand-navy/70"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <LuMenu className="text-2xl" />
          </button>
        </div>

        <Transition show={mobileOpen} as={Fragment}>
          <Dialog onClose={setMobileOpen} className="relative z-50 lg:hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm" />
            </Transition.Child>

            <div className="fixed inset-0 flex justify-end">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-out duration-200"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in duration-150"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="flex w-full max-w-sm flex-col gap-6 overflow-y-auto bg-background p-6 shadow-2xl dark:bg-background-dark">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-gold">
                        Cosmic Rags LTD
                      </p>
                      <p className="text-xs text-slate-500">
                        Empowering creativity through digital innovation.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-full border border-brand-gold/40 p-2 text-brand-gold"
                      aria-label="Close menu"
                    >
                      <LuX className="text-xl" />
                    </button>
                  </div>

                  <div className="flex flex-col gap-4">
                    {renderedNavItems.map((item) => (
                      <div key={`mobile-${item.label}`} className="flex flex-col gap-2">
                        <NavLink to={item.path} className="text-lg font-semibold text-brand-navy dark:text-white">
                          {item.label}
                        </NavLink>
                        {item.children && (
                          <div className="ml-4 border-l border-brand-gold/30 pl-4">
                            {item.children.map((child) => (
                              <NavLink
                                key={`mobile-sub-${child.label}`}
                                to={child.path}
                                className="mt-2 block text-sm text-slate-600 transition hover:text-brand-gold dark:text-slate-400"
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    <NavLink to="/products" className="button-primary w-full justify-center">
                      Browse Products
                    </NavLink>
                    <div className="rounded-2xl border border-brand-gold/30 p-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      <p className="font-semibold text-brand-gold">
                        Office 15280, 182?184 High Street North, London E6 2JA
                      </p>
                      <p className="mt-2">
                        Call us: <a href="tel:+447400706281" className="text-brand-gold">+44 7400 706281</a>
                      </p>
                      <p>
                        Email: <a href="mailto:info.cosmicragsltd@mail.com" className="text-brand-gold">info.cosmicragsltd@mail.com</a>
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
      <motion.div
        layout
        className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"
      />
    </header>
  )
}

export default Navbar
