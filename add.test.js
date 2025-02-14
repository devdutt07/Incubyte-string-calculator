const add = require("./add");

test('should be returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });