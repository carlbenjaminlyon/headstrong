import React from "react";
import { Button, Box }  from '@mui/material';

const SelectTimeframe = ({ onTimeframeSelected }) => {

  return (
    <>
      <h2>Please select a timeframe...</h2>
      <div className="grid">
        {['yesterday', 'today', 'tomorrow'].map(
          (timeframes) => (
            <Button
              variant="outlined" color="primary" padding=""
              className="timeframe"
              key={timeframes}
              onClick={() =>
                onTimeframeSelected(timeframes)
              }
            >
              {timeframes}
            </Button>
          )
        )}
      </div>
    </>

  )
}

export default SelectTimeframe