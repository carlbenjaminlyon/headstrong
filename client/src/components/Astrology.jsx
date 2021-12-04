import React, { useState, useEffect } from "react";
import { getHoroscope } from "../../../Server/helpers/astrology";
import axios from "axios";

const Astrology = () => {

  const signs = [
    'Aquarius',
    'Pisces',
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn'
  ];

  const [ horoscope, setHoroscope ] = useState('');
  const [ selectedSign, setSeletectedSign ] = useState('');

  const showHoroscopes = (sign) => {
    getHoroscope(horoscope)
    .then(sign => setHoroscope(sign))
    .catch(err => console.error('there was an errooor', err))
  }


  return (
    <div>
      {/* <img src='https://images.vexels.com/media/users/3/225748/raw/6845d44e9f29e4629776913603a0a328-mystical-astrology-pattern-design.jpg' alt='' /> */}
      <form className='horoscope'>
        <label className='sign'>
          <h1>
          Your Horoscope For Today! 
          </h1>
          <h3>
            What's your sign?
          </h3>
          </label>
          <div></div>
          <div>
          <select className='selector'>
           {
             signs.map((sign) => {
            return(
            <option>
              {sign}
           </option>
            )
           })
           }
          </select>
          </div>
      </form>
      <button onClick={() => showHoroscopes(horoscope)}>Show Horoscope</button>
    </div>
  )
}

export default Astrology;