import { conversionEvents, userSessions } from '@/features/user/data/mockStats';
import { summarizeDashboardMetrics } from '@/features/user/services/stats.service';
import { MetricValue } from './components/MetricValue';

export default function DashboardPage() {
  const summary = summarizeDashboardMetrics(userSessions, conversionEvents);

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='p-6 border rounded-lg'>
          <h3 className='text-lg font-semibold mb-2'>Total Users</h3>
          <p className='text-3xl font-bold text-blue-600'>
            <MetricValue value={summary.totalUsers} format='number' />
          </p>
        </div>
        <div className='p-6 border rounded-lg'>
          <h3 className='text-lg font-semibold mb-2'>Active Sessions</h3>
          <p className='text-3xl font-bold text-green-600'>
            <MetricValue value={summary.activeSessions} format='number' />
          </p>
        </div>
        <div className='p-6 border rounded-lg'>
          <h3 className='text-lg font-semibold mb-2'>Average Revenue</h3>
          <p className='text-3xl font-bold text-purple-600'>
            <MetricValue value={summary.averageRevenue} format='currency' />
          </p>
        </div>
        <div className='p-6 border rounded-lg'>
          <h3 className='text-lg font-semibold mb-2'>Conversion Rate</h3>
          <p className='text-3xl font-bold text-orange-600'>
            <MetricValue value={summary.conversionRate} format='percentage' />
          </p>
        </div>
        <div className='p-6 border rounded-lg'>
          <h3 className='text-lg font-semibold mb-2'>
            Avarage Duaration Session
          </h3>
          <p className='text-3xl font-bold text-orange-600'>
            <MetricValue
              value={summary.averageSessionDuration ?? 0}
              format='number'
            />
          </p>
        </div>
      </div>
    </div>
  );
}
