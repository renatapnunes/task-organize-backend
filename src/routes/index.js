const express = require('express');
const taskRoutes = require('./taskRoutes');

const router = express.Router({ mergeParams: true });

router.use('/task', taskRoutes);

module.exports = router;
