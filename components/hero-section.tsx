"use client"

import { FadeIn } from '@/components/animations/fade-in';

export function HeroSection() {
  return (
    <FadeIn delay={0.3}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] bg-clip-text text-transparent">
          L'allié numérique de votre succès
        </h2>
      </div>
    </FadeIn>
  );
}