'use client';

import { GoalProgress } from './GoalProgress';
import type { TipGoal } from '../lib/types';

interface GoalTrackerProps {
  goal: TipGoal;
  className?: string;
}

export function GoalTracker({ goal, className }: GoalTrackerProps) {
  return <GoalProgress goal={goal} className={className} />;
}
