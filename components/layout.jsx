import React from "react";
import SideBar from "./Sidebar";
import styles from "../styles/Sidebar.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { useSession } from "next-auth/react";

export default function Layout({ children }) {
  const { status } = useSession();
  return (
    <div>
      <Head>
        <title>Invoice Maker</title>
        <meta name="description" content="invoice maker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {status === "authenticated" && <SideBar />}
      <main
        className={
          status === "authenticated" ? styles.main : styles.main__no__nav
        }
      >
        {children}
      </main>
    </div>
  );
}
