import Hero from '../../components/home/Hero'
import FeatureShowcase from '../../components/home/FeatureShowcase'
import ProductHighlight from '../../components/home/ProductHighlight'
import StatsStrip from '../../components/home/StatsStrip'
import TestimonialsCarousel from '../../components/home/TestimonialsCarousel'
import NewsletterSection from '../../components/shared/NewsletterSection'
import SEO from '../../components/common/SEO'
import SocialFeed from '../../components/home/SocialFeed'

export const HomePage = () => {
  return (
    <div className="space-y-12">
      <SEO
        title="Digital Products, Templates, and Automation Systems"
        description="Discover premium eBooks, templates, software tools, and digital assets crafted by Cosmic Rags LTD to scale your creative business."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Cosmic Rags LTD',
          url: 'https://www.cosmicrags.co.uk',
          logo: 'https://www.cosmicrags.co.uk/og-image.jpg',
          sameAs: [
            'https://www.facebook.com',
            'https://www.instagram.com',
            'https://www.linkedin.com/company/cosmic-rags-ltd',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            telephone: '+44 7400 706281',
            email: 'info.cosmicragsltd@mail.com',
          },
        }}
      />
      <Hero />
      <FeatureShowcase />
      <StatsStrip />
      <ProductHighlight />
      <TestimonialsCarousel />
      <SocialFeed />
      <NewsletterSection />
    </div>
  )
}

export default HomePage
