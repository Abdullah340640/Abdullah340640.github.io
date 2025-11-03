import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { LuDownload, LuStar } from 'react-icons/lu'
import { Link } from 'react-router-dom'

import type { Product } from '../../types'
import { formatCurrency } from '../../utils/format'

interface ProductQuickViewProps {
  product: Product | null
  open: boolean
  onClose: () => void
}

export const ProductQuickView = ({ product, open, onClose }: ProductQuickViewProps) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="translate-y-10 opacity-0"
              enterTo="translate-y-0 opacity-100"
              leave="ease-in duration-150"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="translate-y-4 opacity-0"
            >
              <Dialog.Panel className="w-full max-w-4xl overflow-hidden rounded-3xl border border-brand-gold/30 bg-background p-8 shadow-2xl dark:bg-background-dark">
                {product ? (
                  <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
                    <div className="space-y-6">
                      <div className="overflow-hidden rounded-3xl">
                        <img
                          src={`${product.heroImage}&auto=format&fit=crop&w=1600&q=80`}
                          alt={product.name}
                          className="h-72 w-full object-cover"
                        />
                      </div>
                      <div>
                        <Dialog.Title className="text-2xl font-semibold text-brand-navy dark:text-white">
                          {product.name}
                        </Dialog.Title>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                          {product.tagline}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {product.description}
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {product.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="rounded-2xl border border-brand-gold/20 bg-white/60 p-4 text-sm text-slate-600 dark:bg-surface-dark/80 dark:text-slate-300">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 rounded-3xl border border-brand-gold/30 bg-white/70 p-6 dark:bg-surface-dark/80">
                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-semibold text-brand-navy dark:text-white">
                          {formatCurrency(product.price, product.currency)}
                        </p>
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-brand-gold">
                          <LuStar className="text-base" /> {product.rating.toFixed(1)}
                        </span>
                      </div>
                      <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                            Formats Included
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {product.formats.map((format) => (
                              <span key={format} className="rounded-full bg-brand-gold/15 px-3 py-1 text-brand-gold">
                                {format}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                            Perfect For
                          </p>
                          <ul className="mt-2 space-y-1">
                            {product.bestFor.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-2xl bg-brand-navy/90 px-4 py-3 text-white">
                          <p className="text-sm font-semibold">Instant Download</p>
                          <p className="flex items-center gap-2 text-xs text-white/70">
                            <LuDownload /> {product.downloads}+ teams have implemented this pack.
                          </p>
                        </div>
                      </div>
                      <Link
                        to={`/products/${product.id}`}
                        className="button-primary w-full justify-center text-center"
                      >
                        View Full Product Page
                      </Link>
                    </div>
                  </div>
                ) : null}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ProductQuickView
