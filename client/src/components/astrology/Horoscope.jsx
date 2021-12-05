import React, {useState, useEffect} from "react";
import axios from 'axios';
import { getHoroscope } from "../../../../Server/helpers/astrology.js";

const Horoscope = ({ sign, timeframe }) => {
  const [ horoscope, setHoroscope ] = useState([]);
  // sign, timeframe
  
  useEffect(() => {
    axios.get(`/api/astrology/${sign}&${timeframe}`)
    .then(({ data }) => setHoroscope(data))
    .catch(err => console.error(err));
  }, [sign, timeframe])


  return (
    <div>
      <h2>
        {timeframe}, {sign}, your horoscope:
      </h2>
      <p>
        {horoscope}
      </p>
    </div>
  )
}

export default Horoscope