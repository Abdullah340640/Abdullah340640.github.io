import { Disclosure } from '@headlessui/react'
import { motion } from 'framer-motion'
import { LuChevronDown } from 'react-icons/lu'

import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import SEO from '../../components/common/SEO'
import { faqs } from '../../data/faqs'

const categories = ['All', ...Array.from(new Set(faqs.map((faq) => faq.category)))]

export const FAQPage = () => {
  return (
    <div className="space-y-12 pb-24">
      <SEO
        title="FAQ"
        description="Find answers to common questions about Cosmic Rags LTD digital product delivery, licensing, support, and security."
        url="https://www.cosmicrags.co.uk/faq"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />
      <section className="pt-24">
        <Container>
          <SectionHeading
            eyebrow="Support"
            title="Answers for a seamless digital experience"
            description="Everything you need to know about downloads, updates, licensing, support, and payment security at Cosmic Rags LTD."
            align="center"
          />
        </Container>
      </section>
      <Container className="space-y-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <a
              key={category}
              href={`#faq-${category.toLowerCase()}`}
              className="rounded-full border border-brand-gold/30 px-4 py-2 text-xs font-semibold text-brand-gold transition hover:bg-brand-gold/10"
            >
              {category}
            </a>
          ))}
        </div>
        {categories.map((category) => (
          <motion.div
            key={category}
            id={`faq-${category.toLowerCase()}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
              {category}
            </h3>
            <div className="rounded-3xl border border-brand-gold/30 bg-white/85 p-4 shadow-lg dark:bg-surface-dark/85">
              {faqs
                .filter((faq) => category === 'All' || faq.category === category)
                .map((faq) => (
                  <Disclosure key={faq.id} as="div" className="border-b border-brand-gold/20 last:border-none">
                    {({ open }) => (
                      <div>
                        <Disclosure.Button className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-brand-navy transition hover:text-brand-gold dark:text-white">
                          <span>{faq.question}</span>
                          <LuChevronDown
                            className={`text-lg transition-transform ${open ? 'rotate-180 text-brand-gold' : ''}`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-300">
                          {faq.answer}
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                ))}
            </div>
          </motion.div>
        ))}
      </Container>
    </div>
  )
}

export default FAQPage
