const { gql } = require("apollo-server");

const typeDefs = gql`
  type Weight {
    minimum: String
    maximum: String
  }

  type Height {
    minimum: String
    maximum: String
  }

  type EvoReqs {
    amount: Int
    name: String
  }

  type Evolutions {
    id: Int
    name: String
  }

  type ActualAttacks {
    name: String
    type: String
    damage: Int
  }

  type Attacks {
    fast: [ActualAttacks]
    special: [ActualAttacks]
  }

  type Types {
    types: [String]
  }

  type Pokemon {
    id: String
    name: String!
    classification: String
    types: String
    resitant: [String]
    weaknesses: [String]
    weight: Weight
    height: Height
    fleeRate: Float
    evolutionRequirements: EvoReqs
    evolutions: [Evolutions]
    maxCP: Int
    maxHP: Int
    attacks: Attacks
  }

  type customPoke {
    pokemon: Pokemon
    status: Int
  }

  type customType {
    type: [String]
    status: Int
  }

  type customAtk {
    name: String
    type: String
    damage: Int
    status: Int
  }

  type Query {
    Pokemons: [Pokemon]
    PokemonName(name: String!): Pokemon
    PokemonId(id: String!): Pokemon
    Attacks(type: String!): [ActualAttacks]
    GetTypes: [String]
    AllPokemonOfType(type: String!): [Pokemon]
    AllPokemonAtkName(name: String!): [Pokemon]
  }

  type Mutation {
    addPokemon(name: String!, id: Int!): customPoke
    modifyPokemon(name: String!, newName: String!): customPoke
    deletePokemon(name: String!): customPoke
    addType(name: String!): customType
    modifyType(name: String!, newName: String!): customType
    deleteType(name: String!): customType
    addAttack(
      fastOrSpecial: String!
      name: String!
      type: String!
      damage: Int
    ): customAtk
    modifyAttack(name: String!, newName: String!): customAtk
    deleteAttack(name: String!): customAtk
  }
`;

module.exports = typeDefs;
