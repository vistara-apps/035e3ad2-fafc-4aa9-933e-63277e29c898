'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Zap, Gift } from 'lucide-react';
import { TipButton } from './TipButton';
import { ShoutOutForm } from './ShoutOutForm';
import type { Creator, TippingTier } from '../lib/types';
import { cn, getTierForAmount } from '../lib/utils';

interface TippingInterfaceProps {
  creator: Creator;
  tiers: TippingTier[];
  onTipSuccess: (amount: number) => void;
  className?: string;
}

const QUICK_TIP_AMOUNTS = [5, 10, 25, 50];

export function TippingInterface({ 
  creator, 
  tiers, 
  onTipSuccess, 
  className 
}: TippingInterfaceProps) {
  const [selectedAmount, setSelectedAmount] = useState<number>(10);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showShoutOut, setShowShoutOut] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const currentTier = getTierForAmount(selectedAmount, tiers);
  const activeTier = tiers.find(t => t.level === currentTier);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      setSelectedAmount(numValue);
    }
  };

  const handleTip = async () => {
    if (selectedAmount <= 0) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate transaction processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      onTipSuccess(selectedAmount);
      
      // Reset form
      setSelectedAmount(10);
      setCustomAmount('');
      setShowShoutOut(false);
    } catch (error) {
      console.error('Tip failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={cn('space-y-6', className)}>
      {/* Quick Tip Amounts */}
      <div className="card p-6 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-primary" />
          <h3 className="heading-md text-text-primary">Send a Tip</h3>
        </div>

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {QUICK_TIP_AMOUNTS.map(amount => (
            <button
              key={amount}
              onClick={() => handleAmountSelect(amount)}
              className={cn(
                'p-3 rounded-md border-2 transition-all duration-200 text-center',
                selectedAmount === amount && !customAmount
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border hover:border-primary/50'
              )}
            >
              <div className="font-semibold">${amount}</div>
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="space-y-2">
          <label className="body-sm font-medium text-text-primary">
            Custom Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">$</span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              placeholder="Enter amount"
              className="w-full pl-8 pr-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              min="1"
              max="10000"
              step="0.01"
            />
          </div>
        </div>

        {/* Tier Preview */}
        {activeTier && (
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-md p-4 border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{activeTier.icon}</span>
              <span className="body-sm font-medium text-text-primary">
                Tier {activeTier.level} Reward
              </span>
            </div>
            <p className="body-sm text-text-secondary">
              {activeTier.rewardDescription}
            </p>
          </div>
        )}

        {/* Add Message Toggle */}
        <button
          onClick={() => setShowShoutOut(!showShoutOut)}
          className={cn(
            'w-full flex items-center justify-center gap-2 p-3 rounded-md border-2 transition-all duration-200',
            showShoutOut
              ? 'border-accent bg-accent/10 text-accent'
              : 'border-border hover:border-accent/50'
          )}
        >
          <MessageCircle className="w-4 h-4" />
          <span className="body-sm font-medium">
            {showShoutOut ? 'Hide Message' : 'Add Personal Message'}
          </span>
        </button>

        {/* Shout-out Form */}
        {showShoutOut && (
          <ShoutOutForm onSubmit={(message) => console.log('Message:', message)} />
        )}

        {/* Tip Button */}
        <TipButton
          amount={selectedAmount}
          onTip={handleTip}
          isProcessing={isProcessing}
          disabled={selectedAmount <= 0}
          variant="primary"
          className="w-full"
        />
      </div>

      {/* Recent Tips */}
      <div className="card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-accent" />
          <h3 className="heading-md text-text-primary">Recent Tips</h3>
        </div>

        <div className="space-y-3">
          {creator.tipHistory.slice(0, 3).map((tip, index) => (
            <div key={tip.tipId} className="flex items-center justify-between p-3 bg-bg/50 rounded-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Gift className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="body-sm font-medium text-text-primary">
                    Anonymous Tipper
                  </p>
                  <p className="text-xs text-text-secondary">
                    {new Date(tip.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="body-sm font-semibold text-primary">
                  ${tip.amount}
                </p>
                {tip.tierAchieved > 0 && (
                  <p className="text-xs text-accent">
                    Tier {tip.tierAchieved}
                  </p>
                )}
              </div>
            </div>
          ))}

          {creator.tipHistory.length === 0 && (
            <div className="text-center py-8">
              <Gift className="w-12 h-12 text-text-secondary/50 mx-auto mb-2" />
              <p className="body-sm text-text-secondary">
                Be the first to tip this creator!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
