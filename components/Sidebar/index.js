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
      <div className={styles.top__container}>
        <div className={styles.logo__conatiner}>
          <div className={styles.company__logo}></div>
          <h1 className={styles.logo__name}>Company Name</h1>
        </div>
        <div className={styles.search__bar}></div>
        <div className={styles.tab__conatiners__selected}>
          <HomeIcon />
          <p className={styles.tab__title__selected}>Home</p>
        </div>
        <div className={styles.tab__conatiners}>
          <CustomersIcon />
          <p className={styles.tab__title}>Customers</p>
        </div>
        <div className={styles.tab__conatiners}>
          <EstimatesIcon />
          <p className={styles.tab__title}>Estimates</p>
        </div>
        <div className={styles.tab__conatiners}>
          <InvoicesIcon />
          <p className={styles.tab__title}>Invoices</p>
        </div>
      </div>
      <div className={styles.top__container}>
        <div className={styles.tab__conatiners}>
          <SettingsIcon />
          <p className={styles.tab__title}>Settings</p>
        </div>
        <div className={styles.profile__conatiner}>
          <div className={styles.profile__picture}></div>
          <div className="fc">
            <p className={styles.username}>Test User</p>
            <p className={styles.email}>demouser@test.com</p>
          </div>
          <SignOutIcon />
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
