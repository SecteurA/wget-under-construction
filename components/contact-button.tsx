"use client"

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactButtonProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function ContactButton({ href, icon: Icon, children }: ContactButtonProps) {
  return (
    <Button 
      variant="outline" 
      className="group relative overflow-hidden transition-all duration-300 hover:border-primary/50"
      asChild
    >
      <motion.a 
        href={href} 
        className="flex items-center gap-3 px-6 py-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        <span className="font-medium">{children}</span>
      </motion.a>
    </Button>
  );
}