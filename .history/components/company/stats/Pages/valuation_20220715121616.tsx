import React from "react";
import graph from "../../../../image/stats/valuation.png";
import Image from "next/image";
import styles from "../stats.module.css"

function Valuation() {
  return (
    <div>
      <div className={styles.graph}>
        <Image src={graph} width="450px" height="320px" />
      </div>
    </div>
  );
}

export default Valuation;
