const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  type: String,
  capacity: Number,
  description: String,
  currentEnrollment: { type: Number, default: 0 },
});

module.exports = mongoose.model('Class', ClassSchema);
