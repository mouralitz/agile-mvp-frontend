import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center text-sage-700">Carregando...</div>;

  return (
    <section className="max-w-5xl mx-auto p-8 mt-8">
      <h2 className="text-3xl font-bold mb-8 text-sage-800">Produtos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-4" />
            <h3 className="text-xl font-semibold text-sage-700 mb-2">{product.name}</h3>
            <p className="text-sage-500 mb-2">{product.description}</p>
            <span className="text-lg font-bold text-amber-600 mb-2">R$ {product.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
