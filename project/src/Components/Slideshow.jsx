import React, { useState, useEffect } from "react";

let img1 =
  "https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid/dgcarousel_copy_copy/item_1649589574693.coreimg.100.1200.jpeg/1673629774452/wk51-home-2280x700-hero-desktop-val-candyr1.jpeg";
let img2 =
  "https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid/dgcarousel_copy_copy/item_1667574383955.coreimg.100.1200.jpeg/1673499572004/wk51-home-1140x300-hero-desktop-appsuite.jpeg";
let img3 =
  "https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid/dgcarousel_copy_copy/item_1671569524197.coreimg.100.1200.jpeg/1673629830974/wk51-home-2280x700-hero-desktop-refreshyourbedroomr1.jpeg";

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const images = [img1, img2, img3];

  const nextImage = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  const prevImage = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="Slideshow">
      <button className="slide-btn" onClick={prevImage}>&#8249;</button>
      <img src={images[index]} alt="slideshow" />
      <button className="slide-btn" onClick={nextImage}>&#8250;</button>
    </div>
  );
};

export default Slideshow;
