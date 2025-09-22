import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(amount: number): string {
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}k`;
  }
  return `$${amount}`;
}

export function formatPercentage(current: number, target: number): number {
  return Math.min((current / target) * 100, 100);
}

export function formatTimeRemaining(deadline: Date): string {
  const now = new Date();
  const diff = deadline.getTime() - now.getTime();
  
  if (diff <= 0) return 'Expired';
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  if (days > 0) {
    return `${days}d ${hours}h remaining`;
  }
  
  return `${hours}h remaining`;
}

export function getTierForAmount(amount: number, tiers: any[]): number {
  const sortedTiers = tiers.sort((a, b) => b.minAmount - a.minAmount);
  const tier = sortedTiers.find(t => amount >= t.minAmount);
  return tier?.level || 0;
}

export function getNextTier(currentAmount: number, tiers: any[]) {
  const sortedTiers = tiers.sort((a, b) => a.minAmount - b.minAmount);
  return sortedTiers.find(t => t.minAmount > currentAmount);
}

export function generateTipId(): string {
  return `tip_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function validateTipAmount(amount: number): { isValid: boolean; error?: string } {
  if (amount <= 0) {
    return { isValid: false, error: 'Amount must be greater than 0' };
  }
  
  if (amount > 10000) {
    return { isValid: false, error: 'Amount cannot exceed $10,000' };
  }
  
  return { isValid: true };
}

export function truncateAddress(address: string, chars = 4): string {
  if (!address) return '';
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
