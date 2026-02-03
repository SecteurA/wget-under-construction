import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | WGET',
  description: 'Privacy policy for the WGET application.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="space-y-2">
        <p className="text-sm text-muted-foreground">Effective date: 2026-02-03</p>
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="text-muted-foreground">
          This Privacy Policy applies to the WGET application and explains how we
          collect, use, and share information.
        </p>
      </header>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p>
          WGET is a messaging and automation service. WGET uses the WhatsApp
          Business API provided by Meta to send and receive WhatsApp messages.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Phone number associated with your WhatsApp account.</li>
          <li>
            WhatsApp message content when we process it to deliver the service or
            provide support. We store message content only when needed to fulfill
            these purposes.
          </li>
          <li>Message metadata such as timestamps and delivery status.</li>
          <li>Technical logs such as IP address, device, and browser details when applicable.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">How We Use Your Data</h2>
        <p>We use your information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Communicate with users through WhatsApp messages.</li>
          <li>Provide customer support and respond to inquiries.</li>
          <li>Send notifications and transactional messages you request.</li>
          <li>Maintain service reliability, security, and performance.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Data Sharing</h2>
        <p>
          We share your information with Meta/WhatsApp, which is our service provider
          for delivering WhatsApp messages through the WhatsApp Business API.
        </p>
        <p className="mt-2">
          <strong>We do not sell your personal data to any third parties.</strong>
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Data Retention</h2>
        <p>
          We retain your data only for as long as necessary to provide the WGET service
          and comply with legal obligations. Data retention is limited to the minimum
          period required for these purposes.
        </p>
        <p className="mt-2">
          You can request deletion of your data at any time by following the
          instructions on our Data Deletion page.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Access</strong> your personal data we hold.</li>
          <li><strong>Rectify</strong> any inaccurate or incomplete data.</li>
          <li><strong>Delete</strong> your data (see Data Deletion section below).</li>
        </ul>
        <p className="mt-2">
          To exercise any of these rights, please contact us at contact@wget.ma.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Data Deletion</h2>
        <p>
          You have the right to request deletion of all your data associated with WGET.
        </p>
        <p className="mt-2">
          For detailed instructions on how to request data deletion, please visit our{' '}
          <a className="text-blue-600 underline hover:text-blue-800" href="/data-deletion">
            Data Deletion page
          </a>
          .
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p>
          If you have any questions about this Privacy Policy or wish to exercise your
          rights, please contact us:
        </p>
        <p className="mt-2">
          <strong>Email:</strong>{' '}
          <a className="text-blue-600 underline hover:text-blue-800" href="mailto:contact@wget.ma">
            contact@wget.ma
          </a>
        </p>
      </section>
    </main>
  );
}
