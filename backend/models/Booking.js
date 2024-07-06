const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  status: { type: String, enum: ['confirmed', 'waitlisted', 'cancelled'], default: 'confirmed' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
