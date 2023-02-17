import React from "react";
import SideBar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="main__container">
      <SideBar />
      <main>{children}</main>
    </div>
  );
}
