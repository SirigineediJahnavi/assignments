// src/components/BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [userId, setUserId] = useState('');
  const [classId, setClassId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/bookings/book', { user_id: userId, class_id: classId });
      console.log(response.data);
      alert('Booking successful!');
      setUserId('');
      setClassId('');
    } catch (error) {
      console.error('Error booking class:', error);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Class</h2>
      <label>
        User ID:
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
      </label>
      <br />
      <label>
        Class ID:
        <input type="text" value={classId} onChange={(e) => setClassId(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
