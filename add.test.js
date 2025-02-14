const add = require("./add");

test('should be returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

test('should be returns the number itself when a single number is provided', () => {
    expect(add('5')).toBe(5);
  });
