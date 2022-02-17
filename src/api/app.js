const express = require('express');
const cors = require('cors');

const router = require('../routes');
const error = require('../middlewares/error');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
}));

app.use(express.json());
app.use(router);

app.use(error);

module.exports = app;
