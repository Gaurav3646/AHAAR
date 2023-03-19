import { useState, useEffect } from "react";
import classes from "../components/ImageScroller";

function ImageScroller({ images }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollPosition((scrollPosition) => scrollPosition + 1);
    }, 10);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={classes.imageScroller}>
      <div
        className={classes.imageScrollerInner}
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {images.map((image) => (
          <img key={image} src={image} alt="image" />
        ))}
      </div>
    </div>
  );
}

export default ImageScroller;
