const moment = require('moment');

const taskSchema = require('../schemas/updateTaskSchema');
const { updateById } = require('../models/entity')('tasks');

const BAD_REQUEST = 400;

module.exports = async (id, taskData) => {
  const { error } = taskSchema.validate(taskData);
  if (error) return { error };

  const data = {
    ...taskData,
    update: moment(new Date()).format('DD-MM-YYYY'),
  };

  const updatedTask = await updateById(id, data);
  if (!updatedTask) return { error: { status: BAD_REQUEST } };

  return updatedTask;
};
