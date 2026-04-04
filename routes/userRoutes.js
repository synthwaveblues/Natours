const express = require('express');
const usersRouter = express.Router();
const userController = require('../controllers/userController');

usersRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.addUser)

usersRouter
  .route('/:id')
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser)

module.exports = usersRouter;