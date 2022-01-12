const { expect } = require("chai");

describe("Avocado ", () => {
    it("should return a string", () => {
        expect(avocado(2)).to.be.a('string');
    });
    it("should turn numbers into avocados", () => {
        expect(avocado(3)).to.equal('🥑🥑🥑');
        expect(avocado(5)).to.equal('🥑🥑🥑🥑🥑');
    });
})