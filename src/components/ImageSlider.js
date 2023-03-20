import React, { useState } from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToNextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderImages}>
        {
          <img
            key={currentImageIndex}
            className={`${styles.sliderImage} ${styles.active}`}
            src={images[currentImageIndex]}
            alt={`Slider image ${currentImageIndex}`}
            heigh="50px"
          />
        }
      </div>
      <div className={styles.sliderControls}>
        <button onClick={goToPreviousImage} className={styles.arrowButton}>
          &lt;
        </button>
        <div className={styles.sliderBullets}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.sliderBullet} ${
                currentImageIndex === index ? styles.active : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <button onClick={goToNextImage} className={styles.arrowButton}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
