/**
 * Dependencies
 */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models';

export const Query = {
  Users: (_, __, context) => {
    console.log(context)
    return UserModel.find()
  },

  User: (_, params, context) => {
    console.log(context);
    return UserModel.findById(params.id)
  },
};

export const User = {
  fullName: source => `${source.firstName} ${source.lastName}`,
};

export const Mutation = {
  createUser: (_, params) => {
    const passwordSalt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(params.data.password, passwordSalt);
    const {
      firstName, middleName, lastName, username,
    } = params.data;
    const user = new UserModel({
      firstName,
      middleName,
      lastName,
      username,
      password: passwordHash,
    });

    return user.save();
  },
  loginUser: async (_, params) => {
    const { username, password } = params.data;

    const user = await UserModel.findOne({ username }, 'password');

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        { username },
        'superSecretText',
        { expiresIn: (60 * 60) },
      );

      return {
        token,
        message: 'message',
        success: true,
      };
    }
    return {
      message: 'User authentication failed! Either User is not found (or) Incorrect login credentials',
      success: false,
    };
  },
};
