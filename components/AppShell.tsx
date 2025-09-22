'use client';

import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface AppShellProps {
  children: ReactNode;
  className?: string;
}

export function AppShell({ children, className }: AppShellProps) {
  return (
    <div className={cn(
      'min-h-screen bg-gradient-main relative overflow-hidden',
      className
    )}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-accent/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/5 rounded-full blur-xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="container max-w-md mx-auto min-h-screen">
          <header className="py-6 text-center">
            <h1 className="display text-white mb-2">GratitudeFlow</h1>
            <p className="body-sm text-white/80">Tip creators, unlock rewards</p>
          </header>

          <main className="pb-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
