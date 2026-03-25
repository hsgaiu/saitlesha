import React from 'react';
import type { Review } from '../../services/api';
import { ReviewCard } from './ReviewCard';
import { Pagination } from '../ui/Pagination';

interface ReviewListProps {
  reviews: Review[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function ReviewList({ reviews, currentPage, totalPages, onPageChange }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 glass-container">
        <p className="text-gray-300">Пока нет отзывов. Будьте первым!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
}