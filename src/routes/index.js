const express = require('express');
const taskRoutes = require('./taskRoutes');

const route = express.Router({ mergeParams: true });

route.use('/users', taskRoutes);

module.exports = route;
