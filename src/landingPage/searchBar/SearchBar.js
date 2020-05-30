import React from "react";

import styles from "./SearchBar.module.css";

export function SearchBar(props) {
  const sizeClass = props.small ? " " : "is-medium";
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <button className={`button is-static ${sizeClass}`}>FIND</button>
        </p>
        <p className="control">
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            placeholder="burgers, barbers, spas, handymen"
          />
        </p>
        <p className="control">
          <button className={`button is-static ${sizeClass}`}>NEAR</button>
        </p>
        <p className="control">
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            placeholder="where"
          />
        </p>
        <button className={`button ${sizeClass} ${styles["search-btn"]}`}>
          <span className={`icon is-small ${styles["search-icon"]}`}>
            <i className="fas fa-search"></i>
          </span>
        </button>
      </div>
    </div>
  );
}
