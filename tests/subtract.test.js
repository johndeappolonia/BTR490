const subtract = require('../modules/subtract')

test('checks that 5 - 2 result is 3', () => {
    expect(subtract(5,2)).toBe(3);
});

test('checks that 2 - 3 result is -1', () => {
    expect(subtract(2,3)).toBe(-1);
});

test('checks that 2 - 2 result is 0', () => {
    expect(subtract(2,2)).toBe(0);
});

test('checks that -3 - 3 result is -6', () => {
    expect(subtract(-3,3)).toBe(-6);
});

test('checks that 33 - 3 result is not 3', () => {
    expect(subtract(33,3)).not.toBe(3);
});