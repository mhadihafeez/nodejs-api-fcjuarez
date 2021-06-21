const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
    season: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    row: {
        type: String,
        required: true
    },
    seat: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Tickets', TicketSchema);
