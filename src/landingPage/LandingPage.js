import React from "react";


import useReactRouter from "use-react-router";

import logo from "../assets/logo.png";

import styles from "./LandingPage.module.css";

import { TopNav } from "./TopNav/TopNav";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchSuggestion } from "./SearchSuggestion/SearchSuggestion";
import { BackgroundSlideshow } from "./backgroundSlider/BackgroundSlider";

export function LandingPage() {
  const { history } = useReactRouter();

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }
  return (
    <div>
      <div className={styles.landing}>
        <TopNav />
        <div className={styles["search-area"]}>
          <img src={logo} alt="logo" className={styles.logo} />
          <SearchBar search={search} />
          <SearchSuggestion />
        </div>
      </div>
      <BackgroundSlideshow className={styles["image-slider"]} />
    </div>
  );
}
