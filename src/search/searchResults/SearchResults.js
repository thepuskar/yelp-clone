import React from "react";

import styles from "./SearchResults.module.css";
import { SearchResult } from "./searchResult/SearchResult";

export function SearchResults(props) {
  if (!props.businesses || !props.businesses.length) {
    return <div></div>;
  }

  const searchResults = props.businesses.map((b) => (
    <SearchResult key={b.id} businesses={b} />
  ));
  return <div className={styles["search-results"]}>{searchResults}</div>;
}
