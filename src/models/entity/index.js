const insertOne = require('./insertOne');
const find = require('./find');

module.exports = (collection) => ({
  insert: async (entity) => insertOne(collection, entity),
  findAll: async () => find(collection),
});
