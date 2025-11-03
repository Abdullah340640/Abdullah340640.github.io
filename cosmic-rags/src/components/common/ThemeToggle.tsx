import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

import { useTheme } from '../../context/ThemeContext'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5" />
    )
  }

  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={`Activate ${isDark ? 'light' : 'dark'} mode`}
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-brand-gold/40 bg-white/10 text-brand-gold transition hover:bg-brand-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 dark:border-brand-gold/60 dark:bg-brand-navy/60"
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="text-xl"
        >
          {isDark ? <LuSun /> : <LuMoon />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}

export default ThemeToggle
