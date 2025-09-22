'use client';

import { useState } from 'react';
import { Heart, Loader2, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface TipButtonProps {
  amount: number;
  onTip: () => Promise<void> | void;
  isProcessing?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function TipButton({
  amount,
  onTip,
  isProcessing = false,
  disabled = false,
  variant = 'primary',
  className
}: TipButtonProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClick = async () => {
    if (disabled || isProcessing) return;

    try {
      await onTip();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    } catch (error) {
      console.error('Tip failed:', error);
    }
  };

  const buttonContent = () => {
    if (showSuccess) {
      return (
        <>
          <CheckCircle className="w-5 h-5" />
          <span>Tip Sent!</span>
        </>
      );
    }

    if (isProcessing) {
      return (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Processing...</span>
        </>
      );
    }

    return (
      <>
        <Heart className="w-5 h-5" />
        <span>Tip ${amount}</span>
      </>
    );
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isProcessing}
      className={cn(
        'flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200 relative overflow-hidden',
        variant === 'primary' && [
          'bg-gradient-to-r from-primary to-accent text-white',
          'hover:shadow-lg hover:scale-105',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
        ],
        variant === 'secondary' && [
          'bg-surface border border-border text-text-primary',
          'hover:bg-gray-50',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        ],
        showSuccess && 'bg-green-500 text-white',
        className
      )}
    >
      {/* Animated background for success state */}
      {showSuccess && (
        <div className="absolute inset-0 bg-green-500 animate-pulse"></div>
      )}
      
      <div className="relative z-10 flex items-center gap-2">
        {buttonContent()}
      </div>
    </button>
  );
}
