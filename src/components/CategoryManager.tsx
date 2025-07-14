
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit2, Trash2, Globe } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { setItem } from '@/lib/storage';

interface Category {
  id: string;
  name: string;
  color: string;
  domains: string[];
}

interface CategoryManagerProps {
  categories: Category[];
  onCategoriesChange: (categories: Category[]) => void;
}

export const CategoryManager: React.FC<CategoryManagerProps> = ({ categories, onCategoriesChange }) => {
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('#3b82f6');
  const [newDomain, setNewDomain] = useState('');

  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16'];

  const addCategory = async () => {
    if (newCategoryName.trim()) {
      const newCategory: Category = {
        id: Date.now().toString(),
        name: newCategoryName,
        color: newCategoryColor,
        domains: []
      };
      const updatedCategories = [...categories, newCategory];
      onCategoriesChange(updatedCategories);
      await setItem('timetrack_categories', updatedCategories);
      setNewCategoryName('');
      setIsAddingCategory(false);
    }
  };

  const deleteCategory = async (categoryId: string) => {
    const updatedCategories = categories.filter(cat => cat.id !== categoryId);
    onCategoriesChange(updatedCategories);
    await setItem('timetrack_categories', updatedCategories);
  };

  const addDomainToCategory = async (categoryId: string, domain: string) => {
    if (!domain.trim()) return;
    
    const updatedCategories = categories.map(cat => {
      if (cat.id === categoryId) {
        return { ...cat, domains: [...cat.domains, domain.trim()] };
      }
      return cat;
    });
    onCategoriesChange(updatedCategories);
    await setItem('timetrack_categories', updatedCategories);
    setNewDomain('');
  };

  const removeDomainFromCategory = async (categoryId: string, domain: string) => {
    const updatedCategories = categories.map(cat => {
      if (cat.id === categoryId) {
        return { ...cat, domains: cat.domains.filter(d => d !== domain) };
      }
      return cat;
    });
    onCategoriesChange(updatedCategories);
    await setItem('timetrack_categories', updatedCategories);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5" />
            <span>ניהול קטגוריות</span>
          </CardTitle>
          <Button size="sm" onClick={() => setIsAddingCategory(true)}>
            <Plus className="h-4 w-4 mr-1" />
            הוסף קטגוריה
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="border rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: category.color }}
                />
                <span className="font-medium">{category.name}</span>
              </div>
              <div className="flex space-x-1">
                <Button size="sm" variant="ghost" onClick={() => setEditingCategory(category)}>
                  <Edit2 className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => deleteCategory(category.id)}>
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {category.domains.map((domain) => (
                <Badge 
                  key={domain} 
                  variant="secondary" 
                  className="text-xs cursor-pointer hover:bg-red-100"
                  onClick={() => removeDomainFromCategory(category.id, domain)}
                >
                  {domain} ×
                </Badge>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Input
                placeholder="הוסף דומיין (לדוגמה: youtube.com)"
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
                className="text-sm"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addDomainToCategory(category.id, newDomain);
                  }
                }}
              />
              <Button 
                size="sm" 
                onClick={() => addDomainToCategory(category.id, newDomain)}
              >
                הוסף
              </Button>
            </div>
          </div>
        ))}

        {isAddingCategory && (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 space-y-3">
            <Input
              placeholder="שם הקטגוריה"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
            <div className="flex space-x-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border-2 ${newCategoryColor === color ? 'border-gray-900' : 'border-gray-300'}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setNewCategoryColor(color)}
                />
              ))}
            </div>
            <div className="flex space-x-2">
              <Button onClick={addCategory}>שמור</Button>
              <Button variant="outline" onClick={() => setIsAddingCategory(false)}>ביטול</Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
