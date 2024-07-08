const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    phoneNumber: Number,
    name: String,
    classId: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
    status: {
      type: String,
      enum: ["confirmed", "rejected"],
      default: "confirmed",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
