const allPokemon = window.allPokemon;
(() => {
  window.pokemonager = {
    avgHeight: () => {

      // The map reads the height value, strips the unit, converts it to a number, then gathers it into an array.
      // Reduce then simply adds up all the values in the array.
      // In the end we get the average by dividing by the number of pokemon.

      const avgMin = allPokemon.map(function(elem){
        return Number(elem.Height.Minimum.slice(0, -1))
      }).reduce(function(acc,curr){
        return acc + curr
      }) / allPokemon.length

      const avgMax = allPokemon.map(function(elem){
        return Number(elem.Height.Maximum.slice(0, -1))
      }).reduce(function(acc,curr){
        return acc + curr
      }) / allPokemon.length

      return [avgMin, avgMax]
      
    },

    countSpecialAttacks: () => {

      // The first map simply serves to have an easy way to access an array with each pokemon's special attacks.
      // The second map returns an array with each pokemon's special attack.
      // We then flatten these all in a single array for ease of iteration.
      // And finally use a forEach loop to count the occurences.

      let out = {}

      let spcAtkArr = allPokemon.map(function(elem){
        return elem['Special Attack(s)'].map(function(subElem){
          return subElem.Name
        })
      }).flat()

      spcAtkArr.forEach(function(elem){
        if (out[elem])
          out[elem] ++
        else
          out[elem] = 1
      })

      return out
      
    },
  };
})();