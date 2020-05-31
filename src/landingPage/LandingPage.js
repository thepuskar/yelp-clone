import React from "react";

import logo from "../assets/logo.png";

import styles from "./LandingPage.module.css";

import { TopNav } from "./TopNav/TopNav";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchSuggestion } from "./SearchSuggestion/SearchSuggestion";
import { BackgroundSlideshow } from "./backgroundSlider/BackgroundSlider";

export function LandingPage() {
  return (
    <div>
      <div className={styles.landing}>
        <TopNav />
        <div className={styles["search-area"]}>
          <img src={logo} alt="logo" className={styles.logo} />
          <SearchBar />
          <SearchSuggestion />
        </div>
      </div>
      <BackgroundSlideshow className={styles["image-slider"]} />
    </div>
  );
}
