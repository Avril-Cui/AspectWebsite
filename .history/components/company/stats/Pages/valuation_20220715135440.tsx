import React from "react";
import graph from "../../../../image/stats/valuation.png";
import Image from "next/image";
import styles from "../stats.module.css";

function Valuation() {
  return (
    <div>
      <table className={styles.info_table}>
        <tr>
          <th>Last Updated Data</th>
          <th>Next Update</th>
        </tr>
        <tr>
          <td className={styles.normal_color}>Jul 15, 2022</td>
          <td className={styles.normal_color}>TBD</td>
        </tr>
      </table>

      <div>
        <div className={styles.graph}>
          <Image src={graph} width="410px" height="310px" />
        </div>
        <div>
          <table className={styles.stats_data_table}>
            <tr>
              <td className={styles.data_type}>Price-to-Earning (P/E)</td>
              <td className={styles.data}>73.8</td>
            </tr>
            <tr>
              <td className={styles.data_type}>Price-to-Book (P/B)</td>
              <td className={styles.data}>4.54</td>
            </tr>            
            <tr>
              <td className={styles.data_type_l}>Price-to-Sales (P/S)</td>
              <td className={styles.data_l}>8.24</td>
            </tr>
          </table>
        </div>
      </div>

      <div className={styles.valuation_text}>
        <p>
          <span className={styles.symbol_r}>✕</span>{" "}
          <span className={styles.ratio_type_r}>P/E ratio:</span> overvalued
          compared with industry average.
        </p>
        <p>
          <span className={styles.symbol_g}>✓</span>{" "}
          <span className={styles.ratio_type_g}>P/B ratio:</span> undervalued
          compared with industry average.
        </p>
        <p>
          <span className={styles.symbol_r}>✕</span>{" "}
          <span className={styles.ratio_type_r}>P/S ratio:</span> overvalued
          compared with industry average.
        </p>
      </div>
    </div>
  );
}

export default Valuation;
