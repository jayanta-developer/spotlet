import React from "react";

//Components
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import Overview from "./Pages/Overview";
import Properties from "./Pages/SimilarProperties";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Overview />
      <Properties />
    </>
  );
}
