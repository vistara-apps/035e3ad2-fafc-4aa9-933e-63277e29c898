'use client';

import { Target, Calendar, TrendingUp } from 'lucide-react';
import type { TipGoal } from '../lib/types';
import { cn, formatAmount, formatPercentage, formatTimeRemaining } from '../lib/utils';

interface GoalProgressProps {
  goal: TipGoal;
  variant?: 'default';
  className?: string;
}

export function GoalProgress({ goal, variant = 'default', className }: GoalProgressProps) {
  const percentage = formatPercentage(goal.currentAmount, goal.targetAmount);
  const remaining = goal.targetAmount - goal.currentAmount;
  const isCompleted = goal.currentAmount >= goal.targetAmount;

  return (
    <div className={cn('card p-6 space-y-4', className)}>
      {/* Goal Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center',
            isCompleted 
              ? 'bg-green-100 text-green-600' 
              : 'bg-primary/10 text-primary'
          )}>
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="heading-md text-text-primary">{goal.title}</h3>
            <p className="body-sm text-text-secondary">{goal.description}</p>
          </div>
        </div>

        {goal.deadline && (
          <div className="flex items-center gap-1 text-text-secondary">
            <Calendar className="w-4 h-4" />
            <span className="text-xs">
              {formatTimeRemaining(goal.deadline)}
            </span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="body-sm text-text-secondary">Progress</span>
          <span className="body-sm font-medium text-text-primary">
            {percentage.toFixed(0)}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className={cn(
              'h-full transition-all duration-500 ease-out rounded-full',
              isCompleted 
                ? 'bg-gradient-to-r from-green-400 to-green-600' 
                : 'bg-gradient-to-r from-primary to-accent'
            )}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          >
            {/* Animated shine effect */}
            <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Goal Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="body-sm font-semibold text-primary">
            {formatAmount(goal.currentAmount)}
          </div>
          <div className="text-xs text-text-secondary">Raised</div>
        </div>
        
        <div className="text-center">
          <div className="body-sm font-semibold text-accent">
            {formatAmount(goal.targetAmount)}
          </div>
          <div className="text-xs text-text-secondary">Goal</div>
        </div>
        
        <div className="text-center">
          <div className={cn(
            'body-sm font-semibold',
            isCompleted ? 'text-green-600' : 'text-text-primary'
          )}>
            {isCompleted ? 'Complete!' : formatAmount(remaining)}
          </div>
          <div className="text-xs text-text-secondary">
            {isCompleted ? '🎉' : 'Remaining'}
          </div>
        </div>
      </div>

      {/* Goal Image */}
      {goal.imageUrl && (
        <div className="rounded-md overflow-hidden">
          <img
            src={goal.imageUrl}
            alt={goal.title}
            className="w-full h-32 object-cover"
          />
        </div>
      )}

      {/* Success State */}
      {isCompleted && (
        <div className="bg-green-50 border border-green-200 rounded-md p-3 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <div>
            <p className="body-sm font-medium text-green-800">Goal Achieved!</p>
            <p className="text-xs text-green-600">
              Thank you for helping reach this milestone! 🎉
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
