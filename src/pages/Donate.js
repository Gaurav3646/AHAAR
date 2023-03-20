import React, { useState } from "react";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import classes from "../pages/Donate.module.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import Button from "../components/Button";

const InputForm = () => {
  const { user } = UserAuth();
  const [productDetails, setProductDetails] = useState({
    countP: 0,
    phoneNo: "",
    desc: "",
    address: "",
    date: "",
    type: "",
  });
  const [Image, setImage] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${productDetails.desc + date}`);

      await uploadBytesResumable(storageRef, Image).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //create user on firestore
            console.log(downloadURL);
            console.log(user?.uid);
            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "Products"), {
              ...productDetails,
              photoURL: downloadURL,
              userId: user?.uid,
            });
            //     await setDoc(doc(db, "products"), {

            //     });
          } catch (err) {
            console.log(err);
          }
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.mainpage}>
      <div>
        <h1>Kindly upload the AHAAR </h1>
        <p>"LET US STRIVE TO BE BETTER PEOPLE AND NOT WASTE OUR FOOD"</p>
      </div>
      <div className={classes.formpage}>
        <form onSubmit={submitHandler}>
          <div>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={(event) => setImage(event.target.files[0])}
            />
          </div>
          <div>
            <input
              type="number"
              name="name"
              placeholder="Quantity"
              onChange={(event) =>
                setProductDetails((prev) => ({
                  ...prev,
                  countP: event.target.value,
                }))
              }
            />
            <input
              type="number"
              name="name"
              max="10"
              placeholder="6392184061"
              onChange={(event) =>
                setProductDetails((prev) => ({
                  ...prev,
                  phoneNo: event.target.value,
                }))
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Description"
              onChange={(event) =>
                setProductDetails((prev) => ({
                  ...prev,
                  desc: event.target.value,
                }))
              }
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Address"
              onChange={(event) =>
                setProductDetails((prev) => ({
                  ...prev,
                  address: event.target.value,
                }))
              }
            />
          </div>
          <div>
            <input
              type="date"
              name="name"
              onChange={(event) =>
                setProductDetails((prev) => ({
                  ...prev,
                  date: event.target.value,
                }))
              }
            />
          </div>
          <div>
            <input
              type="text"
              id="horns"
              name="scales"
              placeholder="Category"
              onChange={(event) =>
                setProductDetails((prev) => ({
                  ...prev,
                  type: event.target.value,
                }))
              }
            />
          </div>

          <Button text="Submit" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default InputForm;
