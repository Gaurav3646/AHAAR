import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import classes from "../pages/SignIn.module.css";
import photohand from "../assets/poster1.jpg";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user, googleSignIn]);

  return (
    <div className={classes.signInContainer}>
      <div className={classes.modelcontainer}>
        <div className={classes.model}>
          <div className={classes.title}>
            <h1>Sign In</h1>
          </div>
          <div className={classes.buttonContainer}>
            <span className={classes.signInButton}>
              <GoogleButton onClick={handleGoogleSignIn} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
