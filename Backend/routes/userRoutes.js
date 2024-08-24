const express = require('express');
const authController = require('../controllers/authController');
const ticketController = require('../controllers/ticketController');
const router = express.Router();


router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.post('/signup', authController.signup);
router.post('/verifySignupEmailOTP', authController.verifyOtp);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.use(authController.restrictTo('User'));
router.post('/createTicket', ticketController.createTicket)


// router.use(authController.protect);s






module.exports = router;