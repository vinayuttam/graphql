'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = exports.User = exports.Query = undefined;

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _models = require('../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var Query = exports.Query = {
  Users: function Users() {
    return _models.UserModel.find();
  },

  User: function User(_, params) {
    return _models.UserModel.findById(params.id);
  }
};

var User = exports.User = {
  fullName: function fullName(source) {
    return source.firstName + ' ' + source.lastName;
  }
};

var Mutation = exports.Mutation = {
  createUser: function createUser(_, params) {
    var passwordSalt = _bcrypt2.default.genSaltSync(10);
    var passwordHash = _bcrypt2.default.hashSync(params.data.password, passwordSalt);
    var _params$data = params.data,
        firstName = _params$data.firstName,
        middleName = _params$data.middleName,
        lastName = _params$data.lastName,
        username = _params$data.username;

    var user = new _models.UserModel({
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      username: username,
      password: passwordHash
    });

    return user.save();
  },
  loginUser: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, params) {
      var _params$data2, username, password, user, token;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _params$data2 = params.data, username = _params$data2.username, password = _params$data2.password;
              _context.next = 3;
              return _models.UserModel.findOne({ username: username }, 'password');

            case 3:
              user = _context.sent;

              if (!(user && _bcrypt2.default.compareSync(password, user.password))) {
                _context.next = 7;
                break;
              }

              token = _jsonwebtoken2.default.sign({ username: username }, 'superSecretText', { expiresIn: 60 * 60 });
              return _context.abrupt('return', {
                token: token,
                message: 'message',
                success: true
              });

            case 7:
              return _context.abrupt('return', {
                message: 'User authentication failed! Either User is not found (or) Incorrect login credentials',
                success: false
              });

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function loginUser(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()
};