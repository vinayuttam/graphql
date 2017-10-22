/**
 * Dependencies
 */
import Base from './Base.schema';
import User from './User.schema';

const Task = `
extend type Query {
  Task(id: ID!): Task
  Tasks: [Task]
}

extend type Mutation {
  createTask(data: TaskInput): Task
}

type Task {
  id: ID!
  title: String
  description: String
  completed: Boolean
  taskOwnerId: String
  taskOwner: User
}

input TaskInput {
  title: String
  description: String
  completed: Boolean
  taskOwnerId: String
}
`;

export default () => [Task, User, Base];
