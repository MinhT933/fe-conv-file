'use client';

import { useMemo } from 'react';

interface MetricValueProps {
  value: number;
  format: 'number' | 'currency' | 'percentage';
  currency?: string;
}

const numberFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
});

const buildCurrencyFormatter = (currency: string) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const percentageFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export function MetricValue({
  value,
  format,
  currency = 'USD',
}: MetricValueProps) {
  const formattedValue = useMemo(() => {
    if (Number.isNaN(value) || !Number.isFinite(value)) {
      return '-';
    }

    switch (format) {
      case 'currency':
        return buildCurrencyFormatter(currency).format(value);
      case 'percentage':
        return percentageFormatter.format(value);
      default:
        return numberFormatter.format(value);
    }
  }, [currency, format, value]);

  return <span>{formattedValue}</span>;
}
