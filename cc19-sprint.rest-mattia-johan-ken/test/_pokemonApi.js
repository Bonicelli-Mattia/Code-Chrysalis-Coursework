const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const { setupServer } = require("../src/server");
const pokeData = require("../src/data");

/*
 * This sprint you will have to create all tests yourself, TDD style.
 * For this you will want to get familiar with chai-http https://www.chaijs.com/plugins/chai-http/
 * The same kind of structure that you encountered in lecture.express will be provided here.
 */
const server = setupServer();
describe("Pokemon API Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("Get /api/pokemon", () => {
    it("should return a list of all pokemons", async () => {
      const pokemon = pokeData.pokemon;
      const pokemonData = await request.get("/api/pokemon");
      expect(pokemonData).to.not.be.undefined;
      expect(pokemonData).to.be.json;
      expect(JSON.parse(pokemonData.text)).to.deep.equal(pokemon);
      expect(pokemonData).to.have.status(200);
    });
    it("should return n amount of pokemon", async () => {
      const pokemon = pokeData.pokemon;
      const nAmountOfPoks = pokemon.slice(0, 50);
      const pokemonData = await request
        .get("/api/pokemon")
        .query({ limit: 50 });

      expect(pokemonData).to.have.status(200);
      expect(JSON.parse(pokemonData.text)).to.have.length(50);
      expect(JSON.parse(pokemonData.text)).to.deep.equal(nAmountOfPoks);
    });
  });

  describe("POST /api/pokemon ", () => {
    it("should add a pokemon", async () => {
      const pokemon = { name: "theName" };
      const postPokemon = await request.post("/api/pokemon").query(pokemon);
      expect(postPokemon).to.have.status(201);
    });
  });

  describe("GET /api/pokemon/:id", () => {
    it("should grab a pokemon by its id", async () => {
      const golbat = pokeData.pokemon[41];
      const postPokemon = await request
        .get("/api/pokemon/:idOrName")
        .query({ id: "42" });
      expect(postPokemon).to.have.status(200);
      expect(JSON.parse(postPokemon.text)).to.deep.equal(golbat);
    });
    it("should ignore leading zeroes in the id", async () => {
      const golbat = pokeData.pokemon[41];
      // if we had to get the input from the user we would put into the function getting the user's input
      //  out logic that turns the number into a string (or we would just prevent him from using leading 0s)
      const postPokemon = await request
        .get("/api/pokemon/:idOrName")
        .query({ id: "042" });
      expect(postPokemon).to.have.status(200);
      expect(JSON.parse(postPokemon.text)).to.deep.equal(golbat);
    });
  });

  describe("GET /api/pokemon/:name", () => {
    it("should grab a pokemon by its name", async () => {
      const getPokemon = await request
        .get("/api/pokemon/:idOrName")
        .query({ name: "Mew" });
      const parsedPokemon = JSON.parse(getPokemon.text);
      expect(getPokemon).to.have.status(200);
      expect(parsedPokemon.name).to.equal("Mew");
    });
    it("should be case-insensitive", async () => {
      const getPokemon = await request
        .get("/api/pokemon/:name")
        .query({ name: "meW" });
      const parsedPokemon = JSON.parse(getPokemon.text);
      expect(getPokemon).to.have.status(200);
      expect(parsedPokemon.name).to.equal("Mew");
    });
  });
  describe("PATCH /api/pokemon/:idOrName", () => {
    it("it should patch Ken in", async () => {
      const patchPokemon = await request
        .patch("/api/pokemon/:idOrName")
        .query({ id: 113, name: "Ken" });

      expect(patchPokemon.text).to.equal("Ken");
    });
  });

  describe("DELETE /api/pokemon/idOrName", () => {
    it("should delete Ken", async () => {
      const allPokemon = pokeData.pokemon;
      const ken = allPokemon[112];
      const deleteKen = await request
        .delete("/api/pokemon/:idOrName")
        .query({ name: "Ken" });
      const notKen = JSON.parse(deleteKen.text);
      expect(notKen).to.not.equal(ken);
    });
  });
  describe("GET /api/pokemon/:idOrName/evolutions", () => {
    it("should return all evolutions", async () => {
      const allPokemon = pokeData.pokemon;
      const bulbasaurEvo = await request
        .get("/api/pokemon/:idOrName/evolutions")
        .query({ id: 1 });

      const evos = allPokemon[0].evolutions;
      const parsed = JSON.parse(bulbasaurEvo.text);

      expect(parsed).to.deep.equal(evos);
    });
    it("Should return an empty array if the pokemon has no evolutions", async () => {
      // const allPokemon = pokeData.pokemon;
      const mewEvo = await request
        .get("/api/pokemon/:idOrName/evolutions")
        .query({ id: 150 });

      const parsed = JSON.parse(mewEvo.text);
      expect(parsed).to.deep.equal([]);
    });
  });

  describe("GET /api/pokemon/:idOrName/evolutions/previous", () => {
    it("should return all PREVIOUS evolutions", async () => {
      const allPokemon = pokeData.pokemon;
      const blastoisePrevo = await request
        .get("/api/pokemon/:idOrName/evolutions/previous")
        .query({ id: 9 });

      const prevos = allPokemon[8]["Previous evolution(s)"];
      const parsed = JSON.parse(blastoisePrevo.text);

      expect(parsed).to.deep.equal(prevos);
    });
    it("Should return an empty array if the pokemon has no previousevolutions", async () => {
      // const allPokemon = pokeData.pokemon;
      const squirtlePrevo = await request
        .get("/api/pokemon/:idOrName/evolutions/previous")
        .query({ id: 7 });

      const parsed = JSON.parse(squirtlePrevo.text);
      expect(parsed).to.deep.equal([]);
    });
  });

  describe("GET /api/types", () => {
    it("should return all pokemon types", async () => {
      const allPokemonTypes = pokeData.types;
      const myPokemonTypes = await request.get("/api/types");

      expect(JSON.parse(myPokemonTypes.text)).to.deep.equal(allPokemonTypes);
      expect(myPokemonTypes).to.have.status(200);
    });
    it("should return n amount of types", async () => {
      const allPokemonTypes = pokeData.types;
      const nAmountOfTypes = allPokemonTypes.slice(0, 3);
      const myPokemonTypes = await request
        .get("/api/types")
        .query({ limit: 3 });

      expect(myPokemonTypes).to.have.status(200);
      expect(JSON.parse(myPokemonTypes.text)).to.have.length(3);
      expect(JSON.parse(myPokemonTypes.text)).to.deep.equal(nAmountOfTypes);
    });
  });
  describe("POST /api/types", () => {
    it("should add a type", async () => {
      const types = await request.post("/api/types").query({ type: "cheese" });
      const typesOfPokemon = JSON.parse(types.text);
      expect(types).to.have.status(200);
      expect(typesOfPokemon).to.include("cheese");
    });
  });
  describe("DELETE /api/types/:name", () => {
    it("should delete the given type", async () => {
      const types = await request
        .delete("/api/types/:name")
        .query({ type: "Ghost" });

      const typeDeleted = JSON.parse(types.text);

      expect(types).to.have.status(200);
      expect(typeDeleted).to.not.include("Ghost");
    });
  });
  describe("GET /api/types/:type/pokemon", () => {
    it("should return all Pokemon that are of a given type", async () => {
      const pokemonsOfGivenType = await request
        .get("/api/types/:type/pokemon")
        .query({ type: "Grass" });

      const allGrassPokemon = pokeData.pokemon
        .filter((poke) => (poke.types.includes("Grass") ? poke : null))
        .map((poke) => {
          return { id: poke.id, name: poke.name };
        });

      const allOfGivenType = JSON.parse(pokemonsOfGivenType.text);

      expect(pokemonsOfGivenType).to.have.status(200);
      expect(allOfGivenType).to.deep.equal(allGrassPokemon);
    });
  });
  describe("GET /api/attacks", () => {
    it("It should return all attacks", async () => {
      const attacks = pokeData.attacks;

      const allAttacksCall = await request.get("/api/attacks");

      const allAttacks = JSON.parse(allAttacksCall.text);
      expect(allAttacksCall).to.have.status(200);
      expect(allAttacks).to.deep.equal(attacks);
    });
    it("should able to take a query parameter `limit=n` that makes the endpoint only return `n` attacks", async () => {
      const attacks = pokeData.attacks;

      const limited = [...attacks.fast, ...attacks.special].splice(0, 7);

      const attacksCall = await request.get("/api/attacks").query({ limit: 7 });

      const limitedAttacks = JSON.parse(attacksCall.text);
      expect(attacksCall).to.have.status(200);
      expect(limitedAttacks).to.deep.equal(limited);
    });
  });
  describe("GET /api/attacks/fast", () => {
    it("It should return fast attacks", async () => {
      const fastAttacks = pokeData.attacks.fast;

      const fastAttacksCall = await request.get("/api/attacks/fast");

      const allFastAttacks = JSON.parse(fastAttacksCall.text);

      expect(fastAttacksCall).to.have.status(200);
      expect(allFastAttacks).to.deep.equal(fastAttacks);
    });
    it("should able to take a query parameter `limit=n` that makes the endpoint only return `n` attacks", async () => {
      const fastAttacks = pokeData.attacks.fast;
      const notAllFastAttacks = [...fastAttacks].splice(0, 7);

      const notAllFastAttacksCall = await request
        .get("/api/attacks/fast")
        .query({ limit: 7 });

      const sevenFastAttacks = JSON.parse(notAllFastAttacksCall.text);

      expect(notAllFastAttacksCall).to.have.status(200);
      expect(sevenFastAttacks).to.deep.equal(notAllFastAttacks);
    });
  });
  describe("GET /api/attacks/special", () => {
    it("should return special attacks", async () => {
      const specialAttacks = pokeData.attacks.special;

      const specialAttacksCall = await request.get("/api/attacks/special");

      const specAttacks = JSON.parse(specialAttacksCall.text);

      expect(specialAttacksCall).to.have.status(200);
      expect(specAttacks).to.deep.equal(specialAttacks);
    });
    it("should be able to take a query parameter `limit=n` that makes the endpoint only return `n` attacks", async () => {
      const specialAttacksLimited = [...pokeData.attacks.special].splice(0, 7);

      const specialAttacksCall = await request
        .get("/api/attacks/special")
        .query({ limit: 7 });

      const specAttacks = JSON.parse(specialAttacksCall.text);

      expect(specialAttacksCall).to.have.status(200);
      expect(specAttacks).to.deep.equal(specialAttacksLimited);
    });
  });
  describe("GET /api/attacks/:name", () => {
    it("should get a specific attack by name", async () => {
      const attacks = await request
        .get("/api/attacks/:name")
        .query({ attack: "Lick" });

      const parsed = JSON.parse(attacks.text);
      expect(parsed[0]).to.equal("Lick");
    });
    it("should get a specific attack by name, no matter if it is fast or special", async () => {
      const attacks = await request
        .get("/api/attacks/:name")
        .query({ attack: "Ancient Power" });

      const parsed = JSON.parse(attacks.text);
      expect(parsed[0]).to.equal("Ancient Power");
    });
  });
  describe("GET /api/attacks/:name/pokemon", () => {
    it("Returns all Pokemon (`id` and `name`) that have an attack with the given name", async () => {
      const specificAttackArr = await request
        .get("/api/attacks/:name/pokemon")
        .query({ attack: "Water Gun" });

      const parsed = JSON.parse(specificAttackArr.text);
      expect(specificAttackArr).to.have.status(200);
      expect(parsed.length).to.equal(13);
      expect(parsed[0].name).to.equal("Wartortle");
    });
  });
  describe("POST /api/attacks/fast", () => {
    it("should POST a fast attack", async () => {
      const queryAttack = await request
        .post("/api/attacks/fast")
        .query({ attack: "Wing Attack" });

      expect(queryAttack).to.have.status(200);
    });
  });

  describe("POST /api/attacks/special", () => {
    it("should POST a special attack", async () => {
      const queryAttack = await request
        .post("/api/attacks/special")
        .query({ attack: "Hydro Pump" });

      expect(queryAttack).to.have.status(200);
    });
  });

  describe("PATCH /api/pokemon/:name", () => {
    it("should patch Ken's Arm Lock in", async () => {
      const patchAttack = await request
        .patch("/api/attacks/:name")
        .query({ name: "Spark", mod: "Ken's Arm Lock" });

      expect(patchAttack).to.have.status(201);
      expect(patchAttack.text).to.equal("Ken's Arm Lock");
    });
  });

  describe("DELETE /api/attacks/:name", () => {
    it("should delete Ken's Arm Lock", async () => {
      const kensArmLock = await request
        .delete("/api/attacks/:name")
        .query({ attack: "Ken's Arm Lock" });

      const parsed = JSON.parse(kensArmLock.text);
      const onlyNames = parsed.map((name) => name.name);

      expect(kensArmLock).to.have.status(200);
      expect(onlyNames).to.not.include("Ken's Arm Lock");
    });
  });
});
