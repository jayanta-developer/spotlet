import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Home from "./Pages/Home";
import Gallery from "./Component/Gallery";
import Booking from "./Pages/Booking";
import BookingDetails from "./Pages/BookingDetails";
import Favorites from "./Pages/Favorites";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/details" element={<BookingDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}
