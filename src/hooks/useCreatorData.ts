'use client';

import { useState, useEffect } from 'react';
import { Creator } from '@/types';

export function useCreatorData(creatorId: string) {
  const [creator, setCreator] = useState<Creator | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCreatorData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/creator/${creatorId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch creator data');
        }

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error || 'Failed to load creator data');
        }

        setCreator(result.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load creator data');
      } finally {
        setLoading(false);
      }
    };

    if (creatorId) {
      fetchCreatorData();
    }
  }, [creatorId]);

  return { creator, loading, error };
}

