import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import classes from "../components/Navbar.module.css";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.header}>
      <h1>FoodCycle</h1>
      <div className={classes.navbar}>
        <NavLink to="/">
          <h2>Home</h2>
        </NavLink>
        <NavLink to="/products">
          <h2>Consumables</h2>
        </NavLink>
        <NavLink to="/donate">
          <h2>Donate</h2>
        </NavLink>
        <NavLink to="/about">
          <h2>About</h2>
        </NavLink>
        {user?.photoURL ? (
          <span
            className={classes.profile}
            onClick={() => navigate("/Account")}
          >
            <img src={user?.photoURL} alt="Profile picture" />
          </span>
        ) : (
          ""
        )}

        {user?.displayName ? (
          <Button text="Log out" onClick={handleSignOut} />
        ) : (
          <NavLink to="/signin">
            <Button text="Sign In" />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
