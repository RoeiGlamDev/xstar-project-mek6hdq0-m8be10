'use client';

import React from 'react';
import './Slider.css'; // Assuming you will create a CSS file for styles

interface SliderProps {
  images: string[]; // Array of image URLs
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={prevSlide}>‹</button>
      <div className="slider-content">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-image ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <button className="slider-button next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Slider;