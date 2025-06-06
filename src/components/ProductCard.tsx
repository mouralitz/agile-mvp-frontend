
import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  artisan: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm border border-sage-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-sage-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <div className="absolute top-3 left-3">
          <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-sage-900 group-hover:text-sage-700 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-sm text-sage-600">{product.rating}</span>
            <span className="text-xs text-sage-400">({product.reviews})</span>
          </div>
        </div>
        
        <p className="text-sm text-sage-600 mb-3">por {product.artisan}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-sage-900">
            R$ {product.price.toFixed(2)}
          </span>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white"
          >
            Ver Detalhes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
