import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  url?: string
  image?: string
  type?: string
  structuredData?: Record<string, unknown>
  keywords?: string[]
}

const DEFAULT_SITE_URL = 'https://www.cosmicrags.co.uk'
const DEFAULT_IMAGE = `${DEFAULT_SITE_URL}/og-image.svg`

export const SEO = ({
  title,
  description,
  url = DEFAULT_SITE_URL,
  image = DEFAULT_IMAGE,
  type = 'website',
  structuredData,
  keywords,
}: SEOProps) => {
  const mergedTitle = `${title} | Cosmic Rags LTD`

  return (
    <Helmet>
      <title>{mergedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <meta property="og:title" content={mergedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={mergedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
