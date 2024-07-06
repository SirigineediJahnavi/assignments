import React, { useState, useEffect } from 'react';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('/api/classes')
      .then(res => res.json())
      .then(data => setClasses(data))
      .catch(err => console.error('Error fetching classes:', err));
  }, []);

  return (
    <div>
      <h2>Available Classes</h2>
      <ul>
        {classes.map(classItem => (
          <li key={classItem._id}>
            {classItem.type} - {classItem.currentEnrollment}/{classItem.capacity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassList;
