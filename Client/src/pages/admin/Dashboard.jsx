import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5 sm:grid-cols-3 lg:grid-cols-4'>
      <Card>
        <CardHeader>
          <CardTitle>Total Sales</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Dashboard;
