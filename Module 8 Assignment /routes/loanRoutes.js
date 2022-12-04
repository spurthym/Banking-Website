const express = require('express');
const loanController = require('../controllers/loanController');
const authController=require('../controllers/authController')
const viewController = require('../controllers/viewsController');
const router = express.Router();

router
  .route('/')
  .get(authController.protect,loanController.getloan)
  .post(authController.protect,loanController.createLoan);

module.exports = router;
