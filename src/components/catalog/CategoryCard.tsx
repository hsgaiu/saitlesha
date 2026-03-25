import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';
import type { Category } from '../../types/product';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/catalog/${category.id}`}
      className="glass-container group overflow-hidden"
    >
      <div className="aspect-square relative">
        <div className="absolute inset-0 product-image-bg">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <div className="flex items-center text-stone-100">
            <Bookmark className="w-5 h-5 mr-2" />
            <h3 className="text-xl font-semibold">{category.title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}