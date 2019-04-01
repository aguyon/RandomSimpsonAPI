import React from "react";

const GenerateSimpson = ({ selectSimpson }) => {
  return (
    <div className="GenerateSimpson">
      <button className="btnRandom" onClick={selectSimpson}>Get Simpson</button>
    </div>
  );
};

export default GenerateSimpson;
