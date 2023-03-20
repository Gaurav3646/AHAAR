import React, { useState, useEffect } from "react";
import classes from "../pages/Home.module.css";
import ImageScroller from "../components/ImageSlider";
import Product from "../components/Product";
import img1 from "../assets/poster1.jpg";
import img2 from "../assets/poster2.jpg";
import img3 from "../assets/poster3.jpg";
import img4 from "../assets/poster4.jpg";
import img5 from "../assets/poster5.jpg";
import food from "../assets/food.jpg";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { async } from "@firebase/util";
import { UserAuth } from "../context/AuthContext";
const images = [img1, img2, img3, img4, img5];

const Home = () => {
  const { user } = UserAuth();
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
    <div className={classes.homeContainer}>
      <ImageScroller images={images} />
      <div>
        <h2></h2>
      </div>
      <div className={classes.products}>
        {products.map((item) => (
          <Product
            image={item.photoURL}
            title={item.desc}
            category={item.type}
            quantity={item.countP}
            expiry={item.date}
            id={item.id}
            text="Detail Description"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
