import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { ProductCard } from '../components/ui/ProductCard';

export function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center text-white">Категория не найдена</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="glass-container p-8 mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">{category.title}</h1>
          <p className="text-gray-300 text-lg">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, index) => (
            <ProductCard key={`${category.id}-${index}`} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}