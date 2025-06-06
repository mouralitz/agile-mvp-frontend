
import React from 'react';

const CategorySection = () => {
  const categories = [
    { name: 'Cerâmica', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center', count: '120+ produtos' },
    { name: 'Tecidos', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center', count: '85+ produtos' },
    { name: 'Madeira', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center', count: '95+ produtos' },
    { name: 'Joias', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop&crop=center', count: '150+ produtos' },
    { name: 'Decoração', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop&crop=center', count: '200+ produtos' },
    { name: 'Acessórios', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop&crop=center', count: '75+ produtos' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sage-900 mb-4">
            Explore por Categoria
          </h2>
          <p className="text-sage-600 max-w-2xl mx-auto">
            Descubra peças únicas organizadas pelas tradições artesanais brasileiras
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="relative overflow-hidden rounded-lg mb-3 shadow-md">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-24 md:h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
              </div>
              <h3 className="font-semibold text-sage-900 group-hover:text-sage-700 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-sage-500">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
