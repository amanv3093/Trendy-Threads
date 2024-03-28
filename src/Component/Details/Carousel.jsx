import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Carousel.css";



export default function CarouselData(props) {
  const imageData = [
    {
      label: "Image 1",
      alt: "image1",
      url:`${props.data[0].image[0].photo1}`
    },
    {
      label: "Image 2",
      alt: "image2",
      url:
      `${props.data[0].image[1].photo1}`
    },
    {
      label: "Image 3",
      alt: "image3",
      url: `${props.data[0].image[2].photo1}`
    },
    {
      label: "Image 4",
      alt: "image4",
      url:
      `${props.data[0].image[3].photo1}`
    }
  ];
  
  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
      
    </div>
  ));
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  console.log(props.data[0].image[0].photo1);
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