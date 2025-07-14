import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { BarChart3, PieChart as PieChartIcon, TrendingUp } from 'lucide-react';
export const ActivityChart = () => {
    const [chartType, setChartType] = useState('bar');
    const dailyData = [
        { day: 'א׳', hours: 6.2, work: 3.5, social: 1.2, entertainment: 1.5 },
        { day: 'ב׳', hours: 7.1, work: 4.2, social: 1.4, entertainment: 1.5 },
        { day: 'ג׳', hours: 5.8, work: 3.8, social: 1.0, entertainment: 1.0 },
        { day: 'ד׳', hours: 6.9, work: 4.1, social: 1.3, entertainment: 1.5 },
        { day: 'ה׳', hours: 5.2, work: 3.2, social: 1.1, entertainment: 0.9 },
        { day: 'ו׳', hours: 4.1, work: 2.1, social: 1.2, entertainment: 0.8 },
        { day: 'ש׳', hours: 3.8, work: 1.5, social: 1.3, entertainment: 1.0 },
    ];
    const categoryData = [
        { name: 'עבודה', value: 22.4, color: '#3b82f6' },
        { name: 'רשתות חברתיות', value: 8.5, color: '#f59e0b' },
        { name: 'בידור', value: 8.2, color: '#ef4444' },
        { name: 'לימודים', value: 6.1, color: '#10b981' },
        { name: 'חדשות', value: 3.2, color: '#8b5cf6' },
    ];
    const renderChart = () => {
        switch (chartType) {
            case 'pie':
                return (_jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: categoryData, cx: "50%", cy: "50%", outerRadius: 100, dataKey: "value", label: ({ name, value }) => `${name}: ${value}ש`, children: categoryData.map((entry, index) => (_jsx(Cell, { fill: entry.color }, `cell-${index}`))) }), _jsx(Tooltip, { formatter: (value) => [`${value} שעות`, 'זמן'] })] }) }));
            case 'line':
                return (_jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(LineChart, { data: dailyData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "day" }), _jsx(YAxis, {}), _jsx(Tooltip, { formatter: (value) => [`${value} שעות`, 'זמן'] }), _jsx(Line, { type: "monotone", dataKey: "hours", stroke: "#3b82f6", strokeWidth: 3 })] }) }));
            default:
                return (_jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: dailyData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "day" }), _jsx(YAxis, {}), _jsx(Tooltip, { formatter: (value) => [`${value} שעות`, 'קטגוריה'] }), _jsx(Bar, { dataKey: "work", stackId: "a", fill: "#3b82f6", name: "\u05E2\u05D1\u05D5\u05D3\u05D4" }), _jsx(Bar, { dataKey: "social", stackId: "a", fill: "#f59e0b", name: "\u05E8\u05E9\u05EA\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA" }), _jsx(Bar, { dataKey: "entertainment", stackId: "a", fill: "#ef4444", name: "\u05D1\u05D9\u05D3\u05D5\u05E8" })] }) }));
        }
    };
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(CardTitle, { children: "\u05E0\u05D9\u05EA\u05D5\u05D7 \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05E9\u05D1\u05D5\u05E2\u05D9" }), _jsxs("div", { className: "flex space-x-2", children: [_jsx(Button, { variant: chartType === 'bar' ? 'default' : 'outline', size: "sm", onClick: () => setChartType('bar'), children: _jsx(BarChart3, { className: "h-4 w-4" }) }), _jsx(Button, { variant: chartType === 'pie' ? 'default' : 'outline', size: "sm", onClick: () => setChartType('pie'), children: _jsx(PieChartIcon, { className: "h-4 w-4" }) }), _jsx(Button, { variant: chartType === 'line' ? 'default' : 'outline', size: "sm", onClick: () => setChartType('line'), children: _jsx(TrendingUp, { className: "h-4 w-4" }) })] })] }) }), _jsx(CardContent, { children: renderChart() })] }));
};
