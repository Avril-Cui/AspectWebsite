import React from "react";
import graph from "../../../../image/stats/valuation.png";
import Image from "next/image";
import styles from "../stats.module.css";
import { useState } from "react";
import Income from "./is";
import Balance from "./bs"
import Dividend from "./dividend";
import CashFlow from "./cs";

function Valuation() {
  const [chart, setChart] = useState("valuation");

  return (
    <div>
      {chart === "valuation" && (
        <div>
          {" "}
          <div className={styles.header}>
        <div className={styles.graph_type}>
          <table className={styles.stats_info_table}>
            <tr>
              <td>
                <button onClick={() => setChart("valuation")} className={styles.border}>Valuation</button>
              </td>
              <td>
                <button onClick={() => setChart("income")} className={styles.border}>Income</button>
              </td>
              <td>
                <button onClick={() => setChart("balance")} className={styles.border}>Balance Sheet</button>
              </td>
              <td>
                <button onClick={() => setChart("cashflow")} className={styles.border}>Cash Flow</button>
              </td>
              <td>
                <button onClick={() => setChart("dividend")} className={styles.border}>Dividend</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
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
            <Image src={graph} width="410px" height="310px" />
          </div>
          <div className={styles.valuation_text}>
            <p style={{ marginBottom: "0.5em" }}>
              <span className={styles.symbol_r}>✕</span>{" "}
              <span className={styles.ratio_type_r}>P/E ratio:</span> overvalued
              compared with industry average.
            </p>
            <p style={{ marginBottom: "0.5em" }}>
              <span className={styles.symbol_g}>✓</span>{" "}
              <span className={styles.ratio_type_g}>P/B ratio:</span>{" "}
              undervalued compared with industry average.
            </p>
            <p style={{ marginBottom: "0.5em" }}>
              <span className={styles.symbol_r}>✕</span>{" "}
              <span className={styles.ratio_type_r}>P/S ratio:</span> overvalued
              compared with industry average.
            </p>
          </div>
          <div style={{ marginTop: "-21em" }}>
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
          <div>
            <button onClick={() => setChart("income")}>Next &#8614;</button>
          </div>
        </div>
      )}
      {chart === "income" && (
        <div>
          <Income />
        </div>
      )}
      {chart === "balance" && <div><Balance /></div>}
      {chart === "cashflow" && <div><CashFlow /></div>}
      {chart === "dividend" && <div><Dividend /></div>}
    </div>
  );
}

export default Valuation;
