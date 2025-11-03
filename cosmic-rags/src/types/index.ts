export type ProductCategory =
  | 'E-Books'
  | 'Templates'
  | 'Software Tools'
  | 'Digital Assets'
  | 'Courses'
  | 'Bundles'

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  category: ProductCategory
  subCategory?: string
  price: number
  originalPrice?: number
  currency: 'GBP' | 'USD' | 'EUR'
  rating: number
  reviews: number
  downloads: number
  createdAt: string
  popularity: number
  formats: string[]
  tags: string[]
  features: string[]
  heroImage: string
  gallery: string[]
  thumbnail: string
  relatedProductIds: string[]
  bestFor: string[]
  languages?: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  rating: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  author: string
  category: string
  readTimeMinutes: number
  publishedAt: string
  heroImage: string
  tags: string[]
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
}

export interface ValueCard {
  id: string
  title: string
  description: string
  icon: string
}

export interface Stat {
  id: string
  label: string
  value: number
  suffix?: string
}
