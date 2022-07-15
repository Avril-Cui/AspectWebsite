import React from "react";
import graph from "../../../../image/stats/balance.png";
import Image from "next/image";
import styles from "../stats.module.css";

function Balance() {
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

      <div className={styles.graph} style={{ marginTop: "-3em" }}>
        <Image src={graph} width="380px" height="320px" />
      </div>

      <div className={styles.valuation_text}>
        <p style={{ marginBottom: "0.5em" }}>
          <span className={styles.symbol_r}>✕</span>{" "}
          <span className={styles.ratio_type_r}>Liquidity: </span> low liquity, high proportion of debt.
        </p>
        <p style={{ marginBottom: "0.5em" }}>
          <span className={styles.symbol_r}>✕</span>{" "}
          <span className={styles.ratio_type_r}>Short Term Liabilities </span> high short term liabilities.
        </p>
        <p style={{ marginBottom: "0.5em" }}>
          <span className={styles.symbol_r}>✕</span>{" "}
          <span className={styles.ratio_type_r}>Debt Coverage:</span> high debt coverage.
        </p>
      </div>

      <div>
        <table className={styles.stats_data_table}>
          <tr>
            <td className={styles.data_type}>Total Assets</td>
            <td className={styles.data}>28.9 B</td>
          </tr>
          <tr>
            <td className={styles.data_type}>Current Assets</td>
            <td className={styles.data}>20.7 B</td>
          </tr>
          <tr>
            <td className={styles.data_type}>Non-Current Assets</td>
            <td className={styles.data}>8.2 B</td>
          </tr>
          <tr>
            <td className={styles.data_type}>Total Liabilities</td>
            <td className={styles.data}>15.1 B</td>
          </tr>
          <tr>
            <td className={styles.data_type}>Current Liabilities</td>
            <td className={styles.data}>13.6 B</td>
          </tr>
          <tr>
            <td className={styles.data_type}>Non-Current Liabilities</td>
            <td className={styles.data}>1.5 B</td>
          </tr>
          <tr>
            <td className={styles.data_type_l}>Total Equity</td>
            <td className={styles.data_l}>1.5 B</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Balance;
