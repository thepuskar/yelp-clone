import React from "react";
import useReactRouter from "use-react-router";

// import styles from "./Search.module.css";

import { NavBar } from "../navBar/NavBar";
import { SearchResultSummery } from "./searchResultSummery/SearchReasultSummery";
import { SearchResults } from "./searchResults/SearchResults";

import { useBusinessSearch } from "../hooks/yelp-api/useBusinessSearch";

export function Search() {
  const { location, history } = useReactRouter();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");
  const [
    businesses,
    amountResults,
    searchParams,
    performSearch,
  ] = useBusinessSearch(term, locationParam);

  if (!term || !locationParam) {
    history.push("/");
  }

  function search(term, location) {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`
    );
    performSearch({ term, location });
  }
  return (
    <div>
      <NavBar term={term} location={locationParam} search={search} />
      <SearchResultSummery
        term={searchParams.term}
        location={searchParams.location}
        amountResults={amountResults}
        showResults={businesses ? businesses.length : 0}
      />
      <SearchResults businesses={businesses} />
    </div>
  );
}
