
import React, { useState, useEffect } from 'react';
import { Dashboard } from '@/components/Dashboard';
import { Onboarding } from '@/components/Onboarding';
import { Navigation } from '@/components/Navigation';
import { TimeTracker } from '@/lib/timeTracker';

const Index = () => {
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  useEffect(() => {
    // Check if this is first time user
    const hasSeenOnboarding = localStorage.getItem('timetrack_onboarding_complete');
    if (!hasSeenOnboarding) {
      setIsFirstTime(true);
    }

    // Initialize time tracker
    TimeTracker.init();
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('timetrack_onboarding_complete', 'true');
    setIsFirstTime(false);
  };

  if (isFirstTime) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      <main className="container mx-auto px-4 py-6">
        {currentView === 'dashboard' && <Dashboard />}
      </main>
    </div>
  );
};

export default Index;
