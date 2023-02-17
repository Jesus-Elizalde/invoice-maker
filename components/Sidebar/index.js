import React from "react";
import styles from "../../styles/Sidebar.module.css";

import HomeIcon from "../../assets/svgs/HomeIcon.svg";
import CustomersIcon from "../../assets/svgs/CustomersIcon.svg";
import EstimatesIcon from "../../assets/svgs/EstimatesIcon.svg";
import InvoicesIcon from "../../assets/svgs/InvoicesIcon.svg";
import SettingsIcon from "../../assets/svgs/SettingsIcon.svg";
import SignOutIcon from "../../assets/svgs/SignOutIcon.svg";

const SideBar = () => {
  return (
    <nav className={styles.Sidebar__container}>
      <div className={styles.logo__conatiner}>
        <div className={styles.company__logo}></div>
        <h1 className={styles.logo__name}>Company Name</h1>
      </div>
      <div className={styles.search__bar}></div>
      <div className={styles.tab__conatiners}>
        <HomeIcon />
        <h2>Home</h2>
      </div>
      <div className={styles.tab__conatiners}>
        <CustomersIcon />
        <h2>Customers</h2>
      </div>
      <div className={styles.tab__conatiners}>
        <EstimatesIcon />
        <h2>Estimates</h2>
      </div>
      <div className={styles.tab__conatiners}>
        <InvoicesIcon />
        <h2>Invoices</h2>
      </div>
      <div className={styles.tab__conatiners}>
        <SettingsIcon />
        <h2>Settings</h2>
      </div>
      <div className={styles.profile__conatiner}>
        <div className={styles.profile__picture}></div>
        <div className="fc">
          <p className={styles.username}>Test User</p>
          <p className={styles.email}>demouser@test.com</p>
        </div>
        <SignOutIcon />
      </div>
    </nav>
  );
};

export default SideBar;
