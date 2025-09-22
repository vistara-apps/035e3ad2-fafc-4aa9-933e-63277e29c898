'use client';

import { GoalProgressProps } from '@/types';

export default function GoalProgress({ goal }: GoalProgressProps) {
  const progress = Math.min((goal.currentAmount / goal.targetAmount) * 100, 100);

  return (
    <div className="bg-surface p-4 rounded-lg shadow-card">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-text-primary">{goal.title}</h3>
        <span className="text-sm text-text-secondary">
          {goal.currentAmount} / {goal.targetAmount} ETH
        </span>
      </div>
      <p className="text-sm text-text-secondary mb-4">{goal.description}</p>

      <div className="w-full bg-border rounded-full h-2 mb-2">
        <div
          className="bg-accent h-2 rounded-full transition-all duration-base"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="text-xs text-text-secondary">
        {progress.toFixed(1)}% complete
      </div>
    </div>
  );
}

