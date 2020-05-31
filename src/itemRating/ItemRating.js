import React from "react";
import Rating from "react-rating";

import styles from "./ItemRating.module.css";

export function ItemRating() {
  return (
    <div className={styles["rating"]}>
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        readonly
        initialRating={3}
      />
      <p>154 Reviews</p>
    </div>
  );
}
