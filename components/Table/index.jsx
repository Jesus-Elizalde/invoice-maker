import React from "react";
import Searchbar from "../Searchbar";

import styles from "../../styles/Table.module.css";

import CUSTOMERS from "@/assets/data/customers";

const Table = (data = []) => {
  const dataTitles = Object.keys(CUSTOMERS[0]);

  return (
    <div className={styles.container}>
      <div className={styles.filter__section}>
        <button>More filters</button>
        <Searchbar />
      </div>
      <table className={styles.table__container}>
        <thead>
          <tr>
            {dataTitles.map((title, idx) => (
              <th key={idx}>{title.toUpperCase()}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {CUSTOMERS.map((customer, idx) => (
            <tr key={idx}>
              {dataTitles.map((title, idx) => (
                <td key={idx}>{customer[title]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
