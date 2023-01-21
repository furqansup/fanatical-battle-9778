import React from 'react';
import { Navbar } from './Components/Navbar';
import Slideshow from './Components/Slideshow';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Delivery from './Components/Delivery';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Slideshow/>
      <Home/>
      <Product/>
      {/* <Cart/> */}
      {/* <Delivery/> */}
      <Footer/>
    </div>
  );
}

export default App;
