import { motion } from 'framer-motion'
import { LuEye, LuStar } from 'react-icons/lu'
import { Link } from 'react-router-dom'

import type { Product } from '../../types'
import { formatCurrency } from '../../utils/format'

interface ProductCardProps {
  product: Product
  onQuickView?: (product: Product) => void
  layout?: 'grid' | 'list'
}

export const ProductCard = ({ product, onQuickView, layout = 'grid' }: ProductCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-gold/20 bg-white/80 shadow-lg transition dark:bg-surface-dark/80"
    >
      <div className="relative overflow-hidden">
        <img
          src={`${product.thumbnail}&auto=format&fit=crop&w=1000&q=80`}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-brand-gold/90 px-3 py-1 text-xs font-semibold text-brand-navy">
            {product.category}
          </span>
          {product.originalPrice && product.originalPrice > product.price ? (
            <span className="rounded-full bg-brand-navy/90 px-3 py-1 text-xs font-semibold text-white">
              Save {formatCurrency(product.originalPrice - product.price, product.currency)}
            </span>
          ) : null}
        </div>
        <motion.button
          type="button"
          onClick={() => onQuickView?.(product)}
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-brand-navy shadow-lg transition hover:bg-brand-gold/90 hover:text-brand-navy"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <LuEye className="text-sm" />
          Quick view
        </motion.button>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-brand-navy dark:text-white">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {product.tagline}
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-brand-gold">
            <LuStar className="text-base" />
            <span>{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {product.description.slice(0, layout === 'list' ? 180 : 120)}...
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Investment
            </p>
            <p className="text-xl font-semibold text-brand-navy dark:text-white">
              {formatCurrency(product.price, product.currency)}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
            {product.formats.slice(0, 3).map((format) => (
              <span key={`${product.id}-${format}`} className="rounded-full bg-brand-gold/15 px-3 py-1 text-brand-gold">
                {format}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <Link
            to={`/products/${product.id}`}
            className="text-sm font-semibold text-brand-gold transition hover:text-brand-gold/80"
          >
            View details
          </Link>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {product.downloads}+ downloads
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default ProductCard
