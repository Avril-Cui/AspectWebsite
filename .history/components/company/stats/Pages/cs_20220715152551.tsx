import React from "react";
import graph from "../../../../image/stats/cashflow.png";
import Image from "next/image";
import styles from "../stats.module.css";

function CashFlow() {
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

      <div className={styles.graph}>
        <Image src={graph} width="410px" height="280px" />
      </div>

      <div className={styles.valuation_text}>
      <p style={{marginBottom: "0.5em"}}>
          <span className={styles.symbol_g}>✓</span>{" "}
          <span className={styles.ratio_type_g}>Operating:</span> positive operating cash flow in the past 3 years.
        </p>
        <p style={{marginBottom: "0.5em"}}>
          <span className={styles.symbol_g}>✓</span>{" "}
          <span className={styles.ratio_type_g}>Investing:</span> strategic M&A activities in the past 3 years.
        </p>
        <p>
          <span className={styles.symbol_r}>✕</span>{" "}
          <span className={styles.ratio_type_r}>Financing:</span> high level of debt-related financing activities.
        </p>
      </div>

      <div style={{  marginTop: "-21em"}}>
        <table className={styles.stats_data_table}>
          <tr>
            <td className={styles.data_type}>Revenue</td>
            <td className={styles.data}>25.2 B</td>
          </tr>
          <tr>
            <td className={styles.data_type}>COGS</td>
            <td className={styles.data}>5.7 B</td>
          </tr>
          <tr>
            <td className={styles.data_type}>Gross Profit</td>
            <td className={styles.data}>19.5 B</td>
          </tr>
          <tr>
            <td className={styles.data_type}>SG&A</td>
            <td className={styles.data}>19.2 B</td>
          </tr>
          <tr>
            <td className={styles.data_type_l}>Tax</td>
            <td className={styles.data_l}>327.8 M</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CashFlow;
