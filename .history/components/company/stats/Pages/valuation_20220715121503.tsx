import React from "react";
import graph from "../../../../image/stats/valuation.png";
import Image from "next/image";

function Valuation() {
  return (
    <div>
      <Image src={graph} width="470px" height="350px" />
    </div>
  );
}

export default Valuation;
