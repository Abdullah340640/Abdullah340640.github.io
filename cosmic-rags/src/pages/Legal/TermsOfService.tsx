import Container from '../../components/common/Container'
import SEO from '../../components/common/SEO'

export const TermsOfServicePage = () => {
  return (
    <div className="pb-24">
      <SEO
        title="Terms of Service"
        description="Review the terms governing access to Cosmic Rags LTD digital products, licences, and services."
        url="https://www.cosmicrags.co.uk/legal/terms-of-service"
      />
      <Container className="prose prose-slate max-w-4xl pt-24 dark:prose-invert">
        <h1>Terms of Service</h1>
        <p>Last updated: 3 November 2025</p>
        <p>
          These Terms of Service ("Terms") describe the rules and conditions that apply when you purchase or access digital products, templates, software tools, and related services from Cosmic Rags LTD. By completing a purchase, downloading files, or accessing support, you agree to be bound by these Terms.
        </p>

        <h2>1. Eligibility</h2>
        <p>
          You confirm that you are at least 18 years old or are accessing the services under the supervision of a responsible adult. Where you represent a company or organisation, you warrant that you have authority to bind that entity.
        </p>

        <h2>2. Orders and Payment</h2>
        <ul>
          <li>Prices are displayed in GBP unless otherwise stated and exclude any applicable VAT.</li>
          <li>Payments are processed through secure third-party gateways. We do not store full card details.</li>
          <li>All purchases of digital products are final once access is granted (see Refund Policy for exceptions).</li>
          <li>We reserve the right to refuse or cancel any order where fraud is suspected or Terms are breached.</li>
        </ul>

        <h2>3. Digital Delivery</h2>
        <p>
          Download links are provided immediately after payment and via email. Access to updates is included for the lifetime of the product. You are responsible for ensuring your email address is accurate and that your systems permit delivery of our messages.
        </p>

        <h2>4. Licensing</h2>
        <ul>
          <li>Each product includes a non-exclusive, non-transferable licence for the purchaser.</li>
          <li>You may use the files in unlimited personal or client projects but may not resell, redistribute, or claim ownership of the source files.</li>
          <li>Enterprise or multi-seat usage requires a written agreement. Contact <a href="mailto:info.cosmicragsltd@mail.com">info.cosmicragsltd@mail.com</a> for custom licensing.</li>
        </ul>

        <h2>5. Acceptable Use</h2>
        <ul>
          <li>Products must not be used for unlawful, defamatory, or discriminatory purposes.</li>
          <li>Reverse engineering, extracting design systems for resale, or sharing download links publicly is strictly prohibited.</li>
          <li>We monitor usage for misuse and may suspend access where abuse is identified.</li>
        </ul>

        <h2>6. Accounts</h2>
        <p>
          Some services include dashboards or portals. You are responsible for maintaining the confidentiality of login credentials and for all activities under your account. Notify us promptly of any unauthorised access.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          All copyright, trade marks, and other intellectual property rights in the products and site content remain the property of Cosmic Rags LTD or our licensors. No rights are transferred other than those expressly granted in these Terms.
        </p>

        <h2>8. Support</h2>
        <p>
          Purchases include 24/7 email and live chat support for installation, configuration, and troubleshooting. We aim to respond to all support enquiries within one business day. Enhanced consulting packages may be offered for complex implementations.
        </p>

        <h2>9. Third-Party Tools</h2>
        <p>
          Our templates and automations may integrate third-party platforms such as Notion, Airtable, Zapier, or GA4. You are responsible for maintaining active accounts with those providers and complying with their terms.
        </p>

        <h2>10. Warranties and Disclaimers</h2>
        <p>
          We provide our digital products "as is" without warranties of merchantability, fitness for a particular purpose, or non-infringement. While we test thoroughly, we do not guarantee uninterrupted availability or that the products will meet every specific requirement.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Cosmic Rags LTD will not be liable for indirect, incidental, or consequential damages, loss of revenue, loss of data, or business interruption. Our total liability for any claim will not exceed the amount you paid for the relevant product in the preceding twelve months.
        </p>

        <h2>12. Termination</h2>
        <p>
          We may suspend or terminate access to products or support where Terms are breached, fees remain unpaid, or unlawful activity is suspected. Upon termination, you must cease using the products and destroy any copies in your possession.
        </p>

        <h2>13. Governing Law</h2>
        <p>
          These Terms are governed by the laws of England and Wales. Any disputes shall be resolved exclusively in the courts of England and Wales.
        </p>

        <h2>14. Changes to Terms</h2>
        <p>
          We may update these Terms to reflect service changes or legal requirements. We will provide reasonable notice via email or site announcement. Continued use of our products after changes take effect constitutes acceptance of the revised Terms.
        </p>

        <h2>15. Contact</h2>
        <p>
          Questions about these Terms can be directed to <a href="mailto:info.cosmicragsltd@mail.com">info.cosmicragsltd@mail.com</a> or mailed to Cosmic Rags LTD, Office 15280, 182-184 High Street North, East Ham, London, E6 2JA.
        </p>
      </Container>
    </div>
  )
}

export default TermsOfServicePage
