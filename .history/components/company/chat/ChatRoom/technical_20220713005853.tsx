import React from "react";
import { useState } from "react";
import Button from "../../../UI/Button";
import { Landing } from "../ChatPages";

function Technical() {
  const [chat, setChat] = useState("Fundamental");
  return (
    <div>
      {chat === "FrontPage" && <Landing />}
      {chat === "Fundamental" && (
        <div>
          <Button onClick={() => setChat("FrontPage")}>Back To Main</Button>
        </div>
      )}
    </div>
  );
}

export default Technical;
