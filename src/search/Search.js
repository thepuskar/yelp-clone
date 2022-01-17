import React from "react";


// import styles from "./Search.module.css";
//import {SubNav }from "../navBar/subNav/SubNav";
import { NavBar } from "../navBar/NavBar";
import { SearchResultSummery } from "./searchResultSummery/SearchReasultSummery";
import { SearchResults } from "./searchResults/SearchResults";

function Search() {
  return (
    <div>
      <NavBar />
      
      <SearchResultSummery/>
      <SearchResults/>
    </div>
  );
}

export default Search;
