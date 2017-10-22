/**
 * Dependencies
 */
import { makeExecutableSchema } from 'graphql-tools';
import Base from './Base.schema';
import User from './User.schema';
import Task from './Task.schema';
import resolvers from '../resolvers';

export default makeExecutableSchema({
  typeDefs: [Base, User, Task],
  resolvers,
  logger: { log: e => console.log(e) }, // eslint-disable-line no-console
});
