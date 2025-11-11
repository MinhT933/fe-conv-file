import { describe, expect, it } from 'vitest';

import type { ConversionEvent, UserSession } from '../../types';
import { summarizeDashboardMetrics } from '../stats.service';

describe('summarizeDashboardMetrics', () => {
  it('returns zeros when there is no data', () => {
    const summary = summarizeDashboardMetrics([], []);

    expect(summary).toEqual({
      totalUsers: 0,
      activeSessions: 0,
      averageRevenue: 0,
      conversionRate: 0,
    });
  });

  it('ignores invalid sessions and conversion events', () => {
    const sessions = [
      {
        sessionId: 'sess-valid',
        userId: 'user-valid',
        startedAt: '2024-02-01T08:00:00.000Z',
        lastActiveAt: '2024-02-01T08:30:00.000Z',
        durationMinutes: 30,
        isActive: true,
        device: 'desktop',
      },
      {
        sessionId: '',
        userId: 'user-missing-id',
        startedAt: '',
        lastActiveAt: '',
        durationMinutes: 10,
        isActive: true,
        device: 'mobile',
      },
      {
        sessionId: 'sess-null-user',
        userId: null as unknown as string,
        startedAt: '2024-02-01T09:00:00.000Z',
        lastActiveAt: '2024-02-01T09:05:00.000Z',
        durationMinutes: 5,
        isActive: false,
        device: 'tablet',
      },
    ] as UserSession[];

    const conversions = [
      {
        eventId: 'conv-valid',
        userId: 'user-valid',
        sessionId: 'sess-valid',
        revenue: 199.99,
        timestamp: '2024-02-01T08:32:00.000Z',
        status: 'completed',
      },
      {
        eventId: 'conv-pending',
        userId: 'user-valid',
        sessionId: 'sess-valid',
        revenue: 250,
        timestamp: '2024-02-01T08:33:00.000Z',
        status: 'pending',
      },
      {
        eventId: 'conv-invalid-revenue',
        userId: 'user-valid',
        sessionId: 'sess-valid',
        revenue: Number.NaN,
        timestamp: '2024-02-01T08:34:00.000Z',
        status: 'completed',
      },
    ] as ConversionEvent[];

    const summary = summarizeDashboardMetrics(sessions, conversions);

    expect(summary.totalUsers).toBe(1);
    expect(summary.activeSessions).toBe(1);
    expect(summary.averageRevenue).toBeCloseTo(199.99);
    expect(summary.conversionRate).toBeCloseTo(1 / 1);
  });

  it('handles large datasets and numbers correctly', () => {
    const sessions: UserSession[] = Array.from({ length: 5 }, (_, index) => ({
      sessionId: `sess-${index + 1}`,
      userId: `user-${Math.floor(index / 2) + 1}`,
      startedAt: '2024-03-01T10:00:00.000Z',
      lastActiveAt: '2024-03-01T11:00:00.000Z',
      durationMinutes: 60,
      isActive: index % 2 === 0,
      device: 'desktop',
    }));

    const conversions: ConversionEvent[] = [
      {
        eventId: 'conv-1',
        userId: 'user-1',
        sessionId: 'sess-1',
        revenue: 250_000.5,
        timestamp: '2024-03-01T10:30:00.000Z',
        status: 'completed',
      },
      {
        eventId: 'conv-2',
        userId: 'user-2',
        sessionId: 'sess-3',
        revenue: 150_000,
        timestamp: '2024-03-01T10:45:00.000Z',
        status: 'completed',
      },
      {
        eventId: 'conv-3',
        userId: 'user-3',
        sessionId: 'sess-5',
        revenue: 50_000,
        timestamp: '2024-03-01T10:50:00.000Z',
        status: 'completed',
      },
    ];

    const summary = summarizeDashboardMetrics(sessions, conversions);

    expect(summary.totalUsers).toBe(3);
    expect(summary.activeSessions).toBe(3);
    expect(summary.averageRevenue).toBeCloseTo(
      (250_000.5 + 150_000 + 50_000) / 3
    );
    expect(summary.conversionRate).toBeCloseTo(3 / sessions.length);
  });
});
