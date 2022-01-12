const expect = chai.expect;
const chrysalis = window.chrysalis;

describe('chrysalis', () => {
  describe('fizzBuzz', () => {
    it('for multiples of four it should replace with "Fizz"', () => {

      // Setup
      const expected = chrysalis.fizzBuzz(4);
    
      // Exercise
      const actual = [1, 2, 3, "Fizz"];
    
      // Assert
      expect(expected).to.deep.equal(actual);
    });
  
    it('for multiples of seven it should replace with "Buzz"', () => {
    
      // Setup
      const expected = chrysalis.fizzBuzz(7);
    
      // Exercise
      const actual = [1, 2, 3, "Fizz", 5, 6, "Buzz"];
    
      // Assert
      expect(expected).to.deep.equal(actual);
    });

    it('for multiples of both it should replace with "FizzBuzz"', () => {
    
      // Setup
      const expected = chrysalis.fizzBuzz(30);
    
      // Assert
      expect(expected[11]).to.deep.equal("Fizz");
      expect(expected[13]).to.deep.equal("Buzz");
      expect(expected[20]).to.deep.equal("Buzz");
      expect(expected[23]).to.deep.equal("Fizz");
      expect(expected[27]).to.deep.equal("FizzBuzz");
    });
  });
});
