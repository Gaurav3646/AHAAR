import React from "react";
import { UserAuth } from "../context/AuthContext";
import classes from "../pages/Account.module.css";
import Button from "../components/Button";
const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.accountContainer}>
      <div className={classes.model}>
        <div>
          <h1>Account</h1>
        </div>
        <div className={classes.userDetails}>
          <span className={classes.profile}>
            <img src={user?.photoURL} alt="Profile picture" />
          </span>
          <div>
            <h1>Welcome, {user?.displayName}</h1>

            <p>Email: {user?.email}</p>
          </div>
        </div>
        <Button text="Logout" onClick={handleSignOut} />
      </div>
    </div>
  );
};

export default Account;
