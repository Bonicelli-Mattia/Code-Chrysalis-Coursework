/* eslint-disable prettier/prettier */
// The data below is mocked.
const data = require("./data");

module.exports = {
  Query: {
    Pokemons: () => {
      return data.pokemon;
    },

    GetTypes: () => {
      const result = data.types;
      console.log(result);
      return result;
    },

    PokemonName: (parent, args) => {
      const result = data.pokemon.find((pokemon) => pokemon.name === args.name);
      return result;
    },
    PokemonId: (parent, args) => {
      return data.pokemon.find((pokemon) => pokemon.id === args.id);
    },
    Attacks: (parent, args) => {
      const queryType = args.type;
      const result = [];
      for (const attack of data.attacks[queryType]) {
        result.push(attack);
      }
      return result;
    },
    AllPokemonOfType: (parent, args) => {
      const queryType = args.type;

      return data.pokemon.filter((pokemon) => {
        return pokemon.types.includes(queryType);
      });
    },

    AllPokemonAtkName: (parent, args) => {
      const queryName = args.name;
      const result = [];

      for (const pokemon of data.pokemon) {
        const allAtks = [...pokemon.attacks.fast, ...pokemon.attacks.special];

        for (const attack of allAtks) {
          if (attack.name === queryName) result.push(pokemon);
        }
      }
      return result;
    },
  },
  Mutation: {
    addPokemon: (parent, args) => {
      const input = { name: args.name, id: args.id };
      data.pokemon.push(input);
      const out = {
        pokemon: input,
        status: 201,
      };
      return out;
    },
    modifyPokemon: (parent, args) => {
      const out = {
        pokemon: undefined,
        status: 400,
      };
      data.pokemon.forEach((pokemon) => {
        if (pokemon.name === args.name) {
          pokemon.name = args.newName;
          out.pokemon = pokemon;
          out.status = 200;
        }
      });
      return out;
    },
    deletePokemon: (parent, args) => {
      const out = {
        pokemon: undefined,
        status: 400,
      };

      data.pokemon.forEach((pokemon) => {
        if (pokemon.name === args.name) {
          out.pokemon = pokemon;
          out.status = 200;
          data.pokemon.splice(pokemon, 0);
        }
      });
      return out;
    },
    addType: (parent, args) => {
      const out = {
        type: [],
        status: 400,
      };

      data.types.forEach((type) => {
        out.name.push(type);
        out.status = 201;
      });

      data.types.push({ type: args.name });

      return out;
    },
    modifyType: (parent, args) => {
      const out = {
        type: [],
        status: 400,
      };

      data.types.forEach((type) => {
        if (type === args.name) {
          type = args.newName;
          out.status = 200;
        } else {
          out.name.push(type);
        }
      });

      return out;
    },
    deleteType: (parent, args) => {
      const out = {
        type: [],
        status: 400,
      };

      data.types.forEach((type) => {
        out.type.push(type);
        if (type === args.name) {
          out.status = 200;
          data.types.splice(type, 0);
        }
      });
      return out;
    },
    addAttack: (parent, args) => {
      const out = {
        name: args.name,
        type: args.type,
        damage: args.damage,
        status: 400,
      };
      const input = {
        name: args.name,
        fastOrSpecial: args.fastOrSpecial,
        type: args.type,
        damage: args.damage,
      };
      data.attacks[args.fastOrSpecial].push(input);
      out.status = 200;
      return out;
    },
    modifyAttack: (parent, args) => {
      const queryName = args.name;
      const out = {
        name: "",
        type: "",
        damage: 0,
        status: 400,
      };

      for (const pokemon of data.pokemon) {
        const allAtks = [...pokemon.attacks.fast, ...pokemon.attacks.special];

        for (const attack of allAtks) {
          if (attack.name === queryName) {
            attack.name = args.newName;
            out.status = 200;
            out.name = attack.name;
            out.type = attack.type;
            out.damage = attack.damage;
          }
        }
      }
      return out;
    },
    deleteAttack: (parent, args) => {
      const out = {
        name: "",
        type: "",
        damage: 0,
        status: 400,
      };

      const allAtks = [...data.attacks.fast, ...data.attacks.special];

      allAtks.forEach((attack) => {
        if (attack.name === args.name) {
          out.name = attack.name;
          out.type = attack.type;
          out.status = 200;
          allAtks.splice(attack, 0);
        }
      });

      return out;
    },
  },
};
