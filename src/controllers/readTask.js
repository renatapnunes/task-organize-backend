const findAllTask = require('../services/findAllTasks');

const OK = 200;

module.exports = async (_req, res, next) => {
  try {
    const tasks = await findAllTask();

    if ('error' in tasks) return next(tasks.error);
  
    return res.status(OK).send(tasks);
  } catch (err) {
    next(err);
  }
};
