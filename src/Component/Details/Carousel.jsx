import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Carousel.css";

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url:
      "https://images.bewakoof.com/t1080/men-s-black-save-our-home-t-shirt-276160-1705996290-1.jpg"
  },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://images.bewakoof.com/t1080/men-s-black-save-our-home-t-shirt-276160-1705996290-1.jpg"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://images.bewakoof.com/t1080/men-s-black-save-our-home-t-shirt-276160-1705996290-1.jpg"
  },
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://images.bewakoof.com/t1080/men-s-black-save-our-home-t-shirt-276160-1705996290-1.jpg"
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
    
  </div>
));

export default function CarouselData() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="CarouselData">
      <Carousel
        showArrows={true}
        // autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}