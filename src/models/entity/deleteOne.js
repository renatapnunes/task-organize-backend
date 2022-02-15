const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, id) => {
  const deletedEntity = ObjectId.isValid(id)
  ? (await connection()).collection(collection).deleteOne({ _id: ObjectId(id) })
  : null;

  return deletedEntity;
};
