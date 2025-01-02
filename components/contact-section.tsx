"use client"

import { Mail, Phone } from 'lucide-react';
import { ContactButton } from '@/components/contact-button';
import { FadeIn } from '@/components/animations/fade-in';

export function ContactSection() {
  return (
    <FadeIn delay={0.9}>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
        <ContactButton href="tel:+212661201500" icon={Phone}>
          +212 661 201 500
        </ContactButton>
        
        <ContactButton href="mailto:contact@wget.ma" icon={Mail}>
          contact@wget.ma
        </ContactButton>
      </div>
    </FadeIn>
  );
}