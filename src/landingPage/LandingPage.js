import React from "react";

import logo from "../assets/logo.png";

import { TopNav } from "./TopNav/TopNav";

import styles from "./LandingPage.module.css";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchSuggestion } from "./SearchSuggestion/SearchSuggestion";

export function LandingPage() {
  return (
    <div className={styles.landing}>
      <TopNav />
      <div className={styles["search-area"]}>
        <img src={logo} alt="logo" className={styles.logo} />
        <SearchBar />
        <SearchSuggestion />
      </div>
    </div>
  );
}
