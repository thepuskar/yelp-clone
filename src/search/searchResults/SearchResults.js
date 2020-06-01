import React from "react";

import styles from "./SearchResults.module.css";
import { SearchResult } from "./searchResult/SearchResult";
import { Spinner } from "../../spinner/Spinner";

export function SearchResults(props) {
  let searchResults = <Spinner />;
  if (props.businesses && props.businesses.length) {
    searchResults = props.businesses.map((b) => (
      <SearchResult key={b.id} business={b} />
    ));
  }

  return <div className={styles["search-results"]}>{searchResults}</div>;
}
