import React from "react";

import { SearchBar } from "../landingPage/SearchBar/SearchBar";

import logo from "../assets/logo.png";
import styles from "./NavBar.module.css";
import { SubNav } from "./subNav/SubNav";

export function NavBar() {
  return (
    <div>
      <div className={styles["navBar"]}>
        <a href="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>

        <SearchBar small />
        <button className={`button ${styles["nav-button"]}`}>Sign In</button>
        <button className={`button ${styles["nav-button"]}`}>Sign Up</button>
      </div>
      <SubNav />
    </div>
  );
}
