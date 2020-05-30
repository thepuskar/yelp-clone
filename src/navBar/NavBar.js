import React from "react";

import { SearchBar } from "../landingPage/SearchBar/SearchBar";

import logo from "../assets/logo.png";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <div className={styles["navBar"]}>
      <img src={logo} alt="logo" className={styles.logo} />
      <SearchBar small/>
      <button className={`button ${styles["nav-button"]}`}>Sign In</button>
      <button className={`button ${styles["nav-button"]}`}>Sign Up</button>
    </div>
  );
}
