import { motion } from 'framer-motion'
import { LuDownload, LuFileText, LuHeadphones, LuShieldCheck } from 'react-icons/lu'

import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import SEO from '../../components/common/SEO'

const downloads = [
  {
    id: 'dash-01',
    name: 'Stellar Brand Toolkit v2.1',
    date: 'Updated 12 Oct 2025',
    licence: 'Commercial licence',
  },
  {
    id: 'dash-02',
    name: 'Creator Automation Suite v1.5',
    date: 'Updated 5 Sep 2025',
    licence: 'Enterprise licence',
  },
]

export const DashboardPage = () => {
  return (
    <div className="space-y-12 pb-24">
      <SEO
        title="Customer Dashboard"
        description="Preview the Cosmic Rags LTD customer dashboard for managing downloads, licences, and support."
        url="https://www.cosmicrags.co.uk/dashboard"
      />
      <section className="pt-24">
        <Container>
          <SectionHeading
            eyebrow="Preview"
            title="Customer dashboard (coming soon)"
            description="A central hub for customers to manage downloads, licences, updates, and concierge support from Cosmic Rags LTD."
            align="center"
          />
        </Container>
      </section>
      <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="space-y-6 rounded-3xl border border-brand-gold/30 bg-white/85 p-8 shadow-xl dark:bg-surface-dark/85"
        >
          <h2 className="text-lg font-semibold text-brand-navy dark:text-white">
            Recent downloads
          </h2>
          <div className="space-y-4">
            {downloads.map((item) => (
              <div key={item.id} className="rounded-2xl border border-brand-gold/20 bg-white/80 p-4 text-sm text-slate-600 dark:bg-surface-dark/80 dark:text-slate-300">
                <p className="font-semibold text-brand-navy dark:text-white">{item.name}</p>
                <p>{item.date}</p>
                <p>{item.licence}</p>
                <button type="button" className="button-secondary mt-3">
                  Download latest files
                </button>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          className="space-y-6"
        >
          <div className="rounded-3xl border border-brand-gold/30 bg-white/85 p-6 shadow-xl dark:bg-surface-dark/85">
            <h3 className="text-lg font-semibold text-brand-navy dark:text-white">Dashboard highlights</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <LuDownload className="mt-1 text-brand-gold" />
                Lifetime access to every version of your purchased digital products.
              </li>
              <li className="flex items-start gap-3">
                <LuFileText className="mt-1 text-brand-gold" />
                Manage licences, client handovers, and brand usage permissions.
              </li>
              <li className="flex items-start gap-3">
                <LuShieldCheck className="mt-1 text-brand-gold" />
                View compliance documentation, audit logs, and security settings.
              </li>
              <li className="flex items-start gap-3">
                <LuHeadphones className="mt-1 text-brand-gold" />
                Raise priority support tickets and schedule strategy sessions.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-brand-gold/30 bg-white/85 p-6 text-sm text-slate-600 shadow-xl dark:bg-surface-dark/85 dark:text-slate-300">
            <h3 className="text-lg font-semibold text-brand-navy dark:text-white">Access roadmap</h3>
            <p className="mt-2">
              Customer accounts and dashboards are planned for launch in Q1 2026. Features include single sign-on, two-factor authentication, team seat management, and direct integration with automation suites.
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default DashboardPage
