import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Carousel from "./components/carousel/carousel";

// import SignUp from "./components/SignUp/SignUp";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Carousel />
    </div>
  );
}

export default App;
