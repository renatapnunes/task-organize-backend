const findAllTask = require('../services/findAllTasks');

const OK = 200;

module.exports = async (_req, res, next) => {
  try {
    const tasks = await findAllTask();
  
    return res.status(OK).send(tasks);
  } catch (err) {
    next(err);
  }
};
