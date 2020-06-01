import React from "react";

import styles from "./SearchResultSummery.module.css";

export function SearchResultSummery(props) {
  let resultStats = null;
  if (props.amountResults && props.showResults) {
    resultStats = (
      <p>
        Showing 1-{props.showResults} out of {props.amountResults} results
      </p>
    );
  }
  return (
    <div className={styles["container"]}>
      <div className={styles["search-summery"]}>
        <h2 className="subtitle">
          <strong>{props.term}</strong> in {props.location}
        </h2>
        {resultStats}
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
