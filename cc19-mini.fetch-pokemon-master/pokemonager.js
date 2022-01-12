(() => {
  class Pokemonager {
    async findNames(n) {
      let out = [];
      let pkData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${n}`
      );
      out = pkData.data.results.map(function (pokemon) {
        return pokemon.name;
      });
      return out;
    }

    async findUnderWeight(weight) {
      let out = [];
      for (let i = 1; i <= 10; i++) {
        let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        if (pokemon.data.weight < weight) out.push(pokemon.data);
      }
      return out;
    }
  }

  window.Pokemonager = Pokemonager;
})();
