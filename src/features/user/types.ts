export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile
  extends Omit<User, 'id' | 'createdAt' | 'updatedAt'> {
  bio?: string;
  phone?: string;
  location?: string;
}

export interface UpdateUserData {
  name?: string;
  bio?: string;
  phone?: string;
  location?: string;
  avatar?: string;
}

export type SessionDeviceType = 'desktop' | 'mobile' | 'tablet';

export interface UserSession {
  sessionId: string;
  userId: string;
  startedAt: string;
  lastActiveAt: string;
  durationMinutes: number;
  isActive: boolean;
  device: SessionDeviceType;
}

export type ConversionStatus = 'completed' | 'pending' | 'refunded';
export type ConversionAction = 'add_to_cart'| 'start_trial' | 'renew_subscription';

export interface ConversionEvent {
  eventId: string;
  userId: string;
  sessionId?: string;
  revenue: number;
  timestamp: string;
  status: ConversionStatus;
  action: ConversionAction;
}

export interface DashboardMetricsSummary {
  totalUsers: number;
  activeSessions: number;
  averageRevenue: number;
  conversionRate: number;
  averageSessionDuration?: number;
}
