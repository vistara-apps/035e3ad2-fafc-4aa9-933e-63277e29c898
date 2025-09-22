'use client';

import { Heart, Star, Gift, Zap, Music, Sparkles } from 'lucide-react';

const floatingElements = [
  { icon: Heart, color: 'text-pink-400', delay: '0s', position: 'top-20 left-10' },
  { icon: Star, color: 'text-yellow-400', delay: '1s', position: 'top-32 right-16' },
  { icon: Gift, color: 'text-purple-400', delay: '2s', position: 'top-48 left-20' },
  { icon: Zap, color: 'text-blue-400', delay: '0.5s', position: 'top-64 right-12' },
  { icon: Music, color: 'text-green-400', delay: '1.5s', position: 'bottom-40 left-16' },
  { icon: Sparkles, color: 'text-indigo-400', delay: '2.5s', position: 'bottom-32 right-20' },
];

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingElements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <div
            key={index}
            className={`floating-element ${element.position} ${element.color} opacity-20`}
            style={{
              animationDelay: element.delay,
              animationDuration: '3s',
            }}
          >
            <IconComponent className="w-6 h-6" />
          </div>
        );
      })}
      
      {/* Additional decorative elements */}
      <div className="absolute top-16 right-8 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 left-8 w-3 h-3 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-48 right-16 w-5 h-5 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-24 left-12 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
}
