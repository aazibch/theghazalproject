import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <PageContainer>
      <PageHeader heading="Privacy Policy" />
      <article>
        <p className="mb-4">
          <span className="font-semibold">The Ghazal Project</span> is committed
          to protecting the privacy and personal information of our users. This
          Privacy Policy explains how we collect, use, and safeguard your data
          when you interact with our platform. By using our website and
          services, you agree to the terms of this Privacy Policy.
        </p>
        <h3 className="text-xl mt-8 mb-4">1. Information We Collect</h3>
        <h4 className="text-lg font-medium mb-2">a. Personal Information</h4>
        <p className="mb-4">
          When you sign up, we may collect your name, email address, and other
          account details.
        </p>
        <h4 className="text-lg font-medium mb-2">
          b. Non-Personal Information
        </h4>
        <p className="mb-4">
          We may automatically collect non-identifying information such as your
          IP address, browser type, and device details for analytical purposes
          and to improve user experience.
        </p>

        {/* Copy Pasted */}
        <h3 className="text-xl mt-8 mb-4">2. How We Use Your Information</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Facilitate account creation and authentication.</li>
          <li>
            Enable user participation in the{' '}
            <span className="italic">Collective Ghazal</span> and other
            collaborative features.
          </li>
          <li>
            Provide updates about the platform, including new features or
            changes.
          </li>
          <li>
            Analyze site traffic and user engagement to enhance functionality.
          </li>
        </ul>

        <h3 className="text-xl mt-8 mb-4">3. Sharing of Information</h3>
        <p className="mb-4">
          We respect your privacy and do not sell, rent, or share your personal
          information with third parties except in the following cases:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            <span className="font-semibold">Service Providers:</span> To trusted
            third parties that help us operate the platform, such as hosting
            services.
          </li>
          <li>
            <span className="font-semibold">Legal Obligations:</span> If
            required by law or to protect the rights, safety, and security of
            the platform and its users.
          </li>
        </ul>

        <h3 className="text-xl mt-8 mb-4">4. Data Security</h3>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to
          secure your personal data against unauthorized access, alteration,
          disclosure, or destruction. However, no method of transmission over
          the internet is entirely secure, and we cannot guarantee absolute
          security.
        </p>

        <h3 className="text-xl mt-8 mb-4">5. Your Rights</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>
            Access, correct, or delete your personal information by logging into
            your account or <Link href="/contact">contacting us</Link>.
          </li>
          <li>
            Request details on how your data is being used by{' '}
            <Link href="/contact">contacting us</Link>.
          </li>
        </ul>

        <h3 className="text-xl mt-8 mb-4">6. Cookies</h3>
        <p className="mb-4">
          Our platform may use cookies to enhance your experience, remember your
          preferences, and analyze site performance. By using the site, you
          consent to our use of cookies. You can disable cookies through your
          browser settings, though this may affect some features of the
          platform.
        </p>

        <h3 className="text-xl mt-8 mb-4">7. Third-Party Links</h3>
        <p className="mb-4">
          Our platform may include links to third-party websites or services. We
          are not responsible for the privacy practices or content of these
          external sites. Please review their privacy policies before providing
          any personal information.
        </p>

        <h3 className="text-xl mt-8 mb-4">8. Updates to This Privacy Policy</h3>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for legal compliance. We encourage you to review
          this page periodically for updates.
        </p>

        <h3 className="text-xl mt-8 mb-4">9. Contact Us</h3>
        <p className="mb-4">
          If you have any questions, concerns, or requests related to this
          Privacy Policy, please <Link href="/contact">contact us</Link>.
        </p>
      </article>
    </PageContainer>
  );
}
