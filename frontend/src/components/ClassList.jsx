import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://intern-assignment-7wt0.onrender.com/api/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      })
      .catch((err) => console.error("Error fetching classes:", err));
  }, []);

  const styles = {
    container: {
      maxWidth: "800px",
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
    linkButton: {
      display: "block",
      marginBottom: "1.5rem",
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "#4CAF50",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      textAlign: "center",
      border: "none",
      cursor: "pointer",
    },
    header: {
      textAlign: "center",
      color: "#333",
      marginBottom: "1.5rem",
    },
    classCard: {
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
    bookButton: {
      display: "block",
      marginTop: "1rem",
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "#4CAF50",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      textAlign: "center",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Fitness Booking System</h1>
      <Link to="/my-bookings" style={styles.linkButton}>
        Your Bookings
      </Link>
      <h2 style={styles.header}>Available Classes</h2>
      {classes.map((classItem) => (
        <div style={styles.classCard} key={classItem.id}>
          <h2 style={styles.classTitle}>{classItem.type}</h2>
          <h3 style={styles.classDescription}>{classItem.description}</h3>
          <p style={styles.enrollmentInfo}>
            {`${classItem.currentEnrollment} / ${classItem.capacity}`}
          </p>
          <Link to={`/book/${classItem._id}`} style={styles.bookButton}>
            Book now
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ClassList;
