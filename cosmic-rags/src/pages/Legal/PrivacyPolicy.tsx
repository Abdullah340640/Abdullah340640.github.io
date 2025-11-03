import Container from '../../components/common/Container'
import SEO from '../../components/common/SEO'

export const PrivacyPolicyPage = () => {
  return (
    <div className="pb-24">
      <SEO
        title="Privacy Policy"
        description="Understand how Cosmic Rags LTD collects, uses, and protects your personal information in alignment with UK GDPR."
        url="https://www.cosmicrags.co.uk/legal/privacy-policy"
      />
      <Container className="prose prose-slate max-w-4xl pt-24 dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p>Last updated: 3 November 2025</p>
        <p>
          Cosmic Rags LTD ("we", "us", "our") is committed to safeguarding the privacy of our clients, partners, and website visitors. This Privacy Policy explains how we collect, process, store, and share personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>

        <h2>1. Data Controller</h2>
        <p>
          Cosmic Rags LTD, Office 15280, 182-184 High Street North, East Ham, London, E6 2JA, United Kingdom, is the designated data controller responsible for your personal information. You may contact us at <a href="mailto:info.cosmicragsltd@mail.com">info.cosmicragsltd@mail.com</a> or by telephone on +44 7400 706281.
        </p>

        <h2>2. Personal Data We Collect</h2>
        <ul>
          <li>Identity data such as name, company, role, and contact history.</li>
          <li>Contact data including email address, telephone number, billing, and delivery addresses.</li>
          <li>Transaction data covering purchases, payment confirmations, and licence records.</li>
          <li>Technical data including IP address, device type, browser, time zone, and analytics events.</li>
          <li>Usage data recording how you interact with our websites, digital products, and support channels.</li>
          <li>Marketing preferences such as newsletter opt-ins and communication history.</li>
        </ul>

        <h2>3. How We Collect Personal Data</h2>
        <ul>
          <li>Direct interactions via forms, email, live chat, phone, or event registrations.</li>
          <li>Automated technologies through cookies, analytics scripts, and third-party integrations.</li>
          <li>Partner platforms when you purchase our products on marketplaces or affiliate sites.</li>
          <li>Support services where we process assets you voluntarily provide for implementation.</li>
        </ul>

        <h2>4. Lawful Bases for Processing</h2>
        <ul>
          <li>Contract: To deliver digital products, licences, and support you request.</li>
          <li>Consent: For optional marketing communications or analytics where required.</li>
          <li>Legitimate Interests: To improve our services, prevent fraud, and ensure security.</li>
          <li>Legal Obligation: To comply with accounting, tax, and regulatory requirements.</li>
        </ul>

        <h2>5. How We Use Personal Data</h2>
        <ul>
          <li>Fulfil orders, manage subscriptions, and provide onboarding or support.</li>
          <li>Customise digital assets, templates, and automation workflows for your organisation.</li>
          <li>Send service announcements, policy updates, and release notes.</li>
          <li>Monitor platform performance, conduct analytics, and improve user experience.</li>
          <li>Detect and prevent unauthorised access, misuse, or fraudulent activity.</li>
        </ul>

        <h2>6. Sharing Personal Data</h2>
        <p>
          We only share personal data with trusted processors that follow stringent confidentiality and security standards. These include payment gateways, cloud hosting providers, CRM platforms, analytics vendors, and professional advisers. Data is never sold to third parties. International data transfers are protected by UK-approved safeguard mechanisms such as Standard Contractual Clauses.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          Personal data is retained only for as long as necessary to fulfil the purposes described or to meet legal obligations. Support records, invoices, and licence data are stored for up to seven years. Marketing consent records are kept until you withdraw consent.
        </p>

        <h2>8. Your Rights</h2>
        <p>You have the following rights under UK GDPR:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate or incomplete data.</li>
          <li>Request deletion where data is no longer required.</li>
          <li>Object to processing based on legitimate interests.</li>
          <li>Restrict processing in certain circumstances.</li>
          <li>Receive personal data in a portable format where applicable.</li>
          <li>Withdraw consent for marketing at any time.</li>
        </ul>
        <p>
          To exercise any rights, please contact <a href="mailto:privacy@cosmicrags.co.uk">privacy@cosmicrags.co.uk</a>. We will respond within one calendar month. You may also lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://www.ico.org.uk">ico.org.uk</a>.
        </p>

        <h2>9. Cookies and Tracking</h2>
        <p>
          We use essential cookies to operate our site and optional analytics or advertising cookies to understand performance. For full details and controls, please review our Cookie Policy.
        </p>

        <h2>10. Data Security</h2>
        <p>
          Security measures include encrypted storage, access controls, regular audits, and staff training. Despite these controls, no system is completely secure; please contact us immediately if you suspect unauthorised use of your account or licence.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy to reflect operational, legal, or regulatory changes. Significant updates will be notified via email or site announcement. Continued use of our services after changes constitutes acceptance of the updated policy.
        </p>

        <h2>12. Contact</h2>
        <p>
          For privacy enquiries, email <a href="mailto:privacy@cosmicrags.co.uk">privacy@cosmicrags.co.uk</a> or write to the Data Protection Lead at Cosmic Rags LTD, Office 15280, 182-184 High Street North, East Ham, London, E6 2JA.
        </p>
      </Container>
    </div>
  )
}

export default PrivacyPolicyPage
