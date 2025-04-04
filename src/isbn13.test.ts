import { isValid } from "./isbn13";


test('gültige ISBN: 9780306406157', () => {
  expect(isValid('9780306406157')).toBe(true);
});

