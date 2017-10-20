'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _Base = require('./Base.schema');

var _Base2 = _interopRequireDefault(_Base);

var _User = require('./User.schema');

var _User2 = _interopRequireDefault(_User);

var _resolvers = require('../resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Dependencies
 */
exports.default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: [_Base2.default, _User2.default],
  resolvers: _resolvers2.default,
  logger: { log: function log(e) {
      return console.log(e);
    } } // eslint-disable-line no-console
});