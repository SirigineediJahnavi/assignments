// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClassList from './components/ClassList';
import BookingForm from './components/BookingForm';
import UserBookings from './components/UserBookings';

function App() {
  return (
    <Router>
      <div>
        <h1>Fitness Booking System</h1>
        <Routes>
          <Route path="/" element={<ClassList />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/my-bookings" element={<UserBookings userId="1" />} /> {/* Pass userId dynamically */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
