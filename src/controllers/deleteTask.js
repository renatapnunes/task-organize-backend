const deleteTaskById = require('../services/deleteTaskById');

const OK = 200;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
  
    const deletedTask = await deleteTaskById(id);
    if ('error' in deletedTask) return next(deletedTask.error);
    
    return res.status(OK).end();
  } catch (err) {
    next(err);
  }
};
