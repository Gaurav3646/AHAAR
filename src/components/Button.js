import React from "react";
import classes from "../components/Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button className={classes.customButton} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
