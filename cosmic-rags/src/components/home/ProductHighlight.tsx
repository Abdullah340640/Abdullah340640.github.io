import { useMemo, useState } from 'react'

import { products } from '../../data/products'
import type { Product } from '../../types'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import ProductCard from '../shared/ProductCard'
import ProductQuickView from '../shared/ProductQuickView'

export const ProductHighlight = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [open, setOpen] = useState(false)

  const showcaseProducts = useMemo(
    () =>
      products
        .slice()
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 4),
    [],
  )

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product)
    setOpen(true)
  }

  return (
    <section id="products" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured Products"
          title="High-performance digital systems for every stage"
          description="Explore a curated sample of our best-selling playbooks, templates, and automation suites engineered for conversion."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {showcaseProducts.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
          ))}
        </div>
      </Container>

      <ProductQuickView
        product={selectedProduct}
        open={open}
        onClose={() => {
          setOpen(false)
          setSelectedProduct(null)
        }}
      />
    </section>
  )
}

export default ProductHighlight
