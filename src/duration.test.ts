import { formatDuration } from './duration';

describe('formatDuration', () => {
    test('should format seconds correctly', () => {
        expect(formatDuration(33)).toBe('33s');
    });

    test('should format minutes and seconds correctly', () => {
        expect(formatDuration(123)).toBe('2m3s');
    });

    test('should format hours, minutes, and seconds correctly', () => {
        expect(formatDuration(3999)).toBe('1h6m39s');
    });

    test('should handle 0 seconds', () => {
        expect(formatDuration(0)).toBe('0s');
    });

    test('should throw an error for negative numbers', () => {
        expect(() => formatDuration(-1)).toThrow('Duration cannot be negative');
    });

    test('should round seconds correctly', () => {
        expect(formatDuration(123.7)).toBe('2m4s');
        expect(formatDuration(59.5)).toBe('1m0s');
    });
});