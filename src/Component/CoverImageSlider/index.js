import React, { useState } from "react";
import "./imageSlider.css";

import RightArrow from "../../Assets/images/galleryImages/RightArow.svg";
import LeftArrow from "../../Assets/images/galleryImages/LegitArow.svg";

import image1 from "../../Assets/images/galleryImages/pexels-pixabay-147411.jpg";
import image2 from "../../Assets/images/galleryImages/pexels-anon-754277.jpg";
import image3 from "../../Assets/images/galleryImages/pexels-chris-goodwin-32870.jpg";
import image4 from "../../Assets/images/galleryImages/4.jpg";
import image5 from "../../Assets/images/galleryImages/3ba332a93ef229bce4889ecc7faf250e (1).jpeg";
import image6 from "../../Assets/images/galleryImages/pexels-alex-qian-2343465.jpg";
import image7 from "../../Assets/images/galleryImages/pexels-pixabay-259646.jpg";
import image8 from "../../Assets/images/galleryImages/pexels-sergio-souza-1782154.jpg";
import image9 from "../../Assets/images/galleryImages/pexels-alex-staudinger-1732414.jpg";

const images = [image5, image2, image3, image1, image6, image7, image8, image9];

const ImageSlider = ({ thumbnail }) => {
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
        <div
          style={{ display: thumbnail ? "flex" : "none" }}
          className="thumbnail-container"
        >
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
