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

export function possibleCheckout(x: number): string {
  console.log(x);
  throw new Error("not implemented yet");
}
