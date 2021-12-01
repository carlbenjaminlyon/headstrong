import React, { useState } from "react";
import axios from "axios";

const Astrology = () => {

 console.log('hello am i working');

  return (
    <div>
      {/* <img src='https://images.vexels.com/media/users/3/225748/raw/6845d44e9f29e4629776913603a0a328-mystical-astrology-pattern-design.jpg' alt='' /> */}
      <form className='horoscope'>
        <label htmlFor='bday and time'>
          <h1>
          Select Birthday and Birth Time To Get Your Birth Chart and Daily Horoscope: 
          </h1>
          </label>
          <div></div>
        <input type="date"></input>
        <input type='time' id='time' name='birthtime'
       min='09:00' max='18:00' required></input>
      </form>
    </div>
  )
}

export default Astrology;