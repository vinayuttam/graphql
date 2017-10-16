import UserModel from '../models/User.model';

export const Query = {
  Users: (_, __, context) => {
    return UserModel.find().exec();
  }
}

export const Mutation = {
  createUser: (_, params, context) => {
    console.log(params);
  }
}

export const User = {
  fullName: user => `${user.firstName} ${user.lastName}`
}
