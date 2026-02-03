import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | WGET',
  description: 'Terms of service for the WGET application.',
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="space-y-2">
        <p className="text-sm text-muted-foreground">Effective date: 2026-02-03</p>
        <h1 className="text-3xl font-semibold">Terms of Service</h1>
        <p className="text-muted-foreground">
          These Terms of Service govern your use of the WGET application.
        </p>
      </header>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Service Description</h2>
        <p>
          WGET is a messaging and automation service that enables communication through
          the WhatsApp Business API provided by Meta. By using WGET, you can send and
          receive messages, automate communications, and manage customer interactions.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Acceptable Use</h2>
        <p>When using WGET, you agree to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the service in compliance with all applicable laws and regulations.</li>
          <li>Comply with WhatsApp Business Policy and Meta&apos;s terms of service.</li>
          <li>Not send spam, illegal, harmful, threatening, or abusive content.</li>
          <li>Not use the service to harass, intimidate, or harm others.</li>
          <li>Respect the privacy and intellectual property rights of others.</li>
          <li>Obtain necessary consent before sending messages to recipients.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">User Responsibilities</h2>
        <p>You are responsible for:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Maintaining the confidentiality of your account credentials.</li>
          <li>All activities that occur under your account.</li>
          <li>Ensuring your use of WGET complies with these Terms.</li>
          <li>The content of messages you send through WGET.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            WGET is provided &quot;as is&quot; without warranties of any kind, express or
            implied.
          </li>
          <li>
            WGET is not liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the service.
          </li>
          <li>
            WGET is not responsible for any interruption, errors, or loss of data that may
            occur.
          </li>
          <li>
            Your use of WGET is at your own risk.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Service Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to WGET at any time if:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>You violate these Terms of Service.</li>
          <li>You misuse the service or engage in prohibited activities.</li>
          <li>
            Your use of WGET violates applicable laws or WhatsApp Business Policy.
          </li>
          <li>We are required to do so by law or regulatory authority.</li>
        </ul>
        <p className="mt-2">
          You may also discontinue using WGET at any time. Upon termination, you may
          request deletion of your data as described in our Privacy Policy.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Changes to Terms</h2>
        <p>
          We may update these Terms of Service from time to time. We will notify you of
          any material changes by updating the effective date at the top of this page.
          Your continued use of WGET after changes are posted constitutes acceptance of
          the updated terms.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us:
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
