import React from "react";
import useReactRouter from "use-react-router";

// import styles from "./Search.module.css";

import { NavBar } from "../navBar/NavBar";
import { SearchResultSummery } from "./searchResultSummery/SearchReasultSummery";
import { SearchResults } from "./searchResults/SearchResults";

export function Search() {
  const { location } = useReactRouter();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");
  return (
    <div>
      <NavBar term={term} location={locationParam} />
      <SearchResultSummery term={term} location={locationParam} />
      <SearchResults />
    </div>
  );
}
