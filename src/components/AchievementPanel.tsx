
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Target, Flame, Star, Medal, Award } from 'lucide-react';
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

  return (
    <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="h-5 w-5" />
          <span>הישגים וגמיפיקציה</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">{level}</div>
            <div className="text-xs text-purple-100">רמה</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{totalPoints}</div>
            <div className="text-xs text-purple-100">נקודות</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{currentStreak}</div>
            <div className="text-xs text-purple-100">Streak</div>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="space-y-2">
          <h4 className="font-medium text-purple-100">הישגים אחרונים</h4>
          {achievements.slice(0, 2).map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div key={achievement.id} className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
                <Icon className="h-4 w-4 text-yellow-300" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{achievement.title}</div>
                  <div className="text-xs text-purple-100">{achievement.description}</div>
                </div>
                {achievement.earned && (
                  <Badge variant="secondary" className="bg-yellow-500 text-yellow-900">
                    ✓
                  </Badge>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <h4 className="font-medium text-purple-100">התקדמות</h4>
          {achievements.filter(a => !a.earned).slice(0, 1).map((achievement) => {
            const Icon = achievement.icon;
            const progressPercent = achievement.progress ? (achievement.progress / (achievement.id === 3 ? 7 : 30)) * 100 : 0;
            return (
              <div key={achievement.id} className="bg-white/10 rounded-lg p-2">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{achievement.title}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="text-xs text-purple-100 mt-1">
                  {achievement.progress}/{achievement.id === 3 ? 7 : 30}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
