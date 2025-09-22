'use client';

import { Crown, Star, Gift, Zap } from 'lucide-react';
import type { TippingTier } from '../lib/types';
import { cn, formatAmount } from '../lib/utils';

interface TierCardProps {
  tier: TippingTier;
  isActive?: boolean;
  isUnlocked?: boolean;
  variant?: 'active' | 'inactive';
  className?: string;
}

const tierIcons = {
  badge: Star,
  shoutout: Gift,
  content: Crown,
  early_access: Zap,
};

export function TierCard({ 
  tier, 
  isActive = false, 
  isUnlocked = false,
  variant = 'inactive',
  className 
}: TierCardProps) {
  const IconComponent = tierIcons[tier.rewardType] || Star;

  return (
    <div
      className={cn(
        'card p-4 transition-all duration-200 relative overflow-hidden',
        variant === 'active' && [
          'border-primary bg-gradient-to-br from-primary/5 to-accent/5',
          'shadow-lg scale-105'
        ],
        variant === 'inactive' && [
          'border-border hover:border-primary/30',
          isUnlocked && 'bg-green-50 border-green-200'
        ],
        className
      )}
    >
      {/* Tier Level Badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div 
            className={cn(
              'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
              isActive ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
            )}
          >
            {tier.level}
          </div>
          <span className="body-sm font-medium text-text-primary">
            Tier {tier.level}
          </span>
        </div>

        {isUnlocked && (
          <div className="flex items-center gap-1 text-green-600">
            <Crown className="w-4 h-4" />
            <span className="text-xs font-medium">Unlocked</span>
          </div>
        )}
      </div>

      {/* Tier Icon and Emoji */}
      <div className="flex items-center gap-3 mb-3">
        <div className={cn(
          'w-12 h-12 rounded-full flex items-center justify-center',
          isActive 
            ? 'bg-gradient-to-br from-primary to-accent text-white' 
            : 'bg-gray-100 text-gray-600'
        )}>
          <span className="text-lg">{tier.icon}</span>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <IconComponent className="w-4 h-4 text-text-secondary" />
            <span className="body-sm font-medium text-text-primary">
              {formatAmount(tier.minAmount)} minimum
            </span>
          </div>
        </div>
      </div>

      {/* Reward Description */}
      <p className="body-sm text-text-secondary mb-4">
        {tier.rewardDescription}
      </p>

      {/* Progress Indicator */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"></div>
      )}

      {/* Glow Effect for Active Tier */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg pointer-events-none"></div>
      )}
    </div>
  );
}
