import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { LuArrowUp } from 'react-icons/lu'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-brand-gold p-4 text-brand-navy shadow-xl shadow-brand-gold/25 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <LuArrowUp className="text-xl" />
    </motion.button>
  )
}

export default ScrollToTop
