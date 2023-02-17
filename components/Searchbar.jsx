import React from "react";
import styles from "../styles/Components.module.css";
import SearchIcon from "../assets/svgs/SearchIcon.svg";

const Searchbar = ({ States = {} }) => {
  return (
    <div className={styles.search__bar__conatiner}>
      <SearchIcon />
      <input placeholder="Search" />
    </div>
  );
};

export default Searchbar;
