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

const server = new ApolloServer({ typeDefs, resolvers, debug: true, playground: true });

module.exports = server.createHandler({
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'OPTIONS'],
      credentials: true,
    },
});
