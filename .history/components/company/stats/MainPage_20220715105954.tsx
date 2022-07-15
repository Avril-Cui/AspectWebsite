import styles from "./stats.module.css";
import Balance from "./Pages/bs";
import Income from "./Pages/is";
import Dividend from "./Pages/dividend";
import CashFlow from "./Pages/cs";
import Valuation from "./Pages/valuation";
import { useState } from "react";

const MainPage = () => {
  const [chart, setChart] = useState("valuation");

  return (
    <div>
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

      {chart === "valuation" && <div><Valuation/></div>}
      {chart === "income" && <div><Income /></div>}
      {chart === "balance" && <div><Balance /></div>}
      {chart === "cashflow" && <div><CashFlow /></div>}
      {chart === "dividend" && <div><Dividend /></div>}


    </div>
  );
};
export default MainPage;
