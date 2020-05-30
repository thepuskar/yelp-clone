import React from "react";

import styles from "./SearchSuggestion.module.css";

export function SearchSuggestion() {
  return (
    <div className={styles.suggestions}>
      <span className="icon is-small">
        <i className="fas fa-calculator"></i>
      </span>
      <span className={styles["suggestions-item"]}>Accountants</span>

      <span className="icon is-small">
        <i className="fas fa-utensils"></i>
      </span>
      <span className={styles["suggestions-item"]}> Restaurants</span>

      <span className="icon is-small">
        <i className="fas fa-home"></i>
      </span>
      <span className={styles["suggestions-item"]}>Home Services</span>

      <span className="icon is-small">
        <i className="fas fa-truck"></i>
      </span>
      <span className={styles["suggestions-item"]}>Delivery</span>
    </div>
  );
}
