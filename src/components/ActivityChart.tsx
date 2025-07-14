
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { BarChart3, PieChart as PieChartIcon, TrendingUp } from 'lucide-react';

export const ActivityChart = () => {
  const [chartType, setChartType] = useState('bar');

  const dailyData = [
    { day: 'א׳', hours: 6.2, work: 3.5, social: 1.2, entertainment: 1.5 },
    { day: 'ב׳', hours: 7.1, work: 4.2, social: 1.4, entertainment: 1.5 },
    { day: 'ג׳', hours: 5.8, work: 3.8, social: 1.0, entertainment: 1.0 },
    { day: 'ד׳', hours: 6.9, work: 4.1, social: 1.3, entertainment: 1.5 },
    { day: 'ה׳', hours: 5.2, work: 3.2, social: 1.1, entertainment: 0.9 },
    { day: 'ו׳', hours: 4.1, work: 2.1, social: 1.2, entertainment: 0.8 },
    { day: 'ש׳', hours: 3.8, work: 1.5, social: 1.3, entertainment: 1.0 },
  ];

  const categoryData = [
    { name: 'עבודה', value: 22.4, color: '#3b82f6' },
    { name: 'רשתות חברתיות', value: 8.5, color: '#f59e0b' },
    { name: 'בידור', value: 8.2, color: '#ef4444' },
    { name: 'לימודים', value: 6.1, color: '#10b981' },
    { name: 'חדשות', value: 3.2, color: '#8b5cf6' },
  ];

  const renderChart = () => {
    switch (chartType) {
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}ש`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} שעות`, 'זמן']} />
            </PieChart>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} שעות`, 'זמן']} />
              <Line type="monotone" dataKey="hours" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        );
      
      default:
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} שעות`, 'קטגוריה']} />
              <Bar dataKey="work" stackId="a" fill="#3b82f6" name="עבודה" />
              <Bar dataKey="social" stackId="a" fill="#f59e0b" name="רשתות חברתיות" />
              <Bar dataKey="entertainment" stackId="a" fill="#ef4444" name="בידור" />
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>ניתוח פעילות שבועי</CardTitle>
          <div className="flex space-x-2">
            <Button
              variant={chartType === 'bar' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setChartType('bar')}
            >
              <BarChart3 className="h-4 w-4" />
            </Button>
            <Button
              variant={chartType === 'pie' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setChartType('pie')}
            >
              <PieChartIcon className="h-4 w-4" />
            </Button>
            <Button
              variant={chartType === 'line' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setChartType('line')}
            >
              <TrendingUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {renderChart()}
      </CardContent>
    </Card>
  );
};
