const insertTask = require('../services/insertTask');

const CREATED = 201;

module.exports = async (req, res, next) => {
  try {
    const taskData = req.body;

    const newTask = await insertTask(taskData);
    if ('error' in newTask) return next(newTask.error);

    return res.status(CREATED).send('Successfully created.');
  } catch (err) {
    next(err);
  }
};
