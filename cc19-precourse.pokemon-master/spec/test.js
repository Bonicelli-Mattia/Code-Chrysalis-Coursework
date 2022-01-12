const expect = chai.expect;
const pokemonager = window.pokemonager;

describe('pokemonager', () => {
  describe('findNames', () => {
    it('should return an array of names of all Pokemon', () => {
    
      // Setup
      let called = false;
      const realMap = Array.prototype.map;
      Array.prototype.map = function() { called = true; return realMap.apply(this, arguments)};
    
      const expected = [];
      for(individual of allPokemon)
        expected.push(individual.Name);
    
      // Exercise
      const actual = pokemonager.findNames();
    
      // Assert
      expect(called, 'Array.map() to have been called').to.be.true;
      expect(actual).to.deep.equal(expected);
    
    });
  });

  describe('findByResistance', () => {
    it('should find pokemon based by resistance', () => {
  
      // Setup
      let called = false;
      const realFilter = Array.prototype.filter;
      Array.prototype.filter = function() { called = true; return realFilter.apply(this, arguments)};
  
      const expected = [];
      for(individual of allPokemon)
        if(individual.Resistant.includes('Fire'))
          expected.push(individual);
  
      // Exercise
      const actual = pokemonager.findByResistance('Fire');
  
      // Assert
      expect(called, 'Array.filter to have been called').to.be.true;
      expect(actual, 'findByResistance() to filter based on resistance to Fire').to.deep.equal(expected);
  
      // Teardown
      Array.prototype.filter = realFilter;
    });
  });

  describe('findNamesByResistance', () => {
    it('should return an array of names of Pokemon with a resistance to ice', () => {
  
      // Setup
      let mapCalled = false;
      const realMap = Array.prototype.map;
      Array.prototype.map = function() { mapCalled = true; return realMap.apply(this, arguments)};
  
      let filterCalled = false;
      const realFilter = Array.prototype.filter;
      Array.prototype.filter = function() { filterCalled = true; return realFilter.apply(this, arguments)};
  
      const expected = [];
      for(individual of allPokemon)
        if(individual.Resistant.includes('Ice'))
          expected.push(individual.Name);
  
      // Exercise
      const actual = pokemonager.findNamesByResistance('Ice');
  
      // Assert
      expect(mapCalled).to.be.true;
      expect(filterCalled).to.be.true;
      expect(actual).to.deep.equal(expected);
  
    });
  });

  describe('avgMaxCP', () => {
    it('should return the average maxCP of all Pokemon', () => {
      // Setup
      let reduceCalled = false;
      const realReduce = Array.prototype.reduce;
      Array.prototype.reduce = function() { reduceCalled = true; return realReduce.apply(this, arguments)};
  
      const expected = 895.934;
  
      // Exercise
  
      const actual = pokemonager.avgMaxCP();
      // Assert
      expect(reduceCalled).to.be.true;
      expect(actual).to.be.closeTo(expected, 0.001);
    });
  });

  describe('countedWeaknesses', () => {
    it('should return the number of Pokemon with weakness to each type of attack', () => {
      // Setup
      const expected = {
          Fire: 54,
          Ice: 68,
          Flying: 51,
          Psychic: 48,
          Water: 44,
          Ground: 65,
          Rock: 73,
          Electric: 72,
          Grass: 60,
          Fighting: 47,
          Poison: 28,
          Steel: 27,
          Bug: 31,
          Fairy: 18,
          Ghost: 27,
          Dark: 27,
          Dragon: 4
        };
  
      // Exercise
  
      const actual = pokemonager.countedWeaknesses();
      // Assert
      expect(actual).to.deep.equal(expected);
    });
  });
});
