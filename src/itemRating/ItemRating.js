import React from "react";
import Rating from "react-rating";

import styles from "./ItemRating.module.css";

export function ItemRating(props) {
  return (
    <div className={styles["rating"]}>
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        readonly
        initialRating={props.rating}
      />
      <p>{props.reviewCount} Reviews</p>
    </div>
  );
}
