const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, id, newData) => {
  const updateEntity = ObjectId.isValid(id)
  ? (await connection()).collection(collection)
    .updateOne({ _id: ObjectId(id) }, { $set: newData })
  : null;

  return updateEntity;
};
