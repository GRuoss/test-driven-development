import { calcPoints } from './darts';

describe('calcPoints', () => {
  test('berechnet 3x20, 1x17, 2x4 korrekt', () => {
    expect(calcPoints('3 20 1 17 2 4')).toBe(85);
  });
});
