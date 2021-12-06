import React, {useState, useEffect } from "react";
import axios from "axios";
import { Button, Box }  from '@mui/material';

const SelectSign = ({ onSignSelected }) => {
  const [signs, setSigns] = useState([]);
  useEffect(() => {
    // getSigns().then(setSigns)
    axios.get('/api/astrology')
    .then(({ data }) => {
      console.log('this is the data:', data)
      setSigns(data)
    })
  }, []);

  return (
    <>
    <h2>What's your sign?</h2>
      <div className="grid">
        {signs.map((sign) => (
          <Button
          variant="outlined" color="primary"
            className="sign"
            key={sign}
            onClick={() => onSignSelected(sign)}
          >
            {sign}
          </Button>
        ))}
      </div>
      </>
  );
};

export default SelectSign;