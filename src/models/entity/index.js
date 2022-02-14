const insertOne = require('./insertOne');

module.exports = (collection) => ({
  insert: async (entity) => insertOne(collection, entity),
});
