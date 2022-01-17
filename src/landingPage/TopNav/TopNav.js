import React from "react";
import {Link} from "react-router-dom";
import styles from "./TopNav.module.css";

export function TopNav() {
  return (
    <div className={styles["top-nav"]}>
      <div className={styles["left"]}>
        <Link to ="/review">
        <span><strong>Write a Review</strong></span></Link>
        <Link to ="/event">
        <span><strong>Events</strong></span></Link>
      </div>
      <div className={styles["right"]}>
        <Link to={'login'}>
          <div >
        <span><strong>Login</strong></span></div>

        </Link>
       <Link to="/signup">
        <button className={`button is-small ${styles["search-button"]}`}>
          <strong>Sign Up</strong>
        </button></Link>
      </div>
    </div>
    
  );
}
