const typeDefs = `
  type Query {
    sets: [Set!]!
    set(name: String!): Set!
  }
  type Set {
    id: ID!
    name: String!
    type: String!
    bonuses: String!
    traits: Int!
    location: String
    dlc: String
    obtainableItems: [String!]
  }
`;

module.exports = typeDefs;
