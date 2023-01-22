import Home from "../Components/Home";
import Cart from "../Components/Cart";
import { Navbar } from "../Components/Navbar";
import Slideshow from "../Components/Slideshow"
import Footer from "../Components/Footer";
import Delivery from "../Components/Delivery";
import Product from "../Components/Product";
import { Routes, Route } from "react-router-dom";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/slideshow" element={<Slideshow />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
