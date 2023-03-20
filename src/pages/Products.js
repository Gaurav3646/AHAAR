import React from "react";
import styles from "./Products.module.css";
import Product from "../components/Product";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { async } from "@firebase/util";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

const Products = () => {
  //////
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const res = async () => {
      const productsRef = collection(db, "Products");
      // Create a query against the collection.
      const q = query(productsRef);
      const querySnapshot = await getDocs(q);
      // console.log(querySnapshot);
      const response = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setProducts([...response]);
      console.log(products, "*");
    };
    res();
  }, []);

  return (
    <div className={styles.productsContainer}>
      {products.map((item) => (
        <Product
          image={item.photoURL}
          title={item.desc}
          category={item.type}
          quantity={item.countP}
          expiry={item.date}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Products;
