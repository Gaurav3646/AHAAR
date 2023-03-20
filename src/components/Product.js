import React from "react";
import PropTypes from "prop-types";
import styles from "./Product.module.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import map from "../assets/map.png";
const Product = ({
  image,
  title,
  category,
  quantity,
  expiry,
  id,
  text,
  address,
  confirm,
  phoneNo,
}) => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const onClickHandler = () => {
    console.log("hello");
    navigate(`/products/${id}`);
  };

  return (
    <div className={styles.product}>
      <img src={image} alt={title} className={styles.productImage} />

      <div className={styles.productDetails}>
        <h2 className={styles.productTitle}>{title}</h2>
        <p className={styles.productCategory}>{`Category: ${category}`}</p>
        <p className={styles.productQuantity}>{`Quantity: ${quantity}`}</p>
        {address && (
          <p className={styles.productAddress}>{`Address: ${address}`}</p>
        )}
        {phoneNo && (
          <p className={styles.productAddress}>{`phone no: ${phoneNo}`}</p>
        )}
        {expiry && (
          <p
            className={styles.productExpiry}
          >{`Available for pickup uptil ${expiry}`}</p>
        )}

        {address && (
          <div className={styles.address}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${address}`}
              target="blank"
            >
              <img src={map} alt="address" width="50px" />
            </a>
          </div>
        )}

        {confirm && <div className={styles.confirm}>Order Confirmed</div>}
        {text && <Button text={text} onClick={onClickHandler} />}
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
