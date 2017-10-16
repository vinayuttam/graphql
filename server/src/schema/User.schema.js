const User = `
extend type Query {
  User: User
}

type User {
  id: ID!
  username: String
  firstName: String
  lastName: String
  fullName: String
}
`;

export default () => [User];
