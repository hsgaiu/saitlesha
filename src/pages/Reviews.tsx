import React, { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import { reviewsApi, type Review, type ReviewData } from '../services/api';
import { ReviewForm } from '../components/reviews/ReviewForm';
import { ReviewList } from '../components/reviews/ReviewList';

const ITEMS_PER_PAGE = 5;

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      setError(null);
      const data = await reviewsApi.getReviews();
      setReviews(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла неизвестная ошибка');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async (reviewData: ReviewData) => {
    try {
      setError(null);
      const newReview = await reviewsApi.createReview(reviewData);
      setReviews([newReview, ...reviews]);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла неизвестная ошибка');
      return false;
    }
  };

  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);
  const paginatedReviews = reviews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Отзывы наших клиентов
        </h1>
        
        <div className="glass-container mb-8">
          <ReviewForm onSubmit={handleSubmitReview} />
        </div>

        {error && (
          <div className="bg-red-500/20 text-red-100 p-4 rounded-md mb-6">
            {error}
          </div>
        )}
        
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader className="w-8 h-8 animate-spin text-white" />
          </div>
        ) : (
          <ReviewList
            reviews={paginatedReviews}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}