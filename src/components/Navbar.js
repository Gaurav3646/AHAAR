import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import classes from "../components/Navbar.module.css";
import Button from "./Button";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo" width="110px" />
      <span>
        <h1>AHAAR</h1>
      </span>
      <div className={classes.navbar}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            borderBottom: isActive ? "5px solid #fff" : "",
          })}
        >
          <h2>Home</h2>
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => ({
            borderBottom: isActive ? "5px solid #fff" : "",
          })}
        >
          <h2>Consumables</h2>
        </NavLink>
        <NavLink
          to="/donate"
          style={({ isActive }) => ({
            borderBottom: isActive ? "5px solid #fff" : "",
          })}
        >
          <h2>Donate</h2>
        </NavLink>
        <NavLink
          to="/orders"
          style={({ isActive }) => ({
            borderBottom: isActive ? "5px solid #fff" : "",
          })}
        >
          <h2>Orders</h2>
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            borderBottom: isActive ? "5px solid #fff" : "",
          })}
        >
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
