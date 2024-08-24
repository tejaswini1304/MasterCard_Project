const express = require('express');
const ticketController = require('../controllers/ticketController');  // Adjust the path to your controller
const router = express.Router();

router.get('/tickets/today', ticketController.getTodayTickets);

router.get('/tickets/month', ticketController.getMonthlyTickets);

router.get('/tickets/year', ticketController.getYearlyTickets);

router.get('/tickets/active', ticketController.getActiveTickets);

router.get('/tickets/inactive', ticketController.getInactiveTickets);

module.exports = router;