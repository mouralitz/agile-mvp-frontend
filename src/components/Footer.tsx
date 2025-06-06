
import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              ArteCraft
            </h3>
            <p className="text-sage-300 mb-4 max-w-md">
              Conectando você com o melhor do artesanato brasileiro. 
              Valorizamos a tradição, a qualidade e o trabalho manual.
            </p>
            <div className="flex items-center space-x-2 text-sage-300">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-400 fill-red-400" />
              <span>para nossos artesãos</span>
            </div>
          </div>
          
          {/* Links úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sage-300">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Seja um Artesão</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sage-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@artecraft.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sage-800 mt-8 pt-8 text-center text-sage-400">
          <p>&copy; 2024 ArteCraft. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
