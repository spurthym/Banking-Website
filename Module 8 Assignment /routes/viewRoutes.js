const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController=require('../controllers/authController')

const router = express.Router();

router.get('/', viewsController.getLandingPAge);
router.get('/Course', viewsController.getCourse);
router.get('/login', viewsController.getLoginForm);
router.get('/signup', viewsController.getSignInForm);
router.get('/a', viewsController.getSignInForm);
router.get('/requestloan', viewsController.requestloan);
router.get('/homePage',authController.protect, viewsController.displayLoginBase);


module.exports = router;
