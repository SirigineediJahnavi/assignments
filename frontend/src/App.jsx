import { Route, Routes, BrowserRouter } from "react-router-dom";
import ClassList from "./components/ClassList";
import BookingForm from "./components/BookingForm";
import UserBookings from "./components/UserBookings";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClassList />} />
          <Route path="/book/:classId" element={<BookingForm />} />
          <Route path="/my-bookings" element={<UserBookings />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
