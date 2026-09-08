export const NGN_TO_USD_RATE = 1550; // Current indicative rate

export function formatPrice(naira: number, currency: 'NGN' | 'USD' = 'NGN', compact = false): string {
  if (currency === 'USD') {
    const usd = Math.round(naira / NGN_TO_USD_RATE);
    if (compact) {
      if (usd >= 1000000) return `$${(usd / 1000000).toFixed(2)}M`;
      if (usd >= 1000) return `$${(usd / 1000).toFixed(0)}k`;
      return `$${usd.toLocaleString()}`;
    }
    return `$${usd.toLocaleString()}`;
  }

  if (compact) {
    if (naira >= 1000000000) {
      return `₦${(naira / 1000000000).toFixed(1)}B`;
    }
    if (naira >= 1000000) {
      return `₦${(naira / 1000000).toFixed(0)}M`;
    }
    return `₦${(naira / 1000).toFixed(0)}k`;
  }

  return `₦${naira.toLocaleString()}`;
}

export function formatNumber(num: number): string {
  return num.toLocaleString();
}
