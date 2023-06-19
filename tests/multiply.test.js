const { multiply } = require('../modules/multiply.js');

test('multiply two positive numbers correctly', () => {
    const result = multiply(5, 10);
    expect(result).toBe(50);
  });

test('multiply a number with zero correctly', () => {
    const result = multiply(0, 5);
    expect(result).toBe(0);
  });

test('multiply a negative number correctly', () => {
    const result = multiply(4, -1);
    expect(result).toBe(-4);
  });