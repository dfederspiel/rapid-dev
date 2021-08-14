const { gql, ApolloServer } = require("apollo-server-azure-functions");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => "world"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server.createHandler({
    cors: {
      origin: '*',
      credentials: true,
    },
  }