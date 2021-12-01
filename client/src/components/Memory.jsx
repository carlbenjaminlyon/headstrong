import React from 'react';
import moment from 'moment';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import MoonPhase from './MoonPhase.jsx';

const Memory = ({ memory, changeMemory, quote }) => {
  console.log('quote', quote);

  const { id, username, title, blog, journalImage, createdAt, temp, weatherDescription, mood, moonPhase } = memory;
  const timeStamp = moment(createdAt).format('MMM Do YY');

  return (
    <div>
      <MoonPhase moonPhase={moonPhase} />
      <div className='memoryEntry' key={ id } >
        <h2>Welcome back {username},</h2>
        <br></br>
        <i>Your memory from {timeStamp} | It was {temp} and {weatherDescription} and you were feeling happy!</i>
        <br></br>
        <h2>{title}</h2>
        <p>{blog}</p>
        <br></br>
        <img id="memoryPost" style={ { height: '150px', width: '200px' } } src={ journalImage } alt="Memory Image" width="400px" height="auto" overflow="hidden"/>

        <Button
          className='Button'
          style={ { color: 'white' } }
          onClick={ () => axios.delete(`/api/journals/${ id }`)
            .then(() => changeMemory())
            .catch((err) => console.warn(err)) }>
          <DeleteIcon/>
        </Button>
        <Button
          className='Button'
          style={ { color: 'white', fontFamily: 'Roboto' } }
          onClick={ () => changeMemory() }>
                  View Another Memory
        </Button>
      </div>
      <div className='likedQuotes'>
        <h1>Liked Quotes</h1>
        {quote.map((element, index) =>
          <div key={ index } className='likedQuote'><span>{ element.author}</span>:<br></br><span>{ element.body} </span>
            <hr></hr></div>

        )}

      </div>
    </div>
  );
};

export default Memory;
