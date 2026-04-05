import axios, { AxiosError } from 'axios';

// const API_URL = 'https://granitmaster34.ru/api';
const API_URL = 'https://granitmaster34.ru/api/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ReviewData {
  author: string;
  rating: number;
  text: string;
}

export interface Review extends ReviewData {
  id: number;
  date: string;
}

export interface ApiError {
  detail: string;
}

export const reviewsApi = {
  async getReviews(): Promise<Review[]> {
    try {
      const response = await api.get<Review[]>('/reviews/');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiError>;
        throw new Error(axiosError.response?.data?.detail || 'Ошибка при получении отзывов');
      }
      throw new Error('Произошла неизвестная ошибка');
    }
  },

  async createReview(review: ReviewData): Promise<Review> {
    try {
      const response = await api.post<Review>('/reviews/', review);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiError>;
        throw new Error(axiosError.response?.data?.detail || 'Ошибка при создании отзыва');
      }
      throw new Error('Произошла неизвестная ошибка');
    }
  }
};
