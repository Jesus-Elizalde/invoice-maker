import React from "react";
import Searchbar from "../Searchbar";

import styles from "../../styles/Table.module.css";

import CUSTOMERS from "@/assets/data/customers";

const Table = (data = []) => {
  console.log("🚀 ~ file: index.jsx:7 ~ CUSTOMERS", CUSTOMERS);
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
            {dataTitles.map((title) => (
              <th>{title.toUpperCase()}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {CUSTOMERS.map((customer) => (
            <tr>
              {dataTitles.map((title) => (
                <td>{customer[title]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
