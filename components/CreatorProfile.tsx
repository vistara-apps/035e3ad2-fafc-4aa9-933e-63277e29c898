'use client';

import Image from 'next/image';
import { User, MapPin, Calendar } from 'lucide-react';
import type { Creator } from '../lib/types';
import { cn } from '../lib/utils';

interface CreatorProfileProps {
  creator: Creator;
  className?: string;
}

export function CreatorProfile({ creator, className }: CreatorProfileProps) {
  const totalTips = creator.tipHistory.reduce((sum, tip) => sum + tip.amount, 0);
  const tipCount = creator.tipHistory.length;

  return (
    <div className={cn('card p-6 space-y-4', className)}>
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20">
            {creator.profilePicUrl ? (
              <Image
                src={creator.profilePicUrl}
                alt={creator.fName}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
            )}
          </div>
          {/* Online indicator */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="heading-md text-text-primary truncate">{creator.fName}</h2>
          <p className="body-sm text-text-secondary">@{creator.fUsername}</p>
          
          {/* Stats */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <span className="body-sm font-medium text-primary">${totalTips}</span>
              <span className="body-sm text-text-secondary">raised</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="body-sm font-medium text-accent">{tipCount}</span>
              <span className="body-sm text-text-secondary">tips</span>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Bio/Description */}
      <div className="space-y-2">
        <p className="body-sm text-text-primary">
          Creating amazing content and building something special. Every tip helps me reach my goals and create even better experiences for you! 🚀
        </p>
        
        <div className="flex items-center gap-4 text-text-secondary">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="body-sm">San Francisco</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span className="body-sm">Joined Dec 2023</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 pt-2">
        <button className="btn-secondary flex-1 text-sm">
          View Profile
        </button>
        <button className="btn-secondary flex-1 text-sm">
          Share
        </button>
      </div>
    </div>
  );
}
