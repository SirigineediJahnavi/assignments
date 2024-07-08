const express = require("express");
const cors = require("cors");
const classRoutes = require("./routes/classRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
require("dotenv").config();
const app = express();
const mongoose = require('mongoose');


// Middleware
app.use(
  cors({
    origin: "https://crosspe-assignment.vercel.app",
  })
);
app.use(express.json());

// Routes
app.use("/api/classes", classRoutes);
app.use("/api/bookings", bookingRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
