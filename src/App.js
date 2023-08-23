import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Home from "./Pages/Home";
import Gallery from "./Component/Gallery";
import Booking from "./Pages/Booking";
import BookingDetails from "./Pages/BookingDetails";
import Favorites from "./Pages/Favorites";
import FavoritesList from "./Pages/Favorites/FavoritesList";
import CompareProperties from "./Pages/CompareProperties";
import PropertySearch from "./Pages/PropertySearch";
import Subscription from "./Pages/Subscription";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/details" element={<BookingDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/favoritesList" element={<FavoritesList />} />
        <Route path="/compare" element={<CompareProperties />} />
        <Route path="/property-search" element={<PropertySearch />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </>
  );
}
