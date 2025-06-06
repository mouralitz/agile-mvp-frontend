
import React from 'react';
import { Home, Users, Settings, Plus, List, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'Início', active: true },
    { icon: List, label: 'Produtos', active: false },
    { icon: Users, label: 'Artesãos', active: false },
    { icon: Plus, label: 'Cadastrar Produto', active: false },
    { icon: Calendar, label: 'Agenda', active: false },
    { icon: Settings, label: 'Configurações', active: false },
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
              <Button
                key={index}
                variant={item.active ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start space-x-3 h-12",
                  item.active 
                    ? "bg-gradient-to-r from-sage-600 to-sage-700 text-white" 
                    : "text-sage-700 hover:bg-sage-100"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
