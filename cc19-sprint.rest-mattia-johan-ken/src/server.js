const pokeData = require("./data");
const express = require("express");

const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.get("/api/pokemon", (req, res) => {
    const { limit } = req.query;
    let outArr = [];
    try {
      if (limit) {
        outArr = pokeData.pokemon.slice(0, limit);
        res.send(outArr);
      } else {
        res.send(pokeData.pokemon);
      }
      res.status(200);
    } catch (e) {
      res.status(400).json({
        message: "You failed!",
      });
    }
  });

  app.post("/api/pokemon", (req, res) => {
    res.status(201);
    res.end();
  });

  app.get("/api/pokemon/:idOrName", (req, res) => {
    try {
      if (req.query.id) {
        const { id } = req.query;
        const newid = parseInt(id, 10);

        const pokemonById = pokeData.pokemon[newid - 1];
        res.status(200);
        res.send(pokemonById);
      } else {
        const { name } = req.query;
        const lowerName = name.toLowerCase();
        const pokemonByName = pokeData.pokemon;
        let result = {};
        for (const pokemon of pokemonByName) {
          if (pokemon.name.toLowerCase() === lowerName) {
            result = pokemon;
          }
        }
        res.status(200);
        res.send(result);
      }
    } catch (e) {
      res.status(400).json({
        message: "Try again cowboy!",
      });
    }
  });

  app.patch("/api/pokemon/:idOrName", (req, res) => {
    try {
      const { id } = req.query;
      const { name } = req.query;
      const pokayz = pokeData.pokemon;
      let pokemean = "";
      for (const pokemon of pokayz) {
        if (pokemon.id === id) {
          pokemon.name = name;
          pokemean = pokemon.name;
        }
      }
      res.status(201).send(pokemean);
    } catch (e) {
      res.status(400).json({
        message: "Not MoDiFiEd",
      });
    }
  });
  app.delete("/api/pokemon/:idOrName", (req, res) => {
    try {
      const { name } = req.query;
      const kenless = pokeData.pokemon.filter((pokemon) => {
        return pokemon.name !== name;
      });
      res.status(200).send(kenless);
    } catch (e) {
      console.log(e);
      res.send(400);
    }
  });

  app.get("/api/pokemon/:idOrName/evolutions", (req, res) => {
    try {
      const { id } = req.query;
      let out;
      if (pokeData.pokemon[id - 1].evolutions) {
        out = pokeData.pokemon[id - 1].evolutions;
      } else {
        out = [];
      }
      console.log(`out is: ${out}`);
      res.status(200).send(out);
    } catch (e) {
      res.sendStatus(400);
    }
  });

  app.get("/api/pokemon/:idOrName/evolutions/previous", (req, res) => {
    try {
      const { id } = req.query;
      let out;
      if (pokeData.pokemon[id - 1]["Previous evolution(s)"]) {
        out = pokeData.pokemon[id - 1]["Previous evolution(s)"];
      } else {
        out = [];
      }
      console.log(`out is: ${out}`);
      res.status(200).send(out);
    } catch (e) {
      res.sendStatus(400);
    }
  });

  app.get("/api/types", (req, res) => {
    const { limit } = req.query;
    let outArr = [];
    try {
      if (limit) {
        outArr = pokeData.types.slice(0, limit);
        res.send(outArr);
      } else {
        res.send(pokeData.types);
      }
      res.status(200);
    } catch (e) {
      res.status(400).json({
        message: "The type is... YOU FAILED!",
      });
    }
  });

  app.post("/api/types", (req, res) => {
    try {
      const types = pokeData.types;
      const { type } = req.query;
      res.status(200);
      types.push(type);
      res.send(types);
    } catch (e) {
      res.status(400);
      console.log(e);
    }
  });

  app.delete("/api/types/:name", (req, res) => {
    const { type } = req.query;
    try {
      const filtered = pokeData.types.filter((pokeType) => pokeType !== type);
      res.status(200);
      res.send(filtered);
    } catch (e) {
      console.log(e);
      res.status(400);
    }
  });

  app.get("/api/types/:type/pokemon", (req, res) => {
    const { type } = req.query;

    try {
      const pokemonOfType = pokeData.pokemon
        .filter((poke) => (poke.types.includes(type) ? poke : null))
        .map((poke) => {
          return { id: poke.id, name: poke.name };
        });
      res.status(200);
      res.send(pokemonOfType);
    } catch (e) {
      res.status(400);
      console.log(e);
    }
  });

  app.get("/api/attacks", (req, res) => {
    const { limit } = req.query;
    const attacks = pokeData.attacks;
    try {
      if (limit) {
        const limited = [...attacks.fast, ...attacks.special].splice(0, limit);
        res.send(limited);
      } else {
        res.send(attacks);
      }

      res.status(200);
    } catch (e) {
      res.status(400);
      console.log(e);
    }
  });

  app.get("/api/attacks/fast", (req, res) => {
    const { limit } = req.query;
    const allFastAttacks = pokeData.attacks.fast;

    try {
      if (limit) {
        const limited = allFastAttacks.splice(0, limit);
        res.send(limited);
      } else {
        res.send(allFastAttacks);
      }
      res.status(200);
    } catch (e) {
      res.status(400);
      console.log(e);
    }
  });

  app.get("/api/attacks/special", (req, res) => {
    const { limit } = req.query;
    const specialAttacks = pokeData.attacks.special;

    try {
      if (limit) {
        const limited = specialAttacks.splice(0, limit);
        res.send(limited);
      } else {
        res.send(specialAttacks);
      }
      res.status(200);
    } catch (e) {
      res.status(400);
      console.log(e);
    }
  });

  app.get("/api/attacks/:name", (req, res) => {
    const { attack } = req.query;
    const attacks = pokeData.attacks;
    const allAttacks = [...attacks.fast, ...attacks.special];
    const filtered = allAttacks
      .filter((pokeAttack) => {
        if (pokeAttack.name === attack) return pokeAttack.name;
      })
      .map((attack) => attack.name);
    res.send(filtered);
  });

  app.get("/api/attacks/:name/pokemon", (req, res) => {
    const { attack } = req.query;
    const result = [];
    try {
      const toBeFiltered = pokeData.pokemon
        .filter((pokemonData) => {
          let poke;
          const iterable = [
            ...pokemonData.attacks.fast,
            ...pokemonData.attacks.special,
          ];
          for (let i = 0; i < iterable.length; i++) {
            if (iterable[i].name === attack) {
              poke = pokemonData;
            }
          }
          if (poke) {
            return poke;
          }
        })
        .map((pokemon) => {
          result.push({ id: pokemon.id, name: pokemon.name });
        });
      res.status(200);
      res.send(result);
    } catch (e) {
      res.status(400).send("Failed");
    }
  });

  app.post("/api/attacks/fast", (req, res) => {
    try {
      res.status(200).send("Added fast attack");
    } catch (e) {
      res.status(400).send("Failed to add fast attack");
    }
  });

  app.post("/api/attacks/special", (req, res) => {
    try {
      res.status(200).send("Added special attack");
    } catch (e) {
      res.status(400).send("Failed to add special attack");
    }
  });
  app.patch("/api/attacks/:name", (req, res) => {
    try {
      const { name } = req.query;
      const { mod } = req.query;
      let newAttack = "";
      const pokemonAttack = [
        ...pokeData.attacks.fast,
        ...pokeData.attacks.special,
      ];
      for (const attacks of pokemonAttack) {
        if (attacks.name === name) {
          attacks.name = mod;
          newAttack = mod;
        }
      }
      console.log(newAttack);
      res.status(201).send(newAttack);
    } catch (e) {
      console.log(e);
      res.status(400).json({
        message: "Not MoDiFiEd",
      });
    }
  });

  app.delete("/api/attacks/:name", (req, res) => {
    const { attack } = req.query;
    try {
      const pokeAtks = [...pokeData.attacks.fast, ...pokeData.attacks.special];
      const filtered = pokeAtks.filter(
        (attackName) => attackName.name !== attack
      );

      res.status(200);
      res.send(filtered);
    } catch (e) {
      console.log(e);
      res.status(400);
    }
  });

  return app;
};

module.exports = { setupServer };
