export function calcPoints(hits: string): number {
  if (!hits.trim()) return 0;

  const tokens = hits.trim().split(' ');
  let sum = 0;

  for (let i = 0; i < tokens.length; i += 2) {
    const multiplier = parseInt(tokens[i]);
    const value = parseInt(tokens[i + 1]);

    if (!isNaN(multiplier) && !isNaN(value)) {
      sum += multiplier * value;
    }
  }

  return sum;
}

export function possibleCheckout(x: number): string | null {
  const remaining = 501 - x;

  if (remaining % 2 !== 0) return null;

  const doubleValue = remaining / 2;
  if (doubleValue >= 1 && doubleValue <= 20) {
    return `Double ${doubleValue}`;
  }

  return null;
}