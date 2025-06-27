

import React from 'react';
import { Home, Users, Plus, List } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}


const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const menuItems = [
    { icon: Home, label: 'Início', href: '/' },
    { icon: List, label: 'Produtos', href: '/products' },
    { icon: Users, label: 'Sobre Nós', href: '/about' },
    { icon: Plus, label: 'Contato', href: '/contact' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-sage-200 transform transition-transform duration-300 ease-in-out z-50",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "lg:translate-x-0 lg:static lg:z-auto"
      )}>
        <div className="p-6">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={cn(
                  "flex items-center w-full space-x-3 h-12 px-3 rounded transition",
                  location.pathname === item.href
                    ? "bg-gradient-to-r from-sage-600 to-sage-700 text-white"
                    : "text-sage-700 hover:bg-sage-100"
                )}
                onClick={onClose}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
