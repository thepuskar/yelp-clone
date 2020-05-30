import React from "react";

import styles from "./Search.module.css";
import { NavBar } from "../navBar/NavBar";
import { SearchResultSummery } from "./searchResultSummery/SearchReasultSummery";

export function Search() {
  return (
    <div>
      <NavBar />
      <SearchResultSummery />
    </div>
  );
}
