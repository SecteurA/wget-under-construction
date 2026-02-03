import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Deletion | WGET',
  description: 'How to request deletion of your data for the WGET application.',
};

export default function DataDeletionPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <header className="space-y-2">
        <p className="text-sm text-muted-foreground">Effective date: 2026-02-03</p>
        <h1 className="text-3xl font-semibold">Data Deletion Instructions</h1>
        <p className="text-muted-foreground">
          This page explains how to request deletion of data associated with WGET.
        </p>
      </header>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">How to Request Data Deletion</h2>
        <p>
          If you wish to delete your personal data associated with the WGET application,
          you can submit a deletion request by following these steps:
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Step 1: Send an Email</h2>
        <p>
          Send an email to:{' '}
          <a className="text-blue-600 underline hover:text-blue-800" href="mailto:contact@wget.ma">
            contact@wget.ma
          </a>
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Step 2: Include Required Information</h2>
        <p>In your email, please include the following information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Subject:</strong> &quot;Data Deletion Request&quot; (use this exact
            subject line)
          </li>
          <li>
            <strong>WhatsApp Phone Number:</strong> The phone number associated with your
            WGET account (include country code)
          </li>
          <li>
            <strong>Confirmation:</strong> A statement confirming that you want to delete
            all your data from WGET
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">What Happens Next</h2>
        <p>
          Once we receive your data deletion request:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>We will verify your identity to ensure the security of your data.</li>
          <li>
            Your request will be processed within <strong>30 days</strong> of receipt.
          </li>
          <li>
            All personal data associated with your WGET account will be permanently
            deleted from our systems.
          </li>
          <li>
            You will receive a confirmation email once the deletion is complete.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">What Data Will Be Deleted</h2>
        <p>
          The following data associated with your WGET account will be permanently removed:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Your WhatsApp phone number</li>
          <li>Message content and message history</li>
          <li>Message metadata (timestamps, delivery status)</li>
          <li>Technical logs and usage data</li>
          <li>Any other personal information we have collected</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p>
          If you have any questions about the data deletion process, please contact us:
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
