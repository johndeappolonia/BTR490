const add = require('../modules/add')

test('adds 2 + 3 to get a result of 5', () => {
    expect(add(2,3)).toBe(5);
});

test('adds 2 + 5 to not get a result of 25', () => {
    expect(add(2,5)).not.toBe(25);
});

test('adds 3 + -4 to get a result of -1', () => {
    expect(add(3,-4)).toBe(-1);
});

test('adds -1 + -5 to get a result of -6', () => {
    expect(add(-1,-5)).toBe(-6);
});

test('adds 2 + 2 to not get a result of fish', () => {
    expect(add(2,2)).not.toBe("fish");
});