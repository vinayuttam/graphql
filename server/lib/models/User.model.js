'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; /**
                                         * Dependencies
                                         */

var UserSchema = new Schema({
  firstName: {
    required: true,
    trim: true,
    type: String
  },
  middleName: {
    trim: true,
    type: String
  },
  lastName: {
    required: true,
    trim: true,
    type: String
  },
  username: {
    required: true,
    trim: true,
    type: String
  },
  password: {
    required: true,
    trim: true,
    type: String
  }
});

exports.default = _mongoose2.default.model('User', UserSchema);