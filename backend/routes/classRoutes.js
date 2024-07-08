const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// Route to insert classes
router.post('/insert', classController.insertClasses);

// Route to get all classes
router.get('/', classController.getClasses);

module.exports = router;
