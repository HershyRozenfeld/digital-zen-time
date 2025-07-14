
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, BarChart3, Target, Trophy, Shield, ArrowRight, ArrowLeft } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'ברוכים הבאים ל-TimeTrack!',
      description: 'המערכת החכמה והמתקדמת ביותר לניטור וניהול זמן הגלישה שלכם באינטרנט',
      icon: Clock,
      content: (
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
            <Clock className="h-10 w-10 text-indigo-600" />
          </div>
          <p className="text-gray-600">
            TimeTrack עוזר לכם להבין בדיוק איך אתם מבלים את זמנכם ברשת ולשפר את ההתנהגות הדיגיטלית שלכם
          </p>
        </div>
      )
    },
    {
      title: 'ניטור אוטומטי חכם',
      description: 'המערכת עוקבת אחר זמן הגלישה שלכם בכל אתר ומסווגת אותם לקטגוריות',
      icon: BarChart3,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="font-medium">עבודה</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">3.5 שעות</div>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="font-medium">בידור</span>
              </div>
              <div className="text-2xl font-bold text-red-600">1.2 שעות</div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            כל הנתונים נשמרים מקומית במחשב שלכם - פרטיותכם מובטחת!
          </p>
        </div>
      )
    },
    {
      title: 'יעדים ומעקב התקדמות',
      description: 'הגדירו יעדים אישיים וקבלו התראות חכמות כשאתם מתקרבים אליהם',
      icon: Target,
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">יעד רשתות חברתיות יומי</span>
              <span className="text-green-600 font-bold">45ד / 60ד</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }} />
            </div>
            <p className="text-sm text-green-600 mt-1">נשארו לכם 15 דקות - אתם בדרך הנכונה! 🎯</p>
          </div>
        </div>
      )
    },
    {
      title: 'גמיפיקציה ומוטיבציה',
      description: 'זכו בבאדג\'ים, צברו נקודות והתקדמו ברמות בזמן שאתם משפרים את ההרגלים שלכם',
      icon: Trophy,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                <Trophy className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="text-sm font-medium">רמה 8</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-sm font-medium">1,250 נקודות</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-2">
                <span className="text-2xl">🔥</span>
              </div>
              <div className="text-sm font-medium">5 ימים Streak</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'פרטיות מוחלטת',
      description: 'כל המידע נשמר אצלכם במחשב. אף נתון לא נשלח החוצה - הכל שלכם!',
      icon: Shield,
      content: (
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <Shield className="h-10 w-10 text-green-600" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <span>✓</span>
              <span>כל הנתונים נשמרים מקומית</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <span>✓</span>
              <span>אין שליחת מידע לשרתים חיצוניים</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <span>✓</span>
              <span>שליטה מלאה על המידע שלכם</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">שלב {currentStep + 1} מתוך {steps.length}</span>
              <span className="text-sm text-gray-500">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-6">
            <div>
              <Icon className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {currentStepData.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {currentStepData.description}
              </p>
            </div>

            <div className="py-4">
              {currentStepData.content}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <ArrowRight className="h-4 w-4" />
              <span>הקודם</span>
            </Button>
            
            <Button 
              onClick={nextStep}
              className="flex items-center space-x-2"
            >
              <span>{currentStep === steps.length - 1 ? 'בואו נתחיל!' : 'הבא'}</span>
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
