/**
 * Dependencies
 */
import chalk from 'chalk';
import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './schema';

mongoose.Promise = Promise;

const dbConfig = {
  uri: 'mongodb://localhost:27017/graphql-poc',
  options: {
    useMongoClient: true,
  },
};

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(
  '/graphql',
  graphqlHTTP(() => ({
    schema,
    graphiql: true,
  })),
);

/* eslint-disable no-console */
mongoose.connect(dbConfig.uri, dbConfig.options, (err) => {
  if (err) {
    console.error(chalk.red(`Could not connect to MongoDB at ${dbConfig.uri}`));
    console.log(err);
  }

  console.log(chalk.green(`Successfully Connected to MongoDB at ${dbConfig.uri}`));
  app.listen(4000, () => console.log(chalk.green('GraphQL API Server Running on Port 4000')));
});
