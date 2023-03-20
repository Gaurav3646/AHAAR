import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";

const Rating = (newRating) => {
  console.log(newRating);

  return (
    <ReactStars
      count={5}
      value="4"
      size={50}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  );
};

export default Rating;
