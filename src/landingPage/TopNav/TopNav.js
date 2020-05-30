import React from "react";

import styles from "./TopNav.module.css";

export function TopNav() {
  return (
    <div className={styles["top-nav"]}>
      <div className={styles.left}>
        <span className={styles["nav-link"]}>Write a Review</span>
        <span className={styles["nav-link"]}>Events</span>
        <span className={styles["nav-link"]}>Talk</span>
      </div>
      <div className={styles.right}>
        <span className={styles["nav-link"]}>Login</span>
        <button className={`button ${styles["signup-btn"]}`}>Sign Up</button>
      </div>
    </div>
  );
}
