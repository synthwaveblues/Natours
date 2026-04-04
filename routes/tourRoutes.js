const express = require('express');
const toursRouter = express.Router();
const tourController = require('../controllers/tourController');

toursRouter
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.addTour)

toursRouter
  .route('/:id')
  .delete(tourController.deleteTour)
  .get(tourController.getTourById)
  .patch(tourController.updateTour)

module.exports = toursRouter;