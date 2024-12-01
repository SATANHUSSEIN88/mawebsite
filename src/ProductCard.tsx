import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { dispatch } = useCart();

  return (
    <div 
      className="border border-gray-200 p-4 rounded-lg transition-all duration-300 hover:shadow-lg bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
          {product.id === 1 ? 'SPECIAL' : 'NEW'}
        </span>
        <img
          src={isHovered ? product.hoverImageUrl : product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md transition-opacity duration-300"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="mt-2 text-lg font-bold">{product.price} RUB</p>
      <button
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
        className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300"
      >
        ADD TO CART
      </button>
    </div>
  );
};