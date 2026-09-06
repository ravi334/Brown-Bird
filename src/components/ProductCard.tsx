'use client';

import { Product } from '@/data/products';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const categoryImages: Record<Product['category'], string> = {
    'solar-panel': 'https://www.upsinverter.com/wp-content/uploads/2026/06/Solar-Panel-1-1024x1024.png',
    battery: 'https://www.upsinverter.com/wp-content/uploads/2026/06/Inverter-Battery-1-1024x1024.png',
    inverter: 'https://www.upsinverter.com/wp-content/uploads/2026/06/Home-Inverter-1-1024x1024.png',
    ups: 'https://www.upsinverter.com/wp-content/uploads/2026/06/Home-Inverter-1-1024x1024.png',
    'solar-pcu': 'https://www.upsinverter.com/wp-content/uploads/2026/06/Solar-Inverter-1-1024x1024.png',
    'solar-system': 'https://www.upsinverter.com/wp-content/uploads/2026/06/Rooftop-Solar-Solution-1-1024x1024.png',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-slate-100 p-4">
        <img
          src={product.image.startsWith('http') ? product.image : categoryImages[product.category]}
          alt={product.name}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex gap-2 mb-3">
          <span className="inline-block px-3 py-1 bg-solar-blue text-white rounded-full text-xs font-semibold">
            {product.category.replace('-', ' ').toUpperCase()}
          </span>
          {product.subcategory && (
            <span className="inline-block px-3 py-1 bg-gray-200 text-brown-dark rounded-full text-xs font-semibold">
              {product.subcategory}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-brown-dark mb-2">{product.name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>

        {/* Key Specifications Summary */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-sm text-brown-dark mb-2">Key Specs:</h4>
          <div className="space-y-1 text-xs text-gray-700">
            {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="font-medium">{key}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-brown-dark mb-2">Features:</h4>
          <ul className="space-y-1 text-xs text-gray-700">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-solar-blue mr-2 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {product.features.length > 3 && (
            <p className="text-xs text-solar-blue font-semibold mt-2">
              +{product.features.length - 3} more features
            </p>
          )}
        </div>

        {/* Details Button */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full bg-solar-blue text-white py-2 rounded-lg hover:bg-blue-600 transition font-semibold text-sm mb-2"
        >
          {showDetails ? 'Hide Details' : 'View Full Specs'}
        </button>

        {/* Full Details (Expandable) */}
        {showDetails && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 max-h-96 overflow-y-auto">
            <h4 className="font-bold text-brown-dark mb-3">Complete Specifications:</h4>
            <table className="w-full text-xs">
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-200">
                    <td className="py-2 font-semibold text-brown-dark pr-2 align-top">{key}:</td>
                    <td className="py-2 text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4 className="font-bold text-brown-dark mt-4 mb-2">All Features:</h4>
            <ul className="space-y-1">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-xs text-gray-700">
                  <span className="text-solar-blue mr-2 font-bold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {product.technology && (
              <div className="mt-3 p-2 bg-blue-50 rounded border border-solar-blue">
                <span className="text-xs font-semibold text-brown-dark">Technology: </span>
                <span className="text-xs text-gray-700">{product.technology}</span>
              </div>
            )}

            {product.application && (
              <div className="mt-2 p-2 bg-green-50 rounded border border-green-300">
                <span className="text-xs font-semibold text-brown-dark">Application: </span>
                <span className="text-xs text-gray-700">{product.application}</span>
              </div>
            )}
          </div>
        )}

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-brown-dark to-brown-light text-white py-2 rounded-lg hover:from-brown-light hover:to-brown-dark transition font-semibold text-sm mt-2">
          Get Quote & Details
        </button>
      </div>
    </div>
  );
}