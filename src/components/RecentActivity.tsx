
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Globe } from 'lucide-react';

export const RecentActivity = () => {
  const recentSites = [
    { domain: 'github.com', time: '1ש 23ד', category: 'עבודה', color: '#3b82f6' },
    { domain: 'youtube.com', time: '45ד', category: 'בידור', color: '#ef4444' },
    { domain: 'stackoverflow.com', time: '32ד', category: 'עבודה', color: '#3b82f6' },
    { domain: 'facebook.com', time: '28ד', category: 'רשתות חברתיות', color: '#f59e0b' },
    { domain: 'docs.google.com', time: '1ש 12ד', category: 'עבודה', color: '#3b82f6' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>פעילות אחרונה</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentSites.map((site, index) => (
          <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <Globe className="h-4 w-4 text-gray-400" />
              <div>
                <div className="font-medium text-sm">{site.domain}</div>
                <div className="text-xs text-gray-500 flex items-center space-x-1">
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: site.color }}
                  />
                  <span>{site.category}</span>
                </div>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {site.time}
            </div>
          </div>
        ))}
        
        <div className="text-center pt-2">
          <button className="text-sm text-indigo-600 hover:text-indigo-800">
            צפה בכל הפעילות
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
