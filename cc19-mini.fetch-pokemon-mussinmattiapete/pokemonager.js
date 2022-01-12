(() => {
  class Pokemonager {
    async findNames(n) {
      let out = [];
      let pkData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${n}`
      );
      pkData = await pkData.json();
      out = pkData.results.map(function (pokemon) {
        return pokemon.name;
      });
      return out;
    }

    async findUnderWeight(weight) {
      let out = [];
      for (let i = 1; i <= 10; i++) {
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        let pokemonParsed = await pokemon.json();
        console.log(pokemonParsed);
        if (pokemonParsed.weight < weight) out.push(pokemonParsed);
      }
      return out;
    }
  }

  window.Pokemonager = Pokemonager;
})();
