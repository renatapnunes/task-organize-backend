const express = require('express');
const createController = require('../controllers/task/createTask');

const taskRouter = express.Router({ mergeParams: true });

taskRouter.post('/', createController);

module.exports = taskRouter;
