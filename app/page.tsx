import { ContactSection } from '@/components/contact-section';
import { HeroSection } from '@/components/hero-section';
import { Logo } from '@/components/logo';
import { StatusMessage } from '@/components/status-message';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.02),transparent)] pointer-events-none" />
      
      <main className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-12 max-w-4xl">
          <Logo />
          <HeroSection />
          
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
          
          <StatusMessage />
          <ContactSection />
        </div>
      </main>
      
      <footer className="absolute bottom-4 w-full text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} WGET. Tous droits réservés.</p>
      </footer>
    </div>
  );
}