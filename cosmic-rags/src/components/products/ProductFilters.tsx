import type { ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { LuSearch, LuX } from 'react-icons/lu'

interface ProductFiltersProps {
  categories: string[]
  query: string
  setQuery: (value: string) => void
  category: string
  setCategory: (value: string) => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  minPrice: number
  maxPrice: number
  rating: number
  setRating: (value: number) => void
  sortBy: string
  setSortBy: (value: string) => void
  suggestions: string[]
  onSelectSuggestion: (value: string) => void
  resetFilters: () => void
}

export const ProductFilters = ({
  categories,
  query,
  setQuery,
  category,
  setCategory,
  priceRange,
  setPriceRange,
  minPrice,
  maxPrice,
  rating,
  setRating,
  sortBy,
  setSortBy,
  suggestions,
  onSelectSuggestion,
  resetFilters,
}: ProductFiltersProps) => {
  const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    setPriceRange([Math.min(value, priceRange[1]), priceRange[1]])
  }

  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    setPriceRange([priceRange[0], Math.max(value, priceRange[0])])
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="rounded-3xl border border-brand-gold/30 bg-white/80 p-6 shadow-lg dark:bg-surface-dark/80"
    >
      <div className="relative">
        <label className="sr-only" htmlFor="product-search">
          Search products
        </label>
        <div className="flex items-center gap-3 rounded-2xl border border-brand-gold/30 bg-white/90 px-4 py-3 text-sm shadow-inner focus-within:border-brand-gold dark:bg-surface-dark/90">
          <LuSearch className="text-brand-gold" />
          <input
            id="product-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products, tags, or formats"
            className="flex-1 bg-transparent text-sm text-brand-navy outline-none placeholder:text-slate-500 dark:text-white"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="rounded-full bg-brand-gold/20 p-1 text-brand-gold"
              aria-label="Clear search"
            >
              <LuX className="text-sm" />
            </button>
          )}
        </div>
        {query && suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 top-16 z-30 rounded-2xl border border-brand-gold/30 bg-white/95 p-3 text-sm shadow-xl dark:bg-surface-dark/95">
            {suggestions.map((suggestion) => (
              <li key={suggestion}>
                <button
                  type="button"
                  onClick={() => onSelectSuggestion(suggestion)}
                  className="w-full rounded-xl px-3 py-2 text-left text-slate-600 transition hover:bg-brand-gold/10 hover:text-brand-gold dark:text-slate-300"
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {[ 'All', ...categories ].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
              category === cat
                ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                : 'border-transparent bg-white/40 text-slate-600 hover:border-brand-gold/40 hover:text-brand-gold dark:bg-surface-dark/60 dark:text-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="space-y-3">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Minimum price (?)
          </label>
          <input
            type="number"
            min={minPrice}
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={handleMinPriceChange}
            className="h-12 w-full rounded-xl border border-brand-gold/30 bg-white/80 px-3 text-sm outline-none transition focus:border-brand-gold dark:bg-surface-dark/80"
          />
        </div>
        <div className="space-y-3">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Maximum price (?)
          </label>
          <input
            type="number"
            min={priceRange[0]}
            max={maxPrice}
            value={priceRange[1]}
            onChange={handleMaxPriceChange}
            className="h-12 w-full rounded-xl border border-brand-gold/30 bg-white/80 px-3 text-sm outline-none transition focus:border-brand-gold dark:bg-surface-dark/80"
          />
        </div>
        <div className="space-y-3">
          <label className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Minimum rating
          </label>
          <select
            value={rating}
            onChange={(event) => setRating(Number(event.target.value))}
            className="h-12 w-full rounded-xl border border-brand-gold/30 bg-white/80 px-3 text-sm text-brand-navy outline-none transition focus:border-brand-gold dark:bg-surface-dark/80 dark:text-white"
          >
            <option value={0}>All ratings</option>
            <option value={4}>4.0 and above</option>
            <option value={4.5}>4.5 and above</option>
            <option value={4.8}>4.8 and above</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Sort by
          </label>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="ml-3 h-12 rounded-xl border border-brand-gold/30 bg-white/80 px-3 text-sm text-brand-navy outline-none transition focus:border-brand-gold dark:bg-surface-dark/80 dark:text-white"
          >
            <option value="newest">Newest arrivals</option>
            <option value="top-rated">Top rated</option>
            <option value="price-low-high">Price: low to high</option>
            <option value="price-high-low">Price: high to low</option>
            <option value="popular">Most popular</option>
          </select>
        </div>
        <button
          type="button"
          onClick={resetFilters}
          className="rounded-full border border-brand-gold/40 px-4 py-2 text-xs font-semibold text-brand-gold transition hover:bg-brand-gold/10"
        >
          Reset filters
        </button>
      </div>
    </motion.div>
  )
}

export default ProductFilters
