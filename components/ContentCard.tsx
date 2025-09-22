'use client';

import { Lock, Unlock, Play, FileText, Image as ImageIcon, Headphones } from 'lucide-react';
import type { ExclusiveContent } from '../lib/types';
import { cn, formatAmount } from '../lib/utils';

interface ContentCardProps {
  content: ExclusiveContent;
  isUnlocked?: boolean;
  variant?: 'locked' | 'unlocked';
  onUnlock?: () => void;
  className?: string;
}

const contentIcons = {
  video: Play,
  audio: Headphones,
  text: FileText,
  image: ImageIcon,
};

export function ContentCard({ 
  content, 
  isUnlocked = false, 
  variant = 'locked',
  onUnlock,
  className 
}: ContentCardProps) {
  const IconComponent = contentIcons[content.contentType];

  return (
    <div className={cn(
      'card p-4 transition-all duration-200',
      variant === 'locked' && 'opacity-75 border-dashed',
      variant === 'unlocked' && 'border-green-200 bg-green-50',
      className
    )}>
      {/* Content Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center',
            isUnlocked 
              ? 'bg-green-100 text-green-600' 
              : 'bg-gray-100 text-gray-400'
          )}>
            <IconComponent className="w-5 h-5" />
          </div>
          
          <div>
            <h4 className="body-lg font-medium text-text-primary">
              {content.title}
            </h4>
            <p className="body-sm text-text-secondary">
              {content.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {isUnlocked ? (
            <Unlock className="w-4 h-4 text-green-600" />
          ) : (
            <Lock className="w-4 h-4 text-gray-400" />
          )}
        </div>
      </div>

      {/* Unlock Requirements */}
      {!isUnlocked && (
        <div className="bg-gray-50 rounded-md p-3 mb-3">
          <div className="flex items-center justify-between">
            <span className="body-sm text-text-secondary">
              Unlock with tier {content.accessTier} or {formatAmount(content.unlockAmount)} tip
            </span>
            {onUnlock && (
              <button
                onClick={onUnlock}
                className="btn-primary text-xs px-3 py-1"
              >
                Unlock
              </button>
            )}
          </div>
        </div>
      )}

      {/* Content Preview/Access */}
      {isUnlocked ? (
        <button className="w-full btn-primary">
          <IconComponent className="w-4 h-4 mr-2" />
          Access Content
        </button>
      ) : (
        <div className="text-center py-4 text-text-secondary">
          <Lock className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p className="body-sm">Content locked</p>
        </div>
      )}
    </div>
  );
}
