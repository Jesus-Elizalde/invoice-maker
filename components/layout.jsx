import React from "react";
import SideBar from "./Sidebar";
import styles from "../styles/Sidebar.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <SideBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
