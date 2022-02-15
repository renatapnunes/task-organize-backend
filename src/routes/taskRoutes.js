const express = require('express');
const createController = require('../controllers/createTask');
const readController = require('../controllers/readTask');
const updateController = require('../controllers/updateTask');

const taskRouter = express.Router({ mergeParams: true });

taskRouter.post('/', createController);
taskRouter.get('/', readController);
taskRouter.put('/:id', updateController);

module.exports = taskRouter;
