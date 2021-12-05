import React, {useState, useEffect} from "react";
import { getHoroscope } from "../../../../Server/helpers/astrology.js";

const Horoscope = ({sign, timeframe}) => {
  const [ horoscope, setHoroscope ] = useState([]);

  useEffect(() => {
    getHoroscope(sign, timeframe)
    .then(setHoroscope)
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