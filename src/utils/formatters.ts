import { Currency } from '../types';
import { CURRENCY_RATES } from '../data/travelData';

export function formatCurrency(amountBRL: number, currency: Currency): string {
  const info = CURRENCY_RATES[currency];
  const converted = amountBRL * info.rate;

  if (currency === 'BRL') {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(converted);
  }

  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(converted);
  }

  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(converted);
}
