import { useEffect, useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const UserBookings = ({ userId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(`/api/bookings?user_id=${userId}`)
      .then(response => setBookings(response.data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, [userId]);

  return (
    <div>
      <h2>My Bookings</h2>
      <ul>
        {bookings.map(b => (
          <li key={b._id}>
            {b.class_id.type} - {b.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserBookings;
