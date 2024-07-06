const Booking = require('../models/Booking');
const Class = require('../models/Class');

exports.bookClass = async (req, res) => {
  try {
    const { user_id, class_id } = req.body;
    const fitnessClass = await Class.findById(class_id);

    if (fitnessClass.currentEnrollment < fitnessClass.capacity) {
      fitnessClass.currentEnrollment += 1;
      await fitnessClass.save();

      const booking = new Booking({ user_id, class_id, status: 'confirmed' });
      await booking.save();

      res.json({ message: 'Booking confirmed', booking });
    } else {
      const booking = new Booking({ user_id, class_id, status: 'waitlisted' });
      await booking.save();

      res.json({ message: 'Class full, added to waitlist', booking });
    }
  } catch (error) {
    console.error('Error booking class:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const { user_id, class_id } = req.body;
    const booking = await Booking.findOne({ user_id, class_id, status: { $ne: 'cancelled' } });

    if (!booking) {
      return res.status(404).send('Booking not found');
    }

    booking.status = 'cancelled';
    await booking.save();

    const fitnessClass = await Class.findById(class_id);
    fitnessClass.currentEnrollment -= 1;
    await fitnessClass.save();

    const waitlistedBooking = await Booking.findOne({ class_id, status: 'waitlisted' }).sort('createdAt');

    if (waitlistedBooking) {
      waitlistedBooking.status = 'confirmed';
      await waitlistedBooking.save();

      res.json({ message: 'Booking cancelled, waitlisted user confirmed', booking, waitlistedBooking });
    } else {
      res.json({ message: 'Booking cancelled', booking });
    }
  } catch (error) {
    console.error('Error cancelling booking:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const { user_id } = req.query;
    const bookings = await Booking.find({ user_id }).populate('class_id');
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
