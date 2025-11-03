import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import NewsletterSection from '../../components/shared/NewsletterSection'
import SEO from '../../components/common/SEO'
import { blogPosts } from '../../data/blogPosts'
import { formatDate } from '../../utils/format'

const categories = ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))]

export const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = useMemo(
    () =>
      blogPosts.filter((post) => activeCategory === 'All' || post.category === activeCategory),
    [activeCategory],
  )

  return (
    <div className="space-y-12 pb-24">
      <SEO
        title="Blog & Resources"
        description="Stay ahead with Cosmic Rags LTD insights on digital products, automation, analytics, and creative commerce."
        url="https://www.cosmicrags.co.uk/blog"
      />
      <section className="pt-24">
        <Container>
          <SectionHeading
            eyebrow="Resources"
            title="Strategies, playbooks, and insights for digital creators"
            description="Explore deep dives on selling digital products, building automation workflows, and scaling creative commerce with data-backed decisions."
            align="center"
          />
        </Container>
      </section>
      <Container className="space-y-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                activeCategory === category
                  ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                  : 'border-transparent bg-white/60 text-slate-600 hover:border-brand-gold/40 hover:text-brand-gold dark:bg-surface-dark/70 dark:text-slate-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-gold/30 bg-white/85 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-surface-dark/85"
            >
              <img
                src={`${post.heroImage}&auto=format&fit=crop&w=1200&q=80`}
                alt={post.title}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col gap-4 p-6 text-sm text-slate-600 dark:text-slate-300">
                <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold text-brand-navy dark:text-white">
                  {post.title}
                </h3>
                <p>{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{post.author}</span>
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>{post.readTimeMinutes} min read</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
      <NewsletterSection />
    </div>
  )
}

export default BlogPage
