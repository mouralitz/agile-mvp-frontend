
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-sage-50 via-white to-amber-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjNmNGY2IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sage-700 via-sage-600 to-amber-600 bg-clip-text text-transparent">
              Descubra o Melhor
            </span>
            <br />
            <span className="text-sage-900">
              do Artesanato Brasileiro
            </span>
          </h1>
          
          <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto">
            Conectamos você com artesãos talentosos de todo o Brasil. 
            Peças únicas, feitas com amor e tradição.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="inline-block">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-8 py-3 text-lg w-full sm:w-auto"
              >
                Explorar Produtos
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="border-sage-300 text-sage-700 hover:bg-sage-50 px-8 py-3 text-lg"
            >
              Seja um Artesão
            </Button>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-sage-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
