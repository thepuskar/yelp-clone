import React from "react";
import {Link} from "react-router-dom";
import styles from "./TopNav.module.css";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../auth/actions/userActions";

export function NewNav() {
  const history = useHistory();
  return (
    <div className={styles["top-nav"]}>
      <div className={styles["left"]}>
        <Link to ="/review">
        <span><strong>Write a Review</strong></span></Link>
        <Link to ="/profile">
        <span><strong>Profile</strong></span></Link>
      </div>
      <div className={styles["right"]}>
      <Link to={'profile'}>
          <div >
        <span><strong>Dashboard</strong></span></div>

        </Link>
      <Link to="/">
        <button className={`button is-small ${styles["search-button"]}`} onClick={() => logoutUser(history)}>
          <strong>Logout</strong>
        </button></Link>
      </div>
    </div>
    
  );
}
