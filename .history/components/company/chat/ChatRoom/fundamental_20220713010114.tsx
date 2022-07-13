import React from "react";
import { useState } from "react";
import { Landing } from "../ChatPages";


function Fundamental() {
  const [chat, setChat] = useState("Fundamental");
  return (
    <div>
      {chat === "FrontPage" && (<Landing />)}
      {chat === "Fundamental" && (
        <div>
          <button onClick={() => setChat("FrontPage")}>Back To Main</button>
        </div>
      )}
    </div>
  );
}

export default Fundamental;
