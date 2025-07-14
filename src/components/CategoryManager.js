import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit2, Trash2, Globe } from 'lucide-react';
import { setItem } from '@/lib/storage';
export const CategoryManager = ({ categories, onCategoriesChange }) => {
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [newCategoryColor, setNewCategoryColor] = useState('#3b82f6');
    const [newDomain, setNewDomain] = useState('');
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16'];
    const addCategory = async () => {
        if (newCategoryName.trim()) {
            const newCategory = {
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
    const deleteCategory = async (categoryId) => {
        const updatedCategories = categories.filter(cat => cat.id !== categoryId);
        onCategoriesChange(updatedCategories);
        await setItem('timetrack_categories', updatedCategories);
    };
    const addDomainToCategory = async (categoryId, domain) => {
        if (!domain.trim())
            return;
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
    const removeDomainFromCategory = async (categoryId, domain) => {
        const updatedCategories = categories.map(cat => {
            if (cat.id === categoryId) {
                return { ...cat, domains: cat.domains.filter(d => d !== domain) };
            }
            return cat;
        });
        onCategoriesChange(updatedCategories);
        await setItem('timetrack_categories', updatedCategories);
    };
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs(CardTitle, { className: "flex items-center space-x-2", children: [_jsx(Globe, { className: "h-5 w-5" }), _jsx("span", { children: "\u05E0\u05D9\u05D4\u05D5\u05DC \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA" })] }), _jsxs(Button, { size: "sm", onClick: () => setIsAddingCategory(true), children: [_jsx(Plus, { className: "h-4 w-4 mr-1" }), "\u05D4\u05D5\u05E1\u05E3 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4"] })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [categories.map((category) => (_jsxs("div", { className: "border rounded-lg p-3 space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-4 h-4 rounded-full", style: { backgroundColor: category.color } }), _jsx("span", { className: "font-medium", children: category.name })] }), _jsxs("div", { className: "flex space-x-1", children: [_jsx(Button, { size: "sm", variant: "ghost", onClick: () => setEditingCategory(category), children: _jsx(Edit2, { className: "h-3 w-3" }) }), _jsx(Button, { size: "sm", variant: "ghost", onClick: () => deleteCategory(category.id), children: _jsx(Trash2, { className: "h-3 w-3" }) })] })] }), _jsx("div", { className: "flex flex-wrap gap-1", children: category.domains.map((domain) => (_jsxs(Badge, { variant: "secondary", className: "text-xs cursor-pointer hover:bg-red-100", onClick: () => removeDomainFromCategory(category.id, domain), children: [domain, " \u00D7"] }, domain))) }), _jsxs("div", { className: "flex space-x-2", children: [_jsx(Input, { placeholder: "\u05D4\u05D5\u05E1\u05E3 \u05D3\u05D5\u05DE\u05D9\u05D9\u05DF (\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: youtube.com)", value: newDomain, onChange: (e) => setNewDomain(e.target.value), className: "text-sm", onKeyPress: (e) => {
                                            if (e.key === 'Enter') {
                                                addDomainToCategory(category.id, newDomain);
                                            }
                                        } }), _jsx(Button, { size: "sm", onClick: () => addDomainToCategory(category.id, newDomain), children: "\u05D4\u05D5\u05E1\u05E3" })] })] }, category.id))), isAddingCategory && (_jsxs("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-4 space-y-3", children: [_jsx(Input, { placeholder: "\u05E9\u05DD \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4", value: newCategoryName, onChange: (e) => setNewCategoryName(e.target.value) }), _jsx("div", { className: "flex space-x-2", children: colors.map((color) => (_jsx("button", { className: `w-6 h-6 rounded-full border-2 ${newCategoryColor === color ? 'border-gray-900' : 'border-gray-300'}`, style: { backgroundColor: color }, onClick: () => setNewCategoryColor(color) }, color))) }), _jsxs("div", { className: "flex space-x-2", children: [_jsx(Button, { onClick: addCategory, children: "\u05E9\u05DE\u05D5\u05E8" }), _jsx(Button, { variant: "outline", onClick: () => setIsAddingCategory(false), children: "\u05D1\u05D9\u05D8\u05D5\u05DC" })] })] }))] })] }));
};
