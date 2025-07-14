import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, BarChart3, Target, Trophy, Shield, ArrowRight, ArrowLeft } from 'lucide-react';
export const Onboarding = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        {
            title: 'ברוכים הבאים ל-TimeTrack!',
            description: 'המערכת החכמה והמתקדמת ביותר לניטור וניהול זמן הגלישה שלכם באינטרנט',
            icon: Clock,
            content: (_jsxs("div", { className: "text-center space-y-4", children: [_jsx("div", { className: "w-20 h-20 mx-auto bg-indigo-100 rounded-full flex items-center justify-center", children: _jsx(Clock, { className: "h-10 w-10 text-indigo-600" }) }), _jsx("p", { className: "text-gray-600", children: "TimeTrack \u05E2\u05D5\u05D6\u05E8 \u05DC\u05DB\u05DD \u05DC\u05D4\u05D1\u05D9\u05DF \u05D1\u05D3\u05D9\u05D5\u05E7 \u05D0\u05D9\u05DA \u05D0\u05EA\u05DD \u05DE\u05D1\u05DC\u05D9\u05DD \u05D0\u05EA \u05D6\u05DE\u05E0\u05DB\u05DD \u05D1\u05E8\u05E9\u05EA \u05D5\u05DC\u05E9\u05E4\u05E8 \u05D0\u05EA \u05D4\u05D4\u05EA\u05E0\u05D4\u05D2\u05D5\u05EA \u05D4\u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05EA \u05E9\u05DC\u05DB\u05DD" })] }))
        },
        {
            title: 'ניטור אוטומטי חכם',
            description: 'המערכת עוקבת אחר זמן הגלישה שלכם בכל אתר ומסווגת אותם לקטגוריות',
            icon: BarChart3,
            content: (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [_jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [_jsx("div", { className: "w-3 h-3 bg-blue-500 rounded-full" }), _jsx("span", { className: "font-medium", children: "\u05E2\u05D1\u05D5\u05D3\u05D4" })] }), _jsx("div", { className: "text-2xl font-bold text-blue-600", children: "3.5 \u05E9\u05E2\u05D5\u05EA" })] }), _jsxs("div", { className: "bg-red-50 p-3 rounded-lg", children: [_jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [_jsx("div", { className: "w-3 h-3 bg-red-500 rounded-full" }), _jsx("span", { className: "font-medium", children: "\u05D1\u05D9\u05D3\u05D5\u05E8" })] }), _jsx("div", { className: "text-2xl font-bold text-red-600", children: "1.2 \u05E9\u05E2\u05D5\u05EA" })] })] }), _jsx("p", { className: "text-sm text-gray-600", children: "\u05DB\u05DC \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E0\u05E9\u05DE\u05E8\u05D9\u05DD \u05DE\u05E7\u05D5\u05DE\u05D9\u05EA \u05D1\u05DE\u05D7\u05E9\u05D1 \u05E9\u05DC\u05DB\u05DD - \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA\u05DB\u05DD \u05DE\u05D5\u05D1\u05D8\u05D7\u05EA!" })] }))
        },
        {
            title: 'יעדים ומעקב התקדמות',
            description: 'הגדירו יעדים אישיים וקבלו התראות חכמות כשאתם מתקרבים אליהם',
            icon: Target,
            content: (_jsx("div", { className: "space-y-4", children: _jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "font-medium", children: "\u05D9\u05E2\u05D3 \u05E8\u05E9\u05EA\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA \u05D9\u05D5\u05DE\u05D9" }), _jsx("span", { className: "text-green-600 font-bold", children: "45\u05D3 / 60\u05D3" })] }), _jsx("div", { className: "w-full bg-green-200 rounded-full h-2", children: _jsx("div", { className: "bg-green-500 h-2 rounded-full", style: { width: '75%' } }) }), _jsx("p", { className: "text-sm text-green-600 mt-1", children: "\u05E0\u05E9\u05D0\u05E8\u05D5 \u05DC\u05DB\u05DD 15 \u05D3\u05E7\u05D5\u05EA - \u05D0\u05EA\u05DD \u05D1\u05D3\u05E8\u05DA \u05D4\u05E0\u05DB\u05D5\u05E0\u05D4! \uD83C\uDFAF" })] }) }))
        },
        {
            title: 'גמיפיקציה ומוטיבציה',
            description: 'זכו בבאדג\'ים, צברו נקודות והתקדמו ברמות בזמן שאתם משפרים את ההרגלים שלכם',
            icon: Trophy,
            content: (_jsx("div", { className: "space-y-4", children: _jsxs("div", { className: "grid grid-cols-3 gap-4", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-12 h-12 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-2", children: _jsx(Trophy, { className: "h-6 w-6 text-yellow-600" }) }), _jsx("div", { className: "text-sm font-medium", children: "\u05E8\u05DE\u05D4 8" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-2", children: _jsx(Target, { className: "h-6 w-6 text-purple-600" }) }), _jsx("div", { className: "text-sm font-medium", children: "1,250 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-2", children: _jsx("span", { className: "text-2xl", children: "\uD83D\uDD25" }) }), _jsx("div", { className: "text-sm font-medium", children: "5 \u05D9\u05DE\u05D9\u05DD Streak" })] })] }) }))
        },
        {
            title: 'פרטיות מוחלטת',
            description: 'כל המידע נשמר אצלכם במחשב. אף נתון לא נשלח החוצה - הכל שלכם!',
            icon: Shield,
            content: (_jsxs("div", { className: "text-center space-y-4", children: [_jsx("div", { className: "w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center", children: _jsx(Shield, { className: "h-10 w-10 text-green-600" }) }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-center space-x-2 text-green-600", children: [_jsx("span", { children: "\u2713" }), _jsx("span", { children: "\u05DB\u05DC \u05D4\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05E0\u05E9\u05DE\u05E8\u05D9\u05DD \u05DE\u05E7\u05D5\u05DE\u05D9\u05EA" })] }), _jsxs("div", { className: "flex items-center justify-center space-x-2 text-green-600", children: [_jsx("span", { children: "\u2713" }), _jsx("span", { children: "\u05D0\u05D9\u05DF \u05E9\u05DC\u05D9\u05D7\u05EA \u05DE\u05D9\u05D3\u05E2 \u05DC\u05E9\u05E8\u05EA\u05D9\u05DD \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D9\u05DD" })] }), _jsxs("div", { className: "flex items-center justify-center space-x-2 text-green-600", children: [_jsx("span", { children: "\u2713" }), _jsx("span", { children: "\u05E9\u05DC\u05D9\u05D8\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05E2\u05DC \u05D4\u05DE\u05D9\u05D3\u05E2 \u05E9\u05DC\u05DB\u05DD" })] })] })] }))
        }
    ];
    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
        else {
            onComplete();
        }
    };
    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };
    const currentStepData = steps[currentStep];
    const Icon = currentStepData.icon;
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4", children: _jsx(Card, { className: "w-full max-w-md", children: _jsxs(CardContent, { className: "p-8", children: [_jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsxs("span", { className: "text-sm text-gray-500", children: ["\u05E9\u05DC\u05D1 ", currentStep + 1, " \u05DE\u05EA\u05D5\u05DA ", steps.length] }), _jsxs("span", { className: "text-sm text-gray-500", children: [Math.round(((currentStep + 1) / steps.length) * 100), "%"] })] }), _jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: _jsx("div", { className: "bg-indigo-600 h-2 rounded-full transition-all duration-300", style: { width: `${((currentStep + 1) / steps.length) * 100}%` } }) })] }), _jsxs("div", { className: "text-center space-y-6", children: [_jsxs("div", { children: [_jsx(Icon, { className: "h-8 w-8 text-indigo-600 mx-auto mb-4" }), _jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-2", children: currentStepData.title }), _jsx("p", { className: "text-gray-600 text-sm", children: currentStepData.description })] }), _jsx("div", { className: "py-4", children: currentStepData.content })] }), _jsxs("div", { className: "flex justify-between mt-8", children: [_jsxs(Button, { variant: "outline", onClick: prevStep, disabled: currentStep === 0, className: "flex items-center space-x-2", children: [_jsx(ArrowRight, { className: "h-4 w-4" }), _jsx("span", { children: "\u05D4\u05E7\u05D5\u05D3\u05DD" })] }), _jsxs(Button, { onClick: nextStep, className: "flex items-center space-x-2", children: [_jsx("span", { children: currentStep === steps.length - 1 ? 'בואו נתחיל!' : 'הבא' }), _jsx(ArrowLeft, { className: "h-4 w-4" })] })] })] }) }) }));
};
