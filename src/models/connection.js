const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/Tasks';
const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
const DB_NAME = 'Tasks';

let connection = null;

module.exports = async () => {
  try {
    const db = connection
    || (connection = (await MongoClient.connect(MONGO_DB_URL, OPTIONS)).db(DB_NAME));
    return db;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
