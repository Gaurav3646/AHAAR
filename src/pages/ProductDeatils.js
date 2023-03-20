import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { db } from "../firebase";
import { deleteDoc } from "firebase/firestore";
import {
  doc,
  getDocFromCache,
  getDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import Button from "../components/Button";
import map from "../assets/map.png";
import { UserAuth } from "../context/AuthContext";
const ProductDetails = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const { productId } = useParams();
  //////
  console.log(productId);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const res = async () => {
      const docRef = doc(db, "Products", productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({ ...docSnap.data(), id: docSnap.id });
        console.log(product);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    res();
  }, []);

  const handleOrder = async () => {
    try {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "Orders"), {
        ...product,
        receiver: user.uid,
      });
      //     await setDoc(doc(db, "products"), {
      await deleteDoc(doc(db, "Products", productId));
      navigate("/orders");
      //     });
    } catch (err) {
      console.log(err);
    }
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className={styles.productDetails}>
      <div className={styles.model}>
        <img
          src={product?.photoURL}
          alt={product?.title}
          className={styles.productImage}
        />
        <div className={styles.productInfo}>
          <h2 className={styles.productTitle}>{product?.desc}</h2>
          <hr />
          <p className={styles.productCategory}>{product?.type}</p>
          <p className={styles.productQuantity}>{product?.countP}</p>
          <p className={styles.productExpiry}>{product.date}</p>
          <p className={styles.productAddress}>{product.address}</p>
          <div className={styles.address}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${product.address}`}
              target="blank"
            >
              <img src={map} alt="address" width="50px" />
            </a>
          </div>
        </div>
        <Button text="Confirm Order" onClick={handleOrder} />
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
      expiry: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductDetails;
