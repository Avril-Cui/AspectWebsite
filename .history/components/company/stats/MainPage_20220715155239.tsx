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
        <Valuation />
    </div>
  );
};
export default MainPage;
