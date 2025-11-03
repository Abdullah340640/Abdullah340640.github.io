import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

import ProductFilters from '../../components/products/ProductFilters'
import ProductCard from '../../components/shared/ProductCard'
import ProductQuickView from '../../components/shared/ProductQuickView'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import SEO from '../../components/common/SEO'
import { products } from '../../data/products'
import type { Product } from '../../types'
import { formatCurrency } from '../../utils/format'

type SortOption = 'newest' | 'top-rated' | 'price-low-high' | 'price-high-low' | 'popular'

const getCategories = () => Array.from(new Set(products.map((item) => item.category)))

export const ProductsPage = () => {
  const categories = useMemo(getCategories, [])
  const prices = useMemo(() => products.map((product) => product.price), [])
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('All')
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice])
  const [rating, setRating] = useState(0)
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [quickViewOpen, setQuickViewOpen] = useState(false)

  const suggestions = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    const matches = products
      .filter((product) =>
        [product.name, product.tagline, ...product.tags, ...product.formats]
          .some((value) => value.toLowerCase().includes(q)),
      )
      .map((product) => product.name)
    return Array.from(new Set(matches)).slice(0, 5)
  }, [query])

  const filteredProducts = useMemo(() => {
    const q = query.toLowerCase()
    return products
      .filter((product) => {
        const matchesQuery =
          !q ||
          product.name.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q) ||
          product.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          product.formats.some((format) => format.toLowerCase().includes(q))

        const matchesCategory = category === 'All' || product.category === category
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
        const matchesRating = rating === 0 || product.rating >= rating

        return matchesQuery && matchesCategory && matchesPrice && matchesRating
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'top-rated':
            return b.rating - a.rating
          case 'price-low-high':
            return a.price - b.price
          case 'price-high-low':
            return b.price - a.price
          case 'popular':
            return b.popularity - a.popularity
          case 'newest':
          default:
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        }
      })
  }, [category, priceRange, query, rating, sortBy])

  const handleSelectSuggestion = (value: string) => {
    setQuery(value)
  }

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product)
    setQuickViewOpen(true)
  }

  const resetFilters = () => {
    setQuery('')
    setCategory('All')
    setPriceRange([minPrice, maxPrice])
    setRating(0)
    setSortBy('newest')
  }

  const productStructuredData = filteredProducts.slice(0, 8).map((product) => ({
    '@type': 'Product',
    name: product.name,
    description: product.tagline,
    sku: product.id,
    mpn: product.id,
    offers: {
      '@type': 'Offer',
      priceCurrency: product.currency,
      price: product.price,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  }))

  return (
    <div className="space-y-12 pb-24">
      <SEO
        title="Digital Products Catalogue"
        description="Browse Cosmic Rags LTD's premium catalogue of eBooks, templates, digital assets, and automation tools crafted for creators and teams."
        url="https://www.cosmicrags.co.uk/products"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: productStructuredData,
        }}
      />
      <section className="pt-24">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="Explore our conversion-focused digital catalogue"
            description="Filter by category, price, rating, and popularity to discover the exact playbooks and systems you need to scale."
            align="center"
          />
        </Container>
      </section>
      <Container className="space-y-8">
        <ProductFilters
          categories={categories}
          query={query}
          setQuery={setQuery}
          category={category}
          setCategory={setCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minPrice={minPrice}
          maxPrice={maxPrice}
          rating={rating}
          setRating={setRating}
          sortBy={sortBy}
          setSortBy={(value) => setSortBy(value as SortOption)}
          suggestions={suggestions}
          onSelectSuggestion={handleSelectSuggestion}
          resetFilters={resetFilters}
        />
        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
          <p>
            Showing <span className="font-semibold text-brand-navy dark:text-white">{filteredProducts.length}</span> products
          </p>
          <p>
            Price range: {formatCurrency(priceRange[0], 'GBP')} - {formatCurrency(priceRange[1], 'GBP')}
          </p>
        </div>
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} layout>
              <ProductCard product={product} onQuickView={handleQuickView} />
            </motion.div>
          ))}
        </motion.div>
        {filteredProducts.length === 0 && (
          <div className="rounded-3xl border border-dashed border-brand-gold/40 bg-white/70 p-12 text-center text-sm text-slate-500 dark:bg-surface-dark/80 dark:text-slate-300">
            No products match your filters yet. Try adjusting your search or category selections.
          </div>
        )}
      </Container>

      <ProductQuickView
        product={selectedProduct}
        open={quickViewOpen}
        onClose={() => {
          setQuickViewOpen(false)
          setSelectedProduct(null)
        }}
      />
    </div>
  )
}

export default ProductsPage
