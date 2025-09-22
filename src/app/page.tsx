'use client';

import { useState } from 'react';
import AppShell from '@/components/AppShell';
import TipButton from '@/components/TipButton';
import TierCard from '@/components/TierCard';
import GoalProgress from '@/components/GoalProgress';
import ShoutOutForm from '@/components/ShoutOutForm';
import ContentCard from '@/components/ContentCard';
import { useBaseWallet } from '@/hooks/useBaseWallet';
import { useCreatorData } from '@/hooks/useCreatorData';
import { TippingTier, ExclusiveContent } from '@/types';

export default function GratitudeFlow() {
  const [selectedTier, setSelectedTier] = useState<TippingTier | null>(null);
  const [tipAmount, setTipAmount] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [isTipping, setIsTipping] = useState(false);

  // Mock creator ID - in real app, this would come from URL params or frame context
  const creatorId = 'creator-123';
  const { creator, loading, error } = useCreatorData(creatorId);
  const { isConnected, connectWallet, sendTip } = useBaseWallet();

  const handleTip = async () => {
    if (!isConnected) {
      connectWallet();
      return;
    }

    if (!tipAmount || parseFloat(tipAmount) <= 0) {
      alert('Please enter a valid tip amount');
      return;
    }

    setIsTipping(true);
    try {
      // Mock creator address - in real app, this would be the creator's wallet
      const creatorAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
      await sendTip(creatorAddress, tipAmount, customMessage || undefined);
      alert('Tip sent successfully!');
      setTipAmount('');
      setCustomMessage('');
      setSelectedTier(null);
    } catch (error) {
      console.error('Tip failed:', error);
      alert('Failed to send tip. Please try again.');
    } finally {
      setIsTipping(false);
    }
  };

  const handleShoutOut = (message: string) => {
    setCustomMessage(message);
  };

  const handleUnlockContent = (content: ExclusiveContent) => {
    // In real app, this would check if user has access
    alert(`Unlocking content: ${content.title}`);
  };

  if (loading) {
    return (
      <AppShell>
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-text-secondary">Loading creator data...</div>
        </div>
      </AppShell>
    );
  }

  if (error || !creator) {
    return (
      <AppShell>
        <div className="text-center text-red-500">
          Error loading creator data: {error}
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      {/* Creator Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
          {creator.fName.charAt(0)}
        </div>
        <h1 className="text-xl font-bold text-text-primary mb-1">
          Support {creator.fName}
        </h1>
        <p className="text-sm text-text-secondary">@{creator.fUsername}</p>
      </div>

      {/* Tipping Goals */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-text-primary mb-3">Current Goals</h2>
        <div className="space-y-3">
          {creator.tipGoals.map((goal) => (
            <GoalProgress key={goal.goalId} goal={goal} />
          ))}
        </div>
      </div>

      {/* Tipping Tiers */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-text-primary mb-3">Tipping Tiers</h2>
        <div className="grid gap-3">
          {creator.tippingTiers.map((tier) => (
            <TierCard
              key={tier.tierId}
              tier={tier}
              isActive={selectedTier?.tierId === tier.tierId}
              onSelect={() => {
                setSelectedTier(tier);
                setTipAmount(tier.minAmount.toString());
              }}
            />
          ))}
        </div>
      </div>

      {/* Tip Amount Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-text-primary mb-2">
          Tip Amount (ETH)
        </label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={tipAmount}
          onChange={(e) => setTipAmount(e.target.value)}
          className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          placeholder="0.00"
        />
      </div>

      {/* Personal Shout-out */}
      <div className="mb-6">
        <ShoutOutForm onSubmit={handleShoutOut} />
      </div>

      {/* Exclusive Content */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-text-primary mb-3">Exclusive Content</h2>
        <div className="space-y-3">
          {creator.exclusiveContent.map((content) => (
            <ContentCard
              key={content.contentId}
              content={content}
              isLocked={true} // In real app, check user's access
              onUnlock={() => handleUnlockContent(content)}
            />
          ))}
        </div>
      </div>

      {/* Tip Button */}
      <div className="text-center">
        <TipButton
          onClick={handleTip}
          disabled={isTipping || !tipAmount}
        >
          {isTipping ? 'Sending Tip...' : isConnected ? 'Send Tip' : 'Connect Wallet'}
        </TipButton>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-xs text-text-secondary">
        Powered by GratitudeFlow on Base
      </div>
    </AppShell>
  );
}

