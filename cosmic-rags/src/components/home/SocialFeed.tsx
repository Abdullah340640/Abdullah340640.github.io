import { motion } from 'framer-motion'
import { LuInstagram, LuLinkedin } from 'react-icons/lu'

import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

const posts = [
  {
    id: 'post-01',
    platform: 'LinkedIn',
    icon: LuLinkedin,
    excerpt: 'How we helped a UK edtech team launch 12 micro products in 90 days using automation blueprints.',
    url: 'https://www.linkedin.com/company/cosmic-rags-ltd',
    date: 'Oct 2025',
  },
  {
    id: 'post-02',
    platform: 'Instagram',
    icon: LuInstagram,
    excerpt: 'Swipe through our UI animations from the OmniVerse UX Kit, now with dark mode tokens.',
    url: 'https://www.instagram.com',
    date: 'Sep 2025',
  },
  {
    id: 'post-03',
    platform: 'LinkedIn',
    icon: LuLinkedin,
    excerpt: 'Behind the scenes of our data-driven launch framework and how to set up GA4 dashboards in 15 minutes.',
    url: 'https://www.linkedin.com/company/cosmic-rags-ltd',
    date: 'Aug 2025',
  },
]

export const SocialFeed = () => {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Community"
          title="Join the Cosmic Rags LTD creator feed"
          description="We share behind-the-scenes product drops, automation tips, and creator stories across LinkedIn and Instagram."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => {
            const Icon = post.icon
            return (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
                className="group flex h-full flex-col justify-between rounded-3xl border border-brand-gold/30 bg-white/85 p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-surface-dark/85"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-brand-gold">
                    <Icon className="text-2xl" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                      {post.platform}
                    </span>
                  </div>
                  <p className="text-sm text-brand-navy dark:text-white">{post.excerpt}</p>
                </div>
                <span className="mt-4 text-xs text-slate-500 transition group-hover:text-brand-gold dark:text-slate-400">
                  {post.date} - Follow for more insights {'->'}
                </span>
              </motion.a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default SocialFeed
