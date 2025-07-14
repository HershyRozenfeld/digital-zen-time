
import React from 'react';
import { Clock, BarChart3, Settings, Shield, Focus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'לוח הבקרה', icon: Clock },
    { id: 'analytics', label: 'ניתוחים', icon: BarChart3 },
    { id: 'focus', label: 'מצב פוקוס', icon: Focus },
    { id: 'settings', label: 'הגדרות', icon: Settings },
    { id: 'privacy', label: 'פרטיות', icon: Shield },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-900">TimeTrack</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onViewChange(item.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
