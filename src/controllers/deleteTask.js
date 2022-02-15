const deleteTaskById = require('../services/deleteTaskById');
const deleteAllTasks = require('../services/deleteAllTasks');

const OK = 200;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    let deletedTask = {};

    if (id) {
      deletedTask = await deleteTaskById(id);
    } else {
      deletedTask = await deleteAllTasks();
    }

    if ('error' in deletedTask) return next(deletedTask.error);
    
    return res.status(OK).end();
  } catch (err) {
    next(err);
  }
};
