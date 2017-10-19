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
  loginUser(data: UserLoginInput): UserLoginToken
}

type User {
  id: ID!
  username: String
  firstName: String
  middleName: String
  lastName: String
  fullName: String
}

type UserLoginToken {
  token: String
  success: Boolean
  message: String
}

input UserInput {
  firstName: String
  middleName: String
  lastName: String
  username: String
  password: String
}

input UserLoginInput {
  username: String
  password: String
}
`;

export default () => [User, Base];
