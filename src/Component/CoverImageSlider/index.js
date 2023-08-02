import React, { useState } from "react";
import "./imageSlider.css";

import RightArrow from "../../Assets/images/galleryImages/RightArow.svg";
import LeftArrow from "../../Assets/images/galleryImages/LegitArow.svg";

import image1 from "../../Assets/images/galleryImages/1.jpg";
import image2 from "../../Assets/images/galleryImages/2.jpg";
import image3 from "../../Assets/images/galleryImages/3.jpg";
import image4 from "../../Assets/images/galleryImages/4.jpg";
import image5 from "../../Assets/images/galleryImages/3ba332a93ef229bce4889ecc7faf250e (1).jpeg";

const images = [image5, image1, image2, image3, image4];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="app">
      <div className="image-slider">
        <div className="slider-container">
          <div
            className="slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="thumbnail-container">
          <div className="thumbnails">
            {images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Thumbnail ${index + 1}`}
                className={index === currentIndex ? "active" : ""}
                onClick={() => updateSlide(index)}
              />
            ))}
          </div>
        </div>

        <button className="prev-button" onClick={prevSlide}>
          <img src={LeftArrow} />
        </button>
        <button className="next-button" onClick={nextSlide}>
          <img src={RightArrow} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
