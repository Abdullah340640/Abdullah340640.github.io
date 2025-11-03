import { motion } from 'framer-motion'
import clsx from 'clsx'

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export const PageTransition = ({ children, className }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={clsx('mx-auto w-full max-w-7xl px-6 pb-20 pt-12', className)}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
