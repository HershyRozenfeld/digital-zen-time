import { getItem } from '@/lib/storage';
export class TimeTracker {
    constructor() {
        Object.defineProperty(this, "currentDomain", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        Object.defineProperty(this, "startTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "isActive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "idleThreshold", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 60 * 1000
        }); // 1 minute of inactivity
        Object.defineProperty(this, "lastActivity", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Date.now()
        });
    }
    static init() {
        if (!TimeTracker.instance) {
            TimeTracker.instance = new TimeTracker();
        }
        return TimeTracker.instance;
    }
    // Tracking is handled by the background service worker using Chrome APIs
    async getTodayData() {
        const today = new Date().toISOString().split('T')[0];
        const data = await getItem(`timetrack_daily_${today}`);
        return data || {};
    }
    async getWeeklyData() {
        const weeklyData = {};
        const today = new Date();
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const dayData = await getItem(`timetrack_daily_${dateStr}`);
            if (dayData) {
                weeklyData[dateStr] = dayData;
            }
        }
        return weeklyData;
    }
    async getDomainCategory(domain) {
        const categories = await getItem('timetrack_categories') || [];
        for (const category of categories) {
            if (category.domains.includes(domain)) {
                return category.name;
            }
        }
        return 'לא מסווג';
    }
    static getInstance() {
        return TimeTracker.instance || TimeTracker.init();
    }
}
