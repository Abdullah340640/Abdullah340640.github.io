import Container from '../../components/common/Container'
import SEO from '../../components/common/SEO'

export const CookiePolicyPage = () => {
  return (
    <div className="pb-24">
      <SEO
        title="Cookie Policy"
        description="Learn how Cosmic Rags LTD uses cookies and how you can manage your preferences."
        url="https://www.cosmicrags.co.uk/legal/cookie-policy"
      />
      <Container className="prose prose-slate max-w-4xl pt-24 dark:prose-invert">
        <h1>Cookie Policy</h1>
        <p>Last updated: 3 November 2025</p>
        <p>
          This Cookie Policy explains how Cosmic Rags LTD uses cookies and similar technologies on our websites and landing pages. It should be read together with our Privacy Policy.
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device to store data. They allow us to remember your preferences, analyse performance, and provide personalised experiences.
        </p>

        <h2>2. Types of Cookies We Use</h2>
        <ul>
          <li><strong>Essential cookies</strong>: Required for core functionality such as secure checkout and account authentication.</li>
          <li><strong>Analytics cookies</strong>: Help us understand visitor behaviour and improve user experience. We primarily use Google Analytics 4 with IP anonymisation enabled.</li>
          <li><strong>Marketing cookies</strong>: Enable remarketing and conversion tracking through platforms such as Meta Pixel or LinkedIn Insight Tag, when you opt in.</li>
          <li><strong>Preference cookies</strong>: Remember choices like language mode and consent selections.</li>
        </ul>

        <h2>3. Managing Consent</h2>
        <p>
          On your first visit you will see a cookie banner allowing you to accept or customise non-essential cookies. You can update your preferences at any time via the "Cookie Settings" link in the site footer. Opting out of optional cookies will not affect access to core services.
        </p>

        <h2>4. Third-Party Cookies</h2>
        <p>
          Some cookies are set by third-party providers delivering services on our behalf. These providers include payment gateways, analytics tools, customer support chat, and embedded video platforms. We only work with vendors who comply with UK GDPR and provide appropriate safeguards.
        </p>

        <h2>5. Browser Controls</h2>
        <p>
          You can block or delete cookies via your browser settings. Doing so may impact certain features such as remembering login sessions or maintaining cart contents. Instructions are available from your browser provider.
        </p>

        <h2>6. Updates</h2>
        <p>
          We may update this policy to reflect new technologies or regulatory requirements. Significant changes will be highlighted in the cookie banner or via email when appropriate.
        </p>

        <h2>7. Contact</h2>
        <p>
          Questions about cookies can be directed to <a href="mailto:privacy@cosmicrags.co.uk">privacy@cosmicrags.co.uk</a>.
        </p>
      </Container>
    </div>
  )
}

export default CookiePolicyPage
