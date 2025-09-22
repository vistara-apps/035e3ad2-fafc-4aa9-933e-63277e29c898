'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/minikit';
import { AppShell } from '../components/AppShell';
import { CreatorProfile } from '../components/CreatorProfile';
import { TippingInterface } from '../components/TippingInterface';
import { GoalTracker } from '../components/GoalTracker';
import { TierProgress } from '../components/TierProgress';
import { FloatingElements } from '../components/FloatingElements';
import { mockCreator, mockGoals, mockTiers } from '../lib/mockData';
import type { Creator, TipGoal, TippingTier } from '../lib/types';

export default function HomePage() {
  const { context } = useMiniKit();
  const [creator, setCreator] = useState<Creator>(mockCreator);
  const [goals, setGoals] = useState<TipGoal[]>(mockGoals);
  const [tiers, setTiers] = useState<TippingTier[]>(mockTiers);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading creator data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleTipSuccess = (amount: number) => {
    // Update goals progress
    setGoals(prevGoals => 
      prevGoals.map(goal => ({
        ...goal,
        currentAmount: Math.min(goal.currentAmount + amount, goal.targetAmount)
      }))
    );

    // Update creator total tips
    setCreator(prev => ({
      ...prev,
      tipHistory: [...prev.tipHistory, {
        tipId: Date.now().toString(),
        tipperId: context?.user?.fid?.toString() || 'anonymous',
        creatorId: prev.creatorId,
        amount,
        timestamp: new Date(),
        message: '',
        tierAchieved: 1,
        isPersonalized: false
      }]
    }));
  };

  if (isLoading) {
    return (
      <AppShell>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="body-lg text-text-secondary">Loading creator profile...</p>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <FloatingElements />
      
      <div className="space-y-6">
        {/* Creator Profile Section */}
        <CreatorProfile creator={creator} />

        {/* Goals Section */}
        <section className="space-y-4">
          <h2 className="heading-md text-text-primary">Current Goals</h2>
          <div className="space-y-4">
            {goals.map(goal => (
              <GoalTracker key={goal.goalId} goal={goal} />
            ))}
          </div>
        </section>

        {/* Tipping Tiers Section */}
        <section className="space-y-4">
          <h2 className="heading-md text-text-primary">Tipping Tiers</h2>
          <TierProgress tiers={tiers} currentTier={1} />
        </section>

        {/* Tipping Interface */}
        <TippingInterface 
          creator={creator}
          tiers={tiers}
          onTipSuccess={handleTipSuccess}
        />
      </div>
    </AppShell>
  );
}
