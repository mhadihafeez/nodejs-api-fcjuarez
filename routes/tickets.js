const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');


//GET ALL TICKETS
router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (err) {
        res.json({ message: err });
    }
});

//CREATE NEW TICKET
router.post('/', (req, res) => {
    const ticket = new Ticket({
        season: req.body.season,
        section: req.body.section,
        row: req.body.row,
        seat: req.body.seat,
        availability: req.body.availability,
        price: req.body.price,
    });

    ticket.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });
});

//GET SINGLE TICKET
router.get('/:ticketId', async (req, res) => {
    try {
        const singleTicket = await Ticket.findById(req.params.ticketId);
        res.json(singleTicket);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE TICKET
router.delete('/:ticketId', async (req, res) => {
    try {
        const deletedTicket = await Ticket.deleteOne({ _id: req.params.ticketId });
        res.json(deletedTicket);
    } catch (err) {
        res.json({ message: err });
    }
});

//UPDATE TICKET
router.patch('/:ticketId', async (req, res) => {
    try {
        const updatedTicket = await Ticket.updateOne(
            { _id: req.params.ticketId },
            {
                $set: {
                    season: req.body.season,
                    section: req.body.section,
                    row: req.body.row,
                    seat: req.body.seat,
                    availability: req.body.availability,
                    price: req.body.price,
                }
            });
        res.json(updatedTicket);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;