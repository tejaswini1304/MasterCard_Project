const Ticket = require('../models/ticketSchema');  // Adjust the path to your model

function getStartOfDay() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function getEndOfDay() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
}

function getStartOfMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
}

function getEndOfMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
}

function getStartOfYear() {
    const now = new Date();
    return new Date(now.getFullYear(), 0, 1); // January 1st
}

function getEndOfYear() {
    const now = new Date();
    return new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999); // December 31st
}

// created today
exports.getTodayTickets = async (req, res) => {
    try {
        const startOfDay = getStartOfDay();
        const endOfDay = getEndOfDay();

        const todayTickets = await Ticket.find({
            createdAt: {
                $gte: startOfDay,
                $lt: endOfDay
            },
            active: true
        });

        const totalTickets = await Ticket.countDocuments();

        res.status(200).json({
            status: 'success',
            results: todayTickets.length,
            total: totalTickets,
            data: {
                tickets: todayTickets
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while fetching today\'s tickets.',
            error: err.message
        });
    }
};

// this month
exports.getMonthlyTickets = async (req, res) => {
    try {
        const startOfMonth = getStartOfMonth();
        const endOfMonth = getEndOfMonth();

        const monthlyTickets = await Ticket.find({
            createdAt: {
                $gte: startOfMonth,
                $lt: endOfMonth
            },
            active: true
        });

        const totalTickets = await Ticket.countDocuments();

        res.status(200).json({
            status: 'success',
            results: monthlyTickets.length,
            total: totalTickets,
            data: {
                tickets: monthlyTickets
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while fetching this month\'s tickets.',
            error: err.message
        });
    }
};

// created this year
exports.getYearlyTickets = async (req, res) => {
    try {
        const startOfYear = getStartOfYear();
        const endOfYear = getEndOfYear();

        const yearlyTickets = await Ticket.find({
            createdAt: {
                $gte: startOfYear,
                $lt: endOfYear
            },
            active: true
        });

        const totalTickets = await Ticket.countDocuments();

        res.status(200).json({
            status: 'success',
            results: yearlyTickets.length,
            total: totalTickets,
            data: {
                tickets: yearlyTickets
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while fetching this year\'s tickets.',
            error: err.message
        });
    }
};

// active tickets
exports.getActiveTickets = async (req, res) => {
    try {
        const activeTickets = await Ticket.find({
            active: true
        });

        const totalTickets = await Ticket.countDocuments();

        res.status(200).json({
            status: 'success',
            results: activeTickets.length,
            total: totalTickets,
            data: {
                tickets: activeTickets
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while fetching active tickets.',
            error: err.message
        });
    }
};

// inactive tickets
exports.getInactiveTickets = async (req, res) => {
    try {
        const inactiveTickets = await Ticket.find({
            active: false
        });

        const totalTickets = await Ticket.countDocuments();

        res.status(200).json({
            status: 'success',
            results: inactiveTickets.length,
            total: totalTickets,
            data: {
                tickets: inactiveTickets
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while fetching inactive tickets.',
            error: err.message
        });
    }
};
