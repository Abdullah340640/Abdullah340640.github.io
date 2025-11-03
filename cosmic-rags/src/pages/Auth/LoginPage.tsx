import { motion } from 'framer-motion'

import Container from '../../components/common/Container'
import SEO from '../../components/common/SEO'

export const LoginPage = () => {
  return (
    <div className="pb-24">
      <SEO
        title="Login"
        description="Preview the Cosmic Rags LTD customer login experience."
        url="https://www.cosmicrags.co.uk/auth/login"
      />
      <Container className="flex min-h-[60vh] items-center justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="w-full max-w-md space-y-6 rounded-3xl border border-brand-gold/30 bg-white/85 p-8 text-center shadow-xl dark:bg-surface-dark/85"
        >
          <h1 className="text-3xl font-semibold text-brand-navy dark:text-white">Customer Login</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Secure dashboards with single sign-on and two-factor authentication are on our roadmap. For now, download access remains via email links after purchase.
          </p>
          <div className="space-y-3 text-left text-sm text-slate-600 dark:text-slate-300">
            <label className="block space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Email</span>
              <input
                disabled
                placeholder="you@company.com"
                className="h-12 w-full cursor-not-allowed rounded-xl border border-brand-gold/30 bg-white/60 px-4 text-sm text-slate-500 dark:bg-surface-dark/60"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Password</span>
              <input
                disabled
                type="password"
                placeholder="••••••••"
                className="h-12 w-full cursor-not-allowed rounded-xl border border-brand-gold/30 bg-white/60 px-4 text-sm text-slate-500 dark:bg-surface-dark/60"
              />
            </label>
            <button
              type="button"
              disabled
              className="button-primary w-full cursor-not-allowed bg-brand-gold/60"
            >
              Coming soon
            </button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default LoginPage
