const add = require("./add");

test('should be returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

test('should be returns the number itself when a single number is provided', () => {
    expect(add('5')).toBe(5);
  });

test('should be returns the sum of two numbers separated by a comma', () => {
    expect(add('1,2')).toBe(3);
});

test('should be returns the sum of multiple numbers separated by a comma', () => {
    expect(add('1,2,3,4,5')).toBe(15);
});


// step 5 
test('should be handles new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
});


test('should bethrows an error when negative numbers are included', () => {
    expect(() => add('1,-2,3,-4')).toThrow('Negatives not allowed: -2, -4');
});

// step 6 
test("should ignores numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
});

test("should supports custom delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});
