const express = require('express');
const { bookClass, cancelBooking, getUserBookings } = require('../controllers/bookingController');
const router = express.Router();

router.post('/book', bookClass);
router.post('/cancel', cancelBooking);
router.get('/bookings', getUserBookings);

module.exports = router;
