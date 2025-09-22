'use client';

import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
  className?: string;
}

export default function AppShell({ children, className = '' }: AppShellProps) {
  return (
    <div className={`min-h-screen bg-bg ${className}`}>
      <div className="container px-6 py-4">
        {children}
      </div>
    </div>
  );
}

