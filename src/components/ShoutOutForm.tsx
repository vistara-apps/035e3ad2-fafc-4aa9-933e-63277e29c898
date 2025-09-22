'use client';

import { useState } from 'react';
import { ShoutOutFormProps } from '@/types';
import TipButton from './TipButton';

export default function ShoutOutForm({ onSubmit }: ShoutOutFormProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSubmit(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-surface p-4 rounded-lg shadow-card">
      <h3 className="font-semibold text-text-primary mb-3">Personal Shout-out</h3>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Add a personal message for the creator..."
        className="w-full p-3 border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        rows={3}
        maxLength={280}
      />
      <div className="flex justify-between items-center mt-3">
        <span className="text-xs text-text-secondary">
          {message.length}/280 characters
        </span>
        <TipButton
          onClick={() => {}}
          disabled={!message.trim()}
        >
          Send Shout-out
        </TipButton>
      </div>
    </form>
  );
}

