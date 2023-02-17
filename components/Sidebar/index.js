import React from "react";
import styles from "../../styles/Sidebar.module.css";

const SideBar = () => {
  return (
    <nav className={styles.Sidebar__container}>
      <div className="fr">
        <div className={styles.company__logo}></div>
        <h1>Company Name</h1>
      </div>
      <div className={styles.search__bar}></div>
      <div className="fr"></div>
      <div className="fr"></div>
      <div className="fr"></div>
      <div className="fr"></div>
    </nav>
  );
};

export default SideBar;
