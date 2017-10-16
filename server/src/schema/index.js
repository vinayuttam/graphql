import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers';
import User from './User.schema';

export default makeExecutableSchema({
  typeDefs: [User],
  resolvers,
  logger: { log: e => console.log(e) }
});
