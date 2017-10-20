'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Base = require('./Base.schema');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = '\nextend type Query {\n  User(id: ID!): User\n  Users: [User]\n}\n\nextend type Mutation {\n  createUser(data: UserInput): User\n  loginUser(data: UserLoginInput): UserLoginToken\n}\n\ntype User {\n  id: ID!\n  username: String\n  firstName: String\n  middleName: String\n  lastName: String\n  fullName: String\n}\n\ntype UserLoginToken {\n  token: String\n  success: Boolean\n  message: String\n}\n\ninput UserInput {\n  firstName: String\n  middleName: String\n  lastName: String\n  username: String\n  password: String\n}\n\ninput UserLoginInput {\n  username: String\n  password: String\n}\n'; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */

exports.default = function () {
  return [User, _Base2.default];
};