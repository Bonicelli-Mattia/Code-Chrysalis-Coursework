const allPokemon = window.allPokemon;

(() => {
  window.pokemonager = {

    findNames: () => {
      return allPokemon.map(function(pokemon){
        return pokemon['Name']
      })
    },

    findByResistance: (attack) => {
      return allPokemon.filter(function(pokemon){
        return (pokemon['Resistant'].includes(attack))
      })
    },

    findNamesByResistance: (attack) => {
      return allPokemon.map(function(pokemon){
        if (pokemon['Resistant'].includes(attack))
          return pokemon['Name']
      }).filter(function(elem){
        return elem !== undefined
      })
    },

    avgMaxCP: () => {
      return allPokemon.filter(function(pokemon){
        return pokemon['MaxCP'] !== undefined
      })
      .reduce(function(totCP, pokemon){
         return totCP + pokemon['MaxCP']
       }, 0) / allPokemon.length
    },

    countedWeaknesses: () => {
      let out = {}
      allPokemon.map(function(pokemon){
        for (let i=0; i<pokemon['Weaknesses'].length; i++){
          if (pokemon['Weaknesses'][i] in out === false)
            out[pokemon['Weaknesses'][i]] = 1
          else 
            out[pokemon['Weaknesses'][i]] += 1
        }
      })
      return out
    }

  };
})();