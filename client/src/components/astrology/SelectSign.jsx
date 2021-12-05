import React, {useState, useEffect } from "react";
import { getSigns } from "../../../../Server/helpers/astrology.js";

const SelectSign = ({ onSignSelected }) => {

  const [signs, setSigns] = useState([]);

  useEffect(() => {
    getSigns().then(setSigns)
  }, []);

  return (
    <>
    <h2>What's your sign?</h2>
      <div className="grid">
        {signs.map((sign) => (
          <button
            className="sign"
            key={sign}
            onClick={() => onSignSelected(sign)}
          >
            {sign}
          </button>
        ))}
      </div>
      </>
  );
};

export default SelectSign;