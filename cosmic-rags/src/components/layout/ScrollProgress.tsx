import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 120)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-brand-gold via-brand-gold/80 to-brand-navy"
      style={{ scaleX, opacity: visible ? 1 : 0 }}
    />
  )
}

export default ScrollProgress
