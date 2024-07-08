import { useState } from "react";
import axios from "axios";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    axios
      .get(`https://intern-assignment-7wt0.onrender.com/api/bookings/${phoneNumber}`)
      .then((response) => {
        console.log(response.data);
        setBookings(response.data);
      })
      .catch((error) => console.error("Error fetching bookings:", error));
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "1rem",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
      textAlign: "center",
      color: "#333",
      marginBottom: "1.5rem",
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      color: "#666",
    },
    input: {
      width: "100%",
      padding: "0.5rem",
      marginBottom: "1rem",
      borderRadius: "4px",
      border: "1px solid #ddd",
      boxSizing: "border-box",
    },
    button: {
      display: "block",
      width: "100%",
      padding: "0.5rem",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      textAlign: "center",
    },
    bookingCard: {
      backgroundColor: "#f9f9f9",
      border: "1px solid #ddd",
      borderRadius: "8px",
      marginBottom: "1.5rem",
      padding: "1rem",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    classTitle: {
      margin: "0",
      color: "#4CAF50",
    },
    classDescription: {
      margin: "0.5rem 0",
      color: "#666",
    },
    enrollmentInfo: {
      margin: "1rem 0",
      color: "#999",
    },
    status: {
      fontStyle: "italic",
      color: "#999",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Bookings</h2>
      <label style={styles.label}>Phone Number:</label>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
        style={styles.input}
      />
      <button onClick={handleSubmit} style={styles.button}>
        Submit
      </button>
      {bookings.map((booking) => (
        <div style={styles.bookingCard} key={booking._id}>
          <h2 style={styles.classTitle}>{booking.classInfo.type}</h2>
          <p style={styles.classDescription}>{booking.classInfo.description}</p>
          <p style={styles.enrollmentInfo}>
            {`${booking.classInfo.currentEnrollment} / ${booking.classInfo.capacity}`}
          </p>
          <i style={styles.status}>{booking.status}</i>
        </div>
      ))}
    </div>
  );
};

export default UserBookings;
