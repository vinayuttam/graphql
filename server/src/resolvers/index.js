/**
 * Dependencies
 */
import { Query as UserQuery, Mutation as UserMutation, User } from './User.resolver';

export default {
  Query: {
    ...UserQuery
  },
  Mutation: {
    ...UserMutation
  },
  User,
};
