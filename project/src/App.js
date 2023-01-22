import React from 'react';
import { Navbar } from './Components/Navbar';
import Footer from './Components/Footer';
import AllRoutes from './Route/AllRoutes';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
