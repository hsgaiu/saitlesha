import React, { useState } from 'react';
import type { ReviewData } from '../../services/api';

interface ReviewFormProps {
  onSubmit: (review: ReviewData) => Promise<boolean>;
}

export function ReviewForm({ onSubmit }: ReviewFormProps) {
  const [review, setReview] = useState<ReviewData>({
    author: '',
    rating: 5,
    text: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const success = await onSubmit(review);
      if (success) {
        setReview({ author: '', rating: 5, text: '' });
      }
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Произошла ошибка при отправке формы');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-stone-100/10 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-stone-100">Оставить отзыв</h2>
      
      {formError && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md">
          {formError}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-stone-200 mb-1">
            Ваше имя
          </label>
          <input
            type="text"
            value={review.author}
            onChange={(e) => setReview({ ...review, author: e.target.value })}
            className="w-full px-3 py-2 bg-stone-100/10 border border-stone-200/20 rounded-md focus:ring-2 focus:ring-stone-400 focus:border-transparent text-stone-100"
            required
            minLength={2}
            maxLength={50}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-stone-200 mb-1">
            Ваш отзыв
          </label>
          <textarea
            value={review.text}
            onChange={(e) => setReview({ ...review, text: e.target.value })}
            className="w-full px-3 py-2 bg-stone-100/10 border border-stone-200/20 rounded-md focus:ring-2 focus:ring-stone-400 focus:border-transparent text-stone-100"
            rows={4}
            required
            minLength={10}
            maxLength={1000}
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full md:w-auto bg-stone-700 text-stone-100 px-6 py-2 rounded-md transition
            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-stone-600'}`}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить отзыв'}
        </button>
      </form>
    </div>
  );
}