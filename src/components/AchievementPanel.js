import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Target, Flame, Star, Medal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
export const AchievementPanel = () => {
    const achievements = [
        {
            id: 1,
            title: 'פוקוס מאסטר',
            description: '5 ימים רצופים עם פחות מ-2 שעות רשתות חברתיות',
            icon: Target,
            earned: true,
            date: '2024-01-10'
        },
        {
            id: 2,
            title: 'בלאנס קינג',
            description: 'שבוע מאוזן בין עבודה לבידור',
            icon: Medal,
            earned: true,
            date: '2024-01-08'
        },
        {
            id: 3,
            title: 'Streak אלוף',
            description: '7 ימים רצופים של עמידה ביעדים',
            icon: Flame,
            earned: false,
            progress: 5
        },
        {
            id: 4,
            title: 'פרודוקטיביטי גורו',
            description: '30 שעות עבודה בשבוע',
            icon: Star,
            earned: false,
            progress: 22.4
        }
    ];
    const currentStreak = 5;
    const totalPoints = 1250;
    const level = 8;
    return (_jsxs(Card, { className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center space-x-2", children: [_jsx(Trophy, { className: "h-5 w-5" }), _jsx("span", { children: "\u05D4\u05D9\u05E9\u05D2\u05D9\u05DD \u05D5\u05D2\u05DE\u05D9\u05E4\u05D9\u05E7\u05E6\u05D9\u05D4" })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-3 gap-4 text-center", children: [_jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold", children: level }), _jsx("div", { className: "text-xs text-purple-100", children: "\u05E8\u05DE\u05D4" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold", children: totalPoints }), _jsx("div", { className: "text-xs text-purple-100", children: "\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA" })] }), _jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold", children: currentStreak }), _jsx("div", { className: "text-xs text-purple-100", children: "Streak" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium text-purple-100", children: "\u05D4\u05D9\u05E9\u05D2\u05D9\u05DD \u05D0\u05D7\u05E8\u05D5\u05E0\u05D9\u05DD" }), achievements.slice(0, 2).map((achievement) => {
                                const Icon = achievement.icon;
                                return (_jsxs("div", { className: "flex items-center space-x-2 bg-white/10 rounded-lg p-2", children: [_jsx(Icon, { className: "h-4 w-4 text-yellow-300" }), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "text-sm font-medium", children: achievement.title }), _jsx("div", { className: "text-xs text-purple-100", children: achievement.description })] }), achievement.earned && (_jsx(Badge, { variant: "secondary", className: "bg-yellow-500 text-yellow-900", children: "\u2713" }))] }, achievement.id));
                            })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium text-purple-100", children: "\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA" }), achievements.filter(a => !a.earned).slice(0, 1).map((achievement) => {
                                const Icon = achievement.icon;
                                const progressPercent = achievement.progress ? (achievement.progress / (achievement.id === 3 ? 7 : 30)) * 100 : 0;
                                return (_jsxs("div", { className: "bg-white/10 rounded-lg p-2", children: [_jsxs("div", { className: "flex items-center space-x-2 mb-1", children: [_jsx(Icon, { className: "h-4 w-4" }), _jsx("span", { className: "text-sm font-medium", children: achievement.title })] }), _jsx("div", { className: "w-full bg-white/20 rounded-full h-2", children: _jsx("div", { className: "bg-yellow-400 h-2 rounded-full transition-all duration-300", style: { width: `${progressPercent}%` } }) }), _jsxs("div", { className: "text-xs text-purple-100 mt-1", children: [achievement.progress, "/", achievement.id === 3 ? 7 : 30] })] }, achievement.id));
                            })] })] })] }));
};
