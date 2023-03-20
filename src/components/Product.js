import React from "react";
import PropTypes from "prop-types";
import styles from "./Product.module.css";
import Button from "../components/Button";

const Product = ({ image, title, category, quantity, expiry }) => {
  return (
    <div className={styles.product}>
      <img src={image} alt={title} className={styles.productImage} />

      <div className={styles.productDetails}>
        <h2 className={styles.productTitle}>{title}</h2>
        <p className={styles.productCategory}>{`Category: ${category}`}</p>
        <p className={styles.productQuantity}>{`Quantity: ${quantity}`}</p>
        <p
          className={styles.productExpiry}
        >{`Available for pickup uptil ${expiry}`}</p>
        <Button text="Confirm Order" />
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  expiry: PropTypes.string.isRequired,
};

export default Product;
