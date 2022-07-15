import React from "react";
import graph from "../../../../image/stats/valuation.png";
import Image from "next/image";

function Valuation() {
  return (
    <div>
      <Image src={graph} width="270px" height="250px" />
    </div>
  );
}

export default Valuation;
