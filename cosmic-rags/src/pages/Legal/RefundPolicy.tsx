import Container from '../../components/common/Container'
import SEO from '../../components/common/SEO'

export const RefundPolicyPage = () => {
  return (
    <div className="pb-24">
      <SEO
        title="Refund Policy"
        description="Understand Cosmic Rags LTD's approach to refunds, replacements, and customer support for digital products."
        url="https://www.cosmicrags.co.uk/legal/refund-policy"
      />
      <Container className="prose prose-slate max-w-4xl pt-24 dark:prose-invert">
        <h1>Refund Policy</h1>
        <p>Last updated: 3 November 2025</p>
        <p>
          Because our products are digital goods delivered instantly, Cosmic Rags LTD does not generally offer refunds once files have been downloaded or accessed. This policy aligns with UK consumer regulations for digital content. However, we are committed to customer satisfaction and will work with you to resolve any issues.
        </p>

        <h2>1. Eligibility for Refunds</h2>
        <p>
          A refund may be considered within 14 days of purchase if:
        </p>
        <ul>
          <li>The files cannot be accessed due to a technical fault on our side that we cannot resolve.</li>
          <li>The product description materially misrepresented the contents and no suitable replacement can be provided.</li>
          <li>You were charged in error for duplicate orders.</li>
        </ul>

        <h2>2. Exclusions</h2>
        <ul>
          <li>Change of mind or failure to read product requirements prior to purchase.</li>
          <li>Incompatibility caused by unsupported third-party software or outdated versions.</li>
          <li>Requests submitted after assets have been downloaded, copied, or shared.</li>
          <li>Licences suspended due to breach of our Terms of Service.</li>
        </ul>

        <h2>3. Replacement and Support</h2>
        <p>
          Instead of refunds we prioritise replacements, updates, or hands-on guidance. Our support team can:
        </p>
        <ul>
          <li>Reissue download links and provide alternative formats.</li>
          <li>Offer implementation assistance via email, live chat, or screen share.</li>
          <li>Deliver updated files when errors are identified.</li>
        </ul>

        <h2>4. How to Request Assistance</h2>
        <p>
          Email <a href="mailto:support@cosmicrags.co.uk">support@cosmicrags.co.uk</a> within 14 days of purchase. Include your order number, product name, description of the issue, and any supporting screenshots or logs. We aim to respond within one business day.
        </p>

        <h2>5. Marketplace Purchases</h2>
        <p>
          If you purchased our products via a marketplace (for example Gumroad, Etsy, or Creative Market) please review the refund terms of that platform and contact their support team. We will collaborate with them to resolve the request where possible.
        </p>

        <h2>6. Chargebacks</h2>
        <p>
          Initiating a chargeback without contacting us first may result in licence termination and account closure. We welcome the chance to resolve matters directly and ensure you receive full value.
        </p>

        <h2>7. Contact</h2>
        <p>
          If you have questions about this policy, contact Cosmic Rags LTD at <a href="mailto:support@cosmicrags.co.uk">support@cosmicrags.co.uk</a> or write to Office 15280, 182-184 High Street North, East Ham, London, E6 2JA.
        </p>
      </Container>
    </div>
  )
}

export default RefundPolicyPage
