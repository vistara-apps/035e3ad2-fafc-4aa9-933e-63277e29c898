'use client';

import { TipButtonProps } from '@/types';

export default function TipButton({
  variant = 'primary',
  onClick,
  disabled = false,
  children
}: TipButtonProps) {
  const baseClasses = "px-4 py-2 rounded-md font-semibold transition-all duration-base ease-out shadow-card";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90 disabled:bg-primary/50",
    secondary: "bg-surface text-text-primary border border-border hover:bg-surface/90 disabled:bg-surface/50"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

