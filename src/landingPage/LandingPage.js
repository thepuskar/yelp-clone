import React from "react";

import logo from "../assets/logo.png";

import { TopNav } from "./TopNav/TopNav";

import styles from "./LandingPage.module.css";
import { SearchBar } from "./searchBar/SearchBar";

export function LandingPage() {
  return (
    <di>
      <TopNav />
      <img src={logo} alt="logo" className={styles.logo} />
      <SearchBar />
    </di>
  );
}
