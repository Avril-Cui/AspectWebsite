import React from "react";
import { useState } from "react";
import { Landing } from "../ChatPages";
import Button from "../../../UI/Button";

function Quantatitative() {
  const [chat, setChat] = useState("Quantitative");

  return (
    <div>
      {chat === "FrontPage" && <Landing />}
      {chat === "Quantitative" && (
        <div>
          <Button onClick={() => setChat("FrontPage")}>Back To Main</Button>
        </div>
      )}
    </div>
  );
}

export default Quantatitative;
