/**
 * Dependencies
 */
import { TaskModel, UserModel } from '../models';

export const Query = {
  Tasks: () => TaskModel.find(),
  Task: (_, params) => TaskModel.findById(params.id),
};

export const Task = {
  taskOwner: source => UserModel.findById(source.taskOwnerId),
};

export const Mutation = {
  createTask: (_, params) => {
    const task = new TaskModel(params.data);
    return task.save();
  }
}
