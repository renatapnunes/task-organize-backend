const { findAll } = require('../models/entity')('tasks');

module.exports = async () => {
  const tasks = await findAll();

  return tasks;
};
