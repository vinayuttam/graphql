/**
 * Dependencies
 */
import Base from './Base.schema';

const User = `
extend type Query {
  User(id: ID!): User
  Users: [User]
}

extend type Mutation {
  createUser(data: UserInput): User
}

type User {
  id: ID!
  username: String
  firstName: String
  lastName: String
  fullName: String
}

input UserInput {
  firstName: String
  lastName: String
  username: String
}
`;

export default () => [User, Base];
