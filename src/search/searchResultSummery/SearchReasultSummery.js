import React from "react";

import styles from "./SearchResultSummery.module.css";

export function SearchResultSummery() {
  return (
    <div className={styles["container"]}>
      <div className={styles["search-summery"]}>
        <h2 className="subtitle">
          <strong>Burgers</strong> in Berlin
        </h2>
        <p>Showing 1-20 out of 284 results</p>
      </div>
      <div className={styles.filter}>
        <button className="button">
          <span className="icon">
            <i className="fas fa-sliders-h"></i>
          </span>
          <span>All filters</span>
        </button>
        <div className="buttons has-addons">
          <button className="button">$</button>
          <button className="button">$$</button>
          <button className="button">$$$</button>
          <button className="button">$$$$</button>
        </div>
        <button className="button">
          <span className="icon">
            <i className="fas fa-clock"></i>
          </span>
          <span>Open Now</span>
        </button>
        <button className="button">
          <span className="icon">
            <i className="fas fa-dollar-sign"></i>
          </span>
          <span>Cashback</span>
        </button>
      </div>
    </div>
  );
}
