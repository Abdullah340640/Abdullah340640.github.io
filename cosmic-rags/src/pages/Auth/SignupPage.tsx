import { motion } from 'framer-motion'

import Container from '../../components/common/Container'
import SEO from '../../components/common/SEO'

export const SignupPage = () => {
  return (
    <div className="pb-24">
      <SEO
        title="Create Account"
        description="Preview the upcoming Cosmic Rags LTD account creation experience."
        url="https://www.cosmicrags.co.uk/auth/signup"
      />
      <Container className="flex min-h-[60vh] items-center justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="w-full max-w-md space-y-6 rounded-3xl border border-brand-gold/30 bg-white/85 p-8 text-center shadow-xl dark:bg-surface-dark/85"
        >
          <h1 className="text-3xl font-semibold text-brand-navy dark:text-white">Create an Account</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Self-service accounts are in development. Soon you will be able to manage licences, invite team seats, and sync automation workspaces directly from your dashboard.
          </p>
          <div className="rounded-2xl border border-dashed border-brand-gold/30 p-4 text-sm text-slate-600 dark:text-slate-300">
            <p className="font-semibold text-brand-navy dark:text-white">Roadmap snapshot</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Invite-only beta in December 2025.</li>
              <li>Team seat billing and permissions.</li>
              <li>SSO with Microsoft 365 and Google Workspace.</li>
            </ul>
          </div>
          <button type="button" disabled className="button-primary w-full cursor-not-allowed bg-brand-gold/60">
            Notify me at launch
          </button>
        </motion.div>
      </Container>
    </div>
  )
}

export default SignupPage
