import React from "react";
import styles from "./Orders.module.css";
import Product from "../components/Product";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { async } from "@firebase/util";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

const Orders = () => {
  //////
  const { user } = UserAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const res = async () => {
      const productsRef = collection(db, "Orders");
      // Create a query against the collection.
      const q = query(productsRef, where("receiver", "==", user?.uid));
      const querySnapshot = await getDocs(q);
      // console.log(querySnapshot);
      const response = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setProducts([...response]);
    };
    res();
  }, []);
  const item = products[0];
  console.log(products, "*");
  return (
    <div className={styles.container}>
      <h1> Your Order is Confirmed!!</h1>
      <div className={styles.productsContainer}>
        {products.map((item) => (
          <Product
            image={item.photoURL}
            title={item.desc}
            category={item.type}
            quantity={item.countP}
            id={item.id}
            phoneNo={item.phoneNo}
            address={item.address}
            confirm={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
