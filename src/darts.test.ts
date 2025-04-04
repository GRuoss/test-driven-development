import { calcPoints, possibleCheckout } from './darts';

describe('calcPoints', () => {
  test('berechnet 3x20, 1x17, 2x4 korrekt', () => {
    expect(calcPoints('3 20 1 17 2 4')).toBe(85);
  });
  
test('berechnet 2x15, 1x18, 3x19 korrekt', () => {
    expect(calcPoints('2 15 1 18 3 19')).toBe(105);
  });
  
  test('berechnet 3x20, 1x5 (1x daneben)', () => {
    expect(calcPoints('3 20 1 5')).toBe(65);
  });
  
  test('leerer Wurf ergibt 0 Punkte', () => {
    expect(calcPoints('')).toBe(0);
  });
  describe('Fehlerfälle in calcPoints', () => {
    test('Ungerade Anzahl an Zahlen wirft Fehler', () => {
      expect(() => calcPoints('3 20 1')).toThrow('Ungerade Anzahl');
    });
  
    test('Ungültiger Multiplikator (z. B. 4) wirft Fehler', () => {
      expect(() => calcPoints('4 20')).toThrow('Ungültiger Multiplikator');
    });
  
    test('Ungültiger Sektorwert (z. B. 25) wirft Fehler', () => {
      expect(() => calcPoints('2 25')).toThrow('Ungültiger Sektorwert');
    });
  
    test('Nicht-numerische Eingabe wirft Fehler', () => {
      expect(() => calcPoints('2 zwanzig')).toThrow('Ungültiger Sektorwert');
    });
  });
  
});


  describe('possibleCheckout', () => {
    test('Double 12 bei 477', () => {
      expect(possibleCheckout(477)).toBe('Double 12');
    });
  
    test('Kein Checkout bei ungerader Zahl', () => {
      expect(possibleCheckout(480)).toBeNull();
    });
  
    test('Kein Checkout bei zu hohem Double', () => {
      expect(possibleCheckout(441)).toBeNull();
    });
  });