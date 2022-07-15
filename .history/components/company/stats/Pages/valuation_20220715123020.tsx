import React from "react";
import graph from "../../../../image/stats/valuation.png";
import Image from "next/image";
import styles from "../stats.module.css"

function Valuation() {
  return (
    <div>
      <div className={styles.graph}>
        <Image src={graph} width="440px" height="330px" />
      </div>
      <div className={styles.valuation_text}>
        <p><span>&#x274C;</span> P/E ratio is overvalued compared with industry average.</p>
        <p><span>&#10004;</span> P/B ratio is undervalued compared with industry average.</p>
        <p><span>&#x274C;</span> P/S ratio is overvalued compared with industry average.</p>
      </div>
    </div>
  );
}

export default Valuation;
