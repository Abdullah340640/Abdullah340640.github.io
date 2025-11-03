import MissionVision from '../../components/about/MissionVision'
import CompanyTimeline from '../../components/about/Timeline'
import ValuesGrid from '../../components/about/ValuesGrid'
import FounderSpotlight from '../../components/about/FounderSpotlight'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import SEO from '../../components/common/SEO'

export const AboutPage = () => {
  return (
    <div className="space-y-12">
      <SEO
        title="About Cosmic Rags LTD"
        description="Learn how Cosmic Rags LTD empowers creators with premium digital products, automation systems, and concierge-level support from London."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Cosmic Rags LTD',
          url: 'https://www.cosmicrags.co.uk/about',
          publisher: {
            '@type': 'Organization',
            name: 'Cosmic Rags LTD',
          },
        }}
      />
      <section className="pt-24">
        <Container>
          <SectionHeading
            eyebrow="Our Story"
            title="Premium digital products engineered for measurable impact"
            description="Since 2019, Cosmic Rags LTD has pioneered high-performing e-commerce systems, delivering eBooks, templates, and automation tools for creators and enterprise teams alike."
            align="center"
          />
        </Container>
      </section>
      <MissionVision />
      <CompanyTimeline />
      <ValuesGrid />
      <FounderSpotlight />
    </div>
  )
}

export default AboutPage
