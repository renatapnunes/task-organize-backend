const moment = require('moment');

const taskSchema = require('../../schemas/taskSchema');
const { insert } = require('../../models/entity')('tasks');

module.exports = async (taskData) => {
  const { error } = taskSchema.validate(taskData);
  if (error) return { error };

  const data = {
    ...taskData,
    created: moment(new Date()).format('DD-MM-YYYY'),
    update: moment(new Date()).format('DD-MM-YYYY'),
  };

  const newTask = await insert(data);

  return newTask;
};
