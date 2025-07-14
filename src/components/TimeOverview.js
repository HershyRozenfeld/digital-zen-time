import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, TrendingUp, TrendingDown } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
export const TimeOverview = () => {
    const [todayTime, setTodayTime] = useState(0);
    const [weeklyAverage, setWeeklyAverage] = useState(0);
    const [trend, setTrend] = useState(0);
    useEffect(() => {
        // Simulate real data - replace with actual tracking data
        setTodayTime(4.5); // hours
        setWeeklyAverage(6.2);
        setTrend(-12); // percentage change
    }, []);
    const formatTime = (hours) => {
        const h = Math.floor(hours);
        const m = Math.round((hours - h) * 60);
        return `${h}ש ${m}ד`;
    };
    return (_jsxs(Card, { className: "bg-gradient-to-r from-indigo-500 to-purple-600 text-white", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center space-x-2", children: [_jsx(Clock, { className: "h-5 w-5" }), _jsx("span", { children: "\u05E1\u05E7\u05D9\u05E8\u05EA \u05D6\u05DE\u05DF \u05D9\u05D5\u05DE\u05D9\u05EA" })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("p", { className: "text-indigo-100 text-sm", children: "\u05D6\u05DE\u05DF \u05D2\u05DC\u05D9\u05E9\u05D4 \u05D4\u05D9\u05D5\u05DD" }), _jsx("p", { className: "text-3xl font-bold", children: formatTime(todayTime) })] }), _jsxs("div", { children: [_jsx("p", { className: "text-indigo-100 text-sm", children: "\u05DE\u05DE\u05D5\u05E6\u05E2 \u05E9\u05D1\u05D5\u05E2\u05D9" }), _jsx("p", { className: "text-2xl font-semibold", children: formatTime(weeklyAverage) })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-sm text-indigo-100", children: "\u05D9\u05E2\u05D3 \u05D9\u05D5\u05DE\u05D9: 6 \u05E9\u05E2\u05D5\u05EA" }), _jsxs("div", { className: "flex items-center space-x-1", children: [trend > 0 ? (_jsx(TrendingUp, { className: "h-4 w-4 text-green-300" })) : (_jsx(TrendingDown, { className: "h-4 w-4 text-green-300" })), _jsxs("span", { className: "text-sm text-green-300", children: [Math.abs(trend), "%"] })] })] }), _jsx(Progress, { value: (todayTime / 6) * 100, className: "bg-indigo-400" })] }), _jsx("div", { className: "bg-white/10 rounded-lg p-3 backdrop-blur-sm", children: _jsxs("p", { className: "text-sm text-indigo-100", children: ["\uD83D\uDCA1 ", _jsx("strong", { children: "\u05EA\u05D5\u05D1\u05E0\u05D4 \u05D7\u05DB\u05DE\u05D4:" }), " \u05D4\u05E9\u05D1\u05D5\u05E2 \u05D4\u05E7\u05D3\u05E9\u05EA ", Math.abs(trend), "% \u05E4\u05D7\u05D5\u05EA \u05D6\u05DE\u05DF \u05DC\u05D1\u05D9\u05D3\u05D5\u05E8 - \u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3!"] }) })] })] }));
};
