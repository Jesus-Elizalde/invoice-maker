import React from "react";
import styles from "../../styles/Sidebar.module.css";

import LogoIcon from "../../assets/svgs/LogoIcon.svg";
import SearchIcon from "../../assets/svgs/SearchIcon.svg";
import ProfileIcon from "../../assets/svgs/ProfileIcon.svg";
import HomeIcon from "../../assets/svgs/HomeIcon.svg";
import CustomersIcon from "../../assets/svgs/CustomersIcon.svg";
import EstimatesIcon from "../../assets/svgs/EstimatesIcon.svg";
import InvoicesIcon from "../../assets/svgs/InvoicesIcon.svg";
import SettingsIcon from "../../assets/svgs/SettingsIcon.svg";
import SignOutIcon from "../../assets/svgs/SignOutIcon.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import Searchbar from "../Searchbar";

import { signOut } from "next-auth/react";

const SideBar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__nav}>
        <li className={styles.logo}>
          <Link href="/" className={styles.nav__link}>
            <LogoIcon />
            <span className={styles.link__text}>Company Name</span>
          </Link>
        </li>

        <li
          className={
            pathname === "/home"
              ? `${styles.nav__item} ${styles.selected}`
              : styles.nav__item
          }
        >
          <Link href="/home" className={styles.nav__link}>
            <HomeIcon />
            <span className={styles.link__text}>Home</span>
          </Link>
        </li>
        <li
          className={
            pathname === "/customers"
              ? `${styles.nav__item} ${styles.selected}`
              : styles.nav__item
          }
        >
          <Link href="/customers" className={styles.nav__link}>
            <CustomersIcon />
            <span className={styles.link__text}>Customers</span>
          </Link>
        </li>
        <li
          className={
            pathname === "/estimates"
              ? `${styles.nav__item} ${styles.selected}`
              : styles.nav__item
          }
        >
          <Link href="/estimates" className={styles.nav__link}>
            <EstimatesIcon />
            <span className={styles.link__text}>Estimates</span>
          </Link>
        </li>
        <li
          className={
            pathname === "/invoices"
              ? `${styles.nav__item} ${styles.selected}`
              : styles.nav__item
          }
        >
          <Link href="/invoices" className={styles.nav__link}>
            <InvoicesIcon />
            <span className={styles.link__text}>Invoices</span>
          </Link>
        </li>
        <li className={styles.search__bar}>
          {/* <div className={styles.search__bar__conatiner}>
            <SearchIcon />
            <input placeholder="Search" />
          </div> */}
          <Searchbar />
        </li>
        {/* <li className={styles.nav__item}>
          <Link href="/settings" className={styles.nav__link}>
            <SettingsIcon />
            <span className={styles.link__text}>Settings</span>
          </Link>
        </li> */}
        <li
          className={
            pathname === "/settings"
              ? `${styles.nav__item} ${styles.selected}`
              : styles.nav__item
          }
        >
          <Link href="/settings" className={styles.nav__link}>
            <SettingsIcon />
            <span className={styles.link__text}>Settings</span>
          </Link>
          <div
            className={`${styles.nav__profile__box} ${styles.nav__profile__box}`}
          >
            <ProfileIcon />
            <div className={styles.link__text}>
              {/* <span>Test User</span>
              <span>demouser@test.com</span> */}
            </div>
            <button className={styles.link__text} onClick={() => signOut()}>
              <SignOutIcon />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
