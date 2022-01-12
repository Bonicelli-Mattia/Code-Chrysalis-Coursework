const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should properly sort an array", () => {
    const testArr = [0, 9, 82, 2, 42, 5];
    const testArr2 = [1, 2, 5, 4, 3];
    const worstCase = [5, 4, 3, 2, 1];
    const bestCase = [1, 2, 3, 4, 5];
    expect(Sort.prototype.sort(testArr)).to.deep.equal([0, 2, 5, 9, 42, 82]);
    expect(Sort.prototype.sort(testArr2)).to.deep.equal([1, 2, 3, 4, 5]);
    expect(Sort.prototype.sort(worstCase)).to.deep.equal([1, 2, 3, 4, 5]);
    expect(Sort.prototype.sort(bestCase)).to.deep.equal([1, 2, 3, 4, 5]);
  });
});
