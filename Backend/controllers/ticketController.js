const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Ticket = require('../models/ticketSchema');

exports.getAllActiveTickets = catchAsync(async (req, res, next) => {
    const tickets = await Ticket.find({ 'active': true });
    res.status(200).json({
        status: 'success',
        results: tickets.length,
        data: {
            tickets
        }
    });
});

exports.getAllNonActiveTickets = catchAsync(async (req, res, next) => {
    const tickets = await Ticket.find({ 'active': false });
    res.status(200).json({
        status: 'success',
        results: tickets.length,
        data: {
            tickets
        }
    });
});

exports.getAllTickets = catchAsync(async (req, res, next) => {
    const tickets = await Ticket.find();
    res.status(200).json({
        status: 'success',
        results: tickets.length,
        data: {
            tickets
        }
    });
});

exports.createTicket = catchAsync(async (req, res, next) => {
    const { email, query } = req.body;
    const ticket = await Ticket.create({
        email,
        query,
        active: true,
        response: " "
    });
    console.log(ticket);

    res.status(200).json({
        status: 'success',
        data: {
            ticket
        }
    });
});