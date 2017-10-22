/**
 * Dependencies
 */
import { Query as UserQuery, Mutation as UserMutation, User } from './User.resolver';
import { Query as TaskQuery, Mutation as TaskMutation, Task } from './Task.resolver';

export default {
  Query: {
    ...UserQuery,
    ...TaskQuery,
  },
  Mutation: {
    ...UserMutation,
    ...TaskMutation,
  },
  User,
  Task,
};
