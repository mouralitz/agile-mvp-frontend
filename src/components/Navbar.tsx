
import React, { useState } from 'react';
import { Menu, Search, User, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar = ({ onMenuToggle }: NavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-sage-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onMenuToggle}
              className="hover:bg-sage-100"
            >
              <Menu className="h-5 w-5 text-sage-700" />
            </Button>
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-sage-700 to-amber-600 bg-clip-text text-transparent">
                ArteCraft
              </h1>
            </div>
          </div>

          {/* Barra de Pesquisa */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-400 h-4 w-4" />
              <Input 
                placeholder="Buscar produtos artesanais..."
                className="pl-10 bg-sage-50 border-sage-200 focus:border-sage-400 focus:ring-sage-400"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-sage-100"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5 text-sage-700" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-sage-100">
              <Heart className="h-5 w-5 text-sage-700" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-sage-100">
              <ShoppingBag className="h-5 w-5 text-sage-700" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-sage-100">
              <User className="h-5 w-5 text-sage-700" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-400 h-4 w-4" />
              <Input 
                placeholder="Buscar produtos artesanais..."
                className="pl-10 bg-sage-50 border-sage-200 focus:border-sage-400 focus:ring-sage-400"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
