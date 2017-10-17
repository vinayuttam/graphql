/**
 * Dependencies
 */
import { UserModel } from '../models';

export const Query = {
  Users: () => {
    return UserModel.find();
  },

  User: (_, params) => {
    return UserModel.findById(params.id);
  }
};

export const User = {
  fullName: source => {
    return `${source.firstName} ${source.lastName}`
  }
}

export const Mutation = {
  createUser: (_, params) => {
    const user = new UserModel(params.data);
    return user.save();
  }
};
