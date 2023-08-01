import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import Overview from "./Pages/Overview";
import Properties from "./Pages/SimilarProperties";
import Booking from "./Pages/Booking";
import Footer from "./Pages/Footer";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}
