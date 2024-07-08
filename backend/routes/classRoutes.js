const express = require("express");
const router = express.Router();
const { getClasses } = require("../controllers/classController");

// Route to get all classes
router.get("/", getClasses);

module.exports = router;
