import type { Product } from '../types'

export const products: Product[] = [
  {
    id: 'stellar-brand-toolkit',
    name: 'Stellar Brand Toolkit',
    tagline: 'Complete branding system for modern creators',
    description:
      'A premium collection of brand strategy frameworks, editable guidelines, typography systems, and launch templates built to help you ship a high-converting visual identity in days, not weeks.',
    category: 'Templates',
    subCategory: 'Branding',
    price: 129,
    originalPrice: 189,
    currency: 'GBP',
    rating: 4.9,
    reviews: 218,
    downloads: 1240,
    createdAt: '2024-02-14',
    popularity: 97,
    formats: ['Figma', 'Adobe XD', 'Canva'],
    tags: ['branding', 'strategy', 'identity', 'templates'],
    features: [
      '45 editable brand guideline slides',
      'Complete typography and colour system library',
      'Launch roadmap & campaign checklist',
      'Bonus: 15 social announcement templates',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    relatedProductIds: ['creator-automation-suite', 'omniverse-ux-kit', 'quantum-launch-framework'],
    bestFor: ['Brand strategists', 'Boutique agencies', 'Startups'],
    languages: ['English'],
  },
  {
    id: 'creator-automation-suite',
    name: 'Creator Automation Suite',
    tagline: 'Notion + Airtable workflows for scalable content ops',
    description:
      'Automate your multi-platform publishing pipeline with interconnected Notion, Airtable, and Zapier templates. Includes analytics dashboards, asset libraries, and campaign retros.',
    category: 'Software Tools',
    price: 89,
    currency: 'GBP',
    rating: 4.8,
    reviews: 184,
    downloads: 980,
    createdAt: '2024-05-09',
    popularity: 94,
    formats: ['Notion', 'Airtable', 'Zapier'],
    tags: ['automation', 'content strategy', 'operations'],
    features: [
      '30+ automation recipes ready to deploy',
      'Cross-platform publishing calendar',
      'Central asset DAM with usage rights tracking',
      'Performance dashboard with ROI snapshots',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=800&q=80',
    relatedProductIds: ['stellar-brand-toolkit', 'luma-podcast-lab', 'apollo-membership-studio'],
    bestFor: ['Content teams', 'Solo creators', 'Marketing managers'],
    languages: ['English', 'Spanish'],
  },
  {
    id: 'omniverse-ux-kit',
    name: 'OmniVerse UX Kit',
    tagline: 'Enterprise-grade UI system for SaaS dashboards',
    description:
      'A modular design system featuring 120+ responsive components, prototyping flows, dark/light variants, and accessibility-ready templates for SaaS dashboards across web and mobile.',
    category: 'Digital Assets',
    subCategory: 'UI Kits',
    price: 149,
    currency: 'GBP',
    rating: 5,
    reviews: 142,
    downloads: 720,
    createdAt: '2023-11-18',
    popularity: 91,
    formats: ['Figma', 'Sketch'],
    tags: ['ui kit', 'design system', 'sass'],
    features: [
      '120+ atomic components with auto layout',
      '8 dashboard templates with Framer flows',
      'WCAG AA compliant colour tokens',
      'Interactive prototypes & motion guidelines',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523475472560-0889c9a98485?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483478553237-402e4e21c84f?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=800&q=80',
    relatedProductIds: ['stellar-brand-toolkit', 'quantum-launch-framework'],
    bestFor: ['Product designers', 'SaaS founders', 'UI engineers'],
    languages: ['English'],
  },
  {
    id: 'quantum-launch-framework',
    name: 'Quantum Launch Framework',
    tagline: 'Data-backed launch playbook for digital releases',
    description:
      'Step-by-step 6-week launch roadmap featuring channel playbooks, KPI dashboards, pricing experimentation scripts, and high-performing copy templates tested across 500+ launches.',
    category: 'E-Books',
    price: 59,
    originalPrice: 89,
    currency: 'GBP',
    rating: 4.7,
    reviews: 201,
    downloads: 1500,
    createdAt: '2023-09-05',
    popularity: 96,
    formats: ['PDF', 'Google Sheets', 'Notion'],
    tags: ['launch', 'growth', 'playbook'],
    features: [
      'Channel-by-channel launch orchestration',
      'Financial model for pricing experimentation',
      'Copy library for ads, emails, and landing pages',
      'Post-launch debrief & optimization templates',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
    relatedProductIds: ['stellar-brand-toolkit', 'creator-automation-suite'],
    bestFor: ['Growth marketers', 'Founders', 'Agencies'],
    languages: ['English'],
  },
  {
    id: 'nebula-commerce-bundle',
    name: 'Nebula Commerce Bundle',
    tagline: 'A complete e-commerce optimisation toolkit',
    description:
      'Optimise conversion across your e-commerce ecosystem with CRO testing sheets, UX audits, email flows, and paid ads dashboards engineered for operators selling digital goods.',
    category: 'Bundles',
    price: 199,
    currency: 'GBP',
    rating: 4.8,
    reviews: 98,
    downloads: 460,
    createdAt: '2024-01-20',
    popularity: 88,
    formats: ['Notion', 'Google Sheets', 'Figma'],
    tags: ['ecommerce', 'conversion', 'automation'],
    features: [
      'CRO test repository and prioritisation matrix',
      'Email automation blueprints for digital product sales',
      'Ad creative templates with performance benchmarks',
      'E-commerce KPI cockpit with GA4 connectors',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1483478553237-402e4e21c84f?auto=format&fit=crop&w=800&q=80',
    relatedProductIds: ['creator-automation-suite', 'luma-podcast-lab'],
    bestFor: ['E-commerce leads', 'Digital product founders'],
    languages: ['English'],
  },
  {
    id: 'luma-podcast-lab',
    name: 'Luma Podcast Lab',
    tagline: 'Scripting, audio presets, and marketing kit for podcasters',
    description:
      'Launch a premium-quality podcast with ready-to-use scripting frameworks, Adobe Audition presets, guest onboarding flows, and social teaser templates.',
    category: 'Templates',
    subCategory: 'Content Production',
    price: 79,
    currency: 'GBP',
    rating: 4.6,
    reviews: 87,
    downloads: 380,
    createdAt: '2023-06-12',
    popularity: 83,
    formats: ['Google Docs', 'Adobe Audition', 'Premiere Pro'],
    tags: ['podcast', 'content', 'audio'],
    features: [
      'Episode scripting vault with 20 formats',
      'Mixing & mastering presets for broadcast audio',
      'Guest onboarding CRM and thank-you flows',
      'Social teaser templates optimised for vertical video',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80',
    relatedProductIds: ['creator-automation-suite', 'aura-creative-marketplace'],
    bestFor: ['Podcasters', 'Creative teams'],
    languages: ['English'],
  },
  {
    id: 'aura-creative-marketplace',
    name: 'Aura Creative Marketplace Pack',
    tagline: 'Launch-ready marketplace assets & licensing toolkit',
    description:
      'Everything you need to launch a digital product marketplace: vendor onboarding templates, licensing agreements, curated asset start kit, and analytics dashboards.',
    category: 'Digital Assets',
    subCategory: 'Marketplace',
    price: 249,
    currency: 'GBP',
    rating: 4.9,
    reviews: 64,
    downloads: 260,
    createdAt: '2024-04-02',
    popularity: 89,
    formats: ['Word', 'Notion', 'Excel', 'PowerPoint'],
    tags: ['marketplace', 'licensing', 'operations'],
    features: [
      'Vendor onboarding & compliance workflows',
      'Intellectual property & licensing agreements',
      'Curated starter library of 150 premium assets',
      'Analytics dashboard with GA4 + Meta Pixel guides',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80',
    relatedProductIds: ['nebula-commerce-bundle', 'quantum-launch-framework'],
    bestFor: ['Marketplace founders', 'Legal teams'],
    languages: ['English'],
  },
  {
    id: 'apollo-membership-studio',
    name: 'Apollo Membership Studio',
    tagline: 'Recurring revenue engine for community operators',
    description:
      'Design, launch, and scale a membership programme with pricing calculators, churn optimisers, onboarding sequences, and member analytics dashboards.',
    category: 'Courses',
    price: 139,
    currency: 'GBP',
    rating: 4.8,
    reviews: 112,
    downloads: 540,
    createdAt: '2024-07-29',
    popularity: 92,
    formats: ['Notion', 'Video Lessons', 'Google Sheets'],
    tags: ['membership', 'community', 'retention'],
    features: [
      '12-lesson video curriculum with workbooks',
      'Onboarding automations for member segmentation',
      'Retention dashboard & churn mitigation planner',
      'Community engagement playbook & templates',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1483478553237-402e4e21c84f?auto=format&fit=crop&w=800&q=80',
    relatedProductIds: ['creator-automation-suite', 'stellar-brand-toolkit'],
    bestFor: ['Community managers', 'Education startups'],
    languages: ['English'],
  },
]

export const getProductById = (productId: string) =>
  products.find((product) => product.id === productId)

export const getRelatedProducts = (productId: string) => {
  const product = getProductById(productId)
  if (!product) return []
  return products.filter((item) => product.relatedProductIds.includes(item.id))
}
