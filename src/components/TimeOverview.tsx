
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, TrendingUp, TrendingDown, Target } from 'lucide-react';
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

  return (
    <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>סקירת זמן יומית</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-indigo-100 text-sm">זמן גלישה היום</p>
            <p className="text-3xl font-bold">{formatTime(todayTime)}</p>
          </div>
          <div>
            <p className="text-indigo-100 text-sm">ממוצע שבועי</p>
            <p className="text-2xl font-semibold">{formatTime(weeklyAverage)}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-indigo-100">יעד יומי: 6 שעות</span>
            <div className="flex items-center space-x-1">
              {trend > 0 ? (
                <TrendingUp className="h-4 w-4 text-green-300" />
              ) : (
                <TrendingDown className="h-4 w-4 text-green-300" />
              )}
              <span className="text-sm text-green-300">{Math.abs(trend)}%</span>
            </div>
          </div>
          <Progress value={(todayTime / 6) * 100} className="bg-indigo-400" />
        </div>

        <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
          <p className="text-sm text-indigo-100">
            💡 <strong>תובנה חכמה:</strong> השבוע הקדשת {Math.abs(trend)}% פחות זמן לבידור - כל הכבוד!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
