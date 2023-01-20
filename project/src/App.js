import React from 'react';
import { Navbar } from './Components/Navbar';
import Slideshow from './Components/Slideshow';
import Footer from './Components/Footer';
import Home from './Components/Home';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Slideshow/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
