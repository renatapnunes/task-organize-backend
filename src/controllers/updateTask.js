const updateTask = require('../services/updateTask');

const OK = 200;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const taskData = req.body;

    const updatedTask = await updateTask(id, taskData);
    if ('error' in updatedTask) return next(updatedTask.error);

    return res.status(OK).send({ message: 'Successfully updated.' });
  } catch (err) {
    next(err);
  }
};
