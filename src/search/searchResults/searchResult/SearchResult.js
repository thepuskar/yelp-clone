import React from "react";

import { ItemRating } from "../../../itemRating/ItemRating";

import styles from "./SearchResult.module.css";

export function SearchResult(props) {
  const b = props.businesses;

  if (!b) {
    return <div></div>;
  }

  const tags = b.categories.map((category) => (
    <span className={`tag ${styles["item-tags"]}`} key={b.id + category.title}>
      {category.title}
    </span>
  ));

  const addressLines = b.location.display_address.map((addressLine) => (
    <p key={b.id + addressLine}>{addressLine}</p>
  ));

  return (
    <div className={styles["search-result"]}>
      <img
        src={props.businesses.image_url}
        alt="item"
        className={styles["item-img"]}
      />
      <div className={styles["item-info"]}>
        <h2 className="subtitle">{b.name}</h2>
        <ItemRating reviewCount={b.review_count} rating={b.rating} />
        <p>
          {b.price} {tags}
        </p>
      </div>
      <div className={styles["contact-info"]}>
        <p>{b.phone}</p>
        {addressLines}
      </div>
    </div>
  );
}
