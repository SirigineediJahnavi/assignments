import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { classId } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const bookingResponse = await axios.post(
        "https://intern-assignment-7wt0.onrender.com/api/bookings/book",
        { classId, name, phoneNumber: parseInt(phoneNumber) }
      );
      console.log(bookingResponse.data);
      alert("Booking successful!");
      setName("");
      setPhoneNumber("");
    } catch (error) {
      setName("");
      setPhoneNumber("");
      console.error("Error booking class:", error);
      alert("Booking failed. Please try again.");
    }
  };

  const styles = {
    form: {
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "1rem",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    formTitle: {
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
    buttonHover: {
      backgroundColor: "#45a049",
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.formTitle}>Book a Class</h2>
      <label style={styles.label}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
      </label>
      <label style={styles.label}>
        Mobile Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          style={styles.input}
        />
      </label>
      <button
        type="submit"
        style={styles.button}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = styles.button.backgroundColor)
        }
      >
        Book
      </button>
    </form>
  );
};

export default BookingForm;
