import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "../src/components/Navbar/index";
import Carousel from './components/carousel';
import Login from "./components/FormSignIn/signin";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Carousel /> */}
      <Login />
    </div>
  );
}

export default App;
