import type {
  ConversionEvent,
  DashboardMetricsSummary,
  UserSession,
} from '../types';

const isValidSession = (
  session: UserSession | null | undefined
): session is UserSession => {
  if (!session) {
    return false;
  }

  const { sessionId, userId, startedAt, lastActiveAt } = session;
  const hasValidIdentifiers =
    typeof sessionId === 'string' &&
    sessionId.trim() !== '' &&
    typeof userId === 'string' &&
    userId.trim() !== '';

  const hasValidTimestamps =
    typeof startedAt === 'string' &&
    startedAt.trim() !== '' &&
    typeof lastActiveAt === 'string' &&
    lastActiveAt.trim() !== '';

  return (
    hasValidIdentifiers &&
    hasValidTimestamps &&
    typeof session.isActive === 'boolean'
  );
};

const isValidConversion = (
  event: ConversionEvent | null | undefined
): event is ConversionEvent => {
  if (!event) {
    return false;
  }

  const { userId, revenue, status } = event;
  const hasValidUser = typeof userId === 'string' && userId.trim() !== '';
  const hasValidRevenue =
    typeof revenue === 'number' && Number.isFinite(revenue) && revenue >= 0;

  return status === 'completed' && hasValidUser && hasValidRevenue;
};

export const summarizeDashboardMetrics = (
  sessions: UserSession[],
  conversions: ConversionEvent[]
): DashboardMetricsSummary => {
  const validSessions = sessions.filter(isValidSession);
  const validConversions = conversions.filter(isValidConversion);

  const uniqueUsers = validSessions
    .map((session) => session.userId)
    .reduce<string[]>((acc, userId) => {
      if (!acc.includes(userId)) {
        acc.push(userId);
      }
      return acc;
    }, []);

  const activeSessions = validSessions.filter(
    (session) => session.isActive
  ).length;

  const revenueTotals = validConversions
    .map((event) => event.revenue)
    .reduce(
      (acc, revenue) => ({
        totalRevenue: acc.totalRevenue + revenue,
        count: acc.count + 1,
      }),
      { totalRevenue: 0, count: 0 }
    );

  const averageRevenue =
    revenueTotals.count > 0
      ? revenueTotals.totalRevenue / revenueTotals.count
      : 0;
  const conversionRate =
    validSessions.length > 0 ? revenueTotals.count / validSessions.length : 0;

    // count average session duration
    // plus all durations, go through valid sessions, if durationMinutes is number, add to total
    const totalDuration = validSessions.reduce(
    (sum, s) => sum + (typeof s.durationMinutes === 'number' ? s.durationMinutes : 0),
    0
  );
    // devide by number of valid sessions
    // check if validSessions length > 0 to avoid division by zero
    const averageSessionDuration = validSessions.length > 0 ? totalDuration / validSessions.length : 0;
  return {
    totalUsers: uniqueUsers.length,
    activeSessions,
    averageRevenue,
    conversionRate,
    averageSessionDuration
  };
};
