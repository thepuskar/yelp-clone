import React from "react";

import { ItemRating } from "../../../itemRating/ItemRating";

import styles from "./SearchResult.module.css";

export function SearchResult() {
  return (
    <div className={styles["search-result"]}>
      <img
        src="https://via.placeholder.com/210"
        alt="item"
        className={styles["item-img"]}
      />
      <div className={styles["item-info"]}>
        <h2 className="subtitle">Burger Place</h2>
        <ItemRating />
        <p>
          $$ <span className="tag">Burgers</span>&nbsp;
          <span className="tag">fast food</span>
        </p>
      </div>
      <div className={styles["contact-info"]}>
        <p>0123456789</p>
        <p>Example Street 5</p>
        <p>124875 Kathmandu</p>
      </div>
    </div>
  );
}
