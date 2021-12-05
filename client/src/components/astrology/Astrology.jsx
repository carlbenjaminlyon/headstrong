import React, { useState, useEffect } from "react";
import axios from "axios";

import  SelectSign  from "./SelectSign.jsx";
import  SelectTimeframe  from "./SelectTimeframe.jsx";
import  Horoscope   from "./Horoscope.jsx";



const Astrology = () => {

  
  const [ selectedSign, setSelectedSign ] = useState(null);
  const [ selectedTimeframe, setSelectedTimeframe] = useState(null);

  // const showHoroscopes = (sign) => {
  //   getHoroscope(horoscope)
  //   .then(sign => setHoroscope(sign))
  //   .catch(err => console.error('there was an errooor', err))
  // }


  return (
    <div>
      {/* <img src='https://images.vexels.com/media/users/3/225748/raw/6845d44e9f29e4629776913603a0a328-mystical-astrology-pattern-design.jpg' alt='' /> */}
      <div className='horoscope'>
        <label className='sign'>
          <h1>
          Your Horoscope: 
          </h1>
          </label>
          {!selectedSign && (
        <SelectSign onSignSelected={setSelectedSign} />
      )}
      {selectedSign && !selectedTimeframe && (
        <SelectTimeframe
          onTimeframeSelected={setSelectedTimeframe}
        />
      )}
      {selectedSign && selectedTimeframe && (
        <Horoscope
          sign={selectedSign}
          timeframe={selectedTimeframe}
        />
      )}
      </div>
      {/* <button onClick={() => showHoroscopes(horoscope)}>Show Horoscope</button> */}
    </div>
  )
}

export default Astrology;