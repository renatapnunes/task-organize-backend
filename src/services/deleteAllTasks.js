const { deleteAll } = require('../models/entity')('tasks');

module.exports = async () => {
  const deletedTask = await deleteAll();

  return deletedTask;
};
