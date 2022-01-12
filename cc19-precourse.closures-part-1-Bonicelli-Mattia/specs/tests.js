describe('counterGenerator', () => {
  it('should have a function called counterGenerator', () => {
    expect(counterGenerator).toBeDefined();
    expect(typeof(counterGenerator)).toBe('function');
  });

  it('should return a function', () => {
    const test = counterGenerator();
    expect(typeof(test)).toBe('function');
  });

  it('should be able to make multiple counters', () => {
    const test1 = counterGenerator();
    const test2 = counterGenerator();
    expect(test1()).toEqual(1);
    expect(test1()).toEqual(2);
    expect(test2()).toEqual(1);
  });
});

describe('getAndSet', () => {
  it('should have a function called getAndSet', () => {
    expect(getAndSet).toBeDefined();
    expect(typeof(getAndSet)).toBe('function');
  });

  it('should return an object with get and set methods', () => {
    const test = getAndSet();
    expect(typeof(test)).toBe('object');
    expect(test.set).toBeDefined();
    expect(typeof(test.set)).toBe('function');
    expect(test.get).toBeDefined();
    expect(typeof(test.get)).toBe('function');
  });

  it('should be able to set and get a value', () => {
    const test = getAndSet();
    test.set(123);
    expect(test.get()).toEqual(123);
    test.set('asdf');
    expect(test.get()).toBe('asdf');
  });
});

describe('power', () => {
  it('should have a function called power', () => {
    expect(power).toBeDefined();
    expect(typeof(power)).toBe('function');
  });

  it('should return a function', () => {
    const test = power(5);
    expect(test).toBeDefined();
    expect(typeof(test)).toBe('function');
  });

  it('should return NaN if argument passed in is not a number', () => {
    const test = power('test');
    expect(test).toEqual(NaN);
  });

  it('should construct functions that can be reused', () => {
    const square = power(2);
    expect(square(5)).toEqual(25);
    expect(square(6)).toEqual(36);

    const cube = power(3);
    expect(cube(3)).toEqual(27);
    expect(cube(4)).toEqual(64);

    const power4 = power(4);
    expect(power4(4)).toEqual(256);
    expect(power4(5)).toEqual(625);
  });
});

describe('betterCounterGenerator', () => {
  it('should have a function called betterCounterGenerator', () => {
    expect(betterCounterGenerator).toBeDefined();
    expect(typeof(betterCounterGenerator)).toBe('function');
  });

  it('should return an object', () => {
    const test = betterCounterGenerator(0);
    expect(typeof(test)).toBe('object');
  });

  it('should be able to count up', () => {
    const test = betterCounterGenerator(0);
    expect(test.up()).toEqual(1);
    expect(test.up()).toEqual(2);
    expect(test.up()).toEqual(3);
  });

  it('should be able to count down', () => {
    const test = betterCounterGenerator(5);
    expect(test.down()).toEqual(4);
    expect(test.down()).toEqual(3);
    expect(test.down()).toEqual(2);
  });

  it('should provide a reset method to reset to original', () => {
    const num = 5;
    const test = betterCounterGenerator(num);
    test.down();
    test.down();
    test.up();
    test.down();
    expect(test.reset()).toEqual(num);
  });

  it('should provide a default counter start of 0 if none is provided', () => {
    const test = betterCounterGenerator();
    expect(test.reset()).toEqual(0);
  });

  it('should return NaN if anything but a number is passed', () => {
    const test = betterCounterGenerator('test');
    expect(test).toEqual(NaN);
  });
});
