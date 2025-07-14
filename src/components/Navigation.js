import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Clock, BarChart3, Settings, Shield, Focus } from 'lucide-react';
import { Button } from '@/components/ui/button';
export const Navigation = ({ currentView, onViewChange }) => {
    const navItems = [
        { id: 'dashboard', label: 'לוח הבקרה', icon: Clock },
        { id: 'analytics', label: 'ניתוחים', icon: BarChart3 },
        { id: 'focus', label: 'מצב פוקוס', icon: Focus },
        { id: 'settings', label: 'הגדרות', icon: Settings },
        { id: 'privacy', label: 'פרטיות', icon: Shield },
    ];
    return (_jsx("nav", { className: "bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsx("div", { className: "flex items-center space-x-4", children: _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Clock, { className: "h-8 w-8 text-indigo-600" }), _jsx("h1", { className: "text-xl font-bold text-gray-900", children: "TimeTrack" })] }) }), _jsx("div", { className: "flex items-center space-x-2", children: navItems.map((item) => {
                            const Icon = item.icon;
                            return (_jsxs(Button, { variant: currentView === item.id ? "default" : "ghost", size: "sm", onClick: () => onViewChange(item.id), className: "flex items-center space-x-2", children: [_jsx(Icon, { className: "h-4 w-4" }), _jsx("span", { className: "hidden md:inline", children: item.label })] }, item.id));
                        }) })] }) }) }));
};
