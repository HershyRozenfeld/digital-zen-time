import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Globe } from 'lucide-react';
export const RecentActivity = () => {
    const recentSites = [
        { domain: 'github.com', time: '1ש 23ד', category: 'עבודה', color: '#3b82f6' },
        { domain: 'youtube.com', time: '45ד', category: 'בידור', color: '#ef4444' },
        { domain: 'stackoverflow.com', time: '32ד', category: 'עבודה', color: '#3b82f6' },
        { domain: 'facebook.com', time: '28ד', category: 'רשתות חברתיות', color: '#f59e0b' },
        { domain: 'docs.google.com', time: '1ש 12ד', category: 'עבודה', color: '#3b82f6' },
    ];
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center space-x-2", children: [_jsx(Clock, { className: "h-5 w-5" }), _jsx("span", { children: "\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D0\u05D7\u05E8\u05D5\u05E0\u05D4" })] }) }), _jsxs(CardContent, { className: "space-y-3", children: [recentSites.map((site, index) => (_jsxs("div", { className: "flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx(Globe, { className: "h-4 w-4 text-gray-400" }), _jsxs("div", { children: [_jsx("div", { className: "font-medium text-sm", children: site.domain }), _jsxs("div", { className: "text-xs text-gray-500 flex items-center space-x-1", children: [_jsx("div", { className: "w-2 h-2 rounded-full", style: { backgroundColor: site.color } }), _jsx("span", { children: site.category })] })] })] }), _jsx("div", { className: "text-sm font-medium text-gray-900", children: site.time })] }, index))), _jsx("div", { className: "text-center pt-2", children: _jsx("button", { className: "text-sm text-indigo-600 hover:text-indigo-800", children: "\u05E6\u05E4\u05D4 \u05D1\u05DB\u05DC \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA" }) })] })] }));
};
