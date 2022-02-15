const express = require('express');
const createController = require('../controllers/createTask');
const readController = require('../controllers/readTask');
const updateController = require('../controllers/updateTask');
const deleteController = require('../controllers/deleteTask');

const taskRouter = express.Router({ mergeParams: true });

taskRouter.post('/', createController);
taskRouter.get('/', readController);
taskRouter.put('/:id', updateController);
taskRouter.delete('/:id', deleteController);
taskRouter.delete('/', deleteController);

module.exports = taskRouter;
