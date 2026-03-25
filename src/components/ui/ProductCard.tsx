import React from 'react';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isPNG = product.images[0]?.toLowerCase().endsWith('.png');

  return (
    <div className="glass-container overflow-hidden group transition-all duration-300 hover:shadow-xl">
      <div className="aspect-square relative overflow-hidden">
        <div className={isPNG ? "product-image-bg w-full h-full" : "w-full h-full"}>
          <img
            src={product.images[0]}
            alt={product.title}
            className="object-contain w-full h-full p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="p-6 bg-white/10 backdrop-blur-sm">
        <h3 className="text-lg font-semibold mb-3 text-white">
          {product.title}
        </h3>
        <div className="space-y-2">
          {product.material && (
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Материал:</span> {product.material}
            </p>
          )}
          {product.material1 && (
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Материал:</span> {product.material1}
            </p>
          )}
          {product.rack && (
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Стойка:</span> {product.rack}
            </p>
          )}
          {product.belt && (
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Пояс:</span> {product.belt}
            </p>
          )}
          {product.drawing && (
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Рисунок:</span> {product.drawing}
            </p>
          )}
          {product.drawing1 && (
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Рисунок:</span> {product.drawing1}
            </p>
          )}
          {product.base && (
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Основание:</span> {product.base}
            </p>
          )}
          {product.top && (
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Верх:</span> {product.top}
            </p>
          )}
          {product.legs && (
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Ноги:</span> {product.legs}
            </p>
          )}
          {product.seat && (
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Сидушка:</span> {product.seat}
            </p>
          )}
          {product.table_top && (
            <p className="text-gray-300 text-sm">
              <span className="font-semibold">Столешница:</span> {product.table_top}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}