import { ApolloServer } from 'apollo-server';
import index from './typeDefs';
import resolvers from './resolvers';

const server = new ApolloServer({ typeDefs: index, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
