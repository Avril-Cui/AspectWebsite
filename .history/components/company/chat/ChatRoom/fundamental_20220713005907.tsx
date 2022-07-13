import React from "react";
import { useState } from "react";
import { Landing } from "../ChatPages";
import Button from "../../../UI/Button";


function Fundamental() {
  const [chat, setChat] = useState("Fundamental");
  return (
    <div>
      {chat === "FrontPage" && (<Landing />)}
      {chat === "Fundamental" && (
        <div>
          <Button onClick={() => setChat("FrontPage")}>Back To Main</Button>
        </div>
      )}
    </div>
  );
}

export default Fundamental;
