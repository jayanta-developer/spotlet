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
import CreateCoupon from "./Pages/CreateCoupon";
import UserPlans from "./Pages/UserPlans";
import Blog from "./Pages/Blog";
import Terms from "./Pages/Terms&Conditions";

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
        <Route path="/coupon/create" element={<CreateCoupon />} />
        <Route path="/compare" element={<CompareProperties />} />
        <Route path="/property-search" element={<PropertySearch />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/user/plans" element={<UserPlans />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Terms-and-Conditions" element={<Terms />} />
        <Route path="/Privacy-Policy" element={<Blog />} />
      </Routes>
    </>
  );
}
