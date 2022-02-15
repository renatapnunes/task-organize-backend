const { deleteById } = require('../models/entity')('tasks');

const BAD_REQUEST = 400;

module.exports = async (id) => {
  const deletedTask = await deleteById(id);
  if (!deletedTask) return { error: { status: BAD_REQUEST } };

  return deletedTask;
};
