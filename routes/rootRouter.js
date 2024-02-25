const express = require('express');
const heroRouter = require('./heroRouter');
const rootRouter = express.Router();

rootRouter.use('/heroes', heroRouter);

module.exports = rootRouter;
