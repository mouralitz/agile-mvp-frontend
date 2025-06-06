
import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Vaso de Cerâmica Artesanal',
      artisan: 'Maria Santos',
      price: 89.90,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
      rating: 4.8,
      reviews: 24,
      category: 'Cerâmica'
    },
    {
      id: 2,
      name: 'Tapete Tear Manual',
      artisan: 'João Silva',
      price: 156.90,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center',
      rating: 4.9,
      reviews: 31,
      category: 'Tecidos'
    },
    {
      id: 3,
      name: 'Colar de Sementes',
      artisan: 'Ana Costa',
      price: 45.50,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&crop=center',
      rating: 4.7,
      reviews: 18,
      category: 'Joias'
    },
    {
      id: 4,
      name: 'Escultura em Madeira',
      artisan: 'Carlos Mendes',
      price: 234.00,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center',
      rating: 5.0,
      reviews: 12,
      category: 'Madeira'
    },
    {
      id: 5,
      name: 'Luminária de Bambu',
      artisan: 'Fernanda Lima',
      price: 129.90,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center',
      rating: 4.6,
      reviews: 27,
      category: 'Decoração'
    },
    {
      id: 6,
      name: 'Bolsa de Palha',
      artisan: 'Rosa Oliveira',
      price: 78.50,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&crop=center',
      rating: 4.8,
      reviews: 19,
      category: 'Acessórios'
    }
  ];

  return (
    <section className="py-16 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sage-900 mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-sage-600 max-w-2xl mx-auto">
            Selecionamos as peças mais especiais dos nossos artesãos parceiros
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
