'use client';

import { TierCard } from './TierCard';
import type { TippingTier } from '../lib/types';
import { cn } from '../lib/utils';

interface TierProgressProps {
  tiers: TippingTier[];
  currentTier: number;
  className?: string;
}

export function TierProgress({ tiers, currentTier, className }: TierProgressProps) {
  const sortedTiers = tiers.sort((a, b) => a.level - b.level);

  return (
    <div className={cn('space-y-3', className)}>
      {sortedTiers.map((tier) => (
        <TierCard
          key={tier.tierId}
          tier={tier}
          isActive={tier.level === currentTier}
          isUnlocked={tier.level <= currentTier}
          variant={tier.level === currentTier ? 'active' : 'inactive'}
        />
      ))}
    </div>
  );
}
