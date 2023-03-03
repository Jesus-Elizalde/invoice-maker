import React from "react";
import SideBar from "./Sidebar";
import styles from "../styles/Sidebar.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Invoice Maker</title>
        <meta name="description" content="invoice maker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.route !== "/" && <SideBar />}
      <main className={styles.main}>{children}</main>
    </div>
  );
}
