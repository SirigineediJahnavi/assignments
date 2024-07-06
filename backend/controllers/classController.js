const Class = require('../models/Class');

// Insert classes function (as previously defined)
exports.insertClasses = async (req, res) => {
  try {
    const classes = [
      { type: 'Swimming Class', capacity: 20, description: 'Enjoy swimming lessons in our indoor pool.' },
      { type: 'Chess Class', capacity: 15, description: 'Improve your strategy and skills with chess masters.' },
      { type: 'Yoga Class', capacity: 25, description: 'Relax and rejuvenate with our yoga instructors.' },
      { type: 'Cricket Class', capacity: 30, description: 'Learn cricket techniques and play friendly matches.' },
      { type: 'Badminton Class', capacity: 10, description: 'Train with our badminton coaches for better skills.' },
    ];

    const insertedClasses = await Class.insertMany(classes);
    res.json({ message: 'Classes inserted successfully', classes: insertedClasses });
  } catch (error) {
    console.error('Error inserting classes:', error);
    res.status(500).json({ error: 'Failed to insert classes' });
  }
};

// Fetch all classes function
exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    console.error('Error fetching classes:', error);
    res.status(500).json({ error: 'Failed to fetch classes' });
  }
};
