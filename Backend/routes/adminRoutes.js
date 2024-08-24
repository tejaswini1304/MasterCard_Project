const express = require('express');
const authController = require('../controllers/authController');
const ticketController = require('../controllers/ticketController');
const router = express.Router();

router.post('/forgotPassword', authController.forgotPassword)
router.use(authController.restrictTo('Admin'));
router.get('/getAllActiveTickets', ticketController.getAllActiveTickets)
router.get('/getAllTickets', ticketController.getAllTickets)
router.get('/getAllNonActiveTickets', ticketController.getAllNonActiveTickets)

module.exports = router;
