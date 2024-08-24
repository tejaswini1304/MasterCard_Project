const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'User email is required'],
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^\S+@\S+\.\S+$/.test(v);
            },
            message: 'Please enter a valid email'
        }
    },
    query: {
        type: String,
        required: [true, 'Query is required']
    },
    active: {
        type: Boolean,
        default: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }, response: {
        type: String,
        default: " "
    }
}, {
    timestamps: true
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
