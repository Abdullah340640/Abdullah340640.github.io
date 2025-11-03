import type { Stat, TimelineEvent, ValueCard } from '../types'

export const companyStats: Stat[] = [
  { id: 'catalogue', label: 'Digital Products Shipped', value: 500, suffix: '+' },
  { id: 'customers', label: 'Happy Customers Worldwide', value: 1000, suffix: '+' },
  { id: 'support', label: 'Support Availability', value: 24, suffix: '/7' },
  { id: 'platforms', label: 'Selling Platforms', value: 12, suffix: '+' },
]

export const timeline: TimelineEvent[] = [
  {
    id: 'timeline-2019',
    year: '2019',
    title: 'Cosmic Rags LTD founded in London',
    description:
      'Started as a boutique collective helping creators monetise templates and eBooks across emerging marketplaces.',
  },
  {
    id: 'timeline-2021',
    year: '2021',
    title: 'Global distribution network established',
    description:
      'Partnered with top-tier platforms including Gumroad, AppSumo, Creative Market, and Envato to expand reach.',
  },
  {
    id: 'timeline-2023',
    year: '2023',
    title: 'Automation & analytics division launched',
    description:
      'Introduced data-backed launch frameworks, GA4 dashboards, and performance consulting for SaaS operators.',
  },
  {
    id: 'timeline-2024',
    year: '2024',
    title: '24/7 concierge support + AI assist',
    description:
      'Rolled out global support coverage, multilingual onboarding, and AI-powered asset recommendation engine.',
  },
]

export const values: ValueCard[] = [
  {
    id: 'value-innovation',
    title: 'Innovation Obsession',
    description:
      'We prototype relentlessly and ship future-facing digital experiences that compound customer impact.',
    icon: 'LuRocket',
  },
  {
    id: 'value-integrity',
    title: 'Integrity & Trust',
    description:
      'Transparent licensing, GDPR-compliant processes, and ethical data practices across every platform.',
    icon: 'LuShieldCheck',
  },
  {
    id: 'value-impact',
    title: 'Measurable Impact',
    description:
      'We measure success by the growth of our customers - ROI dashboards and quarterly success sessions come standard.',
    icon: 'LuActivity',
  },
  {
    id: 'value-community',
    title: 'Community First',
    description:
      'From creator spotlights to co-built assets, our ecosystem is powered by shared knowledge and support.',
    icon: 'LuUsers',
  },
]

export const founder = {
  name: 'Riya Shah',
  title: 'Founder & Managing Director',
  bio: 'Riya leads Cosmic Rags LTD with a decade of experience in digital product strategy, e-commerce monetisation, and operational excellence. She has supported more than 400 creators and brands in launching profitable digital catalogues.',
  image:
    'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=640&q=80',
  signature: 'Riya Shah',
}
