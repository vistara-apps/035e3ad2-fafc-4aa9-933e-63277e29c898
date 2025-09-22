'use client';

import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { cn } from '../lib/utils';

interface ShoutOutFormProps {
  onSubmit: (message: string) => void;
  variant?: 'default';
  className?: string;
}

export function ShoutOutForm({ onSubmit, variant = 'default', className }: ShoutOutFormProps) {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onSubmit(message.trim());
      setMessage('');
    } catch (error) {
      console.error('Failed to submit message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const remainingChars = 280 - message.length;

  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center gap-2">
        <MessageCircle className="w-5 h-5 text-accent" />
        <h4 className="body-lg font-medium text-text-primary">
          Add a Personal Message
        </h4>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share why you're supporting this creator, ask a question, or just say hi! 👋"
            className="w-full p-3 border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            rows={3}
            maxLength={280}
          />
          
          {/* Character counter */}
          <div className="absolute bottom-2 right-2 text-xs text-text-secondary">
            {remainingChars}
          </div>
        </div>

        {/* Message options */}
        <div className="flex flex-wrap gap-2">
          {[
            "Thanks for the amazing content! 🙌",
            "Keep up the great work! 💪",
            "Love what you're creating! ❤️",
            "Can't wait to see what's next! 🚀"
          ].map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setMessage(suggestion)}
              className="text-xs px-3 py-1 bg-bg border border-border rounded-full hover:border-primary/50 transition-colors duration-200"
            >
              {suggestion}
            </button>
          ))}
        </div>

        <button
          type="submit"
          disabled={!message.trim() || isSubmitting}
          className="btn-secondary w-full flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Adding...' : 'Add Message'}</span>
        </button>
      </form>

      {/* Privacy note */}
      <p className="text-xs text-text-secondary">
        Your message will be shared with the creator along with your tip. 
        Keep it positive and respectful! 😊
      </p>
    </div>
  );
}
