import React from "react";

const SelectTimeframe = ({ onTimeframeSelected }) => {

  return (

    <>
      <h2>Please select a timeframe...</h2>
      <div className="grid">
        {['yesterday', 'today', 'tomorrow'].map(
          (timeframes) => (
            <button
              className="timeframe"
              key={timeframes}
              onClick={() =>
                onTimeframeSelected(timeframes)
              }
            >
              {timeframes}
            </button>
          )
        )}
      </div>
    </>
  )
}

export default SelectTimeframe