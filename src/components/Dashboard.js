import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { TimeOverview } from '@/components/TimeOverview';
import { CategoryManager } from '@/components/CategoryManager';
import { ActivityChart } from '@/components/ActivityChart';
import { QuickStats } from '@/components/QuickStats';
import { RecentActivity } from '@/components/RecentActivity';
import { AchievementPanel } from '@/components/AchievementPanel';
import { getItem, setItem } from '@/lib/storage';
export const Dashboard = () => {
    const [timeData, setTimeData] = useState(null);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Load data from storage
        loadDashboardData();
        // Set up interval to refresh data
        const interval = setInterval(loadDashboardData, 5000);
        return () => clearInterval(interval);
    }, []);
    const loadDashboardData = async () => {
        const savedData = await getItem('timetrack_daily_data');
        const savedCategories = await getItem('timetrack_categories');
        if (savedData) {
            setTimeData(savedData);
        }
        if (savedCategories) {
            setCategories(savedCategories);
        }
        else {
            // Default categories
            const defaultCategories = [
                { id: '1', name: 'עבודה', color: '#3b82f6', domains: [] },
                { id: '2', name: 'לימודים', color: '#10b981', domains: [] },
                { id: '3', name: 'רשתות חברתיות', color: '#f59e0b', domains: ['facebook.com', 'instagram.com', 'twitter.com'] },
                { id: '4', name: 'בידור', color: '#ef4444', domains: ['youtube.com', 'netflix.com'] },
                { id: '5', name: 'חדשות', color: '#8b5cf6', domains: ['ynet.co.il', 'walla.co.il'] },
            ];
            setCategories(defaultCategories);
            await setItem('timetrack_categories', defaultCategories);
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsx(QuickStats, {}), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "lg:col-span-2 space-y-6", children: [_jsx(TimeOverview, {}), _jsx(ActivityChart, {})] }), _jsxs("div", { className: "space-y-6", children: [_jsx(AchievementPanel, {}), _jsx(CategoryManager, { categories: categories, onCategoriesChange: setCategories }), _jsx(RecentActivity, {})] })] })] }));
};
