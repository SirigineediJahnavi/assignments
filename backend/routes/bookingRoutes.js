const express = require('express');
const { bookClass, getUserBookings } = require('../controllers/bookingController');
const router = express.Router();

router.post('/book', bookClass);
router.get('/:phone_number', getUserBookings);

module.exports = router;
