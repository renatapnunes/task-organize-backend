const connection = require('../connection');

module.exports = async (collection) => {
  const deletedEntity = (await connection()).collection(collection).deleteMany({});

  return deletedEntity;
};
