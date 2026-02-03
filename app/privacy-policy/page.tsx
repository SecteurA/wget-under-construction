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
        <h2 className="text-xl font-semibold">How We Use Data</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide customer support and respond to inquiries.</li>
          <li>Send notifications and transactional messages you request.</li>
          <li>Maintain service reliability, security, and performance.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Sharing</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>We use Meta/WhatsApp as a service provider to deliver messages.</li>
          <li>We do not sell your personal data.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Retention</h2>
        <p>
          We keep data only as long as necessary to provide the service and comply with
          legal obligations. You can request deletion at any time.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">User Rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct, or
          delete your data. To make a request, contact us at contact@wget.ma.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Data Deletion</h2>
        <p>
          For detailed instructions, visit{' '}
          <a className="underline" href="https://wget.ma/data-deletion">
            https://wget.ma/data-deletion
          </a>
          .
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>Email: contact@wget.ma</p>
      </section>
    </main>
  );
}
