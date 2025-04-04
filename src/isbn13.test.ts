import { isValid } from "./isbn13";

describe('isValid gültige ISBN-13', () => {
    test('gültige ISBN: 9780306406157', () => {
  expect(isValid('9780306406157')).toBe(true);
});

test('ungültige ISBN: 9780306406158', () => {
    expect(isValid('9780306406158')).toBe(false);
  });

  test('ungültige Eingabe: nur 12 Stellen', () => {
    expect(isValid('978030640615')).toBe(false);
  });
  
  test('ungültige Eingabe: Buchstaben enthalten', () => {
    expect(isValid('97803A6406157')).toBe(false);
  });
});

  
describe('isValid gültige ISBN-13', () => {
   test.each([
     '9780306406157',
   ])('should return true for valid ISBN %s', (isbn) => {
     expect(isValid(isbn)).toBe(true);
   });
 });
  
  describe('isValid ungültige ISBN-13', () => {
    test.each([
      '9780306406158', // falsche Prüfziffer
      '978030640615',   // zu kurz
      '97803064061577', // zu lang
      '97803A6406157',  // enthält Buchstaben
      'ABCDEFGHIJKLM',  // komplett ungültig
    ])('should return false for invalid ISBN %s', (isbn) => {
      expect(isValid(isbn)).toBe(false);
    });
  });