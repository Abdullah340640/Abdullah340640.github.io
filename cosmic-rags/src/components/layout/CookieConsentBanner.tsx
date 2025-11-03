import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const STORAGE_KEY = 'cosmic-cookie-consent'

export const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      setVisible(true)
    }
    const handleOpen = () => setVisible(true)
    window.addEventListener('open-cookie-settings', handleOpen)
    return () => window.removeEventListener('open-cookie-settings', handleOpen)
  }, [])

  const handleAccept = () => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    window.localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed inset-x-4 bottom-6 z-50 rounded-3xl border border-brand-gold/30 bg-white/95 p-6 shadow-2xl dark:bg-surface-dark/90"
    >
      <div className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-brand-navy dark:text-white">Cookies and analytics</p>
          <p>
            We use essential cookies to run our site and optional analytics to understand performance. You can change your choice at any time via Cookie Settings.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleDecline}
            className="button-secondary"
          >
            Decline non-essential
          </button>
          <button type="button" onClick={handleAccept} className="button-primary">
            Accept all
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default CookieConsentBanner
