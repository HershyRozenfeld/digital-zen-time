
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
      TimeTracker.instance.startTracking();
    }
    return TimeTracker.instance;
  }

  private startTracking() {
    // In a real Chrome extension, this would use Chrome APIs
    // For demo purposes, we'll simulate tracking
    this.simulateTracking();
    this.setupIdleDetection();
  }

  private simulateTracking() {
    // Simulate some realistic browsing data
    const domains = [
      'github.com', 'stackoverflow.com', 'docs.google.com',
      'youtube.com', 'facebook.com', 'twitter.com',
      'ynet.co.il', 'walla.co.il'
    ];

    const today = new Date().toISOString().split('T')[0];
    const existingData = this.getTodayData();

    if (Object.keys(existingData).length === 0) {
      // Generate some sample data for demo
      const sampleData: DailyData = {};
      domains.forEach(domain => {
        sampleData[domain] = Math.floor(Math.random() * 3600) + 300; // 5 minutes to 1 hour
      });
      
      localStorage.setItem(`timetrack_daily_${today}`, JSON.stringify(sampleData));
    }

    // Update data every 5 seconds for demo
    setInterval(() => {
      this.updateCurrentDomainTime();
    }, 5000);
  }

  private setupIdleDetection() {
    // Detect user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    events.forEach(event => {
      document.addEventListener(event, () => {
        this.lastActivity = Date.now();
        if (!this.isActive) {
          this.isActive = true;
          this.startTime = Date.now();
        }
      }, true);
    });

    // Check for idle state every 30 seconds
    setInterval(() => {
      const now = Date.now();
      if (now - this.lastActivity > this.idleThreshold) {
        this.isActive = false;
      }
    }, 30000);
  }

  private updateCurrentDomainTime() {
    if (!this.isActive) return;

    // In a real extension, this would get the current tab's domain
    // For demo, we'll randomly pick from common domains
    const domains = ['github.com', 'youtube.com', 'facebook.com'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    
    const today = new Date().toISOString().split('T')[0];
    const dailyData = this.getTodayData();
    
    if (!dailyData[randomDomain]) {
      dailyData[randomDomain] = 0;
    }
    
    dailyData[randomDomain] += 5; // Add 5 seconds
    
    localStorage.setItem(`timetrack_daily_${today}`, JSON.stringify(dailyData));
  }

  getTodayData(): DailyData {
    const today = new Date().toISOString().split('T')[0];
    const data = localStorage.getItem(`timetrack_daily_${today}`);
    return data ? JSON.parse(data) : {};
  }

  getWeeklyData(): WeeklyData {
    const weeklyData: WeeklyData = {};
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const dayData = localStorage.getItem(`timetrack_daily_${dateStr}`);
      if (dayData) {
        weeklyData[dateStr] = JSON.parse(dayData);
      }
    }
    
    return weeklyData;
  }

  getDomainCategory(domain: string): string {
    const categories = JSON.parse(localStorage.getItem('timetrack_categories') || '[]');
    
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
