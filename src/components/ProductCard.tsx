'use client';

import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
      {/* Image Placeholder */}
      <div className="w-full h-64 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 font-semibold">
        {product.name}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="inline-block px-3 py-1 bg-solar-blue text-white rounded-full text-xs font-semibold mb-3">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </div>

        <h3 className="text-xl font-bold text-brown-dark mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-brown-dark mb-2">Key Features:</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-solar-blue mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-solar-blue text-white py-2 rounded-lg hover:bg-blue-600 transition font-semibold mt-4">
          Get Details
        </button>
      </div>
    </div>
  );
}