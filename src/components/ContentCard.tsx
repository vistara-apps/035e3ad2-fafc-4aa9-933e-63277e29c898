'use client';

import { ContentCardProps } from '@/types';
import TipButton from './TipButton';

export default function ContentCard({ content, isLocked, onUnlock }: ContentCardProps) {
  return (
    <div className="bg-surface p-4 rounded-lg shadow-card">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-text-primary">{content.title}</h3>
        {isLocked && (
          <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
            Locked
          </div>
        )}
      </div>

      <p className="text-sm text-text-secondary mb-4">{content.description}</p>

      {isLocked ? (
        <div className="text-center">
          <p className="text-sm text-text-secondary mb-3">
            Unlock with {content.unlockAmount} ETH tip or Tier {content.accessTier}
          </p>
          <TipButton onClick={onUnlock}>
            Unlock Content
          </TipButton>
        </div>
      ) : (
        <div className="text-center">
          <a
            href={content.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <TipButton variant="secondary" onClick={() => {}}>
              View Content
            </TipButton>
          </a>
        </div>
      )}
    </div>
  );
}

