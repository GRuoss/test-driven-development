export function isValid(isbn: string): boolean {
  let isValid = true;

  try {
    // Check if the input is exactly 13 digits
    if (isbn.length !== 13) {
      throw new Error("Invalid ISBN: The input must be exactly 13 characters long.");
    }
    if (!/^\d+$/.test(isbn)) {
      throw new Error("Invalid ISBN: The input must contain only numeric digits.");
    }

    let sum = 0;

    for (let i = 0; i < 12; i++) {
      const digit = Number(isbn[i]);

      if (i % 2 === 0) {
        sum += digit;
      } else {
        sum += digit * 3;
      }
    }

    const checkDigit = (10 - (sum % 10)) % 10;

    if (checkDigit !== Number(isbn[12])) {
      throw new Error("Invalid ISBN: The check digit does not match.");
    }
  } catch (error) {
    isValid = false;
  }

  return isValid;
}
