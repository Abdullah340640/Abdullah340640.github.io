import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LuDownload, LuStar } from 'react-icons/lu'
import { motion } from 'framer-motion'

import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import ProductCard from '../../components/shared/ProductCard'
import SEO from '../../components/common/SEO'
import { getProductById, getRelatedProducts } from '../../data/products'
import { formatCurrency, formatDate } from '../../utils/format'

export const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>()
  const product = useMemo(() => (productId ? getProductById(productId) : undefined), [productId])
  const related = useMemo(() => (productId ? getRelatedProducts(productId) : []), [productId])
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  if (!product) {
    return (
      <Container className="py-24">
        <SectionHeading
          eyebrow="Product"
          title="Product not found"
          description="The product you are looking for may have been moved or is no longer available."
          align="center"
        />
      </Container>
    )
  }

  return (
    <div className="space-y-16 pb-24">
      <SEO
        title={product.name}
        description={product.tagline}
        url={`https://www.cosmicrags.co.uk/products/${product.id}`}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.description,
          sku: product.id,
          mpn: product.id,
          brand: {
            '@type': 'Organization',
            name: 'Cosmic Rags LTD',
          },
          image: product.gallery,
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
        }}
      />
      <section className="pt-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={`${product.heroImage}&auto=format&fit=crop&w=1600&q=80`}
                alt={product.name}
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {product.gallery.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setLightboxImage(`${image}&auto=format&fit=crop&w=1600&q=80`)}
                  className="overflow-hidden rounded-2xl border border-brand-gold/30"
                >
                  <img
                    src={`${image}&auto=format&fit=crop&w=800&q=80`}
                    alt={`${product.name} preview`}
                    className="h-32 w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="space-y-6 rounded-3xl border border-brand-gold/30 bg-white/85 p-8 shadow-xl dark:bg-surface-dark/85"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full bg-brand-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-gold">
                {product.category}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Last updated {formatDate(product.createdAt)}
              </span>
            </div>
            <h1 className="text-3xl font-semibold text-brand-navy dark:text-white">
              {product.name}
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {product.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2 rounded-full bg-brand-gold/15 px-3 py-1 text-brand-gold">
                <LuStar className="text-lg" /> {product.rating.toFixed(1)} ({product.reviews} reviews)
              </div>
              <div className="flex items-center gap-2 rounded-full bg-brand-gold/15 px-3 py-1 text-brand-gold">
                <LuDownload className="text-lg" /> {product.downloads}+ downloads
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Investment
              </p>
              <div className="flex items-baseline gap-3">
                <p className="text-3xl font-semibold text-brand-gold">
                  {formatCurrency(product.price, product.currency)}
                </p>
                {product.originalPrice && product.originalPrice > product.price && (
                  <p className="text-sm text-slate-500 line-through dark:text-slate-400">
                    {formatCurrency(product.originalPrice, product.currency)}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                What is included
              </p>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Formats
              </p>
              <div className="flex flex-wrap gap-2">
                {product.formats.map((format) => (
                  <span key={format} className="rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-brand-gold">
                    {format}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/contact" className="button-primary">
                Purchase & Onboarding Support
              </Link>
              <a href="mailto:info.cosmicragsltd@mail.com" className="button-secondary">
                Request Enterprise Licence
              </a>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Need customisation? Book a 30-minute strategy session and we will tailor the assets for your tech stack.
            </p>
          </motion.div>
        </Container>
      </section>

      {related.length > 0 && (
        <section>
          <Container>
            <SectionHeading
              eyebrow="You may also like"
              title="Recommended products to accelerate your growth"
              description="Customers who implemented this toolkit also unlocked these complementary systems."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <Transition show={Boolean(lightboxImage)} as={Fragment}>
        <Dialog onClose={() => setLightboxImage(null)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-md" />
          </Transition.Child>
          <div className="fixed inset-0 flex items-center justify-center p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="scale-95 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="ease-in duration-150"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-95 opacity-0"
            >
              <Dialog.Panel className="max-h-[80vh] max-w-4xl overflow-hidden rounded-3xl bg-black">
                {lightboxImage && (
                  <img src={lightboxImage} alt="Lightbox preview" className="h-full w-full object-contain" />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default ProductDetailPage
