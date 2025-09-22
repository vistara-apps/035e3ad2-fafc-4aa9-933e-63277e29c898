'use client';

import { TierCardProps } from '@/types';

export default function TierCard({ tier, isActive, onSelect }: TierCardProps) {
  return (
    <div
      className={`p-4 rounded-lg border-2 transition-all duration-base cursor-pointer ${
        isActive
          ? 'border-primary bg-primary/5 shadow-card'
          : 'border-border bg-surface hover:border-primary/50'
      }`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-text-primary">Tier {tier.level}</h3>
        <span className="text-sm text-text-secondary">
          {tier.minAmount} ETH
        </span>
      </div>
      <p className="text-sm text-text-secondary mb-2">
        {tier.rewardDescription}
      </p>
      <div className="text-xs text-accent font-medium">
        {tier.rewardType.charAt(0).toUpperCase() + tier.rewardType.slice(1)} Reward
      </div>
    </div>
  );
}

