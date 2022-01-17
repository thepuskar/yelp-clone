import React from "react";

import styles from "./SubNav.module.css";
import { SubNavItem } from "./subNavItem/SubNavItem";

export function SubNav() {
  return (
    <div className={styles["container"]}>
      <div className={styles["sub-nav"]}>
        <div>
          <SubNavItem label="Mechanic" icon="fa-car" />
          <SubNavItem label="Home Services" icon="fa-home" />
          <SubNavItem label="Delivery" icon="fa-truck" />
          <SubNavItem label="More" icon="fa-info-circle" showRightBorder />
        </div>
        <div>
          <button
            className={`button ${styles["subNab-btn"]} ${styles["omit-right-border"]}`}
          >
            <span className="icon">
              <i className="fas fa-pen"></i>
            </span>
            <span>Write a Review</span>
          </button>
          <button
            className={`button ${styles["subNab-btn"]} ${styles["right-border"]}`}
          >
            <span className="icon">
              <i className="fas fa-hotel"></i>
            </span>
            <span>For Businesses</span>
          </button>
        </div>
      </div>
    </div>
  );
}
