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
          WGET provides messaging and automation features that use the WhatsApp
          Business API by Meta.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">User Responsibilities</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the service in compliance with applicable laws and regulations.</li>
          <li>Do not send illegal, harmful, or abusive content.</li>
          <li>Respect the rights and privacy of others.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, WGET is not liable for indirect,
          incidental, or consequential damages arising from your use of the service.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Termination</h2>
        <p>
          We may suspend or terminate access to WGET if you violate these terms or
          misuse the service.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>Email: contact@wget.ma</p>
      </section>
    </main>
  );
}
