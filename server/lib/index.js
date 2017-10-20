'use strict';

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Dependencies
 */
_mongoose2.default.Promise = Promise;

var dbConfig = {
  uri: 'mongodb://localhost:27017/graphql-poc',
  options: {
    useMongoClient: true
  }
};

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/graphql', (0, _expressGraphql2.default)(function () {
  return {
    schema: _schema2.default,
    graphiql: true
  };
}));

/* eslint-disable no-console */
_mongoose2.default.connect(dbConfig.uri, dbConfig.options, function (err) {
  if (err) {
    console.error(_chalk2.default.red('Could not connect to MongoDB at ' + dbConfig.uri));
    console.log(err);
  }

  console.log(_chalk2.default.green('Successfully Connected to MongoDB at ' + dbConfig.uri));
  app.listen(4000, function () {
    return console.log(_chalk2.default.green('GraphQL API Server Running on Port 4000'));
  });
});