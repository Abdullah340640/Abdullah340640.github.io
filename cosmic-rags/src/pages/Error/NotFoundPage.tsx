import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import PageTransition from '../../components/common/PageTransition'

export const NotFoundPage = () => {
  return (
    <PageTransition className="flex flex-col items-center justify-center text-center">
      <motion.div
        className="relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-dashed border-brand-gold/60 bg-brand-gold/10">
          <motion.span
            className="text-5xl font-extrabold text-brand-gold"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            404
          </motion.span>
        </div>
        <div className="absolute inset-0 -z-10 blur-3xl">
          <div className="h-full w-full rounded-full bg-brand-gold/20" />
        </div>
      </motion.div>
      <h1 className="mt-8 text-3xl font-semibold text-brand-navy dark:text-white">
        Lost in the cosmos
      </h1>
      <p className="mt-4 max-w-xl text-sm text-slate-600 dark:text-slate-300">
        The page you are looking for has drifted into another galaxy. Let?s take
        you back to our creative universe.
      </p>
      <Link to="/" className="button-primary mt-8">
        Return Home
      </Link>
    </PageTransition>
  )
}

export default NotFoundPage
