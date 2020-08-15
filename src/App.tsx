import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "../src/components/Navbar/index"
import Carousel from './components/carousel';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default App;
