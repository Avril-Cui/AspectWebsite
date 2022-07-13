import React from "react";
import { useState } from "react";
import { Landing } from "../ChatPages";

function Quantatitative() {
  const [chat, setChat] = useState("Quantitative");

  return (
    <div>
      {chat === "FrontPage" && <Landing />}
      {chat === "Quantitative" && (
        <div>
          <button onClick={() => setChat("FrontPage")}>Back To Main</button>
        </div>
      )}
    </div>
  );
}

export default Quantatitative;
