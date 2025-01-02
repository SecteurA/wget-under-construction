"use client"

import Image from 'next/image';
import { ScaleIn } from '@/components/animations/scale-in';

export function Logo() {
  return (
    <ScaleIn>
      <div className="flex justify-center items-center w-full">
        <div className="relative w-72 h-36 md:w-96 md:h-48">
          <Image
            src="https://pub-237d2da54b564d23aaa1c3826e1d4e65.r2.dev/wget/wget-Logo.svg"
            alt="WGET Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </ScaleIn>
  );
}