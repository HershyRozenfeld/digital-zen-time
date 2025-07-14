
import { getItem } from '@/lib/storage';

export interface TimeEntry {
  domain: string;
  time: number; // in seconds
  date: string;
  category?: string;
}

export interface DailyData {
  [domain: string]: number;
}

export interface WeeklyData {
  [date: string]: DailyData;
}

export class TimeTracker {
  private static instance: TimeTracker;
  private currentDomain: string = '';
  private startTime: number = 0;
  private isActive: boolean = true;
  private idleThreshold: number = 60 * 1000; // 1 minute of inactivity
  private lastActivity: number = Date.now();

  static init(): TimeTracker {
    if (!TimeTracker.instance) {
      TimeTracker.instance = new TimeTracker();
    }
    return TimeTracker.instance;
  }

  // Tracking is handled by the background service worker using Chrome APIs

  async getTodayData(): Promise<DailyData> {
    const today = new Date().toISOString().split('T')[0];
    const data = await getItem(`timetrack_daily_${today}`);
    return data || {};
  }

  async getWeeklyData(): Promise<WeeklyData> {
    const weeklyData: WeeklyData = {};
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

  async getDomainCategory(domain: string): Promise<string> {
    const categories = await getItem('timetrack_categories') || [];
    
    for (const category of categories) {
      if (category.domains.includes(domain)) {
        return category.name;
      }
    }
    
    return 'לא מסווג';
  }

  static getInstance(): TimeTracker {
    return TimeTracker.instance || TimeTracker.init();
  }
}
