"use client"

import { FadeIn } from '@/components/animations/fade-in';

export function StatusMessage() {
  return (
    <FadeIn delay={0.6}>
      <div className="relative py-6 px-8 rounded-2xl bg-muted/30 backdrop-blur-sm border border-border/50">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur opacity-30" />
        <p className="relative text-lg text-muted-foreground">
          Notre site est actuellement en construction. Nous travaillons dur pour vous offrir une expérience exceptionnelle.
        </p>
      </div>
    </FadeIn>
  );
}