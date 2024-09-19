const express = require('express');
const Router = express.Router();
const massageRouter = require('./messages')
const userRouter = require('./user');
const auth = require('./auth')

Router.use('/user',userRouter);
Router.use('/massage',massageRouter);
Router.use('/auth',auth);

module.exports = Router;