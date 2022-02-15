const insertOne = require('./insertOne');
const find = require('./find');
const updateOne = require('./updateOne');

module.exports = (collection) => ({
  insert: async (entity) => insertOne(collection, entity),
  findAll: async () => find(collection),
  updateById: async (id, entity) => updateOne(collection, id, entity),
});
