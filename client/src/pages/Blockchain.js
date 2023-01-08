import React, { useState } from "react";
import Timer from "../components/Timer";
import { BlockchainContext } from "../context/Context";

export default function Blockchain() {
  const [blockchain, setBlockchain] = useState({});
  
  return (
    <BlockchainContext.Provider value={{ blockchain, setBlockchain }}>
      <div style={styles.timer}>
        <Timer />
      </div>
      <div></div>
    </BlockchainContext.Provider>
  );
}

const styles = {
  timer: {
    textAlign: "right",
  },
};
