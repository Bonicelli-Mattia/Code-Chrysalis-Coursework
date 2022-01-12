describe('some', () => {
  it('should return true if an element passes the test, or if a value is truthy when no test is passed', () => {
    const trueTest = [3, 4, 7, 9]
    const truthyTest = [0, '', 'false', null]
    const isEven = n => n % 2 === 0
    expect(some(trueTest, isEven)).toBe(true);
    expect(some(truthyTest)).toBe(true);
  });

  it('should return false if no element passes the test, or if no value is not truthy when no test is passed', () => {
    const falseTest = [3, 5, 7, 9]
    const falsyTest = [0, '', false, null]
    const isEven = n => n % 2 === 0
    expect(some(falseTest, isEven)).toEqual(false);
    expect(some(falsyTest)).toBe(false);
  });
});
