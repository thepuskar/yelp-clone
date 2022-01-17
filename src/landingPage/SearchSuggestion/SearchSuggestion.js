import React from "react";

import styles from "./SearchSuggestion.module.css";

export function SearchSuggestion() {
  return (
    <div className={styles.suggestions}>
      <span className="icon is-small">
        <i className={`fas fa-concierge-bell ${styles["icon"]}`}></i>
      </span>
      <span className={styles["suggestions-item"]}>Saloon</span>

      <span className="icon is-small">
        <i className={`fas fa-utensils ${styles["icon"]}`}></i>
      </span>
      <span className={styles["suggestions-item"]}> Restaurants</span>

      <span className="icon is-small">
        <i className={`fas fa-car ${styles["icon"]}`}></i>
      </span>
      <span className={styles["suggestions-item"]}>Automobile</span>

      <span className="icon is-small">
        <i className={`fas fa-truck ${styles["icon"]}`}></i>
      </span>
      <span className={styles["suggestions-item"]}>Delivery</span>
    </div>
  );
}
