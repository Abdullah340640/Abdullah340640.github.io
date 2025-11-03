import Container from '../../components/common/Container'
import SEO from '../../components/common/SEO'

export const DisclaimerPage = () => {
  return (
    <div className="pb-24">
      <SEO
        title="Disclaimer"
        description="Review the legal disclaimers governing Cosmic Rags LTD content, digital products, and third-party links."
        url="https://www.cosmicrags.co.uk/legal/disclaimer"
      />
      <Container className="prose prose-slate max-w-4xl pt-24 dark:prose-invert">
        <h1>Disclaimer</h1>
        <p>Last updated: 3 November 2025</p>

        <h2>1. Informational Purposes Only</h2>
        <p>
          Content, articles, templates, and resources provided by Cosmic Rags LTD are for educational and informational purposes only. We do not provide legal, financial, or professional advice. You should consult qualified advisers before implementing strategies or making business decisions based on our materials.
        </p>

        <h2>2. No Guarantee of Results</h2>
        <p>
          While our digital products are designed to accelerate growth, results will vary depending on your implementation, audience, and market conditions. We make no guarantees, warranties, or representations regarding revenue, retention, or performance outcomes.
        </p>

        <h2>3. Accuracy of Information</h2>
        <p>
          We strive to ensure the accuracy of information published on our site and within our products. However, content may contain technical, typographical, or photographic errors. We do not warrant that any content is complete, current, or error-free and may make changes at any time without prior notice.
        </p>

        <h2>4. External Links</h2>
        <p>
          Our site may include links to third-party websites or services. These links are provided for convenience and do not imply endorsement. We have no control over the content, policies, or practices of third-party sites and accept no responsibility for damages arising from their use.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All content, brand assets, and digital products remain the property of Cosmic Rags LTD and our licensors. Use of our materials is subject to the relevant licence terms. Unauthorised reproduction, distribution, or modification is prohibited.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          Cosmic Rags LTD will not be liable for any direct, indirect, incidental, or consequential losses arising from the use of our site, products, or resources. This includes, without limitation, loss of profits, business interruption, or data loss.
        </p>

        <h2>7. Updates</h2>
        <p>
          We may update this Disclaimer to reflect changes in regulation or company practices. Continued use of our site or products after updates acknowledges your acceptance of the revised terms.
        </p>

        <h2>8. Contact</h2>
        <p>
          If you have questions regarding this Disclaimer, contact Cosmic Rags LTD at <a href="mailto:legal@cosmicrags.co.uk">legal@cosmicrags.co.uk</a> or by post at Office 15280, 182-184 High Street North, East Ham, London, E6 2JA.
        </p>
      </Container>
    </div>
  )
}

export default DisclaimerPage
