import React from "react";

// import styles from "./Search.module.css";

import { NavBar } from "../navBar/NavBar";
import { SearchResultSummery } from "./searchResultSummery/SearchReasultSummery";
import { SearchResults } from "./searchResults/SearchResults";

export function Search() {
  return (
    <div>
      <NavBar />
      <SearchResultSummery />
      <SearchResults />
    </div>
  );
}
