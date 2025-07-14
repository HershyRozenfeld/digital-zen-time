import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Target, Trophy, Flame } from 'lucide-react';
export const QuickStats = () => {
    const stats = [
        {
            label: 'זמן גלישה היום',
            value: '4ש 32ד',
            icon: Clock,
            color: 'text-blue-600',
            bg: 'bg-blue-50'
        },
        {
            label: 'יעדים שהושגו',
            value: '3/5',
            icon: Target,
            color: 'text-green-600',
            bg: 'bg-green-50'
        },
        {
            label: 'באדג\'ים השבוע',
            value: '2',
            icon: Trophy,
            color: 'text-yellow-600',
            bg: 'bg-yellow-50'
        },
        {
            label: 'Streak פוקוס',
            value: '5 ימים',
            icon: Flame,
            color: 'text-orange-600',
            bg: 'bg-orange-50'
        }
    ];
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: stats.map((stat, index) => {
            const Icon = stat.icon;
            return (_jsx(Card, { className: "hover:shadow-md transition-shadow", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: `p-2 rounded-lg ${stat.bg}`, children: _jsx(Icon, { className: `h-5 w-5 ${stat.color}` }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-gray-600", children: stat.label }), _jsx("p", { className: "text-xl font-bold text-gray-900", children: stat.value })] })] }) }) }, index));
        }) }));
};
