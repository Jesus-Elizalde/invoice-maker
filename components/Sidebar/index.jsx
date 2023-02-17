import React from "react";
import styles from "../../styles/Sidebar.module.css";

import HomeIcon from "../../assets/svgs/HomeIcon.svg";
import CustomersIcon from "../../assets/svgs/CustomersIcon.svg";
import EstimatesIcon from "../../assets/svgs/EstimatesIcon.svg";
import InvoicesIcon from "../../assets/svgs/InvoicesIcon.svg";
import SettingsIcon from "../../assets/svgs/SettingsIcon.svg";
import SignOutIcon from "../../assets/svgs/SignOutIcon.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const SideBar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className={styles.Sidebar__container}>
      <div className={styles.top__container}>
        <div className={styles.logo__conatiner}>
          <div className={styles.company__logo}></div>
          <h1 className={styles.logo__name}>Company Name</h1>
        </div>
        <div className={styles.search__bar}></div>
        <Link
          href="/"
          className={
            pathname === "/home"
              ? styles.tab__conatiners__selected
              : styles.tab__conatiners
          }
        >
          <HomeIcon />
          <p
            className={
              pathname === "/home"
                ? styles.tab__title__selected
                : styles.tab__title
            }
          >
            Home
          </p>
        </Link>
        <Link
          href="/customers"
          className={
            pathname === "/customers"
              ? styles.tab__conatiners__selected
              : styles.tab__conatiners
          }
        >
          <CustomersIcon />
          <p
            className={
              pathname === "/customers"
                ? styles.tab__title__selected
                : styles.tab__title
            }
          >
            Customers
          </p>
        </Link>
        <Link
          href="/estimates"
          className={
            pathname === "/estimates"
              ? styles.tab__conatiners__selected
              : styles.tab__conatiners
          }
        >
          <EstimatesIcon />
          <p
            className={
              pathname === "/estimates"
                ? styles.tab__title__selected
                : styles.tab__title
            }
          >
            Estimates
          </p>
        </Link>
        <Link
          href="/invoices"
          className={
            pathname === "/invoices"
              ? styles.tab__conatiners__selected
              : styles.tab__conatiners
          }
        >
          <InvoicesIcon />
          <p
            className={
              pathname === "/invoices"
                ? styles.tab__title__selected
                : styles.tab__title
            }
          >
            Invoices
          </p>
        </Link>
      </div>
      <div className={styles.top__container}>
        <Link
          href="/settings"
          className={
            pathname === "/settings"
              ? styles.tab__conatiners__selected
              : styles.tab__conatiners
          }
        >
          <SettingsIcon />
          <p
            className={
              pathname === "/invoices"
                ? styles.tab__title__selected
                : styles.tab__title
            }
          >
            Settings
          </p>
        </Link>
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
