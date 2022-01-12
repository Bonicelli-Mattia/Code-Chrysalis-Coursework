describe('keys', () => {
  it("should retun an object's keys", () => {
    const testObj = {
      Name: 'Javascript',
      Age: 25,
      'Object oriented': false
    }
    expect(_.keys(testObj)).toEqual(Object.keys(testObj));
  });
});
