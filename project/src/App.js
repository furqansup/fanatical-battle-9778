import React from 'react';
import { Navbar } from './Components/Navbar';
import Slideshow from './Components/Slideshow';
import Footer from './Components/Footer';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Slideshow/>
      <Footer/>
    </div>
  );
}

export default App;
