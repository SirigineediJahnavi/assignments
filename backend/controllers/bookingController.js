const Booking = require("../models/Booking");
const Class = require("../models/Class");

exports.bookClass = async (req, res) => {
  try {
    const { phoneNumber, name, classId } = req.body;
    const fitnessClass = await Class.findById(classId);

    if (fitnessClass.currentEnrollment < fitnessClass.capacity) {
      fitnessClass.currentEnrollment += 1;
      await fitnessClass.save();

      const booking = new Booking({
        phoneNumber,
        name,
        classId,
        status: "confirmed",
      });
      await booking.save();

      res.json({ message: "Booking confirmed", booking });
    } else {
      const booking = new Booking({
        phoneNumber,
        name,
        class_id,
        status: "rejected",
      });
      await booking.save();
      res.json({ message: "Booking failed", booking });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const { phone_number } = req.params;
    const bookings = await Booking.find({ phoneNumber: phone_number });
    const responses = await Promise.all(bookings.map(async (item) => {
      const classInfo = await Class.findById(item.classId);
      return {
        ...item.toObject(), // Assuming bookings are Mongoose documents; use toObject() to convert to a plain JavaScript object
        classInfo,
      };
    }));
    console.log(responses);
    res.json(responses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
