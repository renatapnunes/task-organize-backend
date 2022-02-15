const express = require('express');
const createController = require('../controllers/createTask');
const readController = require('../controllers/readTask');

const taskRouter = express.Router({ mergeParams: true });

taskRouter.post('/', createController);
taskRouter.get('/', readController);

module.exports = taskRouter;
