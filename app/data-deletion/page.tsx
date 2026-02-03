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
        <h2 className="text-xl font-semibold">How to Request Deletion</h2>
        <p>
          To request deletion of your data associated with WGET, email us at
          contact@wget.ma.
        </p>
        <p>Please include your WhatsApp phone number and a clear deletion request subject.</p>
        <p>We will process your request within 30 days.</p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>Email: contact@wget.ma</p>
      </section>
    </main>
  );
}
