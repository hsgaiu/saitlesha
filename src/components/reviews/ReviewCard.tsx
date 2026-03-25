import React from 'react';
import type { Review } from '../../services/api';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="glass-container p-6 transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-stone-100">{review.author}</h3>
      </div>
      <p className="text-stone-300 whitespace-pre-line">{review.text}</p>
    </div>
  );
}