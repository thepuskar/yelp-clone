import React from "react";

import useReactRouter from "use-react-router";

import logo from "../assets/logo.png";

import styles from "./LandingPage.module.css";
//auth & redux
import { connect } from "react-redux";
import { logoutUser } from "../auth/actions/userActions";


import { NewNav } from "./TopNav/NewNav";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchSuggestion } from "./SearchSuggestion/SearchSuggestion";
import { BackgroundSlideshow } from "./backgroundSlider/BackgroundSlider";


 function Dashboard({ user}) {
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
        <NewNav />
        <div className={styles.welcome}>Welcome,how can we help you today? {(user.name)}</div>
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
const mapStateToProps = ({session}) => ({
    user: session.user
})
export default  connect (mapStateToProps,{logoutUser} ) (Dashboard);
