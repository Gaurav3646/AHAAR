import React from "react";
import classes from "../pages/Home.module.css";
import ImageScroller from "../components/ImageScroller";
const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.poster}></div>
    </div>
  );
};

export default Home;
