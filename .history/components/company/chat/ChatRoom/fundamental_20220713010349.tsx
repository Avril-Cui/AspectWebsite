import React from "react";
import { useState } from "react";
import { Landing } from "../ChatPages";
import styles from "./chat_style.module.css"


function Fundamental() {
  const [chat, setChat] = useState("Fundamental");
  return (
    <div>
      {chat === "FrontPage" && (<Landing />)}
      {chat === "Fundamental" && (
        <div>
          <button onClick={() => setChat("FrontPage")}>Back To Main</button>
          <div className={styles.messages_container}>

          </div>
        </div>
      )}
    </div>
  );
}

export default Fundamental;
